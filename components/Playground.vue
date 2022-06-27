<template>
  <div>
    <div v-if="ethereum" class="playground-component" @click.once="init">
      <div
        class="w-full pt-6 flex items-center flex-col rounded-3xl border-2px-black bg-white overflow-hidden"
      >
        <div class="w-full block">
          <form
            class="web-terminal-form relative block w-full text-black font-mono"
            @submit.prevent="onSubmit"
          >
            <input
              ref="web-terminal-input"
              class="pl-8 pr-5 bg-white web-terminal-input block w-full text-black font-mono outline-none"
              type="text"
              autocomplete="off"
              @keydown="keyCheck"
            />
            <input type="submit" class="w-0 hidden" />
          </form>
          <div
            ref="web-terminal"
            class="web-terminal p-5 overflow-y-scroll text-black"
          >
            <span v-for="(line, i) in lines" :key="i">
              {{ line.type === "text" ? line.value : "" }}
              <br v-if="line.type === 'text'" />

              <table
                v-if="line.type === 'table'"
                class="table-auto mx-4 border border-solid border-white border-collapse"
              >
                <thead>
                  <tr>
                    <th
                      v-for="col in line.columns"
                      :key="col.name"
                      class="px-2 border border-white pull-left font-bold"
                    >
                      {{ col.name }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, j) in line.rows" :key="j">
                    <td
                      v-for="(val, k) in row"
                      :key="k"
                      class="px-2 border border-white"
                    >
                      {{ val }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!ethereum" class="playground-component relative">
      <div
        class="absolute overlay-disable top-0 bottom-0 left-0 right-0 z-50 rounded-3xl cursor-not-allowed"
      ></div>
      <div
        class="w-full pt-6 flex items-center flex-col rounded-3xl border-2px-black bg-black overflow-hidden"
      >
        <div class="w-full block">
          <form
            class="web-terminal-form relative block w-full text-black font-mono"
            @submit.prevent="() => false"
          >
            <input
              ref="web-terminal-input"
              class="pl-8 pr-5 bg-black web-terminal-input block w-full text-black font-mono outline-none"
              type="text"
              autocomplete="off"
              disabled="disabled"
            />
          </form>
          <div
            ref="web-terminal"
            class="web-terminal p-5 overflow-y-scroll text-black"
          >
            <span v-for="(line, i) in lines" :key="i">
              {{ line.type === "text" ? line.value : "" }}
              <br v-if="line.type === 'text'" />

              <table
                v-if="line.type === 'table'"
                class="table-auto mx-4 border border-solid border-white border-collapse"
              >
                <thead>
                  <tr>
                    <th
                      v-for="col in line.columns"
                      :key="col.name"
                      class="px-2 border border-white pull-left font-bold"
                    >
                      {{ col.name }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, j) in line.rows" :key="j">
                    <td
                      v-for="(val, k) in row"
                      :key="k"
                      class="px-2 border border-white"
                    >
                      {{ val }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import messages from "~/playground-messages.js";

// store user input
let buffer;
let bhIndex = 0;
const bufferHistory = [];

// manage buffer history on input submit
const bhManage = function () {
  bufferHistory.shift();
  bufferHistory.unshift(buffer);
  bufferHistory.unshift("");

  bhIndex = 0;
};

export default {
  data() {
    return {
      loading: false,
      lines: [],
    };
  },
  computed: {
    ...mapState({
      ethAddress: (state) => state.ethAddress,
      ethereum: (state) => window.ethereum,
    }),
  },
  mounted() {
    this.printf(messages.help);
  },
  methods: {
    // format, write to terminal
    printf(string) {
      const lines = string.replaceAll("  ", "\xA0\xA0").split("\n").reverse();
      for (let i = 0; i < lines.length; i++) {
        const line = { value: lines[i], type: "text" };
        this.lines.unshift(line);
      }

      this.$refs["web-terminal"].scrollTop = 0;
    },
    printTable(data) {
      this.lines.unshift({
        type: "table",
        columns: data.columns,
        rows: data.rows,
      });
    },
    replaceLine(string) {
      this.$set(this.lines, 0, { value: string, type: "text" });
    },
    cls() {
      // clear screen
      const fontHeight = 15;
      const clientHeight = this.$refs["web-terminal"].clientHeight;

      for (let i = 0; i <= clientHeight / fontHeight; i++) {
        this.printf("");
      }
    },
    keyCheck(e) {
      const keycode = window.event.keyCode;

      switch (keycode) {
        case 38: // up arrow
          if (bhIndex < bufferHistory.length - 1) {
            bhIndex++;
            this.$refs["web-terminal-input"].value = bufferHistory[bhIndex];
          }
          break;

        case 40: // down arrow
          if (bhIndex > 0) {
            bhIndex--;
            this.$refs["web-terminal-input"].value = bufferHistory[bhIndex];
          }
          break;
      }
    },
    showSpinner(prefix = "") {
      if (this.loading === true) {
        return;
      }

      this.cls();
      this.loading = true;

      const spinner = ["\\", "|", "/", "—"];
      let count = 0;
      const intervalId = setInterval(() => {
        if (this.loading === false) {
          clearInterval(intervalId);
          return;
        }

        this.replaceLine(prefix + " " + spinner[count++ % 4]);
      }, 313.37);
    },
    onSubmit() {
      buffer = this.$refs["web-terminal-input"].value;
      bhManage(); // manage buffer history

      if (this.loading) {
        return;
      }

      if (buffer === "connect") {
        this.connect();
      } else if (
        buffer === "docs" ||
        buffer === "man" ||
        buffer === "man tableland"
      ) {
        this.cls();
        this.printf(messages.docs);
      } else if (buffer === "help") {
        this.cls();
        this.printf(messages.help);
      } else if (buffer === "clear") {
        this.cls();
      } else if (!this.ethAddress) {
        this.cls();
        this.printf(messages.warn.connect);
      } else if (buffer === "whoami") {
        this.cls();
        this.printf(this.ethAddress);
      } else if (
        buffer === "mytables" ||
        buffer === "list" ||
        buffer === "ls"
      ) {
        this.cls();
        this.list();
      } else {
        this.cls();
        // parse SQL and figure out if its a read/write, or create, or invalid, or ???
        this.parseCommand(buffer);
      }

      this.$refs["web-terminal-input"].value = "";
    },
    init() {
      // the first click on the terminal should put their cursor in the input
      this.$refs["web-terminal-input"].focus();
    },
    async parseCommand(command) {
      try {
        const sql = command.trim().toLowerCase();

        if (!sql) {
          return this.printf(messages.warn.statement);
        }

        if (sql.indexOf("create") === 0) {
          await this.runCreate(command);
          return;
        }

        if (sql.indexOf("receipt") === 0) {
          const parts = sql.split(" ").filter((c) => c);

          const txnHash = parts[1];
          await this.getReceipt(txnHash);
          return;
        }

        let mutate = false;

        if (
          sql.indexOf("insert") === 0 ||
          sql.indexOf("update") === 0 ||
          sql.indexOf("delete") === 0
        ) {
          mutate = true;
        }
        await this.runCommand(command, mutate);
      } catch (err) {
        this.loading = false;
        this.processError(err);
      }
    },
    async runCommand(sql, mutate) {
      try {
        this.showSpinner(messages.running);
        const command = mutate ? "runWrite" : "runRead";

        const response = await this.$store.dispatch(command, sql);
        this.loading = false;
        this.cls();
        if (response.data && response.data.columns && response.data.rows) {
          this.printTable(response.data);
          return;
        }

        this.printf("Result:\n" + JSON.stringify(response, null, 4));
      } catch (err) {
        this.loading = false;
        this.processError(err);
      }
    },
    async runCreate(sql) {
      try {
        this.showSpinner(messages.creating);
        const response = await this.$store.dispatch("createTable", sql);
        this.loading = false;
        this.cls();
        this.printf("Table Created:\n" + JSON.stringify(response, null, 4));
      } catch (err) {
        this.loading = false;
        this.processError(err);
      }
    },
    async getReceipt(txnHash) {
      try {
        this.showSpinner(messages.fetching);
        const response = await this.$store.dispatch("getReceipt", txnHash);
        this.loading = false;
        this.cls();
        this.printf(
          "Transaction Receipt:\n" + JSON.stringify(response, null, 4)
        );
      } catch (err) {
        this.loading = false;
        this.processError(err);
      }
    },
    async list() {
      try {
        this.showSpinner();
        const tables = await this.$store.dispatch("myTables");
        this.loading = false;
        this.cls();
        this.printf("Result:\n" + JSON.stringify(tables, null, 4));
      } catch (err) {
        this.loading = false;
        this.processError(err);
      }
    },
    async connect() {
      try {
        this.showSpinner("connecting");
        await this.$store.dispatch("connect");
        this.loading = false;

        // initial message
        this.cls();
        this.printf(messages.connected);
      } catch (err) {
        this.loading = false;
        this.processError(err);
      }
    },
    processError(err) {
      this.cls();

      if (err.message.includes("address not authorized")) {
        return this.printf(messages.warn.address);
      }

      this.printf("Error:\n" + err.message);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.overlay-disable {
  background-color: rgba(30, 30, 30, 0.8);
}

.web-terminal {
  font-family: monospace;
  height: calc(16rem + 10vw);
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.web-terminal::-webkit-scrollbar {
  display: none;
}

.font-mono {
  font-family: monospace;
}

.web-terminal-form::before {
  content: "> ";
  position: absolute;
  left: 1rem;
}
</style>
