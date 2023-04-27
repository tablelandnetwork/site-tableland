import { type IconType } from "react-icons"

export type VariantCtx = {
  userId?: string
  ids?: string[]
}

export type Event = {
  name: string
  params?: Record<string, string | number | boolean | null>
  userId?: string
  variantIds?: string[]
}

export type Flags = {
  main: string
  sections: string[]
}

export type AB<T> = {
  flags: Flags
  a: T
  b: T
}

export type ABC<T> = {
  flags: Flags
  a: T
  b: T
  c: T
}

export type Hero = {
  tag: string
  title: string
  lead: string
  cta: string
}

export type Features = {
  title: string
}

export type Feature = {
  title: string
  icon: IconType
  description: string
  link: string
}

export type Tweet = {
  username: string
  image: string
  body: string
  url: string
}

export type Example = {
  username: string
  image: string
  title: string
  description: string
  repo: string
}
