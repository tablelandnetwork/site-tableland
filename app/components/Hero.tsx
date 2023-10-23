import ButtonLink from "./ButtonLink"
import Terminal from "./Terminal"
import { getHero } from "@/lib/variants"
import { getUserId } from "@/lib/users"
import { type Hero } from "@/lib/types"

export default async function Hero() {
  const content = await getHero(getUserId())

  return (
    <div className="bg-lightpurple">
      <section className="w-full bg-top bg-cover bg-no-repeat bg-lightpurple md:bg-[url('/img/home/hero.jpg')]">
        <div className="relative container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-24 md:pt-32 lg:pt-48 pb-12 md:pb-24 lg:pb-36">
          <article className="mx-auto md:mx-[initial] prose prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose font-light text-center md:text-left">
            <h3 className="text-grey uppercase font-normal !mb-0">
              <span
                dangerouslySetInnerHTML={{
                  __html: content.tag,
                }}
              />
            </h3>
            <h1 className="font-normal">
              <span
                dangerouslySetInnerHTML={{
                  __html: content.title,
                }}
              />
            </h1>
            <Terminal />
            <p className="lead">
              <span
                dangerouslySetInnerHTML={{
                  __html: content.lead,
                }}
              />
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
                {content.cta}
              </ButtonLink>
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
