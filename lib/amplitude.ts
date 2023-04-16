import * as amplitude from "@amplitude/analytics-browser"

let inited: boolean

export function init(userId: string): void {
  if (inited) {
    return
  }
  amplitude.init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY!, userId, {
    defaultTracking: {
      pageViews: true,
      sessions: true,
    },
    attribution: { disabled: true },
    disableCookies: true,
  })
  inited = true
}

export function track(action: string, event: any) {
  amplitude.track(action, event)
}
