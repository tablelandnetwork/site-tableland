import { ActionTree, MutationTree } from "vuex";
import { connect, ConnectOptions } from "@tableland/sdk";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { TablelandRigs, TablelandRigs__factory } from "@tableland/rigs";
import { deployments } from "@tableland/rigs/deployments";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";

export const state = function () {
  return {
    ethAddress: "" as string,
    playgroundResponse: {} as any,
    tablesTable: [] as any,
    tablesTableId: "" as string,
    allTables: [] as any[],
    allTableIds: [] as string[],
    currentTableId: "" as string,
    currentTableName: "" as string,
  };
};

export type RootState = ReturnType<typeof state>;

interface KeyVal {
  key: string;
  value: any;
}

export const mutations: MutationTree<RootState> = {
  set: function (state: any, data: KeyVal) {
    state[data.key] = data.value;
  },
};

declare global {
  interface Window {
    tableland: any;
  }
}

window.tableland =
  "First connect with metamask, then start building web3 with SQL!";
// store the tableland connection as a private plain Object
const getConnection = (function () {
  let connection: any;
  return async function (options?: any) {
    if (options?.disconnect) {
      connection = undefined;
      delete window.tableland;
      return;
    }
    if (connection) return connection;

    connection = await connect({
      chain: process.env.chain as string,
    } as ConnectOptions);
    await connection.siwe();

    window.tableland = connection;

    return connection;
  };
})();

let web3Modal: Web3Modal | undefined;

if (window.ethereum) {
  window.ethereum.on("accountsChanged", ([newAddress]: any) => {
    console.log("accountsChanged", newAddress);
    if (web3Modal) web3Modal.clearCachedProvider();
    window.location.reload();
  });

  window.ethereum.on("chainChanged", (chainId: any) => {
    console.log("chainChanged", chainId);
    if (web3Modal) web3Modal.clearCachedProvider();
    window.location.reload();
  });
}

const getRigsProvider = (function () {
  let provider: ethers.providers.Web3Provider | undefined;

  return async function (options?: any) {
    if (options?.disconnect) {
      if (web3Modal) web3Modal.clearCachedProvider();
      return;
    }
    if (provider) return provider;

    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            80001: "https://rpc-mumbai.maticvigil.com/",
          },
          infuraId: "2a8924427d074d4c957ed6c03fabc42f",
        },
      },
    };
    web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions,
    });
    const instance = await web3Modal.connect();
    provider = new ethers.providers.Web3Provider(instance);

    return provider;
  };
})();

// TODO: Switch these out if you are testing
const rigsDeployment = deployments["ethereum"];
const rigsChainId = 1;
// const rigsDeployment = deployments["polygon-mumbai"];
// const rigsChainId = 80001;

