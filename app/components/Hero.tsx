import ButtonLink from "./ButtonLink"
import Terminal from "./Terminal"

export default function Hero() {
  return (
    <div className="bg-lightpurple">
      <section className="w-full bg-top bg-cover bg-no-repeat bg-lightpurple md:bg-[url('/img/home/hero.jpg')]">
        <div className="relative container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-24 md:pt-32 lg:pt-48 pb-12 md:pb-24 lg:pb-36">
          <article className="mx-auto md:mx-[initial] prose prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose font-light text-center md:text-left">
            <h3 className="text-grey uppercase font-normal !mb-0">
              Read+write from <span className="font-bold">anywhere</span>
            </h3>
            <h1 className="font-normal">
              The <span className="font-bold">decentralized</span> cloud
              database.
            </h1>
            <Terminal />
            <p className="lead">
              Tableland is an open source, permissionless cloud database built
              on SQLite. Read and write tamperproof data from apps, data
              pipelines, or EVM smart contracts.
            </p>
            <p>
              <ButtonLink
                href="https://studio.tableland.xyz"
                target="_blank"
                event="Hero CTA"
                params={{ location: "home-hero" }}
                logView={true}
                className="bg-darkgreen"
              >
                Enter Studio
              </ButtonLink>
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
