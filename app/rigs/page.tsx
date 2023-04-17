import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import ButtonLink from "../components/ButtonLink"
import Fleet from "./components/Fleet"
import Showcase from "../components/Showcase"
import getRigs from "@/lib/rigs"
import garage from "../../public/img/rigs/garage.jpg"
import pilots from "../../public/img/rigs/pilots.jpg"
import pioneer1 from "../../public/img/rigs/pioneer_1.jpg"
import pioneer2 from "../../public/img/rigs/pioneer_2.jpg"
import grid from "../../public/img/rigs/grid.jpg"
import assembly from "../../public/img/rigs/assembly.jpg"
import oddfellows from "../../public/img/rigs/oddfellows.jpg"
import airelight from "../../public/img/rigs/originals/airelight.jpg"
import edgeRider from "../../public/img/rigs/originals/edge_rider.jpg"
import foil from "../../public/img/rigs/originals/foil.jpg"
import hopper from "../../public/img/rigs/originals/hopper.jpg"
import sled from "../../public/img/rigs/originals/sled.jpg"
import titan from "../../public/img/rigs/originals/titan.jpg"
import tracer from "../../public/img/rigs/originals/tracer.jpg"
import tumbler from "../../public/img/rigs/originals/tumbler.jpg"

const title = "Tableland: Rigs"
const description =
  "A 3k generative NFT built from 1,074 handcrafted works of art for the builders and creatives of cyberspace."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://tableland.xyz",
    siteName: title,
    images: [
      {
        url: "https://tableland.xyz/img/og/rigs.jpg",
        width: 1200,
        height: 631,
      },
    ],
    locale: "en-US",
    type: "website",
  },
}

