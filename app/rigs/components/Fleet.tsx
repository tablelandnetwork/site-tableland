import Image from "next/image"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
})

type Props = {
  name: string
  description: string
  styles: number
  originals: number
  delay: number
  rigs: string[]
}

export default function Showcase({
  name,
  description,
  styles,
  originals,
  delay,
  rigs,
}: Props) {
  return (
    <section id={name.toLowerCase()} className="w-full bg-lightpurple">
      <div className="w-full h-[18px] bg-black"></div>
      <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-12 md:pt-24 lg:pt-36 mb-3 md:mb-4 lg:mb-6 xl:mb-8">
        <article className="mx-auto prose prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose font-light">
          <h1 className={orbitron.className}>{name}</h1>
        </article>
      </div>
      <div className="overflow-hidden h-48 md:h-56 lg:h-64 xl:h-80 2xl:h-96 mb-3 md:mb-4 lg:mb-6 xl:mb-8">
        <div
          className="flex w-auto h-full animate-scroll"
          style={{ animationDelay: delay + "s" }}
        >
          {rigs.map(function (p, i) {
            return (
              <div key={i} className="relative h-full aspect-square">
                <Image
                  src={p}
                  alt={name + " " + i}
                  fill
                  className="animate-blur"
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pb-12 md:pb-24 lg:pb-36">
        <article className="mx-auto prose prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose font-light">
          <p>{description}</p>
          <div className="flex">
            <div className="w-1/2">
              <h3 className="uppercase">Num. Originals</h3>
              <h2 className={orbitron.className}>{styles}</h2>
            </div>
            <div className="w-1/2">
              <h3 className="uppercase">Color Variants</h3>
              <h2 className={orbitron.className}>{originals}</h2>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
