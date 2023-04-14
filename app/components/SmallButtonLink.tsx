import Link from "next/link"
import { type ReactNode } from "react"
import { FaLongArrowAltRight } from "react-icons/fa"

type Props = {
  href: string
  target?: string
  classes?: string
  children: ReactNode
}

export default function SmallButtonLink({
  href,
  target,
  classes,
  children,
}: Props) {
  return (
    <Link
      href={href}
      target={target ? target : ""}
      className={"btn-small bg-black text-white " + classes}
    >
      <span className="flex items-center">
        {children}
        <FaLongArrowAltRight className="hidden sm:inline-block ml-2" />
      </span>
    </Link>
  )
}
