import EventLink from "./EventLink"
import { type ReactNode } from "react"
import { FaLongArrowAltRight } from "react-icons/fa"

type Props = {
  children: ReactNode
  href: string
  target?: string
  event?: string
  userId?: string
  variantIds?: string[]
  classes?: string
}

export default function ButtonLink({
  children,
  href,
  target,
  event,
  userId,
  variantIds,
  classes,
}: Props) {
  return (
    <EventLink
      href={href}
      target={target ? target : ""}
      event={event}
      userId={userId}
      variantIds={variantIds}
      classes={`btn bg-black text-white${classes ? " " + classes : ""}`}
    >
      <span className="flex items-center">
        {children}
        <FaLongArrowAltRight className="hidden sm:inline-block ml-3" />
      </span>
    </EventLink>
  )
}
