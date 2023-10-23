import Image from "next/image"
import Gutter from "./components/Gutter"
import getRigs from "@/lib/rigs"

export default function NotFound() {
  const rig = getRigs(1)

  return (
    <main>
      <section className="w-full bg-lightpurple">
        <div className="relative container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-24 md:pt-32 lg:pt-48 pb-12 md:pb-24 lg:pb-36">
          <article className="mx-auto prose prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose font-light text-center">
            <h1 className="font-title">404: You&apos;re lost</h1>
            <p className="lead">But you found a Rig!</p>
            <div className="relative !mx-auto w-full sm:w-2/3 aspect-square">
              <Image
                src={rig[0]}
                alt={"Rig"}
                priority={true}
                fill
                className="animate-blur rounded-lg"
              />
            </div>
          </article>
        </div>
      </section>
      <Gutter
        href="/"
        className="bg-green border-lightgreen"
        event="Go Home"
        params={{ location: "not-found" }}
      >
        Go Home
      </Gutter>
    </main>
  )
}
