import { type AB, type ABC, type Hero, type Features } from "@/lib/types"

export const hero: ABC<Hero> = {
  flags: {
    main: "hero",
    sections: ["heroTag", "heroTitle", "heroLead", "heroCta"],
  },
  a: {
    tag: 'Read+write from <span class="font-bold">anywhere</span>',
    title: 'The <span class="font-bold">decentralized</span> cloud database.',
    lead: "Tableland is an open source, permissionless cloud database built on SQLite. Read and write tamperproof data from apps, data pipelines, or EVM smart contracts.",
    cta: "Enter Studio",
  },
  b: {
    tag: "Read, write, grant access",
    title: 'Build <span class="font-bold">data-driven</span> web3 apps.',
    lead: "Built for performance. Designed for simplicity. Welcome to Tableland, the first web3-native database that allows you to write and query data from any app or smart contract.",
    cta: "Enter Studio",
  },
  c: {
    tag: "SQL developer tools",
    title:
      'Store and query contract metadata with <span class="font-bold">SQL</span>.',
    lead: "Tableland is a decentralized database built on the SQLite engine, providing SQL APIs deployed to multiple blockchains, including Ethereum, Polygon, Arbitrum, and Optimism.",
    cta: "Enter Studio",
  },
}

export const features: AB<Features> = {
  flags: {
    main: "features",
    sections: ["featuresTitle"],
  },
  a: {
    title: "Build on decentralized data without the headache.",
  },
  b: {
    title: "The only user-friendly Web3 database.",
  },
}
