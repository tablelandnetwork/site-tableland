import "./globals.css"
import { type ReactNode } from "react"
import type { Metadata } from "next"
import { Poppins, Orbitron } from "next/font/google"
import HeaderNav from "./components/HeaderNav"
import FooterNav from "./components/FooterNav"

export const metadata: Metadata = {
  title: "Tableland: The decentralized cloud database",
  description:
    "Tableland is an open source, permissionless cloud database built on SQLite. Read and write tamperproof data from apps, data pipelines, or EVM smart contracts.",
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen ${poppins.variable} ${orbitron.variable} font-sans`}
      >
        <HeaderNav />
        {children}
        <FooterNav />
      </body>
    </html>
  )
}
