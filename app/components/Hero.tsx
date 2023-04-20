import ButtonLink from "./ButtonLink"
import Terminal from "./Terminal"
import { getUserId } from "@/lib/users"
import { getStringFlag } from "@/lib/configcat"
import { hero } from "@/lib/content"

export default async function Hero() {
  const userId = getUserId()

  // Get main prerequisite flag
  const main = await getStringFlag(hero.flags["main"], userId)

  // Get section flags based entirely off the main flag
  // Note: We will later drive individual sections by their own flags, possibly holding others constant.
  const content = main === "A" ? hero.a : main === "B" ? hero.b : hero.c

  // Collect section variants for reporting
  // Note: These will currently all match, ie, all be of flavor A/B/C, but we still need to have them
  // broken out for comparison with other tests later on.
  const variantIds = hero.flags.sections.map((v) => {
    return v + main
  })

  return (
    <div className="bg-lightpurple">
      <section className="w-full bg-top bg-cover bg-no-repeat bg-[url('/img/home/hero.jpg')]">
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
                href="https://docs.tableland.xyz"
                target="_blank"
                event={"Hero CTA Clicked"}
                params={{ location: "home-hero" }}
                userId={userId}
                variantIds={variantIds}
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