export default function RigsPage() {
  const rigs = getRigs(20)
  const titans = getRigs(20, "titans")
  const tumblers = getRigs(20, "tumblers")
  const sleds = getRigs(20, "sleds")
  const edgeRiders = getRigs(20, "edge_riders")
  const tracers = getRigs(20, "tracers")
  const hoppers = getRigs(20, "hoppers")
  const airelights = getRigs(20, "airelights")
  const foils = getRigs(20, "foils")

  return (
    <main>
      {/* hero */}
      <div className="bg-pink">
        <section className="w-full bg-top bg-cover bg-no-repeat bg-[url('/img/rigs/hero.jpg')]">
          <div className="absolute w-full opacity-50 bg-purple h-[156px] md:h-[188px] lg:h-[280px] xl:h-[280px]"></div>
          <div className="relative container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pt-24 md:pt-32 lg:pt-48">
            <article className="prose !prose-invert prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose text-center md:text-left">
              <h1 className="font-title">
                Meet the <span className="font-black">Rigs</span>
              </h1>
              <p></p>
            </article>
          </div>
          <div className="overflow-hidden h-48 md:h-56 lg:h-64 xl:h-80 2xl:h-96">
            <div
              className="flex w-auto h-full animate-scroll"
              style={{ transform: "translate3d(0px,0px,0px)" }}
            >
              {rigs.map(function (r, i) {
                return (
                  <div key={i} className="relative h-full aspect-square">
                    <Image
                      src={r}
                      alt={"Rig " + i}
                      priority={true}
                      fill
                      className="animate-blur"
                    />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 pb-12 md:pb-24 lg:pb-36">
            <article className="prose !prose-invert prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose font-light text-center md:text-left">
              <p></p>
              <p className="lead">
                A 3k generative NFT built from 1,074 handcrafted works of art
                for the builders and creatives of cyberspace. See{" "}
                <Link href="/rigs/samples">samples</Link>.
              </p>
              <p>
                Rigs are{" "}
                <Link
                  href="https://github.com/tablelandnetwork/rigs"
                  target="_blank"
                >
                  open source
                </Link>
                ! View on{" "}
                <Link
                  href="https://opensea.io/collection/tableland-rigs"
                  target="_blank"
                >
                  OpenSea
                </Link>{" "}
                or{" "}
                <Link
                  href="https://etherscan.io/address/0x8eaa9ae1ac89b1c8c8a8104d08c045f78aadb42d"
                  target="_blank"
                >
                  Etherscan
                </Link>
                .
              </p>
              <p>
                <ButtonLink href="https://garage.tableland.xyz" target="_blank">
                  Enter the Rig Garage
                </ButtonLink>
              </p>
            </article>
          </div>
        </section>
      </div>
      {/* garage */}
      <section
        id="garage"
        className="w-full bg-darkgreen border-t-1 border-color-green"
      >
        <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
        <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-12 md:py-24 lg:py-36">
          <article className="mx-auto prose prose-normal !prose-invert prose-sm md:prose-md lg:prose-lg max-w-prose prose-img:rounded-lg prose-pre:text-xs font-light">
            <h1 className="font-title">The Garage</h1>
            <p>
              <Image src={garage} alt="Garage" className="w-full" />
              <Link href="https://garage.tableland.xyz" target="_blank">
                The Garage
              </Link>{" "}
              includes a collection metrics dashboard, Rig profiles, collector
              profiles, and a dedicated gallery with Rig-specific trait filters.
              The app relies on publicly queryable Tableland tables, which are
              controlled by the Rigs smart contract. The tables contain data
              that can be queried as ERC721 metadata and data for pilot sessions
              (see &ldquo;Flight Time&rdquo; below).
            </p>
            <p>
              The Garage is maintained by the Tableland team, but since the
              underlying data is decentralized, anyone can use the Rig tables to
              build their own Garage app or create a new experience. The code is
              open-source and can be found on{" "}
              <Link
                href="https://github.com/tablelandnetwork/rigs/tree/main/garage"
                target="_blank"
              >
                GitHub
              </Link>
              . You can browse the Rig data table names{" "}
              <Link
                href="https://github.com/tablelandnetwork/rigs/blob/main/ethereum/deployments.ts#L34"
                target="_blank"
              >
                here
              </Link>
              .
            </p>
            <h2>Earn Flight Time (FT)</h2>
            <p>
              Flight Time (FT) is a non-transferable reputation metric for the
              Tableland ecosystem. It is stored and tracked within Tableland.
              You can earn FT by &ldquo;piloting&rdquo; your Rig. Rigs that are
              &ldquo;in-flight&rdquo; can&apos;t be sold and are only
              transferrable using the Garage or with the{" "}
              <Link
                href="https://etherscan.io/address/0x8eaa9ae1ac89b1c8c8a8104d08c045f78aadb42d#writeProxyContract"
                target="_blank"
              >
                safeTransferWhileFlying
              </Link>{" "}
              contract method. Piloting is a form of soft-staking where the NFT
              remains in your wallet but is locked. In exchange for taking your
              Rig off the market, you earn FT.
            </p>
            <h2>Pilots and training</h2>
            <p>
              Rig Pilots are dynamically displayed in the bottom right-hand
              corner of a Rig image, as well as in ERC721 metadata. This
              functionality is powered by the Tableland protocol and is
              completely decentralized.
            </p>
            <p>
              Rigs implement{" "}
              <Link
                href="https://eips.ethereum.org/EIPS/eip-4906"
                target="_blank"
              >
                ERC-4906 (EIP-721 Metadata Update Extension)
              </Link>
              , which was developed by OpenSea. This means that Pilot changes
              are automatically reflected on OpenSea without requiring a manual
              metadata refresh.
            </p>
            <p>
              Each Rig must go through a training phase with a trainer pilot to
              re-learn how to fly (see &ldquo;Story&rdquo; below). Training
              takes <span className="font-bold">172,800</span> blocks, or
              approximately 30 days. After training, you can use any ERC721
              token that you own to pilot your Rigs. Pilot history is stored on
              Tableland and can be queried and reflected in metadata.
            </p>
            <p>
              Below is{" "}
              <Link
                href="https://garage.tableland.xyz/rigs/1018"
                target="_blank"
              >
                Rig #1018
              </Link>{" "}
              in the Garage. This Rig is on its third flight session, and has
              accumulated a total of{" "}
              <span className="font-bold">996,331 FT</span>.
            </p>
            <p>
              <Image src={pilots} alt="Pilots" className="w-full" />
            </p>
            <p>
              To query the same data for Rig #1018 shown in the Garage above,
              you can use the{" "}
              <Link
                href="https://www.npmjs.com/package/@tableland/cli"
                target="_blank"
              >
                Tableland CLI
              </Link>
              .
            </p>
            <pre className="w-full max-h-[30vh]">
              <code className="language-sh">{`> tableland read "SELECT * FROM pilot_sessions_1_7 WHERE rig_id=1018" --chain homestead --format pretty

┌─────────┬──────────┬──────┬──────────────────────────────────────────────┬──────────────────────────────────────────────┬──────────┬────────┬────────────┐
│ (index) │ end_time │  id  │                    owner                     │                pilot_contract                │ pilot_id │ rig_id │ start_time │
├─────────┼──────────┼──────┼──────────────────────────────────────────────┼──────────────────────────────────────────────┼──────────┼────────┼────────────┤
│    0    │ 16141361 │  1   │ '0xdd8a5674eca6f1367bd0398d4b931d5b351c0be6' │                     null                     │   null   │  1018  │  15967006  │
│    1    │ 16963336 │ 1102 │ '0xdd8a5674eca6f1367bd0398d4b931d5b351c0be6' │ '0x8ec93001b6d4ca39f29b46244bb856f4151a2bd9' │    51    │  1018  │  16141361  │
│    2    │   null   │ 2345 │ '0xdd8a5674eca6f1367bd0398d4b931d5b351c0be6' │ '0x942bc2d3e7a589fe5bd4a5c6ef9727dfd82f5c8a' │  18711   │  1018  │  16963354  │
└─────────┴──────────┴──────┴──────────────────────────────────────────────┴──────────────────────────────────────────────┴──────────┴────────┴────────────┘`}</code>
            </pre>
            <p>
              As Tableland grows, there will be more ways to earn FT, such as
              being a network{" "}
              <Link
                href="https://github.com/tablelandnetwork/go-tableland"
                target="_blank"
              >
                validator
              </Link>{" "}
              and voting on community projects and stewards through the Garage
              (coming mid-2023).
            </p>
            <h2>Generic Token Reputation</h2>
            <p>
              FT represents a generic concept called Token Reputation. In
              mid-2023, we plan to develop an EIP for Token Reputation in the
              hopes that other projects can leverage this unique mechanism
              enabled by Tableland. Exciting use-cases for Token Reputation
              include:
            </p>
            <h3>Authorize arbitrary on-chain actions</h3>
            <p>
              Possible use-cases include token airdrops, mint passes, weighted
              voting, ability to write to a Tableland table, and more.
            </p>
            <h3>Authorize arbitrary off-chain actions</h3>
            <p>
              Possible use-cases include event passes, Discord bots, ability to
              take an action in an application, and more.
            </p>
          </article>
        </div>
      </section>
      {/* story */}
      <section id="story" className="w-full bg-black">
        <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
        <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-12 md:py-24 lg:py-36">
          <article className="mx-auto prose prose-normal !prose-invert prose-sm md:prose-md lg:prose-lg max-w-prose prose-img:rounded-lg prose-pre:text-xs font-light">
            <h1 className="font-title">Story</h1>
            <p>
              <span className="lead italic">
                Tableland awaits...but you&apos;re going to need a Rig to get
                there.
              </span>
            </p>
            <p>
              <Image
                src={pioneer1}
                alt="Pioneer 1"
                className="w-1/4 float-right ml-6 lg:ml-8"
              />
              It&apos;s 2133. The metaverse is now ubiquitous. The singularity
              caused a re-permissioning of cyberspace. It turns out that AGI was
              benevolent—human and machine are now one, but most sentients are
              cogs in the great megalopolis known as The Grid.
            </p>
            <p>
              The builder migration started slow. We don&apos;t know who took
              the first step, only that it led to the mysterious subculture we
              see today. Hailing from the deep mainframe tunnels to the
              billionth floor of the mega towers, an eclectic group of builders
              formed a new community away from The Grid. A decentralized zone,
              void of old rules. They wanted adventure born of pure curiosity
              and imagination. Something authentic. Something theirs—like their
              predecessors had a century before.
            </p>
            <p>
              <Image
                src={grid}
                alt="The Grid"
                className="w-1/3 float-left mr-6 lg:mr-8"
              />
              Out beyond The Grid, where the broad boulevards dissolve into dust
              and then yawn into the great open source country, you&apos;ll find
              Tableland. The undeveloped frontier. Terabyte upon terabyte of
              space waiting to be written into history. It&apos;s where the
              builders have gone. Divided into Fleets, pilots work day and night
              to map the canyons and high desert of Tableland. They prepare it
              for future generations of creators and dreamers. You&apos;re
              invited.
            </p>
            <p>
              It&apos;s a long journey and the land is vast even after you get
              there. It&apos;s raw, uncoded, and simmering with endless
              opportunity. You&apos;re going to need a tool to explore.
              Fortunately, you&apos;ve got the skills. You know how to build.
            </p>
            <p>
              <Image
                src={pioneer2}
                alt="Pioneer 2"
                className="w-1/4 float-right ml-6 lg:ml-8"
              />
              Like many others, you scan the chains for wreckage of technology
              from the web of yore. Part by part, you assemble your Rig to
              achieve specific tasks. This is your custom machine. There are
              none that are like it, and this one is yours. It&apos;s a
              purpose-built code-based ticket to Tableland. And what you do with
              it is totally up to you.
            </p>
            <p>
              Hop inside and confirm your signature. There is a lot yet to do.
              Beyond the certainty of The Grid, a new community and journey
              awaits in Tableland.
            </p>
          </article>
        </div>
      </section>
      {/* fleets */}
      <section id="fleets" className="w-full bg-lightpurple">
        <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
        <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-12 md:py-24 lg:py-36">
          <article className="mx-auto prose prose-normal prose-sm md:prose-md lg:prose-lg max-w-prose prose-img:rounded-lg prose-pre:text-xs font-light">
            <h1 className="font-title">Fleets</h1>
            <p>
              From fast and flat salts to the windy and steep desert mountains,
              each domain of Tableland demands a different tool to explore. Rigs
              are divided into eight mission-specific Fleets. Each is engineered
              to navigate the harsh and unforgiving landscape of Tableland.
              You&apos;ll find the whole Tableland community is ready to welcome
              you, but your Fleet feels like old friends.
            </p>
            <p>
              <Image
                src={assembly}
                alt="Assembly"
                className="w-1/3 float-right ml-6 lg:ml-8"
              />
              Each Rig is assembled from the parts of machines that built the
              first truly user-owned metaverse a century before—now
              affectionately called The Original—decades before the rise of The
              Grid. These were the{" "}
              <span className="font-bold">Original Rigs</span>, now discarded,
              disassembled, and forgotten in the back alleys of The Grid.
            </p>
            <p>
              Most builders fly parts from different Original Rigs. Since the
              beginning, they have maintained a Rig part table. The table
              contains 1,074 known parts that have been tracked from The Grid.
              Within Fleets, parts are modular, interoperable, and differ in
              rarity. If a rare part is ever lost, it may never be seen in
              Tableland again.
            </p>
            <pre className="w-full max-h-[30vh]">
              <code className="language-sh">{`> tableland read "SELECT * FROM parts_42161_7 WHERE fleet='Foils'" --chain arbitrum --format pretty

┌─────────┬─────────────┬─────────┬─────┬─────────────────────────┬─────────────────┬──────────────┐
│ (index) │    color    │  fleet  │ id  │          name           │    original     │     type     │
├─────────┼─────────────┼─────────┼─────┼─────────────────────────┼─────────────────┼──────────────┤
│    0    │   'Dawn'    │ 'Foils' │ 219 │      'Transmitter'      │     'G-Nat'     │  'Airframe'  │
│    1    │ 'Midnight'  │ 'Foils' │ 220 │      'Transmitter'      │     'G-Nat'     │  'Airframe'  │
│    2    │  'Sunset'   │ 'Foils' │ 221 │      'Transmitter'      │     'G-Nat'     │  'Airframe'  │
│    3    │   'Dawn'    │ 'Foils' │ 222 │ 'Transitive Dependency' │  'Hydro Wasp'   │  'Airframe'  │
│    4    │ 'Electric'  │ 'Foils' │ 223 │ 'Transitive Dependency' │  'Hydro Wasp'   │  'Airframe'  │
│    5    │  'Sunset'   │ 'Foils' │ 224 │ 'Transitive Dependency' │  'Hydro Wasp'   │  'Airframe'  │
│    6    │   'Dawn'    │ 'Foils' │ 225 │          'DHA'          │ 'Solar Scarab'  │  'Airframe'  │
│    7    │ 'Electric'  │ 'Foils' │ 226 │          'DHA'          │ 'Solar Scarab'  │  'Airframe'  │
│    8    │   'Ruby'    │ 'Foils' │ 227 │          'DHA'          │ 'Solar Scarab'  │  'Airframe'  │
│    9    │ 'Alpenglow' │ 'Foils' │ 228 │        'Tangle'         │ 'Stark Tangler' │  'Airframe'  │
│   10    │ 'Midnight'  │ 'Foils' │ 229 │        'Tangle'         │ 'Stark Tangler' │  'Airframe'  │
│   11    │  'Sunset'   │ 'Foils' │ 230 │        'Tangle'         │ 'Stark Tangler' │  'Airframe'  │
│   12    │ 'Alpenglow' │ 'Foils' │ 231 │     'Supersingular'     │  'The Cricket'  │  'Airframe'  │
│   13    │   'Blaze'   │ 'Foils' │ 232 │     'Supersingular'     │  'The Cricket'  │  'Airframe'  │
│   14    │ 'Midnight'  │ 'Foils' │ 233 │     'Supersingular'     │  'The Cricket'  │  'Airframe'  │
│   15    │   'Blaze'   │ 'Foils' │ 234 │         'Tuple'         │ 'The Messenger' │  'Airframe'  │
│   16    │   'Dawn'    │ 'Foils' │ 235 │         'Tuple'         │ 'The Messenger' │  'Airframe'  │
│   17    │ 'Electric'  │ 'Foils' │ 236 │         'Tuple'         │ 'The Messenger' │  'Airframe'  │
│   18    │   'Dark'    │ 'Foils' │ 237 │       'Alpine 1'        │      null       │ 'Background' │
│   19    │   'Dark'    │ 'Foils' │ 238 │       'Alpine 2'        │      null       │ 'Background' │
│   20    │   'Dark'    │ 'Foils' │ 239 │       'Alpine 3'        │      null       │ 'Background' │
│   21    │   'Dark'    │ 'Foils' │ 240 │       'Alpine 4'        │      null       │ 'Background' │
│   22    │   'Desat'   │ 'Foils' │ 241 │       'Alpine 1'        │      null       │ 'Background' │
│   23    │   'Desat'   │ 'Foils' │ 242 │       'Alpine 2'        │      null       │ 'Background' │
│   24    │   'Desat'   │ 'Foils' │ 243 │       'Alpine 3'        │      null       │ 'Background' │
│   25    │   'Desat'   │ 'Foils' │ 244 │       'Alpine 4'        │      null       │ 'Background' │
│   26    │ 'Hue Shift' │ 'Foils' │ 245 │       'Alpine 1'        │      null       │ 'Background' │
│   27    │ 'Hue Shift' │ 'Foils' │ 246 │       'Alpine 2'        │      null       │ 'Background' │
│   28    │ 'Hue Shift' │ 'Foils' │ 247 │       'Alpine 3'        │      null       │ 'Background' │
│   29    │ 'Hue Shift' │ 'Foils' │ 248 │       'Alpine 4'        │      null       │ 'Background' │
│   30    │   'Main'    │ 'Foils' │ 249 │       'Alpine 1'        │      null       │ 'Background' │
│   31    │   'Main'    │ 'Foils' │ 250 │       'Alpine 2'        │      null       │ 'Background' │
│   32    │   'Main'    │ 'Foils' │ 251 │       'Alpine 3'        │      null       │ 'Background' │
│   33    │   'Main'    │ 'Foils' │ 252 │       'Alpine 4'        │      null       │ 'Background' │
│   34    │   'Dawn'    │ 'Foils' │ 253 │     'Simple Query'      │     'G-Nat'     │  'Cockpit'   │
│   35    │ 'Midnight'  │ 'Foils' │ 254 │     'Simple Query'      │     'G-Nat'     │  'Cockpit'   │
│   36    │  'Sunset'   │ 'Foils' │ 255 │     'Simple Query'      │     'G-Nat'     │  'Cockpit'   │
│   37    │   'Dawn'    │ 'Foils' │ 256 │          'WAL'          │  'Hydro Wasp'   │  'Cockpit'   │
│   38    │ 'Electric'  │ 'Foils' │ 257 │          'WAL'          │  'Hydro Wasp'   │  'Cockpit'   │
│   39    │  'Sunset'   │ 'Foils' │ 258 │          'WAL'          │  'Hydro Wasp'   │  'Cockpit'   │
│   40    │   'Dawn'    │ 'Foils' │ 259 │     'State Machine'     │ 'Solar Scarab'  │  'Cockpit'   │
│   41    │ 'Electric'  │ 'Foils' │ 260 │     'State Machine'     │ 'Solar Scarab'  │  'Cockpit'   │
│   42    │   'Ruby'    │ 'Foils' │ 261 │     'State Machine'     │ 'Solar Scarab'  │  'Cockpit'   │
│   43    │ 'Alpenglow' │ 'Foils' │ 262 │         'Stark'         │ 'Stark Tangler' │  'Cockpit'   │
│   44    │ 'Midnight'  │ 'Foils' │ 263 │         'Stark'         │ 'Stark Tangler' │  'Cockpit'   │
│   45    │  'Sunset'   │ 'Foils' │ 264 │         'Stark'         │ 'Stark Tangler' │  'Cockpit'   │
│   46    │ 'Alpenglow' │ 'Foils' │ 265 │        'Staker'         │  'The Cricket'  │  'Cockpit'   │
│   47    │   'Blaze'   │ 'Foils' │ 266 │        'Staker'         │  'The Cricket'  │  'Cockpit'   │
│   48    │ 'Midnight'  │ 'Foils' │ 267 │        'Staker'         │  'The Cricket'  │  'Cockpit'   │
│   49    │   'Blaze'   │ 'Foils' │ 268 │        'Testnet'        │ 'The Messenger' │  'Cockpit'   │
│   50    │   'Dawn'    │ 'Foils' │ 269 │        'Testnet'        │ 'The Messenger' │  'Cockpit'   │
│   51    │ 'Electric'  │ 'Foils' │ 270 │        'Testnet'        │ 'The Messenger' │  'Cockpit'   │
│   52    │   'Dawn'    │ 'Foils' │ 271 │        'Syntax'         │     'G-Nat'     │ 'Propulsion' │
│   53    │ 'Midnight'  │ 'Foils' │ 272 │        'Syntax'         │     'G-Nat'     │ 'Propulsion' │
│   54    │  'Sunset'   │ 'Foils' │ 273 │        'Syntax'         │     'G-Nat'     │ 'Propulsion' │
│   55    │   'Dawn'    │ 'Foils' │ 274 │         'SPoF'          │  'Hydro Wasp'   │ 'Propulsion' │
│   56    │ 'Electric'  │ 'Foils' │ 275 │         'SPoF'          │  'Hydro Wasp'   │ 'Propulsion' │
│   57    │  'Sunset'   │ 'Foils' │ 276 │         'SPoF'          │  'Hydro Wasp'   │ 'Propulsion' │
│   58    │   'Dawn'    │ 'Foils' │ 277 │ 'Symmetric Encryption'  │ 'Solar Scarab'  │ 'Propulsion' │
│   59    │ 'Electric'  │ 'Foils' │ 278 │ 'Symmetric Encryption'  │ 'Solar Scarab'  │ 'Propulsion' │
│   60    │   'Ruby'    │ 'Foils' │ 279 │ 'Symmetric Encryption'  │ 'Solar Scarab'  │ 'Propulsion' │
│   61    │ 'Alpenglow' │ 'Foils' │ 280 │    'Zero-Knowledge'     │ 'Stark Tangler' │ 'Propulsion' │
│   62    │ 'Midnight'  │ 'Foils' │ 281 │    'Zero-Knowledge'     │ 'Stark Tangler' │ 'Propulsion' │
│   63    │  'Sunset'   │ 'Foils' │ 282 │    'Zero-Knowledge'     │ 'Stark Tangler' │ 'Propulsion' │
│   64    │ 'Alpenglow' │ 'Foils' │ 283 │          'EVM'          │  'The Cricket'  │ 'Propulsion' │
│   65    │   'Blaze'   │ 'Foils' │ 284 │          'EVM'          │  'The Cricket'  │ 'Propulsion' │
│   66    │ 'Midnight'  │ 'Foils' │ 285 │          'EVM'          │  'The Cricket'  │ 'Propulsion' │
│   67    │   'Blaze'   │ 'Foils' │ 286 │       'Threshold'       │ 'The Messenger' │ 'Propulsion' │
│   68    │   'Dawn'    │ 'Foils' │ 287 │       'Threshold'       │ 'The Messenger' │ 'Propulsion' │
│   69    │ 'Electric'  │ 'Foils' │ 288 │       'Threshold'       │ 'The Messenger' │ 'Propulsion' │
└─────────┴─────────────┴─────────┴─────┴─────────────────────────┴─────────────────┴──────────────┘`}</code>
            </pre>
            <p>
              Combining parts can be quite useful in Tableland. Nevertheless, a
              small faction of degens are obsessed with re-building every
              Original Rig. So far, they have managed to build one of each—66 in
              total. If you pilot an Original, consider yourself lucky.
            </p>
            <div className="flex">
              <div className="w-1/2">
                <h3 className="uppercase">Num. Originals</h3>
                <h2 className="font-title">66</h2>
              </div>
              <div className="w-1/2">
                <h3 className="uppercase">Color Variants</h3>
                <h2 className="font-title">181</h2>
              </div>
            </div>
            <p>
              Each Fleet has a different number of Originals, and each Original
              can be found in multiple color variants. You&apos;ll know an
              Original when you see one—they are built from matching parts and
              have a unique name.
            </p>
            <p>
              The Decrypter is an Original from the Sleds Fleet. It has been
              found in Midnight, Sunset, and Blaze.
            </p>
            <pre className="w-full max-h-[30vh]">
              <code className="language-sh">{`> tableland read "SELECT * FROM parts_42161_7 WHERE original = 'Decrypter' AND color = 'Midnight'" --chain arbitrum --format pretty

┌─────────┬────────────┬─────────┬─────┬───────────────────────┬─────────────┬─────────────┐
│ (index) │   color    │  fleet  │ id  │         name          │  original   │    type     │
├─────────┼────────────┼─────────┼─────┼───────────────────────┼─────────────┼─────────────┤
│    0    │ 'Midnight' │ 'Sleds' │ 426 │       'Sniffer'       │ 'Decrypter' │  'Bonnet'   │
│    1    │ 'Midnight' │ 'Sleds' │ 445 │     'Unstoppable'     │ 'Decrypter' │  'Chassis'  │
│    2    │ 'Midnight' │ 'Sleds' │ 464 │ 'Solidarity Splitter' │ 'Decrypter' │    'Mod'    │
│    3    │ 'Midnight' │ 'Sleds' │ 483 │  'Universal Machine'  │ 'Decrypter' │ 'Monocoque' │
│    4    │ 'Midnight' │ 'Sleds' │ 502 │       'Verkle'        │ 'Decrypter' │  'Spoiler'  │
└─────────┴────────────┴─────────┴─────┴───────────────────────┴─────────────┴─────────────┘`}</code>
            </pre>
            <h2>Some Originals—one from each Fleet.</h2>
            <div className="container flex flex-col items-center">
              <div className="w-full grid gap-x-4 grid-cols-2 lg:grid-cols-4">
                <figure>
                  <Image src={titan} alt="Titan" />
                  <figcaption className="text-center">
                    Solar Tank in Sunset
                  </figcaption>
                </figure>
                <figure>
                  <Image src={tumbler} alt="Tumbler" />
                  <figcaption className="text-center">
                    Sonic Scribe in Sunset
                  </figcaption>
                </figure>
                <figure>
                  <Image src={sled} alt="Sled" />
                  <figcaption className="text-center">
                    Darkmatter in Midnight
                  </figcaption>
                </figure>
                <figure>
                  <Image src={edgeRider} alt="Edge Rider" />
                  <figcaption className="text-center">
                    Radio Fang in Moonlight
                  </figcaption>
                </figure>
                <figure>
                  <Image src={tracer} alt="Tracer" />
                  <figcaption className="text-center">
                    Skipjack Thunderbolt in Electric
                  </figcaption>
                </figure>
                <figure>
                  <Image src={hopper} alt="Hopper" />
                  <figcaption className="text-center">
                    The Canyonlander in Dawn
                  </figcaption>
                </figure>
                <figure>
                  <Image src={airelight} alt="Airelight" />
                  <figcaption className="text-center">
                    The Monitor in Dawn
                  </figcaption>
                </figure>
                <figure>
                  <Image src={foil} alt="Foil" />
                  <figcaption className="text-center">
                    Hydro Wasp in Electric
                  </figcaption>
                </figure>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* titans */}
      <Fleet
        name="Titans"
        rigs={titans}
        description="Heavy loader, lifters, and haulers of the high desert. The Titans are the muscle of Tableland. If you need to get sh*t done, you're gonna need a Titan."
        styles={11}
        originals={28}
        delay={0}
      />
      {/* tumblers */}
      <Fleet
        name="Tumblers"
        rigs={tumblers}
        description="Titans younger brother. Tumblers are a bundle of might packed into a small package. They can fit into tight spaces and what they lack in cargo capacity they make up for in range and agility."
        styles={9}
        originals={27}
        delay={2}
      />
      {/* sleds */}
      <Fleet
        name="Sleds"
        rigs={sleds}
        description="Running the salt flats takes focus. If you need a stable Rig for the fast and straight, set your sights on a sled. Sure they're loud, but it drowns out the sound of your teeth vibrating in your skull as you break the sound barrier."
        styles={8}
        originals={19}
        delay={4}
      />
      {/* edge riders */}
      <Fleet
        name="Edge Riders"
        rigs={edgeRiders}
        description="Two wheels. One Edge. Nuff said."
        styles={10}
        originals={24}
        delay={0}
      />
      {/* tracers */}
      <Fleet
        name="Tracers"
        rigs={tracers}
        description="If you've got verticality issues then Tracers are what you seek. Designed to hug the canyonlands and rise and fall faster than Gamestonk."
        styles={6}
        originals={19}
        delay={2}
      />
      {/* hoppers */}
      <Fleet
        name="Hoppers"
        rigs={hoppers}
        description="Hoppers are Tracers' smaller, more nimble cousins. If you're prone to whiting out, you're gonna want a G-suit to keep the blood from pooling in your boots."
        styles={8}
        originals={25}
        delay={4}
      />
      {/* airelights */}
      <Fleet
        name="Airelights"
        rigs={airelights}
        description="The heavy birds rule the alpine of Tableland. Perfect for fast inserts and massive lifts. But keep your diamond hands on the controls because what goes up must come down."
        styles={8}
        originals={21}
        delay={0}
      />
      {/* foils */}
      <Fleet
        name="Foils"
        rigs={foils}
        description="Aero, fast, and light. Foils are Moore's Law personified. If you need to get off-chain in a hurry, you'll be glad you've got a foil."
        styles={6}
        originals={18}
        delay={2}
      />
      {/* artists */}
      <section id="artists" className="w-full bg-black">
        <div className="w-full h-[18px] bg-white opacity-[0.15]"></div>
        <div className="container mx-auto px-6 md:px-9 lg:px-16 xl:px-20 py-12 md:py-24 lg:py-36">
          <article className="mx-auto prose prose-normal !prose-invert prose-sm md:prose-md lg:prose-lg max-w-prose prose-img:rounded-lg prose-pre:text-xs font-light">
            <h1 className="font-title">The Artists</h1>
            <p>
              <Image src={oddfellows} alt="Oddfellows" className="w-full" />
              The Rigs project was developed alongside an über-talented team of
              artists and writers from{" "}
              <Link href="https://oddfellows.tv" target="_blank">
                Oddfellows
              </Link>
              .
            </p>
            <h2>Executive Creative Directors</h2>
            <ul>
              <li>
                Chris Kelly (
                <Link
                  href="https://www.instagram.com/chruskelly/"
                  target="_blank"
                >
                  Instagram
                </Link>
                )
              </li>
              <li>
                Colin Trenter (
                <Link href="https://twitter.com/wesleytrents" target="_blank">
                  Twitter
                </Link>
                )
              </li>
            </ul>
            <h2>Executive Producer</h2>
            <ul>
              <li>
                Erica Kelly (
                <Link
                  href="https://www.instagram.com/ericafellow/"
                  target="_blank"
                >
                  Instagram
                </Link>
                )
              </li>
            </ul>
            <h2>Producers</h2>
            <ul>
              <li>
                Dennis Samatulski (
                <Link href="https://www.dennisdidthat.com/" target="_blank">
                  Homepage
                </Link>
                )
              </li>
              <li>
                Desiree Etzel (
                <Link
                  href="https://www.instagram.com/desetzel/"
                  target="_blank"
                >
                  Instagram
                </Link>
                )
              </li>
            </ul>
            <h2>Art Direction</h2>
            <ul>
              <li>Yuki Yamada</li>
            </ul>
            <h2>Design Team</h2>
            <ul>
              <li>
                Joyce Liu (
                <Link href="https://twitter.com/joiceloo_art" target="_blank">
                  Twitter
                </Link>
                )
              </li>
              <li>
                Amy Sun (
                <Link
                  href="https://www.instagram.com/amysunstory/"
                  target="_blank"
                >
                  Instagram
                </Link>
                )
              </li>
              <li>Yuki Yamada</li>
              <li>
                Justin Burks (
                <Link
                  href="https://www.instagram.com/justin_burks_/"
                  target="_blank"
                >
                  Instagram
                </Link>
                )
              </li>
              <li>
                Caroline Choi (
                <Link href="https://www.instagram.com/j._.n/" target="_blank">
                  Instagram
                </Link>
                )
              </li>
            </ul>
            <h2>Story Development</h2>
            <ul>
              <li>
                inside.company (
                <Link href="https://www.inside.company/" target="_blank">
                  Website
                </Link>
                )
              </li>
            </ul>
          </article>
        </div>
      </section>
      {/* showcase */}
      <Showcase
        href="https://opensea.io/collection/tableland-rigs"
        classes="bg-green border-lightgreen"
      >
        View on OpenSea
      </Showcase>
    </main>
  )
}
