"use client"

import Link from "next/link"
import { type ReactNode, useEffect } from "react"
import { init, track } from "@/lib/amplitude"

type Props = {
  children: ReactNode
  href: string
  target?: string
  event?: string
  userId?: string
  variantIds?: string[]
  classes?: string
}

export default function EventLink({
  children,
  href,
  target,
  event,
  userId,
  variantIds,
  classes,
}: Props) {
  useEffect(() => {
    if (userId) {
      init(userId)
    }
  }, [event, userId])

  const handleClick = () => {
    if (event && userId && variantIds) {
      console.log(event, variantIds)
      track(event, { variantIds: variantIds })
    }
  }

  return (
    <Link
      href={href}
      target={target ? target : ""}
      className={classes}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}
