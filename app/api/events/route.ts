import { NextResponse } from "next/server"
import { Event } from "@/lib/types"
import { init, track, Types } from "@amplitude/analytics-node"

init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!, {
  logLevel: Types.LogLevel.Warn,
})

export async function POST(request: Request) {
  const event = (await request.json()) as Event
  track(event.name, event.params, {
    user_id: event.userId,
  })
  return new NextResponse()
}
