"use client"

import Link from "next/link"
import { type ReactNode } from "react"
import { FaLongArrowAltRight } from "react-icons/fa"
// import { init, track } from "@amplitude/analytics-browser"
// init("639677293b1321dd6bf3c934424f6b5c")
// track("hero-cta-click", {variant: "baseline"})

type Props = {
  children: ReactNode
  href: string
  target?: string
  variantIds?: (string | undefined)[]
  classes?: string
}

export default function ButtonLink({
  children,
  href,
  target,
  variantIds,
  classes,
}: Props) {
  const handleClick = () => {
    console.log(variantIds)
    // send click event to amplitude
    // amplitude.getInstance().logEvent('Buy Now Clicked');
  }

  return (
    <Link
      href={href}
      target={target ? target : ""}
      className={`btn bg-black text-white${classes ? " " + classes : ""}`}
      onClick={handleClick}
    >
      <span className="flex items-center">
        {children}
        <FaLongArrowAltRight className="hidden sm:inline-block ml-3" />
      </span>
    </Link>
  )
}
