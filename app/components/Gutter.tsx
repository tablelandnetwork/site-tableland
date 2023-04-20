import ButtonLink from "./ButtonLink"
import { type ReactNode } from "react"

type Props = {
  children: ReactNode
  href: string
  event?: string
  params?: Record<string, string | number | boolean | null>
  className?: string
}

export default function Gutter({
  children,
  href,
  event,
  params,
  className,
}: Props) {
  return (
    <section
      className={`text-neongreen border-b${className ? " " + className : ""}`}
    >
      <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
      <div className="py-12 md:py-32">
        <div className="text-center">
          <ButtonLink
            href={href}
            target={href.startsWith("http") ? "_blank" : "_self"}
            className="text-white bg-lightgreen"
            event={event}
            params={params}
          >
            {children}
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
