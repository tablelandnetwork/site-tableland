import { Feature } from "@/lib/types"
import { FaDatabase, FaLock, FaBriefcase, FaLink } from "react-icons/fa"

const features: Feature[] = [
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
    description: "Write SQL from your frontend, backend, or smart-contracts.",
    link: "https://docs.tableland.xyz/quickstarts",
  },
  {
    title: "Multi-chain",
    icon: FaLink,
    description:
      "Live on Ethereum, Optimism, Arbitrum, Arbitrum Nova, and Polygon. Filecoin and zkEVMs coming soon.",
    link: "https://docs.tableland.xyz/fundamentals/chains",
  },
]

export default features
