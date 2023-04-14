import HeaderNav from "./components/HeaderNav"
import FooterNav from "./components/FooterNav"
import Showcase from "./components/Showcase"
import ButtonLink from "./components/ButtonLink"
import Terminal from "./components/Terminal"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function Home() {
  return (
    <main className={"min-h-screen " + poppins.className}>
      {/* header */}
      <HeaderNav />
      {/* <!-- hero --> */}
      <section className="w-full bg-top bg-cover bg-no-repeat bg-[url('/img/home/hero.jpg')]">
        <div className="relative container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-24 md:pt-32 lg:pt-48 pb-12 md:pb-24 lg:pb-36">
          <article className="mx-auto md:mx-[initial] prose prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose font-light text-center md:text-left">
            <h3 className="text-grey uppercase font-normal !mb-0">
              Read+write from <span className="font-bold">anywhere</span>.
            </h3>
            <h1 className="font-normal">
              The decentralized cloud{" "}
              <span className="font-bold">database</span>.
            </h1>
            <Terminal />
            <p className="lead">
              Tableland is an open source, permissionless cloud database built
              on SQLite. Read and write tamperproof data from apps, data
              pipelines, or EVM smart contracts.
            </p>
            <p>
              <ButtonLink
                href="https://docs.tableland.xyz"
                target="_blank"
                classes="bg-darkgreen"
              >
                Start your project
              </ButtonLink>
            </p>
          </article>
        </div>
      </section>
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
          <div className="flex flex-col items-center mb-6 lg:mb-10">
            {/* <Features></Features> */}
          </div>
        </div>
      </section>
      {/* <!-- community --> */}
      <section id="community" className="w-full bg-darkgreen text-white">
        <div className="w-full h-[6px] -rotate-2 bg-white opacity-[0.025]"></div>
        <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-12 md:py-24 lg:py-36">
          <h1 className="w-full text-center text-xl lg:text-2xl xl:text-3xl mb-2 lg:mb-4">
            Join the community
          </h1>
          <p className="w-full text-center text-sm lg:text-lg text-verylightgreen font-light mb-6 md:mb-10">
            Backed by a network of early visionaries and developers.
          </p>
          <div className="mb-6 lg:mb-10">{/* <Feedback></Feedback> */}</div>
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
        <div className="w-full h-[6px] -rotate-2 bg-white opacity-[0.025]"></div>
        <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-12 md:py-24 lg:py-36">
          <h1 className="w-full text-center text-xl lg:text-2xl xl:text-3xl mb-2 lg:mb-4">
            What can you build with Tableland?
          </h1>
          <p className="w-full text-center text-sm lg:text-lg text-verylightgreen font-light mb-6 md:mb-10">
            Get started with examples and templates from the community.
          </p>
          <div className="flex flex-col items-center mb-6 lg:mb-10">
            {/* <Examples></Examples> */}
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
      {/* footer */}
      <FooterNav />
    </main>
  )
}
