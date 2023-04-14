import Showcase from "./Showcase"
import ButtonLink from "./ButtonLink"
import Features from "./Features"
import Tweets from "./Tweets"
import Examples from "./Examples"
import { type ReactNode } from "react"

type Props = {
  children: ReactNode
}

export default function Home({ children }: Props) {
  return (
    <main>
      {/* <!-- hero --> */}
      {children}
      {/* <!-- features --> */}
      <section
        id="features"
        className="w-full bg-darkgreen text-white border-t-1 border-color-green"
      >
        <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
        <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-12 md:py-24 lg:py-36">
          <h1 className="w-full text-lg lg:text-xl xl:text-2xl mb-6 lg:mb-10">
            Build on decentralized data without the headache.
          </h1>
          <Features></Features>
        </div>
      </section>
      {/* <!-- community --> */}
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
            <Tweets></Tweets>
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
      {/* <!-- build --> */}
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
            <Examples></Examples>
          </div>
          <div className="text-center">
            <ButtonLink
              href="https://github.com/tablelandnetwork"
              target="_blank"
              classes="text-neonblue hover:text-white bg-darkgreen border-2 border-green"
            >
              GitHub
            </ButtonLink>
          </div>
        </div>
      </section>
      {/* showcase */}
      <Showcase
        href="https://docs.tableland.xyz"
        classes="bg-green border-lightgreen"
      >
        Documentation
      </Showcase>
    </main>
  )
}
