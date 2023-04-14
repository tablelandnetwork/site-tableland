"use client"

import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { FaTwitter } from "react-icons/fa"
import tweets from "@/lib/tweets"

export default function Tweets() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000 }),
  ])

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="grid grid-flow-col auto-cols-[100%] sm:auto-cols-[50%] md:auto-cols-[33%] xl:auto-cols-[20%]">
        {tweets.map(function (t, i) {
          return (
            <div key={i} className="px-3">
              <div className="bg-lightgreen rounded-lg p-6">
                <Link href={t.url} target="_blank" className="no-underline">
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
                  <p className="text-sm font-light">&ldquo;{t.body}&rdquo;</p>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
