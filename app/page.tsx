import HeaderNav from "./components/HeaderNav"
import FooterNav from "./components/FooterNav"
import Showcase from "./components/Showcase"
import ButtonLink from "./components/ButtonLink"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"] })

export default function Home() {
  return (
    <main className={"min-h-screen " + poppins.className}>
      {/* header */}
      <HeaderNav />
      <div className="home-page">
        {/* <!-- hero --> */}
        <section className="page-hero">
          <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20">
            <div className="flex items-center pt-36 md:pt-48 pb-4 sm:pb-24">
              <div className="xl:w-2/3">
                <h2 className="text-lg md:text-xl xl:text-2xl text-grey uppercase text-center md:text-left">
                  Read+write from <span className="font-bold">anywhere</span>.
                </h2>
                <h1 className="text-2xl md:text-3xl xl:text-4xl text-center md:text-left mb-4 md:mb-6 xl:mb-8">
                  The decentralized cloud{" "}
                  <span className="font-bold">database</span>.
                </h1>
                {/* <playground className="mb-4 md:mb-6 xl:mb-8"></playground> */}
                <p className="text-xl md:text-xl text-center md:text-left font-light mb-6 md:mb-10">
                  Tableland is an open source, permissionless cloud database
                  built on SQLite. Read and write tamperproof data from apps,
                  data pipelines, or EVM smart contracts.
                </p>
                <div className="md:inline-block text-center md:text-left">
                  <ButtonLink
                    href="https://docs.tableland.xyz"
                    target="_blank"
                    classes="bg-darkgreen"
                  >
                    Start your project
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="story">
          <div className="white-line"></div>
          {/* <!-- features --> */}
          <section id="features">
            <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-32">
              <div>
                <h1 className="text-white w-full h-auto text-lg lg:text-xl xl:text-2xl mb-10 lg:mb-18">
                  Build on decentralized data without the headache.
                </h1>
                <div className="flex flex-col items-center mb-10 lg:mb-18">
                  {/* <Features></Features> */}
                </div>
              </div>
            </div>
          </section>
          <div className="white-line-thin"></div>
          {/* <!-- community --> */}
          <section id="community">
            <div className="mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-32">
              <div>
                <h1 className="text-white w-full h-auto text-center text-xl lg:text-2xl xl:text-3xl mb-2 lg:mb-4">
                  Join the community
                </h1>
                <p className="text-verylightgreen w-full h-auto text-center text-sm lg:text-lg font-light mb-6 md:mb-10">
                  Backed by a network of early visionaries and developers.
                </p>
                <div className="mb-10 lg:mb-18">
                  {/* <Feedback></Feedback> */}
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
            </div>
          </section>
          <div className="white-line-thin"></div>
          {/* <!-- build --> */}
          <section id="build">
            <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-32 lg:pb-48">
              <div>
                <h1 className="text-white w-full h-auto text-center text-xl lg:text-2xl xl:text-3xl mb-2 lg:mb-4">
                  What can you build with Tableland?
                </h1>
                <p className="text-verylightgreen w-full h-auto text-center text-sm lg:text-lg font-light mb-6 md:mb-10">
                  Get started with examples and templates from the community.
                </p>
                <div className="flex flex-col items-center mb-10 lg:mb-18">
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
            </div>
          </section>
        </div>
      </div>
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
