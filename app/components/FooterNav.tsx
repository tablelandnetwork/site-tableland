"use client"

import Link from "next/link"
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
            <EventLink
              href="/"
              event="Logo Clicked"
              params={{ location: "footer" }}
            >
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
                event="GitHub Clicked"
                params={{ location: "footer" }}
              >
                <FaGithub className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaGithub>
              </EventLink>
              <EventLink
                href="https://twitter.com/tableland__"
                target="_blank"
                event="Twitter Clicked"
                params={{ location: "footer" }}
              >
                <FaTwitter className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaTwitter>
              </EventLink>
              <EventLink
                href="https://www.youtube.com/@tablelandxyz"
                target="_blank"
                event="YouTube Clicked"
                params={{ location: "footer" }}
              >
                <FaYoutube className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaYoutube>
              </EventLink>
              <EventLink
                href="https://tableland.xyz/discord"
                target="_blank"
                event="Discord Clicked"
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
                    event="Application Data Clicked"
                    params={{ location: "footer" }}
                  >
                    Application Data
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/fundamentals/use-cases/#nfts--gaming"
                    target="_blank"
                    event="NFTs & Gaming Clicked"
                    params={{ location: "footer" }}
                  >
                    NFTs & Gaming
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/fundamentals/use-cases/#data-daos--token-gating"
                    target="_blank"
                    event="Data DAOs & Token Gating Clicked"
                    params={{ location: "footer" }}
                  >
                    Data DAOs & Token Gating
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://tableland.xyz/studio"
                    target="_blank"
                    event="Studio Waitlist Clicked"
                    params={{ location: "footer" }}
                  >
                    Studio Waitlist
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
                    event="Blog Clicked"
                    params={{ location: "footer" }}
                  >
                    Blog
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://dev.tableland.xyz"
                    target="_blank"
                    event="Tech Blog Clicked"
                    params={{ location: "footer" }}
                  >
                    Tech Blog
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="/pilot-program"
                    className={pathname == "/pilot-program" ? "underline" : ""}
                    event="Pilot Program Clicked"
                    params={{ location: "footer" }}
                  >
                    Pilot Program
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://tableland.xyz/jobs"
                    target="_blank"
                    event="Jobs Clicked"
                    params={{ location: "footer" }}
                  >
                    Jobs
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://tableland.xyz/newsletter"
                    target="_blank"
                    event="Newsletter Clicked"
                    params={{ location: "footer" }}
                  >
                    Newsletter
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/fundamentals/about/general-faqs"
                    target="_blank"
                    event="FAQ Clicked"
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
                    href="https://docs.tableland.xyz/quickstarts"
                    target="_blank"
                    event="Quickstarts Clicked"
                    params={{ location: "footer" }}
                  >
                    Quickstarts
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/specs/sql"
                    target="_blank"
                    event="SQL Spec Clicked"
                    params={{ location: "footer" }}
                  >
                    SQL Spec
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/sdk"
                    target="_blank"
                    event="SDK Clicked"
                    params={{ location: "footer" }}
                  >
                    SDK
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/cli"
                    target="_blank"
                    event="CLI Clicked"
                    params={{ location: "footer" }}
                  >
                    CLI
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/tutorials"
                    target="_blank"
                    event="Tutorials Clicked"
                    params={{ location: "footer" }}
                  >
                    Tutorials
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/quickstarts/local-tableland"
                    target="_blank"
                    event="Local Tableland Clicked"
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
                    event="Info Clicked"
                    params={{ location: "footer" }}
                  >
                    Info
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://garage.tableland.xyz"
                    target="_blank"
                    event="Garage Clicked"
                    params={{ location: "footer" }}
                  >
                    Garage
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="/rigs/samples"
                    className={pathname == "/rigs/samples" ? "underline" : ""}
                    event="Samples Clicked"
                    params={{ location: "footer" }}
                  >
                    Samples
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://opensea.io/collection/tableland-rigs"
                    target="_blank"
                    event="OpenSea Clicked"
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
                    event="Protocol Clicked"
                    params={{ location: "footer" }}
                  >
                    Protocol
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/fundamentals/about/roadmap"
                    target="_blank"
                    event="Roadmap Clicked"
                    params={{ location: "footer" }}
                  >
                    Roadmap
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/validator"
                    target="_blank"
                    event="Run a Node Clicked"
                    params={{ location: "footer" }}
                  >
                    Run a Node
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://docs.tableland.xyz/gateway-api"
                    target="_blank"
                    event="Gateway Clicked"
                    params={{ location: "footer" }}
                  >
                    Gateway
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://tableland.xyz/token"
                    target="_blank"
                    event="Token Info Clicked"
                    params={{ location: "footer" }}
                  >
                    Token Info
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://textile.notion.site/Tableland-Privacy-Policy-6fd160e7f485491d9dc4cbab188043d5"
                    target="_blank"
                    event="Privacy Clicked"
                    params={{ location: "footer" }}
                  >
                    Privacy
                  </EventLink>
                </li>
                <li className="text-xs">
                  <EventLink
                    href="https://textile.notion.site/Tableland-Terms-of-Use-cf80f1b550b843ad9d4b8c3140b78e35"
                    target="_blank"
                    event="Terms Clicked"
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
