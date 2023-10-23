"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { FaGithub, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa"
import EventLink from "./EventLink"
import logo from "../../public/img/logo/white.svg"

export default function FooterNav() {
  const pathname = usePathname()

  return (
    <footer className="text-neonblue bg-darkgreen py-10 font-light">
      <nav className="container mx-auto flex flex-col items-center px-6 md:px-9 lg:px-16 xl:px-20">
        <div className="w-full grid gap-y-10 grid-cols-1 lg:grid-cols-3">
          <div className="mt-1">
            <EventLink href="/" event="Logo" params={{ location: "footer" }}>
              <Image
                src={logo}
                alt="Tableland"
                className="h-3 w-auto opacity-[0.87]"
                priority={true}
              />
            </EventLink>
            <div className="mt-3">
              <EventLink
                href="https://github.com/tablelandnetwork"
                target="_blank"
                event="GitHub"
                params={{ location: "footer" }}
              >
                <FaGithub className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaGithub>
              </EventLink>
              <EventLink
                href="https://twitter.com/tableland"
                target="_blank"
                event="Twitter"
                params={{ location: "footer" }}
              >
                <FaTwitter className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaTwitter>
              </EventLink>
              <EventLink
                href="https://www.youtube.com/@tablelandxyz"
                target="_blank"
                event="YouTube"
                params={{ location: "footer" }}
              >
                <FaYoutube className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaYoutube>
              </EventLink>
              <EventLink
                href="https://tableland.xyz/discord"
                target="_blank"
                event="Discord"
                params={{ location: "footer" }}
              >
                <FaDiscord className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaDiscord>
              </EventLink>
            </div>
          </div>
          <div className="w-full grid gap-10 grid-cols-2 md:grid-cols-5 md:col-span-2">
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm text-white">Product</h3>
              <ul className="flex flex-col space-y-3">
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/fundamentals/use-cases/#application-data"
                    target="_blank"
                    event="Application Data"
                    params={{ location: "footer" }}
                  >
                    Application Data
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/fundamentals/use-cases/#nfts--gaming"
                    target="_blank"
                    event="NFTs & Gaming"
                    params={{ location: "footer" }}
                  >
                    NFTs & Gaming
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/fundamentals/use-cases/#data-daos--token-gating"
                    target="_blank"
                    event="Data DAOs & Token Gating"
                    params={{ location: "footer" }}
                  >
                    Data DAOs & Token Gating
                  </EventLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm text-white">Resources</h3>
              <ul className="flex flex-col space-y-3">
                <li className="text-xs">
                  <EventLink
                    href="https://mirror.xyz/tableland.eth"
                    target="_blank"
                    event="Blog"
                    params={{ location: "footer" }}
                  >
                    Blog
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="/pilot-program"
                    className={pathname == "/pilot-program" ? "underline" : ""}
                    event="Pilot Program"
                    params={{ location: "footer" }}
                  >
                    Pilot Program
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://tableland.xyz/jobs"
                    target="_blank"
                    event="Jobs"
                    params={{ location: "footer" }}
                  >
                    Jobs
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://tableland.xyz/newsletter"
                    target="_blank"
                    event="Newsletter"
                    params={{ location: "footer" }}
                  >
                    Newsletter
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/fundamentals/about/general-faqs"
                    target="_blank"
                    event="FAQ"
                    params={{ location: "footer" }}
                  >
                    FAQ
                  </EventLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm text-white">Developers</h3>
              <ul className="flex flex-col space-y-3">
                <li className="text-xs">
                  <EventLink
                    href="https://studio.tableland.xyz"
                    target="_blank"
                    event="Enter Studio"
                    params={{ location: "footer" }}
                  >
                    Studio
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/quickstarts"
                    target="_blank"
                    event="Quickstarts"
                    params={{ location: "footer" }}
                  >
                    Quickstarts
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/specs/sql"
                    target="_blank"
                    event="SQL Spec"
                    params={{ location: "footer" }}
                  >
                    SQL Spec
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/sdk"
                    target="_blank"
                    event="SDK"
                    params={{ location: "footer" }}
                  >
                    SDK
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/cli"
                    target="_blank"
                    event="CLI"
                    params={{ location: "footer" }}
                  >
                    CLI
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/tutorials"
                    target="_blank"
                    event="Tutorials"
                    params={{ location: "footer" }}
                  >
                    Tutorials
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/quickstarts/local-tableland"
                    target="_blank"
                    event="Local Tableland"
                    params={{ location: "footer" }}
                  >
                    Local Tableland
                  </EventLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm text-white">Rigs</h3>
              <ul className="flex flex-col space-y-3">
                <li className="text-xs">
                  <EventLink
                    href="/rigs"
                    className={pathname == "/rigs" ? "underline" : ""}
                    event="Rigs"
                    params={{ location: "footer" }}
                  >
                    Info
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://garage.tableland.xyz"
                    target="_blank"
                    event="Garage"
                    params={{ location: "footer" }}
                  >
                    Garage
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="/rigs/samples"
                    className={pathname == "/rigs/samples" ? "underline" : ""}
                    event="Rig Samples"
                    params={{ location: "footer" }}
                  >
                    Samples
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://opensea.io/collection/tableland-rigs"
                    target="_blank"
                    event="OpenSea"
                    params={{ location: "footer" }}
                  >
                    OpenSea
                  </EventLink>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm text-white">Network</h3>
              <ul className="flex flex-col space-y-3">
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/fundamentals/architecture/protocol-design"
                    target="_blank"
                    event="Protocol"
                    params={{ location: "footer" }}
                  >
                    Protocol
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/fundamentals/about/roadmap"
                    target="_blank"
                    event="Roadmap"
                    params={{ location: "footer" }}
                  >
                    Roadmap
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/validator"
                    target="_blank"
                    event="Run a Node"
                    params={{ location: "footer" }}
                  >
                    Run a Node
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/gateway-api"
                    target="_blank"
                    event="Gateway"
                    params={{ location: "footer" }}
                  >
                    Gateway
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://tableland.xyz/token"
                    target="_blank"
                    event="Token Info"
                    params={{ location: "footer" }}
                  >
                    Token Info
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://textile.notion.site/Tableland-Privacy-Policy-6fd160e7f485491d9dc4cbab188043d5"
                    target="_blank"
                    event="Privacy"
                    params={{ location: "footer" }}
                  >
                    Privacy
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://textile.notion.site/Tableland-Terms-of-Use-cf80f1b550b843ad9d4b8c3140b78e35"
                    target="_blank"
                    event="Terms"
                    params={{ location: "footer" }}
                  >
                    Terms
                  </EventLink>
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
