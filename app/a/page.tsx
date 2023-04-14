import Home from "../components/Home"
import Hero from "../components/Hero"
import ButtonLink from "../components/ButtonLink"

export default function HomePageA() {
  return (
    <Home>
      <Hero>
        <>
          Read+write from <span className="font-bold">anywhere</span>
        </>
        <>
          SQL infrastructure for the <span className="font-bold">decentralized</span> internet
        </>
        <>
          Tableland is an open source, permissionless cloud database built on
          SQLite. Read and write tamperproof data from apps, data pipelines, or
          EVM smart contracts.
        </>
        <>
          <ButtonLink
            href="https://docs.tableland.xyz"
            target="_blank"
            classes="bg-darkgreen"
          >
            Start your project
          </ButtonLink>
        </>
      </Hero>
    </Home>
  )
}
