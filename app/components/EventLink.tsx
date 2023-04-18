"use client"

import Link from "next/link"
import { type ReactNode, useEffect } from "react"
import { Event } from "@/lib/types"

type Props = {
  children: ReactNode
  href: string
  target?: string
  event?: string
  userId?: string
  variantIds?: string[]
  classes?: string
}

async function logEvent(event: Event): Promise<Response> {
  return fetch("/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  })
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
  const handleClick = async () => {
    if (event && userId && variantIds) {
      await logEvent({
        name: event,
        userId: userId,
        params: { variantIds: variantIds },
      })
    }
  }

  return (
    <Link
      href={href}
      target={target ? target : "_self"}
      className={classes}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}
