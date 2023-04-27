import { getStringFlag, getBoolFlag } from "@/lib/configcat"
import { hero, features } from "@/lib/content"
import {
  type VariantCtx,
  type AB,
  type ABC,
  type Features,
  type Hero,
} from "@/lib/types"
import { getUserId } from "@/lib/users"

export async function getContext(): Promise<VariantCtx> {
  const userId = getUserId()

  const [hero, features] = await Promise.all([
    getHeroFlags(userId),
    getFeaturesFlags(userId),
  ])

  return {
    userId,
    ids: new Array<string>().concat(hero, features),
  }
}

export async function getHeroFlags(userId?: string): Promise<string[]> {
  // Get main prerequisite flag
  const main = await getStringFlag(hero.flags["main"], userId)

  // Collect section variants for reporting
  // Note: These will currently all match, ie, all be of flavor A/B/C, but we still need to have them
  // broken out for comparison with other tests later on.
  return hero.flags.sections.map((v) => {
    return v + main
  })
}

export async function getHero(userId?: string): Promise<Hero> {
  const ids = await getHeroFlags(userId)
  return getContent("hero", hero, ids)
}

export async function getFeaturesFlags(userId?: string): Promise<string[]> {
  // Get main prerequisite flag
  const main = await getBoolFlag(features.flags["main"], userId)

  // Collect section variants for reporting
  // Note: These will currently all match, ie, all be of flavor A/B, but we still need to have them
  // broken out for comparison with other tests later on.
  return features.flags.sections.map((v) => {
    return v + main
  })
}

export async function getFeatures(userId?: string): Promise<Features> {
  const ids = await getFeaturesFlags(userId)
  return getContent("features", features, ids)
}

function getContent<T>(
  flagPrefix: string,
  test: AB<T> | ABC<T>,
  variantIds: string[]
): T {
  const content: any = {}
  variantIds.forEach((id) => {
    let section = id.replace(flagPrefix, "").toLowerCase()
    section = section.substring(0, section.length - 1)
    content[section] = (test as any)[id.slice(-1).toLowerCase()][section]
  })
  return content
}
