"use client"

import Link from "next/link"
import { type ReactNode, useEffect } from "react"
import va from "@vercel/analytics"

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

async function logEvent(
  name: string,
  params?: Record<string, string | number | boolean | null>
): Promise<void> {
  va.track(name, params && Object.keys(params).length > 0 ? params : undefined)
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
  useEffect(() => {
    if (event && logView) {
      setTimeout(() => {
        logEvent(event + " Viewed", params)
      }, 0)
    }
  }, [event, params, logView])

  const handleClick = async () => {
    if (onClick) {
      onClick()
    }
    if (event) {
      await logEvent(event + " Clicked", params)
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
