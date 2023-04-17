"use client"

import { load, trackPageview } from "fathom-client"
import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function TrackPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    load(process.env.NEXT_PUBLIC_FATHOM_ID!, {
      includedDomains: ["tableland.xyz", "site-tableland.vercel.app"],
    })
  }, [])

  // Record a pageview when route changes
  useEffect(() => {
    trackPageview()
  }, [pathname, searchParams])

  return null
}

export default function Fathom() {
  return (
    <Suspense fallback={null}>
      <TrackPageView />
    </Suspense>
  )
}