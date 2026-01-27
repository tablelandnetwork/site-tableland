import { type IconType } from "react-icons"

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
