import EventLink from "./EventLink"
import { getUserId } from "@/lib/users"
import { getFlag } from "@/lib/configcat"
import { features } from "@/lib/content"

export default async function Features() {
  const userId = getUserId()
  const [titleB, titleVariant] = await getFlag(features.flags["title"], userId)
  const [itemsB, itemsVariant] = await getFlag(features.flags["items"], userId)

  const showItems = itemsB ? features.b.items : features.a.items
  return (
    <section
      id="features"
      className="w-full bg-darkgreen text-white border-t-1 border-color-green"
    >
      <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
      <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-12 md:py-24 lg:py-36">
        <h1 className="w-full text-xl lg:text-2xl mb-6 lg:mb-10">
          {titleB ? features.b.title : features.a.title}
        </h1>
        <div className="w-full grid gap-4 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {showItems.map(function (f, i) {
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
                    variantIds={[titleVariant, itemsVariant]}
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
