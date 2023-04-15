import ButtonLink from "./ButtonLink"
import { type ReactNode } from "react"

type Props = {
  children: ReactNode
  href: string
  classes?: string
}

export default function Showcase({ children, href, classes }: Props) {
  return (
    <section
      className={`text-neongreen border-b${classes ? " " + classes : ""}`}
    >
      <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
      <div className="py-12 md:py-32">
        <div className="text-center">
          <ButtonLink
            href={href}
            target="_blank"
            classes="text-white bg-lightgreen"
          >
            {children}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
