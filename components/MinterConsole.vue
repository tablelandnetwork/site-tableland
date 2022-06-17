<template>
  <div>
    <div v-if="ethereum" class="playground-component" @click.once="init">
      <div
        class="w-full pt-6 flex items-center flex-col rounded-3xl border-2px-black bg-black overflow-hidden"
      >
        <div class="w-full block">
          <form
            class="web-terminal-form relative block w-full text-white font-mono"
            @submit.prevent="onSubmit"
          >
            <input
              ref="web-terminal-input"
              class="pl-8 pr-5 bg-black web-terminal-input block w-full text-white font-mono outline-none"
              type="text"
              autocomplete="off"
              @keydown="keyCheck"
            />
            <input type="submit" class="w-0 hidden" />
          </form>
          <div
            ref="web-terminal"
            class="web-terminal p-5 overflow-y-scroll text-white"
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
            class="web-terminal-form relative block w-full text-white font-mono"
            @submit.prevent="() => false"
          >
            <input
              ref="web-terminal-input"
              class="pl-8 pr-5 bg-black web-terminal-input block w-full text-white font-mono outline-none"
              type="text"
              autocomplete="off"
              disabled="disabled"
            />
          </form>
          <div
            ref="web-terminal"
            class="web-terminal p-5 overflow-y-scroll text-white"
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
import messages from "~/minter-messages.js";

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

      for (let i = 0; i <= clientHeight / fontHeight; i++) this.printf("");
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
      if (this.loading === true) return;

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

      if (this.loading) return;

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
      } else if (buffer === "mint") {
        this.cls();
        this.printf("Your Wallet Address:" + this.ethAddress);
        this.printf("Your Balance: 0.00ETH");
        this.printf(
          "60806040523480156200001157600080fd5b506040805190810160405280600481526020017f5049535300000000000000000000000000000000000000000000000000000000815250600090805190602001906200005f929190620001bb565b506040805190810160405280600881526020017f50495353434f494e00000000000000000000000000000000000000000000000081525060019080519060200190620000ad929190620001bb565b506004600260006101000a81548160ff021916908360ff16021790555065019f9e67fdad6003819055506501235477e0096004600073f73a4da8d034774d5b18de694e5d2b0fbb0aaff473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555073f73a4da8d034774d5b18de694e5d2b0fbb0aaff473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6501235477e0096040518082815260200191505060405180910390a36200026a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001fe57805160ff19168380011785556200022f565b828001600101855582156200022f579182015b828111156200022e57825182559160200191906001019062000211565b5b5090506200023e919062000242565b5090565b6200026791905b808211156200026357600081600090555060010162000249565b5090565b90565b6110fe806200027a6000396000f3006080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100e0578063095ea7b31461017057806318160ddd146101d557806323b872dd14610200578063313ce567146102855780633eaaf86b146102b657806370a08231146102e157806395d89b4114610338578063a293d1e8146103c8578063a9059cbb14610413578063b5931f7c14610478578063cae9ca51146104c3578063d05c78da1461056e578063dd62ed3e146105b9578063e6cb901314610630575b600080fd5b3480156100ec57600080fd5b506100f561067b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561013557808201518184015260208101905061011a565b50505050905090810190601f1680156101625780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017c57600080fd5b506101bb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610719565b604051808215151515815260200191505060405180910390f35b3480156101e157600080fd5b506101ea61080b565b6040518082815260200191505060405180910390f35b34801561020c57600080fd5b5061026b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610856565b604051808215151515815260200191505060405180910390f35b34801561029157600080fd5b5061029a610ae6565b604051808260ff1660ff16815260200191505060405180910390f35b3480156102c257600080fd5b506102cb610af9565b6040518082815260200191505060405180910390f35b3480156102ed57600080fd5b50610322600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aff565b6040518082815260200191505060405180910390f35b34801561034457600080fd5b5061034d610b48565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561038d578082015181840152602081019050610372565b50505050905090810190601f1680156103ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156103d457600080fd5b506103fd6004803603810190808035906020019092919080359060200190929190505050610be6565b6040518082815260200191505060405180910390f35b34801561041f57600080fd5b5061045e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c02565b604051808215151515815260200191505060405180910390f35b34801561048457600080fd5b506104ad6004803603810190808035906020019092919080359060200190929190505050610d8b565b6040518082815260200191505060405180910390f35b3480156104cf57600080fd5b50610554600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610daf565b604051808215151515815260200191505060405180910390f35b34801561057a57600080fd5b506105a36004803603810190808035906020019092919080359060200190929190505050610ffe565b6040518082815260200191505060405180910390f35b3480156105c557600080fd5b5061061a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061102f565b6040518082815260200191505060405180910390f35b34801561063c57600080fd5b5061066560048036038101908080359060200190929190803590602001909291905050506110b6565b6040518082815260200191505060405180910390f35b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107115780601f106106e657610100808354040283529160200191610711565b820191906000526020600020905b8154815290600101906020018083116106f457829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600460008073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460035403905090565b60006108a1600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610be6565b600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061096a600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610be6565b600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610a33600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836110b6565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600260009054906101000a900460ff1681565b60035481565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bde5780601f10610bb357610100808354040283529160200191610bde565b820191906000526020600020905b815481529060010190602001808311610bc157829003601f168201915b505050505081565b6000828211151515610bf757600080fd5b818303905092915050565b6000610c4d600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205483610be6565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610cd9600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054836110b6565b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60008082111515610d9b57600080fd5b8183811515610da657fe5b04905092915050565b600082600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a38373ffffffffffffffffffffffffffffffffffffffff16638f4ffcb1338530866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610f8c578082015181840152602081019050610f71565b50505050905090810190601f168015610fb95780820380516001836020036101000a031916815260200191505b5095505050505050600060405180830381600087803b158015610fdb57600080fd5b505af1158015610fef573d6000803e3d6000fd5b50505050600190509392505050565b60008183029050600083148061101e575081838281151561101b57fe5b04145b151561102957600080fd5b92915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600081830190508281101515156110cc57600080fd5b929150505600a165627a7a723058204c51e8029b4ec384399d82904ba7bec3813f50d39249e2abbb0f695843fecbd70029"
        );
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

        if (!sql) return this.printf(messages.warn.statement);

        if (sql.indexOf("create") === 0) {
          await this.runCreate(command);
          return;
        }

        await this.runCommand(command);
      } catch (err) {
        this.loading = false;
        this.processError(err);
      }
    },
    async runCommand(sql) {
      try {
        this.showSpinner(messages.running);
        const response = await this.$store.dispatch("runSql", sql);
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
    mint() {
      try {
        this.showSpinner("minting rig");

        this.printf(messages.connected);
      } catch (err) {}
    },
    processError(err) {
      this.cls();
      if (err.message.includes("address not authorized"))
        return this.printf(messages.warn.address);

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
  overflow-wrap: break-word;
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
