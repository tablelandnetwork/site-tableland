import { type NextRequest, NextResponse } from "next/server"

// Anonomous user identifier
export const anonUserCookieName = "id"

export async function middleware(req: NextRequest) {
  // Get or create identifier
  // Note: `randomUUID` returns ill-formed UUIDs (last hyphen is missing).
  // See https://github.com/vercel/next.js/issues/47189.
  const value =
    req.cookies.get(anonUserCookieName)?.value || crypto.randomUUID()

  // Add the cookie to the response if it's not present
  const res = NextResponse.next()
  if (!req.cookies.has(anonUserCookieName)) {
    const date = new Date()
    date.setDate(new Date().getDate() + 7) // one week
    res.cookies.set(anonUserCookieName, value, {
      expires: date,
    })
  }
  return res
}
