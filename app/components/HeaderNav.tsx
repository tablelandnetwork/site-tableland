"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import EventLink from "./EventLink"
import logoBlack from "../../public/img/logo/black.svg"
import logoWhite from "../../public/img/logo/white.svg"

export default function HeaderNav() {
  const pathname = usePathname()
  const [opaque, setOpaque] = useState(false)
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    function checkScroll() {
      setOpaque(window.scrollY > 0)
    }
    checkScroll()
    window.addEventListener("scroll", checkScroll)
  }, [opaque])

  function handleMenu() {
    if (!menu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    setMenu(!menu)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 [transition:background-color_0.2s,border-color_0.3s] ease-out border-b${
        opaque
          ? " bg-darkgreen border-lightgreen text-white"
          : " border-transparent"
      }`}
    >
      <nav className="container mx-auto flex flex-wrap items-center justify-center lg:justify-between px-6 md:px-9 lg:px-16 xl:px-20 py-6 lg:py-4">
        <div className="lg:hidden absolute inset-y-0 left-0 flex items-center px-4">
          <button
            className="inline-flex items-center justify-center"
            onClick={handleMenu}
          >
            <FaBars />
          </button>
        </div>
        <div>
          <EventLink href="/" event="Logo" params={{ location: "header" }}>
            <Image
              src={opaque ? logoWhite : logoBlack}
              alt="Tableland"
              className={`h-3 md:h-4 w-auto${opaque ? " opacity-[0.87]" : ""}`}
              priority={true}
            />
          </EventLink>
        </div>
        <div className="hidden lg:block">
          <ul className="flex justify-end text-sm items-center gap-x-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8">
            <li>
              <EventLink
                href="https://github.com/tablelandnetwork"
                target="_blank"
                event="GitHub"
                params={{ location: "header" }}
              >
                GitHub
              </EventLink>
            </li>
            <li>
              <EventLink
                href="https://mirror.xyz/tableland.eth"
                target="_blank"
                event="Blog"
                params={{ location: "header" }}
              >
                Blog
              </EventLink>
            </li>
            <li>
              <EventLink
                href="/pilot-program"
                className={pathname == "/pilot-program" ? "underline" : ""}
                event="Pilot Program"
                params={{ location: "header" }}
              >
                Pilot Program
              </EventLink>
            </li>
            <li>
              <EventLink
                href="/rigs"
                className={pathname == "/rigs" ? "underline" : ""}
                event="Rigs"
                params={{ location: "header" }}
              >
                Rigs
              </EventLink>
            </li>
            <li>
              <EventLink
                href="https://docs.tableland.xyz"
                target="_blank"
                className={`btn-header hover:text-white${
                  opaque ? " bg-white text-black" : " bg-black text-orange"
                }`}
                event="Docs"
                params={{ location: "header" }}
              >
                Docs
              </EventLink>
            </li>
          </ul>
        </div>
        {menu && (
          <div className="lg:hidden fixed -inset-y-0 z-50 h-screen w-screen overflow-y-scroll bg-darkgreen p-4 md:p-8">
            <div
              className="absolute items-center justify-between right-4 top-4"
              onClick={handleMenu}
            >
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-white text-2xl"
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            <div className="mt-6 mb-12">
              <div className="pt-2 pb-4 space-y-1 text-white">
                <EventLink
                  href="https://docs.tableland.xyz"
                  target="_blank"
                  className="block py-2 pl-3 pr-4 hover:underline"
                  event="Docs"
                  params={{ location: "header" }}
                >
                  Docs
                </EventLink>
                <EventLink
                  href="https://github.com/tablelandnetwork"
                  target="_blank"
                  className="block py-2 pl-3 pr-4 hover:underline"
                  event="GitHub"
                  params={{ location: "header" }}
                >
                  GitHub
                </EventLink>
                <EventLink
                  href="https://mirror.xyz/tableland.eth"
                  target="_blank"
                  className="block py-2 pl-3 pr-4 hover:underline"
                  event="Blog"
                  params={{ location: "header" }}
                >
                  Blog
                </EventLink>
                <EventLink
                  href="/pilot-program"
                  className="block py-2 pl-3 pr-4 hover:underline"
                  onClick={handleMenu}
                  event="Pilot Program"
                  params={{ location: "header" }}
                >
                  Pilot Program
                </EventLink>
                <EventLink
                  href="/rigs"
                  className="block py-2 pl-3 pr-4 hover:underline"
                  onClick={handleMenu}
                  event="Rigs"
                  params={{ location: "header" }}
                >
                  Rigs
                </EventLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
