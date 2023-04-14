import Terminal from "./Terminal"
import { type ReactNode, Children } from "react"

type Props = {
  children: ReactNode
}

export default function Hero({ children }: Props) {
  const c = Children.toArray(children)
  if (!c || c.length !== 4) {
    return <></>
  }
  return (
    <section className="w-full bg-top bg-cover bg-no-repeat bg-[url('/img/home/hero.jpg')]">
      <div className="relative container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-24 md:pt-32 lg:pt-48 pb-12 md:pb-24 lg:pb-36">
        <article className="mx-auto md:mx-[initial] prose prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose font-light text-center md:text-left">
          <h3 className="text-grey uppercase font-normal !mb-0">{c[0]}</h3>
          <h1 className="font-normal">{c[1]}</h1>
          <Terminal />
          <p className="lead">{c[2]}</p>
          <p>{c[3]}</p>
        </article>
      </div>
    </section>
  )
}
