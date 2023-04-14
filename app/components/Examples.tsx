import Image from "next/image"
import Link from "next/link"
import SmallButtonLink from "./SmallButtonLink"
import examples from "@/lib/examples"

export default function Examples() {
  return (
    <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {examples.map(function (e, i) {
        return (
          <div key={i}>
            <div className="bg-green rounded-t p-5 pt-4">
              <h4 className="text-neongreen font-light text-md mb-4">
                {e.title}
              </h4>
              <p className="text-verylightgreen text-sm font-light mb-4">
                {e.description}
              </p>
              <div className="flex mb-2">
                <div className="hidden sm:block relative mr-2">
                  <Link
                    href={"https://github.com/" + e.username}
                    target="blank"
                  >
                    <Image
                      src={e.image}
                      alt={"Image" + i}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </Link>
                </div>
                <Link
                  href={"https://github.com/" + e.username}
                  target="blank"
                  className="text-verylightgreen no-underline hover:underline"
                >
                  <h4 className="text-xs mt-2">{e.username}</h4>
                </Link>
              </div>
            </div>
            <div className="bg-darkgreen border-2 border-green rounded-b p-4">
              <div className="hidden sm:block mb-2">
                <Link
                  href={"https://github.com/" + e.repo}
                  target="_blank"
                  className="text-neonblue text-xs no-underline hover:underline"
                >
                  {e.repo}
                </Link>
              </div>
              <div>
                <SmallButtonLink
                  href={"https://github.com/" + e.repo}
                  target="_blank"
                  classes="btn-small bg-green text-neonblue hover:text-white"
                >
                  View code
                </SmallButtonLink>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
