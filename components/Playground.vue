<template>
  <div @click.once="init">
    <div
      class="w-full pt-6 flex items-center flex-col rounded-3xl border-2px-black bg-black overflow-hidden"
    >
      <div class="w-full block">
        <form class="web-terminal-form relative block w-full text-white font-mono" @submit.prevent="onSubmit">
          <input
            ref="web-terminal-input"
            class="pl-8 pr-5 bg-black web-terminal-input block w-full text-white font-mono outline-none"
            type="text"
            autocomplete="off"
            @keydown="keyCheck"
          >
          <input type="submit" class="w-0 hidden">
        </form>
        <div ref="web-terminal" class="web-terminal p-5 overflow-y-scroll text-white">
          <span v-for="(line, i) in lines" :key="i">
            {{ line }}
            <br>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import messages from '~/playground-messages.js';


// store user input
let buffer;
let bhIndex = 0;
const bufferHistory = [];

// manage buffer history on input submit
const bhManage = function () {
  bufferHistory.shift();
  bufferHistory.unshift(buffer);
  bufferHistory.unshift('');

  bhIndex = 0;
};


export default {
  data: function () {
    return {
      loading: false,
      lines: []
    };
  },
  computed: {
    ...mapState({
      ethAddress: state => state.ethAddress
    })
  },
  mounted: function () {
    this.printf(messages.help);
  },
  methods: {
    // format, write to terminal
    printf: function (string) {
      const lines = string.replaceAll('  ', '\xA0\xA0').split('\n').reverse();
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        this.lines.unshift(line);
      }

      this.$refs['web-terminal'].scrollTop = 0;
    },
    replaceLine: function (string) {
      this.$set(this.lines, 0, string);
    },
    cls: function () { // clear screen
      const fontHeight = 15;
      for (let i = 0; i <= this.$refs['web-terminal'].clientHeight / fontHeight; i++) {
        this.printf('');
      }
    },
    keyCheck: function (e) {
      const keycode = window.event.keyCode;

      switch (keycode) {
        case 38: // up arrow
          if (bhIndex < bufferHistory.length - 1) {
            bhIndex++;
            this.$refs['web-terminal-input'].value = bufferHistory[bhIndex];
          }
          break;

        case 40: // down arrow
          if (bhIndex > 0) {
            bhIndex--;
            this.$refs['web-terminal-input'].value = bufferHistory[bhIndex];
          }
          break;
      }
    },
    showSpinner: function (prefix = '') {
      if (this.loading === true) {
        return;
      }

      this.cls();
      this.loading = true;

      const spinner = ['\\', '|', '/', '—'];
      let count = 0;
      const intervalId = setInterval(() => {
        if (this.loading === false) {
          clearInterval(intervalId);
          return;
        }

        this.replaceLine(prefix + ' ' + spinner[count++ % 4]);
      }, 313.37);
    },
    onSubmit: function () {
      buffer = this.$refs['web-terminal-input'].value;
      bhManage(); // manage buffer history

      if (this.loading) {
        return;
      }

      if (buffer === 'connect') {
        this.connect();
      } else if (buffer === 'docs' || buffer === 'man' || buffer === 'man tableland') {
        this.cls();
        this.printf(messages.docs);
      } else if (buffer === 'help') {
        this.cls();
        this.printf(messages.help);
      } else if (!this.ethAddress) {
        this.cls();
        this.printf(messages.warn.connect);
      } else if (buffer === 'clear') {
        this.cls();
      } else if (buffer === 'whoami') {
        this.cls();
        this.printf(this.ethAddress);
      } else if (buffer === 'mytables' || buffer === 'list' || buffer === 'ls') {
        this.cls();
        this.list();
      } else {
        this.cls();
        // parse SQL and figure out if its a read/write, or create, or invalid, or ???
        this.parseCommand(buffer);
      }

      this.$refs['web-terminal-input'].value = '';
    },
    init: function () {
      // the first click on the terminal should put their cursor in the input
      this.$refs['web-terminal-input'].focus();
    },
    parseCommand: async function (command) {
      try {
        const sql = command.trim().toLowerCase();

        if (!sql) {
          return this.printf(messages.warn.statement);
        }

        if (sql.indexOf('create') === 0) {
          await this.runCreate(command);
          return;
        }

        await this.runCommand(command);
      } catch (err) {
        this.loading = false;
        this.processError(err);
      }
    },
    runCommand: async function (sql) {
      try {
        this.showSpinner(messages.running);
        const response = await this.$store.dispatch('runSql', sql);
        this.loading = false;
        this.cls();
        this.printf(JSON.stringify(response, null, 4));
        this.printf('Result: ');
      } catch (err) {
        this.loading = false;
        this.processError(err);
      }
    },
    runCreate: async function (sql) {
      try {
        this.showSpinner(messages.creating);
        const response = await this.$store.dispatch('createTable', sql);
        this.loading = false;
        this.cls();
        this.printf('Table Created:\n' + JSON.stringify(response, null, 4));
      } catch (err) {
        this.loading = false;
        this.processError(err);
      }
    },
    list: async function () {
      try {
        this.showSpinner();
        const tables = await this.$store.dispatch('myTables');
        this.loading = false;
        this.cls();
        this.printf('Result:\n' + JSON.stringify(tables, null, 4));
      } catch (err) {
        this.loading = false;
        this.processError(err);
      }
    },
    connect: async function () {
      try {
        this.showSpinner('connecting');
        await this.$store.dispatch('connect');
        this.loading = false;

        // initial message
        this.cls();
        this.printf(messages.connected);
      } catch (err) {
        this.loading = false;
        this.processError(err);
      }
    },
    processError: function (err) {
      this.cls();
      if (err.message.includes('address not authorized')) {
        return this.printf(messages.warn.address);
      }

      this.printf('Error:\n' + err.message);
    }
  }
};

</script>

<style scoped>
* {
    box-sizing: border-box;
}

.web-terminal {
  font-family: monospace;
  height: calc(16rem + 10vw);
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.web-terminal::-webkit-scrollbar {
  display: none;
}

.font-mono {
  font-family: monospace;
}

.web-terminal-form::before {
  content: '> ';
  position: absolute;
  left: 1rem;
}

</style>
