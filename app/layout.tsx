import "./globals.css"
import { type ReactNode } from "react"
import type { Metadata } from "next"
import { Poppins, Orbitron } from "next/font/google"
import HeaderNav from "./components/HeaderNav"
import FooterNav from "./components/FooterNav"
import Fathom from "./components/Fathom"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import VariantProvider from "./context/VariantProvider"
import { getContext } from "@/lib/variants"

const title = "Tableland: The decentralized cloud database"
const description =
  "Tableland is an open source, permissionless cloud database built on SQLite. Read and write tamperproof data from apps, data pipelines, or EVM smart contracts."

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://tableland.xyz"),
  keywords: ["database", "data", "sql", "decentralized", "web3", "tamperproof"],
  category: "technology",
  themeColor: "#101e1e",
  openGraph: {
    title,
    description,
    url: "https://tableland.xyz",
    siteName: title,
    images: [
      {
        url: "https://tableland.xyz/img/og/home.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-orbitron",
})

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const variantCtx = await getContext()

  return (
    <html lang="en">
      <body
        className={`min-h-screen ${poppins.variable} ${orbitron.variable} font-sans`}
      >
        <VariantProvider ctx={variantCtx}>
          <HeaderNav />
          {children}
          <FooterNav />
        </VariantProvider>
        <Fathom />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
