import EventLink from "./EventLink"
import { getUserId } from "@/lib/users"
import { getBoolFlag } from "@/lib/configcat"
import { features } from "@/lib/content"
import items from "@/lib/features"

export default async function Features() {
  const userId = getUserId()

  // Get main prerequisite flag
  const main = await getBoolFlag(features.flags["main"], userId)

  // Get section flags based entirely off the main flag
  // Note: We will later drive individual sections by their own flags, possibly holding others constant.
  const content = main === "A" ? features.a : features.b

  // Collect section variants for reporting
  // Note: These will currently all match, ie, all be of flavor A/B/C, but we still need to have them
  // broken out for comparison with other tests later on.
  const variantIds = features.flags.sections.map((v) => {
    return v + main
  })

  return (
    <section
      id="features"
      className="w-full bg-darkgreen text-white border-t-1 border-color-green"
    >
      <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
      <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-12 md:py-24 lg:py-36">
        <h1 className="w-full text-xl lg:text-2xl mb-6 lg:mb-10">
          {content.title}
        </h1>
        <div className="w-full grid gap-4 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {items.map(function (f, i) {
            return (
              <div key={i} className="rounded-lg mt-6">
                <div className="flex items-center mb-4">
                  <span className="inline-block bg-white text-center rounded-full mr-4">
                    <f.icon className="text-black text-3xl px-[0.25em]"></f.icon>
                  </span>
                  <h2 className="text-lg">{f.title}</h2>
                </div>
                <p className="text-sm text-white font-light mb-6">
                  {f.description}
                </p>
                <p className="text-xs text-white font-light">
                  <EventLink
                    href={f.link}
                    target="_blank"
                    event={`Features Click ${f.title}`}
                    userId={userId}
                    variantIds={variantIds}
                  >
                    Learn more
                  </EventLink>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
