import Showcase from "../../components/Showcase"
import ButtonLink from "../../components/ButtonLink"
import Image from "next/image"
import getRigs from "@/lib/rigs"

export const metadata = {
  title: "Tableland: Sample Rigs",
  description:
    "A 3k generative NFT built from 1,074 handcrafted works of art for the builders and creatives of cyberspace. Here are 1,000 random Rigs.",
}

export default function SampleRigs() {
  const rigs = getRigs(1000)

  return (
    <main>
      {/* <!-- hero --> */}
      <section className="w-full bg-top bg-cover bg-no-repeat bg-[url('/img/rigs/hero.jpg')]">
        <div className="relative container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-24 md:pt-32 lg:pt-48 pb-12 md:pb-24 lg:pb-36">
          <article className="mx-auto md:mx-[initial] prose !prose-invert prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose font-light text-center md:text-left">
            <h1 className="font-title">Sample Rigs</h1>
            <p className="lead">
              Each Rig is generated from 1,074 handcrafted works of art for the
              builders and creatives of cyberspace. Here are 1,000 random Rigs.
            </p>
            <p>
              <ButtonLink href="/rigs">Learn more</ButtonLink>
            </p>
          </article>
        </div>
      </section>
      {/* <!-- grid --> */}
      <section
        id="grid"
        className="w-full bg-darkgreen border-t-1 border-color-green"
      >
        <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
        <div className="mx-auto p-4">
          <div className="w-full grid gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
            {rigs.map(function (r, i) {
              return (
                <div key={i} className="relative h-full aspect-square">
                  <Image
                    src={r}
                    alt={"Rig " + i}
                    fill
                    className="rounded animate-blur"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* showcase */}
      <Showcase
        href="https://opensea.io/collection/tableland-rigs"
        classes="bg-green border-lightgreen"
      >
        View on OpenSea
      </Showcase>
    </main>
  )
}
