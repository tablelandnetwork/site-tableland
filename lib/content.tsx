import { AB, Hero, Features } from "@/lib/types"
import { FaDatabase, FaLock, FaBriefcase, FaLink } from "react-icons/fa"

/*

type HeroA = {
  tag: string
}

type Test = {
  compare: hero
}

*/

export const hero: AB<Hero> = {
  flags: {
    tagB: "heroTagB",
    titleB: "heroTitleB",
    leadB: "heroLeadB",
    ctaB: "heroCtaB",
  },
  a: {
    tag: 'Read+write from <span className="font-bold">anywhere</span>',
    title: 'The <span class="font-bold">decentralized</span> cloud database.',
    lead: "Tableland is an open source, permissionless cloud database built on SQLite. Read and write tamperproof data from apps, data pipelines, or EVM smart contracts.",
    cta: "Start your project",
  },
  b: {
    tag: 'Read+write from <span className="font-bold">anywhere</span>',
    title:
      'SQL infrastructure for the <span class="font-bold">decentralized</span> internet.',
    lead: "Tableland is an open source, permissionless cloud database built on SQLite. Read and write tamperproof data from apps, data pipelines, or EVM smart contracts.",
    cta: "Start your project",
  },
}

export const features: AB<Features> = {
  flags: {
    title: "featuresTitleB",
    items: "featuresItemsB",
  },
  a: {
    title: "Build on decentralized data without the headache.",
    items: [
      {
        title: "SQLite",
        icon: FaDatabase,
        description:
          "Tableland is a fully-featured, ACID-compliant, relational database built on the blazing-fast SQLite engine.",
        link: "https://docs.tableland.xyz/playbooks",
      },
      {
        title: "On-chain security",
        icon: FaLock,
        description:
          "Leverage wallet and contract-based authentication & authorization. Configure tables with fine-grained row- and column-level write access control.",
        link: "https://docs.tableland.xyz/fundamentals/architecture/protocol-design",
      },
      {
        title: "Portable",
        icon: FaBriefcase,
        description:
          "Write SQL from your frontend, backend, or smart-contracts.",
        link: "https://docs.tableland.xyz/quickstarts",
      },
      {
        title: "Multi-chain",
        icon: FaLink,
        description:
          "Live on Ethereum, Optimism, Arbitrum, Arbitrum Nova, and Polygon. Filecoin and zkEVMs coming soon.",
        link: "https://docs.tableland.xyz/fundamentals/chains",
      },
    ],
  },
  b: {
    title: "The only user-friendly Web3 database.",
    items: [
      {
        title: "SQLite",
        icon: FaDatabase,
        description:
          "Tableland is a fully-featured, ACID-compliant, relational database built on the blazing-fast SQLite engine.",
        link: "https://docs.tableland.xyz/playbooks",
      },
      {
        title: "On-chain security",
        icon: FaLock,
        description:
          "Leverage wallet and contract-based authentication & authorization. Configure tables with fine-grained row- and column-level write access control.",
        link: "https://docs.tableland.xyz/fundamentals/architecture/protocol-design",
      },
      {
        title: "Portable",
        icon: FaBriefcase,
        description:
          "Write SQL from your frontend, backend, or smart-contracts.",
        link: "https://docs.tableland.xyz/quickstarts",
      },
      {
        title: "Multi-chain",
        icon: FaLink,
        description:
          "Live on Ethereum, Optimism, Arbitrum, Arbitrum Nova, and Polygon. Filecoin and zkEVMs coming soon.",
        link: "https://docs.tableland.xyz/fundamentals/chains",
      },
    ],
  },
}
