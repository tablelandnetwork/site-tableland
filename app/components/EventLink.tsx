"use client"

import Link from "next/link"
import { type ReactNode, useEffect, useContext } from "react"
import { type Event } from "@/lib/types"
import va from "@vercel/analytics"
import { VariantContext } from "../context/VariantProvider"

type Props = {
  children: ReactNode
  href: string
  target?: string
  event?: string
  params?: Record<string, string | number | boolean | null>
  logView?: boolean
  className?: string
  onClick?: () => void
}

async function logEvent(event: Event): Promise<void> {
  // Log vercel
  event.params = event.params || {}
  if (event.variantIds) {
    event.variantIds.forEach((id) => {
      event.params![id.substring(0, id.length - 1)] = id.slice(-1)
    })
  }
  va.track(
    event.name,
    Object.keys(event.params).length > 0 ? event.params : undefined
  )

  // Log amplitude
  if (event.userId && event.variantIds) {
    fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    })
  }
}

export default function EventLink({
  children,
  href,
  target,
  event,
  params,
  logView,
  className,
  onClick,
}: Props) {
  const variantCtx = useContext(VariantContext)

  useEffect(() => {
    async function log() {
      await logEvent({
        name: event + " Viewed",
        params,
        userId: variantCtx.userId,
        variantIds: variantCtx.ids,
      })
    }
    if (event && logView) {
      // The timeout puts this in the back of the event queue, giving vercel analytics time to load.
      setTimeout(() => {
        log()
      }, 0)
    }
  }, [variantCtx, event, params, logView])

  const handleClick = async () => {
    if (onClick) {
      onClick()
    }
    if (event) {
      await logEvent({
        name: event + " Clicked",
        params,
        userId: variantCtx.userId,
        variantIds: variantCtx.ids,
      })
    }
  }

  target = target ? target : "_self"
  const tag = href.startsWith("http") ? (
    <a href={href} target={target} className={className} onClick={handleClick}>
      {children}
    </a>
  ) : (
    <Link
      href={href}
      target={target}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Link>
  )

  return tag
}
