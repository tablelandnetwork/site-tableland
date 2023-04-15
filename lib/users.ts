import { cookies, headers } from "next/headers"
import { anonUserCookieName } from "@/middleware"

// Returns an anonomous user identifier from a cookie or the `set-cookie` header that is initially set via middleware.
export function getUserId(): string | undefined {
  const cookieStore = cookies()

  // Try to get from cookie store
  let id = cookieStore.get(anonUserCookieName)?.value
  if (id) {
    return id
  }

  // Try to get from `set-cookie` header
  const header = headers().get("set-cookie")
  if (header) {
    // Note: This pattern can be improved after https://github.com/vercel/next.js/issues/47189 is resolved.
    const match = header.match(/^id=([a-f0-9,-]*);/i)
    return match ? match[1] : undefined
  }
}
