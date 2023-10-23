import Hero from "./components/Hero"
import Features from "./components/Features"
import Community from "./components/Community"
import Build from "./components/Build"
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
      <Gutter
        href="https://studio.tableland.xyz"
        className="bg-green border-lightgreen"
        event="Enter Studio"
        params={{ location: "home-gutter" }}
      >
        Enter Studio
      </Gutter>
    </main>
  )
}
