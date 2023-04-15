"use client"

import Link from "next/link"
import Image from "next/image"
import ButtonLink from "./ButtonLink"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { FaTwitter } from "react-icons/fa"
import tweets from "@/lib/tweets"

export default function Tweets() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ])

  return (
    <section id="community" className="w-full bg-darkgreen text-white">
      <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
      <div className="mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-12 md:py-24 lg:py-36">
        <h1 className="w-full text-center text-xl lg:text-2xl xl:text-3xl mb-2 lg:mb-4">
          Join the community
        </h1>
        <p className="w-full text-center text-sm lg:text-lg text-verylightgreen font-light mb-6 lg:mb-10">
          Backed by a network of early visionaries and developers.
        </p>
        <div className="mb-6 lg:mb-10">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33%] xl:auto-cols-[20%]">
              {tweets.map(function (t, i) {
                return (
                  <div key={i} className="px-3">
                    <div className="bg-lightgreen rounded-lg p-6">
                      <Link
                        href={t.url}
                        target="_blank"
                        className="no-underline"
                      >
                        <div className="flex pb-4">
                          <div className="relative pr-2">
                            <div className="absolute flex items-center justify-center top-[-5px] left-[-5px] w-[20px] h-[20px] bg-[#1da1f2] rounded-full">
                              <FaTwitter className="text-xs"></FaTwitter>
                            </div>
                            <Image
                              src={t.image}
                              alt={"Tweet" + i}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          </div>
                          <h4 className="text-xs mt-4">@{t.username}</h4>
                        </div>
                        <p className="text-sm font-light">
                          &ldquo;{t.body}&rdquo;
                        </p>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="text-center">
          <ButtonLink
            href="https://discord.gg/dc8EBEhGbg"
            target="_blank"
            classes="text-neonblue hover:text-white bg-darkgreen border-2 border-green"
          >
            Discord
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
