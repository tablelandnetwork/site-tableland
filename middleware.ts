import { type NextRequest, NextResponse } from "next/server"
import { v4 as uuidv4 } from "uuid"

// Anonomous user identifier
const cookie = "id"

export const config = {
  // Pages to match
  matcher: ["/"],
}

export async function middleware(req: NextRequest) {
  // Get or create identifier
  const value = req.cookies.get(cookie)?.value || uuidv4()

  // Add the cookie to the response if it's not present
  const res = NextResponse.next()
  if (!req.cookies.has(cookie)) {
    res.cookies.set(cookie, value)
  }
  return res
}
