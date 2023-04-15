import ButtonLink from "./ButtonLink"
import Terminal from "./Terminal"
import { cookies } from "next/headers"
import { getFlag } from "@/lib/configcat"
import { hero } from "@/lib/content"

export default async function Hero() {
  const cookieStore = cookies()
  const id = cookieStore.get("id")

  const tag = await getFlag(hero.flags["tag"], id?.value)
  const title = await getFlag(hero.flags["title"], id?.value)
  const lead = await getFlag(hero.flags["lead"], id?.value)
  const cta = await getFlag(hero.flags["cta"], id?.value)

  return (
    <section className="w-full bg-top bg-cover bg-no-repeat bg-[url('/img/home/hero.jpg')]">
      <div className="relative container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-24 md:pt-32 lg:pt-48 pb-12 md:pb-24 lg:pb-36">
        <article className="mx-auto md:mx-[initial] prose prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose font-light text-center md:text-left">
          <h3 className="text-grey uppercase font-normal !mb-0">
            <span
              dangerouslySetInnerHTML={{
                __html: tag.value ? hero.b.tag : hero.a.tag,
              }}
            />
          </h3>
          <h1 className="font-normal">
            <span
              dangerouslySetInnerHTML={{
                __html: title.value ? hero.b.title : hero.a.title,
              }}
            />
          </h1>
          <Terminal />
          <p className="lead">
            <span
              dangerouslySetInnerHTML={{
                __html: lead.value ? hero.b.lead : hero.a.lead,
              }}
            />
          </p>
          <p>
            <ButtonLink
              href="https://docs.tableland.xyz"
              target="_blank"
              variantIds={[
                tag.variationId?.toString(),
                title.variationId?.toString(),
                lead.variationId?.toString(),
                cta.variationId?.toString(),
              ]}
              classes="bg-darkgreen"
            >
              {cta.value ? hero.b.cta : hero.a.cta}
            </ButtonLink>
          </p>
        </article>
      </div>
    </section>
  )
}
