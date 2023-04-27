import Image from "next/image"
import ButtonLink from "./ButtonLink"
import EventLink from "./EventLink"
import SmallButtonLink from "./SmallButtonLink"
import examples from "@/lib/examples"

export default function Build() {
  return (
    <section id="build" className="w-full bg-darkgreen text-white">
      <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
      <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-12 md:py-24 lg:py-36">
        <h1 className="w-full text-center text-xl lg:text-2xl xl:text-3xl mb-2 lg:mb-4">
          What can you build with Tableland?
        </h1>
        <p className="w-full text-center text-sm lg:text-lg text-verylightgreen font-light mb-6 lg:mb-10">
          Get started with examples and templates from the community.
        </p>
        <div className="mb-6 lg:mb-10">
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
                        <EventLink
                          href={"https://github.com/" + e.username}
                          target="blank"
                          event={e.username}
                          params={{ location: "examples" }}
                        >
                          <Image
                            src={e.image}
                            alt={"Image" + i}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                        </EventLink>
                      </div>
                      <EventLink
                        href={"https://github.com/" + e.username}
                        target="blank"
                        className="text-verylightgreen no-underline hover:underline"
                        event={e.username}
                        params={{ location: "examples" }}
                      >
                        <h4 className="text-xs mt-2">{e.username}</h4>
                      </EventLink>
                    </div>
                  </div>
                  <div className="bg-darkgreen border-2 border-green rounded-b p-4">
                    <div className="hidden sm:block mb-2">
                      <EventLink
                        href={"https://github.com/" + e.repo}
                        target="_blank"
                        className="text-neonblue text-xs no-underline hover:underline"
                        event={e.title}
                        params={{ location: "examples" }}
                      >
                        {e.repo}
                      </EventLink>
                    </div>
                    <div>
                      <SmallButtonLink
                        href={"https://github.com/" + e.repo}
                        target="_blank"
                        className="btn-small bg-green text-neonblue hover:text-white"
                        event={e.title}
                        params={{ location: "examples" }}
                      >
                        View code
                      </SmallButtonLink>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="text-center">
          <ButtonLink
            href="https://github.com/tablelandnetwork"
            target="_blank"
            className="text-neonblue hover:text-white bg-darkgreen border-2 border-green"
            event="GitHub"
            params={{ location: "examples" }}
          >
            GitHub
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
