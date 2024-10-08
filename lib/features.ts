import { type Feature } from "@/lib/types"
import { FaDatabase, FaLock, FaBriefcase, FaLink, FaDollarSign } from "react-icons/fa"

const features: Feature[] = [
  {
    title: "SQLite",
    icon: FaDatabase,
    description:
      "Tableland is a fully-featured, ACID-compliant, relational database built on the blazing-fast SQLite engine.",
    link: "https://docs.tableland.xyz/fundamentals/why-sqlite",
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
    description: "Write SQL from your frontend, backend, or smart-contracts.",
    link: "https://docs.tableland.xyz/quickstarts",
  },
  {
    title: "Multi-chain",
    icon: FaLink,
    description:
      "Live on Ethereum, Optimism, Arbitrum, Arbitrum Nova, and Polygon. Filecoin and zkEVMs coming soon.",
    link: "https://docs.tableland.xyz/fundamentals/supported-chains",
  },
  {
    title: "Pricing",
    icon: FaDollarSign,
    description:
      "The Tableland protocol is integrated with various EVM networks and processes user payments per SQL write operation. These fees are payed as transaction gas in a way familiar to users of any blockchain-based technology.",
    link: "https://docs.tableland.xyz/fundamentals/about/glossary#transaction",
  },
]

export default features
