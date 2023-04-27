import { type NextRequest, NextResponse } from "next/server"

// Anonomous user identifier
export const anonUserCookieName = "id"

export async function middleware(req: NextRequest) {
  // Get or create identifier
  const value = req.cookies.get(anonUserCookieName)?.value || newId()

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

// Returns a random (not necessarily unique) id of length 21.
function newId() {
  return (
    Math.random().toString(36).substring(2) +
    Math.random().toString(36).substring(2)
  )
}