const getRigs = (function () {
  return async function (provider: ethers.providers.Web3Provider) {
    const signer = provider.getSigner();
    let { chainId } = await provider.getNetwork();
    if (chainId !== rigsChainId) {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${rigsChainId.toString(16)}` }], // chainId must be in hexadecimal numbers
      });
    }

    // If still not connected correct, fail out
    const net = await provider.getNetwork();
    if (net.chainId !== rigsChainId) {
      throw new Error(
        "Unable to connect to Rigs contract.\nTry reconnecting your wallet to Ethereum mainnet."
      );
    }

    return TablelandRigs__factory.connect(
      rigsDeployment.contractAddress,
      signer
    ) as TablelandRigs;
  };
})();

const getRigsStatus = (function () {
  return async function (rigs: TablelandRigs, address: string) {
    const mintphase = await rigs.mintPhase();
    console.info("mint phase:", mintphase);
    const tokens = await rigs.tokensOfOwner(address);
    console.info("address has:", tokens.length);
    const claimed = await rigs.getClaimed(address);
    console.info("address claimed:", claimed.allowClaims, claimed.waitClaims);
    const minted = await rigs.totalSupply();
    const max = await rigs.maxSupply();
    const supply = max.toNumber() - minted.toNumber();
    console.info("remaining supply:", supply);

    switch (mintphase) {
      case 0:
        return { mintphase, supply };
      case 1:
      case 2:
        const tbl = await connect({
          chain: "ethereum-goerli",
        } as ConnectOptions);

        const useWaitlist = mintphase === 2 ? 1 : 0;
        const entryRes = await tbl.read(
          `select * from ${
            rigsDeployment.allowlistTable
          } where lower(address)='${address.toLowerCase()}' and waitlist=${useWaitlist}`
        );
        if (entryRes.rows && entryRes.rows.length === 0) {
          return { mintphase, tokens, supply, claimed };
        }
        const entry = entryRes.rows[0];
        console.info("address entry:", entry);

        const list = await tbl.read(
          `select * from ${rigsDeployment.allowlistTable} where waitlist=${useWaitlist}`
        );
        const tree = buildTree(list.rows || []);
        const proof = tree.getHexProof(hashEntry(entry));
        console.info("address proof:", proof);

        return { mintphase, tokens, supply, entry, proof, claimed };
      default:
        return { mintphase, tokens, supply, claimed };
    }
  };
})();

const mintRigs = (function () {
  return async function (
    rigs: TablelandRigs,
    quantity: number,
    freeAllowance: number,
    paidAllowance: number,
    proof: string[]
  ) {
    const value = ethers.utils.parseEther((quantity * 0.05).toFixed(2));

    let receipt;
    if (proof.length > 0) {
      receipt = await (
        await rigs["mint(uint256,uint256,uint256,bytes32[])"](
          quantity,
          freeAllowance,
          paidAllowance,
          proof,
          { value: value }
        )
      ).wait();
    } else {
      receipt = await (
        await rigs["mint(uint256)"](quantity, { value: value })
      ).wait();
    }

    let ids = [];
    if (receipt.events && receipt.events.length > 0) {
      for (let i = 0; i < receipt.events.length; i++) {
        const e = receipt.events[i];
        if (e.event === "Transfer") {
          const id = (e.args?.tokenId as BigNumber).toNumber();
          ids.push(id);
        }
      }
    }
    return ids;
  };
})();

const getRigsMetadata = (function () {
  return async function (tokens: number[]) {
    if (tokens.length === 0) {
      return [];
    }
    const tbl = await connect({
      chain: "ethereum-goerli",
    } as ConnectOptions);
    const entryRes = await tbl.read(
      `select thumb from ${rigsDeployment.tokensTable} where id in (${tokens})`
    );
    if (!entryRes.rows || entryRes.rows.length === 0) {
      return [];
    }
    return entryRes.rows.map((r: any) => {
      return r[0];
    });
  };
})();

export const actions: ActionTree<RootState, RootState> = {
  connect: async function (context) {
    console.log("store connect...");
    // connect to tableland
    const tableland = await getConnection();

    const ethAddress = await tableland.signer.getAddress();
    // save the user's eth account address
    context.commit("set", { key: "ethAddress", value: ethAddress });
  },
  disconnect: async function (context) {
    await getConnection({ disconnect: true });
  },
  getReceipt: async function (context, txnHash) {
    const tableland = await getConnection();
    console.log(txnHash);
    return await tableland.receipt(txnHash);
  },
  runWrite: async function (context, query) {
    const tableland = await getConnection();
    return await tableland.write(query);
  },
  runRead: async function (context, query) {
    const tableland = await getConnection();
    return await tableland.read(query);
  },
  createTable: async function (context, createStatement) {
    const parts = createStatement.split(" ");
    const tableName = parts[2];
    const defintionParts = parts.slice(3);
    let definition = defintionParts.join(" ");
    definition = definition.slice(
      definition.indexOf("(") + 1,
      definition.lastIndexOf(")")
    );

    const tableland = await getConnection();
    return await tableland.create(definition, tableName);
  },
  myTables: async function (context) {
    const tableland = await getConnection();
    return await tableland.list();
  },
  getRigsStatus: async function (context) {
    const provider = await getRigsProvider();
    if (provider) {
      try {
        const rigs = await getRigs(provider);
        const address = await provider?.getSigner().getAddress();
        console.info("connnected to", address);

        const status = await getRigsStatus(rigs, address);
        return { ...status, address };
      } catch (error) {
        alert(error);
        window.location.reload();
      }
    }
  },
  mintRigs: async function (context, args) {
    try {
      const provider = await getRigsProvider();
      if (provider) {
        const rigs = await getRigs(provider);
        const ids = await mintRigs(
          rigs,
          args.quantity,
          args.freeAllowance,
          args.paidAllowance,
          args.proof
        );
        return ids;
      }
    } catch (error) {
      console.error(error);
    }
  },
  getRigsMetadata: async function (context, args) {
    try {
      return await getRigsMetadata(args.tokens);
    } catch (error) {
      console.error(error);
    }
  },
};

// RPC responds with rows and columns in separate arrays, this will combine to an array of objects
const parseRpcResponse = function (data: {
  rows: any[];
  columns: { name: string }[];
}) {
  return data.rows.map((rowArr) => {
    const row = {} as { [key: string]: any };
    for (let i = 0; i < data.columns.length; i++) {
      const key = data.columns[i].name;
      row[key] = rowArr[i];
    }

    return row;
  });
};

const sql = {};

const wait = function (ms: number) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(void 0), ms);
  });
};

function buildTree(allowlist: [string, number, number, number][]): MerkleTree {
  return new MerkleTree(
    allowlist.map((entry) => hashEntry(entry)),
    keccak256,
    {
      sort: true,
    }
  );
}

function hashEntry(entry: [string, number, number, number]): Buffer {
  return Buffer.from(
    ethers.utils
      .solidityKeccak256(
        ["address", "uint256", "uint256"],
        [entry[0], entry[1], entry[2]]
      )
      .slice(2),
    "hex"
  );
}
