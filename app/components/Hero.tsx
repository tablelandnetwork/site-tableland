import ButtonLink from "./ButtonLink"
import Terminal from "./Terminal"
import { getUserId } from "@/lib/users"
import { getFlag } from "@/lib/configcat"
import { hero } from "@/lib/content"

export default async function Hero() {
  const userId = getUserId()
  const [tagB, tagVariant] = await getFlag(hero.flags["tag"], userId)
  const [titleB, titleVariant] = await getFlag(hero.flags["title"], userId)
  const [leadB, leadVariant] = await getFlag(hero.flags["lead"], userId)
  const [ctaB, ctaVariant] = await getFlag(hero.flags["cta"], userId)

  return (
    <section className="w-full bg-top bg-cover bg-no-repeat bg-[url('/img/home/hero.jpg')]">
      <div className="relative container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-24 md:pt-32 lg:pt-48 pb-12 md:pb-24 lg:pb-36">
        <article className="mx-auto md:mx-[initial] prose prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose font-light text-center md:text-left">
          <h3 className="text-grey uppercase font-normal !mb-0">
            <span
              dangerouslySetInnerHTML={{
                __html: tagB ? hero.b.tag : hero.a.tag,
              }}
            />
          </h3>
          <h1 className="font-normal">
            <span
              dangerouslySetInnerHTML={{
                __html: titleB ? hero.b.title : hero.a.title,
              }}
            />
          </h1>
          <Terminal />
          <p className="lead">
            <span
              dangerouslySetInnerHTML={{
                __html: leadB ? hero.b.lead : hero.a.lead,
              }}
            />
          </p>
          <p>
            <ButtonLink
              href="https://docs.tableland.xyz"
              target="_blank"
              event={"Hero CTA Clicked"}
              userId={userId}
              variantIds={[tagVariant, titleVariant, leadVariant, ctaVariant]}
              classes="bg-darkgreen"
            >
              {ctaB ? hero.b.cta : hero.a.cta}
            </ButtonLink>
          </p>
        </article>
      </div>
    </section>
  )
}
