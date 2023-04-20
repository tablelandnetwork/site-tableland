import Hero from "./components/Hero"
import Features from "./components/Features"
import Community from "./components/Community"
import Build from "./components/Build"
import Studio from "./components/Studio"
import Gutter from "./components/Gutter"

export default function HomePage() {
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <Features />
      <Community />
      <Build />
      <Studio />
      <Gutter
        href="https://docs.tableland.xyz"
        className="bg-green border-lightgreen"
        event="Docs Clicked"
        params={{ location: "home-gutter" }}
      >
        Documentation
      </Gutter>
    </main>
  )
}
