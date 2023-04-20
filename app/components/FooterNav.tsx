"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { FaGithub, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa"
import logo from "../../public/img/logo/white.svg"

export default function FooterNav() {
  const pathname = usePathname()

  return (
    <footer className="text-neonblue bg-darkgreen py-10 font-light">
      <nav className="container mx-auto flex flex-col items-center px-6 md:px-9 lg:px-16 xl:px-20">
        <div className="w-full grid gap-y-10 grid-cols-1 lg:grid-cols-3">
          <div className="mt-1">
            <Link href="/">
              <Image
                src={logo}
                alt="Tableland"
                className="h-3 w-auto opacity-[0.87]"
                priority={true}
              />
            </Link>
            <div className="mt-3">
              <a href="https://github.com/tablelandnetwork" target="_blank">
                <FaGithub className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaGithub>
              </a>
              <a href="https://twitter.com/tableland__" target="_blank">
                <FaTwitter className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaTwitter>
              </a>
              <a href="https://www.youtube.com/@tablelandxyz" target="_blank">
                <FaYoutube className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaYoutube>
              </a>
              <a href="https://tableland.xyz/discord" target="_blank">
                <FaDiscord className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaDiscord>
              </a>
            </div>
          </div>
          <div className="w-full grid gap-10 grid-cols-2 md:grid-cols-5 md:col-span-2">
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm text-white">Product</h3>
              <ul className="flex flex-col space-y-3">
                <li className="text-xs">
                  <a
                    href="https://docs.tableland.xyz/fundamentals/use-cases/#application-data"
                    target="_blank"
                  >
                    Application Data
                  </a>
                </li>
                <li className="text-xs">
                  <a
                    href="https://docs.tableland.xyz/fundamentals/use-cases/#nfts--gaming"
                    target="_blank"
                  >
                    NFTs & Gaming
                  </a>
                </li>
                <li className="text-xs">
                  <a
                    href="https://docs.tableland.xyz/fundamentals/use-cases/#data-daos--token-gating"
                    target="_blank"
                  >
                    Data DAOs & Token Gating
                  </a>
                </li>
                <li className="text-xs">
                  <a href="https://tableland.xyz/studio" target="_blank">
                    Studio Waitlist
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm text-white">Resources</h3>
              <ul className="flex flex-col space-y-3">
                <li className="text-xs">
                  <a href="https://mirror.xyz/tableland.eth" target="_blank">
                    Blog
                  </a>
                </li>
                <li className="text-xs">
                  <a href="https://dev.tableland.xyz" target="_blank">
                    Tech Blog
                  </a>
                </li>
                <li className="text-xs">
                  <Link
                    href="/pilot-program"
                    className={pathname == "/pilot-program" ? "underline" : ""}
                  >
                    Pilot Program
                  </Link>
                </li>
                <li className="text-xs">
                  <a href="https://tableland.xyz/jobs" target="_blank">
                    Jobs
                  </a>
                </li>
                <li className="text-xs">
                  <a href="https://tableland.xyz/newsletter" target="_blank">
                    Newsletter
                  </a>
                </li>
                <li className="text-xs">
                  <a
                    href="https://docs.tableland.xyz/fundamentals/about/general-faqs"
                    target="_blank"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm text-white">Developers</h3>
              <ul className="flex flex-col space-y-3">
                <li className="text-xs">
                  <a
                    href="https://docs.tableland.xyz/quickstarts"
                    target="_blank"
                  >
                    Quickstarts
                  </a>
                </li>
                <li className="text-xs">
                  <a
                    href="https://docs.tableland.xyz/specs/sql"
                    target="_blank"
                  >
                    SQL Spec
                  </a>
                </li>
                <li className="text-xs">
                  <a href="https://docs.tableland.xyz/sdk" target="_blank">
                    SDK
                  </a>
                </li>
                <li className="text-xs">
                  <a href="https://docs.tableland.xyz/cli" target="_blank">
                    CLI
                  </a>
                </li>
                <li className="text-xs">
                  <a
                    href="https://docs.tableland.xyz/tutorials"
                    target="_blank"
                  >
                    Tutorials
                  </a>
                </li>
                <li className="text-xs">
                  <a
                    href="https://docs.tableland.xyz/quickstarts/local-tableland"
                    target="_blank"
                  >
                    Local Tableland
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm text-white">Rigs</h3>
              <ul className="flex flex-col space-y-3">
                <li className="text-xs">
                  <Link
                    href="/rigs"
                    className={pathname == "/rigs" ? "underline" : ""}
                  >
                    Info
                  </Link>
                </li>
                <li className="text-xs">
                  <a href="https://garage.tableland.xyz" target="_blank">
                    Garage
                  </a>
                </li>
                <li className="text-xs">
                  <Link
                    href="/rigs/samples"
                    className={pathname == "/rigs/samples" ? "underline" : ""}
                  >
                    Samples
                  </Link>
                </li>
                <li className="text-xs">
                  <a
                    href="https://opensea.io/collection/tableland-rigs"
                    target="_blank"
                  >
                    OpenSea
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm text-white">Network</h3>
              <ul className="flex flex-col space-y-3">
                <li className="text-xs">
                  <a
                    href="https://docs.tableland.xyz/fundamentals/architecture/protocol-design"
                    target="_blank"
                  >
                    Protocol
                  </a>
                </li>
                <li className="text-xs">
                  <a
                    href="https://docs.tableland.xyz/fundamentals/about/roadmap"
                    target="_blank"
                  >
                    Roadmap
                  </a>
                </li>
                <li className="text-xs">
                  <a
                    href="https://docs.tableland.xyz/validator"
                    target="_blank"
                  >
                    Run a Node
                  </a>
                </li>
                <li className="text-xs">
                  <a
                    href="https://docs.tableland.xyz/gateway-api"
                    target="_blank"
                  >
                    Gateway
                  </a>
                </li>
                <li className="text-xs">
                  <a href="https://tableland.xyz/token" target="_blank">
                    Token Info
                  </a>
                </li>
                <li className="text-xs">
                  <a
                    href="https://textile.notion.site/Tableland-Privacy-Policy-6fd160e7f485491d9dc4cbab188043d5"
                    target="_blank"
                  >
                    Privacy
                  </a>
                </li>
                <li className="text-xs">
                  <a
                    href="https://textile.notion.site/Tableland-Terms-of-Use-cf80f1b550b843ad9d4b8c3140b78e35"
                    target="_blank"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="footer-bottom"></div>
    </footer>
  )
}
