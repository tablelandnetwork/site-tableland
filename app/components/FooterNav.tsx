"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { FaGithub, FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa"
import logo from "../../public/logo-white.svg"

export default function FooterNav() {
  const pathname = usePathname()

  return (
    <footer className="text-neonblue bg-darkgreen py-10 font-light">
      <nav className="container mx-auto flex flex-col items-center px-6 md:px-9 lg:px-16 xl:px-20">
        <div className="w-full grid gap-y-10 grid-cols-1 lg:grid-cols-2">
          <div className="mt-1">
            <Image
              src={logo}
              alt="Tableland"
              className="h-3 w-auto"
              priority={true}
            />
            <div className="mt-3">
              <Link href="https://github.com/tablelandnetwork" target="_blank">
                <FaGithub className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaGithub>
              </Link>
              <Link href="https://twitter.com/tableland__" target="_blank">
                <FaTwitter className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaTwitter>
              </Link>
              <Link
                href="https://www.youtube.com/@tablelandxyz"
                target="_blank"
              >
                <FaYoutube className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaYoutube>
              </Link>
              <Link href="https://discord.gg/dc8EBEhGbg" target="_blank">
                <FaDiscord className="inline-block text-verylightgreen hover:text-white text-lg mr-4"></FaDiscord>
              </Link>
            </div>
          </div>
          <div className="w-full grid gap-10 grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm text-white">Resources</h3>
              <ul className="flex flex-col space-y-3">
                <li className="text-xs">
                  <Link href="https://docs.tableland.xyz" target="_blank">
                    Docs
                  </Link>
                </li>
                <li className="text-xs">
                  <Link href="https://mirror.xyz/tableland.eth" target="_blank">
                    Blog
                  </Link>
                </li>
                <li className="text-xs">
                  <Link href="https://dev.tableland.xyz" target="_blank">
                    Tech Blog
                  </Link>
                </li>
                <li className="text-xs">
                  <Link
                    href="/pilot-program"
                    className={pathname == "/pilot-program" ? "underline" : ""}
                  >
                    Pilot Program
                  </Link>
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
                  <Link href="https://garage.tableland.xyz" target="_blank">
                    Garage
                  </Link>
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
                  <Link
                    href="https://opensea.io/collection/tableland-rigs"
                    target="_blank"
                  >
                    OpenSea
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-3">
              <h3 className="text-sm text-white">References</h3>
              <ul className="flex flex-col space-y-3">
                <li className="text-xs">
                  <Link
                    href="https://hhueol4i6vp.typeform.com/to/sgtDW2Xt"
                    target="_blank"
                  >
                    Token Info
                  </Link>
                </li>
                <li className="text-xs">
                  <Link
                    href="https://textile.notion.site/Tableland-Privacy-Policy-6fd160e7f485491d9dc4cbab188043d5"
                    target="_blank"
                  >
                    Privacy
                  </Link>
                </li>
                <li className="text-xs">
                  <Link
                    href="https://textile.notion.site/Tableland-Terms-of-Use-cf80f1b550b843ad9d4b8c3140b78e35"
                    target="_blank"
                  >
                    Terms
                  </Link>
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
