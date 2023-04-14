import { IconType } from "react-icons"
import { FaDatabase, FaLock, FaBriefcase, FaLink } from "react-icons/fa"

type Feature = {
  title: string
  icon: IconType
  description: string
  link: string
}

const features: Feature[] = [
  {
    title: "SQLite",
    icon: FaDatabase,
    description:
      "Tableland is a fully-featured, ACID-compliant, relational database built on the blazing-fast SQLite engine.",
    link: "https://docs.tableland.xyz",
  },
  {
    title: "On-chain security",
    icon: FaLock,
    description:
      "Leverage wallet and contract-based authentication & authorization. Configure tables with fine-grained row- and column-level write access control.",
    link: "https://docs.tableland.xyz",
  },
  {
    title: "Portable",
    icon: FaBriefcase,
    description: "Write SQL from your frontend, backend, or smart-contracts.",
    link: "https://docs.tableland.xyz",
  },
  {
    title: "Multi-chain",
    icon: FaLink,
    description:
      "Live on Ethereum, Optimism, Arbitrum, Arbitrum Nova, and Polygon. Filecoin and xkEVMs coming soon.",
    link: "https://docs.tableland.xyz",
  },
]

export default features
