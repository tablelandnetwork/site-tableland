import { type ReactNode } from "react"
import { FaLongArrowAltRight } from "react-icons/fa"
import EventLink from "./EventLink"

type Props = {
  children: ReactNode
  href: string
  target?: string
  event?: string
  params?: Record<string, string | number | boolean | null>
  userId?: string
  variantIds?: string[]
  className?: string
}

export default function SmallButtonLink({
  children,
  href,
  target,
  event,
  params,
  userId,
  variantIds,
  className,
}: Props) {
  return (
    <EventLink
      href={href}
      target={target ? target : "_self"}
      event={event}
      params={params}
      userId={userId}
      variantIds={variantIds}
      className={`btn-small bg-black text-white${
        className ? " " + className : ""
      }`}
    >
      <span className="flex items-center">
        {children}
        <FaLongArrowAltRight className="hidden sm:inline-block ml-2" />
      </span>
    </EventLink>
  )
}
