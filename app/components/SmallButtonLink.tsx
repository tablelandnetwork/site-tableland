import Link from "next/link"
import { type ReactNode } from "react"
import { FaLongArrowAltRight } from "react-icons/fa"

type Props = {
  children: ReactNode
  href: string
  target?: string
  classes?: string
}

export default function SmallButtonLink({
  children,
  href,
  target,
  classes,
}: Props) {
  return (
    <Link
      href={href}
      target={target ? target : "_self"}
      className={`btn-small bg-black text-white${classes ? " " + classes : ""}`}
    >
      <span className="flex items-center">
        {children}
        <FaLongArrowAltRight className="hidden sm:inline-block ml-2" />
      </span>
    </Link>
  )
}
