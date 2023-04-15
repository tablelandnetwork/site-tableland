import { type IconType } from "react-icons"

export type Flags = {
  [x: string]: string
}

export type AB<T> = {
  flags: Flags
  a: T
  b: T
}

export type Hero = {
  tag: string
  title: string
  lead: string
  cta: string
}

export type Features = {
  title: string
  items: Feature[]
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
