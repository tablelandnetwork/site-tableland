<template>
  <div>
    <!--<button v-if="!ethAddress" type="button" class="bg-black text-white text-xl py-2 px-8 rounded-2xl" @click="connect">CONNECT</button>-->

    <div
      class="w-full pt-6 flex items-center flex-col rounded-3xl border-2px-black bg-black overflow-hidden"
    >
      <div class="w-full block">
        <form class="web-terminal-form relative" @submit.prevent="onSubmit">
          <input
            ref="web-terminal-input"
            class="pl-8 pr-5 bg-black web-terminal-input"
            type="text"
            autocomplete="off"
            @keydown="keyCheck"
          >
          <input type="submit">
        </form>
        <div ref="web-terminal" class="web-terminal">
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
    help: function () {
      this.printf('    SELECT * FROM todo_todos_example_34 ORDER BY id ASC;');
      this.printf('    SELECT * FROM LootAttributes_3;');
      this.printf('Example Read Queries:');
      this.printf('');
      this.printf('   help      Show this message again');
      this.printf('   whoami    See your Eth Address');
      this.printf('   clear     Clear this terminal');
      this.printf('   list      List your tables');
      this.printf('Available commands:');
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
      } else if (!this.ethAddress) {
        this.cls();
        this.printf('Before running commands you need to connect with a Tableland Validator. We currently only support connecting via Metamask. Make sure it\'s installed, then type `connect` and hit return.');
      } else if (buffer === 'clear') {
        this.cls();
      } else if (buffer === 'help') {
        this.cls();
        this.help();
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

    parseCommand: async function (command) {
      try {
        const sql = command.trim().toLowerCase();

        if (!sql) {
          return this.printf('WARN: that is not a SQL statement that Tableland can use');
        }

        if (sql.indexOf('create') === 0) {
          await this.runCreate(command);
          return;
        }

        await this.runCommand(command);
      } catch (err) {
        this.loading = false;
        this.printf(err.message);
        this.printf('Command Failed:');
      }
    },
    runCommand: async function (sql) {
      try {
        this.showSpinner('Running SQL on the Validator');
        const response = await this.$store.dispatch('runSql', sql);
        this.loading = false;
        this.cls();
        this.printf(JSON.stringify(response, null, 4));
        this.printf('Result: ');
      } catch (err) {
        this.loading = false;
        this.printf(err.message);
        this.printf('Error: ');
      }
    },
    runCreate: async function (sql) {
      try {
        this.showSpinner('Creating Your Table, the steps are:\nMint the table on Ethereum\n Register it with the Validator\nIt may take a little while\n');
        const response = await this.$store.dispatch('createTable', sql);
        this.loading = false;
        this.cls();
        this.printf(JSON.stringify(response, null, 4));
        this.printf('Table Created: ');
      } catch (err) {
        this.loading = false;
        this.printf(err.message);
        this.printf('Error: ');
      }
    },
    list: async function () {
      try {
        this.showSpinner();
        const tables = await this.$store.dispatch('myTables');
        this.loading = false;
        this.cls();
        this.printf(JSON.stringify(tables, null, 4));
        this.printf('Result: ');
      } catch (err) {
        this.loading = false;
        this.printf(err.message);
        this.printf('Error: ');
      }
    },
    connect: async function () {
      try {
        this.showSpinner('connecting');
        await this.$store.dispatch('connect');
        this.loading = false;

        // initial message
        this.cls();
        this.printf('Run `help` to learn more and see some example commands.');
        this.printf('This is your basic Tableland Terminal, you can type SQL commands interact to with a Tableland Validator.');
        this.printf('Connected!');
      } catch (err) {
        this.loading = false;
        this.printf(err.message);
        this.printf('Error connecting to tableland');
      }
    }
  }
};

</script>

<style scoped>
* {
    box-sizing: border-box;
}

/* fontHeight: 15px; */
/* terminalRows: 24; */
.web-terminal {
  padding: 20px;
  color: white;
  font-family: monospace;
  overflow-y: scroll;
  height: calc(17px * 24);
}

.web-terminal-form, .web-terminal-input  {
  display: block;
  width: 100%;
  border: none;
  color: white;
  font-family: monospace;
}

.font-mono {
  font-family: monospace;
}

.web-terminal-form input[type=submit] {
  width: 0px;
  display: none;
}

.web-terminal-form input[type=text]:focus {
  outline: none;
}
.web-terminal-form::before {
  content: '> ';
  position: absolute;
  left: 1rem;
}

</style>
