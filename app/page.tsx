import Hero from "./components/Hero"
import Features from "./components/Features"
import Community from "./components/Community"
import Build from "./components/Build"
import Showcase from "./components/Showcase"

export default function HomePage() {
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <Features />
      <Community />
      <Build />
      <Showcase
        href="https://docs.tableland.xyz"
        classes="bg-green border-lightgreen"
      >
        Documentation
      </Showcase>
    </main>
  )
}
