import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tableland.xyz",
      lastModified: new Date(),
    },
    {
      url: "https://tableland.xyz/pilot-program",
      lastModified: new Date(),
    },
    {
      url: "https://tableland.xyz/rigs",
      lastModified: new Date(),
    },
    {
      url: "https://tableland.xyz/rigs/samples",
      lastModified: new Date(),
    },
  ]
}
