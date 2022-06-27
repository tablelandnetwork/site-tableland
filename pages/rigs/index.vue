<template>
  <div class="mint-page">
    <!-- Header -->
    <HeaderNav
      :titles="nav.map((i) => i.title)"
      :hrefs="nav.map((i) => i.href)"
      :targets="nav.map((i) => i.target)"
    />
    <div
      class="ship"
      data-aos="fade-down"
      data-aos-anchor=".story"
      data-aos-offset="0"
    ></div>
    <HeaderScrollNav
      anchor=".choose"
      :titles="nav.map((i) => i.title)"
      :hrefs="nav.map((i) => i.href)"
      :targets="nav.map((i) => i.target)"
    />
    <!-- hero -->
    <section class="rigs-hero">
      <div class="rigs-hero-top h-271px sm:h-207px lg:h-308px xl:h-322px"></div>
      <div
        class="container px-0 sm:px-6 md:px-12 pt-12 sm:pt-12 lg:pt-32 justify-between flex"
      >
        <div class="lg:w-full px-6 pb-6 lg:pb-10 pt-12" data-aos="fade-up">
          <div class="lg:flex">
            <div class="lg:w-2/3 w-full pt-6">
              <h1
                class="text-white w-full h-auto font-Orbitron text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-12 lg:mb-10"
              >
                Meet the <span class="font-black">Rigs</span>
              </h1>
            </div>
            <div
              class="hidden lg:w-1/3 w-full px-0 lg:px-0 pt-0 lg:pt-9 xl:pt-11 text-right"
            >
              <h2
                class="text-white font-Orbitron text-2xl md:text-2xl lg:text-3xl xl:text-4xl pt-6"
              >
                <countdown :time="time">
                  <template slot-scope="props"
                    >{{ props.days }}d:{{ props.hours }}h:{{
                      props.minutes
                    }}m:{{ props.seconds }}s</template
                  >
                </countdown>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="flex" style="margin-top: -50px" data-aos="fade-up">
        <div class="animated-carousel w-full">
          <div v-for="(item, index) in rigs" :key="index" class="vehicle">
            <img :src="item" />
          </div>
        </div>
      </div>
      <div
        class="container px-0 sm:px-6 md:px-12 pt-0 lg:pt-0 pb-24"
        data-aos="fade-up"
      >
        <div class="w-full md:w-full lg:w-1/2 xl:w-1/2 px-6 pb-0 lg:pb-0 pt-0">
          <h1
            class="text-white w-full h-auto text-xl md:text-2xl xl:text-2xl leading-tighter mb-10 lg:mb-18"
          >
            A generative NFT built from 1,074 handcrafted works of art for the
            builders and creatives of cyberspace. Coming July 2022.
          </h1>
        </div>
        <div class="w-full px-6 pb-0 lg:pb-0 pt-0">
          <ButtonLink href="/minter/">Mint a Rig</ButtonLink>
        </div>
      </div>
    </section>

    <div class="story">
      <!-- story -->
      <section id="story">
        <div class="container section-container">
          <div class="px-6 sm:px-12 py-12 md:py-48">
            <h1
              data-aos="fade-up"
              class="section-header font-Orbitron w-full h-auto text-5xl lg:text-6xl choose leading-tighter mb-4 lg:mb-10"
            >
              Tableland awaits...
            </h1>
            <p
              class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
              data-aos="fade-up"
            >
              <em>...but you're going to need a Rig to get there.</em>
            </p>
            <p
              class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
              data-aos="fade-up"
            >
              <img
                src="~assets/img/rigs/pioneer_1.jpg"
                class="text-flow right"
                style="width: 30%"
              />
              It's 2133. The metaverse is now ubiquitous. The singularity caused
              a re-permissioning of cyberspace. It turns out that AGI was
              benevolent—human and machine are now one, but most sentients are
              cogs in the great megalopolis known as The Grid.
            </p>
            <p
              class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
              data-aos="fade-up"
            >
              The builder migration started slow. We don’t know who took the
              first step, only that it led to the mysterious subculture we see
              today. Hailing from the deep mainframe tunnels to the billionth
              floor of the mega towers, an eclectic group of builders formed a
              new community away from The Grid. A decentralized zone, void of
              old rules. They wanted adventure born of pure curiosity and
              imagination. Something authentic. Something theirs—like their
              predecessors had a century before.
            </p>
            <p
              class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
              data-aos="fade-up"
            >
              <img
                src="~assets/img/rigs/grid.jpg"
                class="text-flow left"
                style="width: 50%"
              />
              Out beyond The Grid, where the broad boulevards dissolve into dust
              and then yawn into the great open source country, you’ll find
              Tableland. The undeveloped frontier. Terabyte upon terabyte of
              space waiting to be written into history. It’s where the builders
              have gone. Divided into Fleets, pilots work day and night to map
              the canyons and high desert of Tableland. They prepare it for
              future generations of creators and dreamers. You’re invited.
            </p>
            <p
              class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
              data-aos="fade-up"
            >
              It's a long journey and the land is vast even after you get there.
              It’s raw, uncoded, and simmering with endless opportunity. You're
              going to need a tool to explore. Fortunately, you've got the
              skills. You know how to build.
            </p>
            <p
              class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
              data-aos="fade-up"
            >
              <img
                src="~assets/img/rigs/pioneer_2.jpg"
                class="text-flow right"
                style="width: 30%"
              />
              Like many others, you scan the chains for wreckage of technology
              from the web of yore. Part by part, you assemble your Rig to
              achieve specific tasks. This is your custom machine. There are
              none that are like it, and this one is yours. It’s a purpose-built
              code-based ticket to Tableland. And what you do with it is totally
              up to you.
            </p>
            <p
              class="text-xl lg:text-2xl leading-normal md:leading-normal font-light"
              data-aos="fade-up"
            >
              Hop inside and confirm your signature. There is a lot yet to do.
              Beyond the certainty of The Grid, a new community and journey
              awaits in Tableland.
            </p>
          </div>
        </div>
      </section>
    </div>

    <div>
      <div class="bg-solid">
        <div class="bg-solid-top mt-18 lg:mt-0"></div>
        <!-- fleets -->
        <section id="fleets">
          <div class="container section-container">
            <div class="px-6 sm:px-12 pt-0 xl:pt-10 md:pb-24">
              <h1
                class="w-full h-auto font-Orbitron text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10"
                data-aos="fade-up"
              >
                Fleets
              </h1>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                From fast and flat salts to the windy and steep desert
                mountains, each domain of Tableland demands a different tool to
                explore. Rigs are divided into eight mission-specific Fleets.
                Each is engineered to navigate the harsh and unforgiving
                landscape of Tableland. You'll find the whole Tableland
                community is ready to welcome you, but your Fleet feels like old
                friends.
              </p>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                <img
                  src="~assets/img/rigs/assembly.jpg"
                  class="text-flow right"
                  style="width: 50%"
                />
                Each Rig is assembled from the parts of machines that built the
                first truly user-owned metaverse a century before—now
                affectionately called The Original—decades before the rise of
                The Grid. These were the
                <span style="font-weight: 900">Original Rigs</span>, now
                discarded, disassembled, and forgotten in the back alleys of The
                Grid.
              </p>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                Most builders fly parts from different Original Rigs. Since the
                beginning, they have maintained a Rig part table. The table
                contains 1,074 known parts that have been tracked from The Grid.
                Within Fleets, parts are modular, interoperable, and differ in
                rarity. If a rare part is ever lost, it may never be seen in
                Tableland again.
              </p>
              <div class="code mb-10 lg:mb-18" data-aos="fade-up">
                <pre>
                  <code>
tableland> SELECT * FROM rig_parts WHERE fleet = 'Foils';

fleet       original         type        name                    color
----------  ---------------  ----------  ----------------------  ----------
Foils       Solar Scarab     Airframe    DHA                     Dawn
Foils       Solar Scarab     Airframe    DHA                     Electric
Foils       Solar Scarab     Airframe    DHA                     Ruby
Foils       The Cricket      Propulsion  EVM                     Alpenglow
Foils       The Cricket      Propulsion  EVM                     Blaze
Foils       The Cricket      Propulsion  EVM                     Midnight
Foils       Hydro Wasp       Propulsion  SPoF                    Dawn
Foils       Hydro Wasp       Propulsion  SPoF                    Electric
Foils       Hydro Wasp       Propulsion  SPoF                    Sunset
Foils       G-Nat            Cockpit     Simple Query            Dawn
Foils       G-Nat            Cockpit     Simple Query            Midnight
Foils       G-Nat            Cockpit     Simple Query            Sunset
Foils       The Cricket      Cockpit     Staker                  Alpenglow
Foils       The Cricket      Cockpit     Staker                  Blaze
Foils       The Cricket      Cockpit     Staker                  Midnight
Foils       Stark Tangler    Cockpit     Stark                   Alpenglow
Foils       Stark Tangler    Cockpit     Stark                   Midnight
Foils       Stark Tangler    Cockpit     Stark                   Sunset
Foils       Solar Scarab     Cockpit     State Machine           Dawn
Foils       Solar Scarab     Cockpit     State Machine           Electric
Foils       Solar Scarab     Cockpit     State Machine           Ruby
Foils       The Cricket      Airframe    Supersingular           Alpenglow
Foils       The Cricket      Airframe    Supersingular           Blaze
Foils       The Cricket      Airframe    Supersingular           Midnight
Foils       Solar Scarab     Propulsion  Symmetric Encryption    Dawn
Foils       Solar Scarab     Propulsion  Symmetric Encryption    Electric
Foils       Solar Scarab     Propulsion  Symmetric Encryption    Ruby
Foils       G-Nat            Propulsion  Syntax                  Dawn
Foils       G-Nat            Propulsion  Syntax                  Midnight
Foils       G-Nat            Propulsion  Syntax                  Sunset
Foils       Stark Tangler    Airframe    Tangle                  Alpenglow
Foils       Stark Tangler    Airframe    Tangle                  Midnight
Foils       Stark Tangler    Airframe    Tangle                  Sunset
Foils       The Messenger    Cockpit     Testnet                 Blaze
Foils       The Messenger    Cockpit     Testnet                 Dawn
Foils       The Messenger    Cockpit     Testnet                 Electric
Foils       The Messenger    Propulsion  Threshold               Blaze
Foils       The Messenger    Propulsion  Threshold               Dawn
Foils       The Messenger    Propulsion  Threshold               Electric
Foils       Hydro Wasp       Airframe    Transitive Dependency   Dawn
Foils       Hydro Wasp       Airframe    Transitive Dependency   Electric
Foils       Hydro Wasp       Airframe    Transitive Dependency   Sunset
Foils       G-Nat            Airframe    Transmitter             Dawn
Foils       G-Nat            Airframe    Transmitter             Midnight
Foils       G-Nat            Airframe    Transmitter             Sunset
Foils       The Messenger    Airframe    Tuple                   Blaze
Foils       The Messenger    Airframe    Tuple                   Dawn
Foils       The Messenger    Airframe    Tuple                   Electric
Foils       Hydro Wasp       Cockpit     WAL                     Dawn
Foils       Hydro Wasp       Cockpit     WAL                     Electric
Foils       Hydro Wasp       Cockpit     WAL                     Sunset
Foils       Stark Tangler    Propulsion  Zero-Knowledge          Alpenglow
Foils       Stark Tangler    Propulsion  Zero-Knowledge          Midnight
Foils       Stark Tangler    Propulsion  Zero-Knowledge          Sunset
                  </code>
                </pre>
              </div>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-8 md:mb-10"
                data-aos="fade-up"
              >
                Combining parts can be quite useful in Tableland. Nevertheless,
                a small faction of degens are obsessed with re-building every
                Original Rig. So far, they have managed to build one of each—66
                in total. If you pilot an Original, consider yourself lucky.
              </p>
              <div class="flex mb-10 lg:mb-18">
                <div class="w-1/2">
                  <h3 class="lg:text-2xl text-xl">NUM. ORIGINALS</h3>
                  <h2 class="text-4xl font-Orbitron">66</h2>
                </div>
                <div class="w-1/2">
                  <h3 class="lg:text-2xl text-xl">COLOR VARIANTS</h3>
                  <h2 class="text-4xl font-Orbitron">181</h2>
                </div>
              </div>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                Each Fleet has a different number of Originals, and each
                Original can be found in multiple color variants. You'll know an
                Original when you see one—they are built from matching parts and
                have a unique name.
              </p>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                The Decrypter is an Original from the Sleds Fleet. It has been
                found in Midnight, Sunset, and Blaze.
              </p>
              <div class="code mb-10 lg:mb-18" data-aos="fade-up">
                <pre>
                  <code>
tableland> SELECT * FROM rig_parts where original = 'Decrypter' and color = 'Midnight';

fleet       original    type        name                    color
----------  ----------  ----------  ----------------------  ----------
Sleds       Decrypter   Bonnet      Sniffer                 Midnight
Sleds       Decrypter   Chassis     Unstoppable             Midnight
Sleds       Decrypter   Mod         Solidarity Splitter     Midnight
Sleds       Decrypter   Monocoque   Universal Machine       Midnight
Sleds       Decrypter   Spoiler     Verkle                  Midnight
                  </code>
                </pre>
              </div>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                Some Originals—one from each Fleet.
              </p>
              <div
                class="container flex flex-col items-center text-sm mb-10 lg:mb-18"
              >
                <div class="w-full grid gap-6 grid-cols-2 sm:grid-cols-4">
                  <figure class="m-auto">
                    <img
                      src="~assets/img/rigs/originals/titan.jpg"
                      class="rounded-lg"
                    />
                    <figcaption class="text-center pt-2">
                      Solar Tank in Sunset
                    </figcaption>
                  </figure>
                  <figure class="m-auto">
                    <img
                      src="~assets/img/rigs/originals/tumbler.jpg"
                      class="rounded-lg"
                    />
                    <figcaption class="text-center pt-2">
                      Sonic Scribe in Sunset
                    </figcaption>
                  </figure>
                  <figure class="m-auto">
                    <img
                      src="~assets/img/rigs/originals/sled.jpg"
                      class="rounded-lg"
                    />
                    <figcaption class="text-center pt-2">
                      Darkmatter in Midnight
                    </figcaption>
                  </figure>
                  <figure class="m-auto">
                    <img
                      src="~assets/img/rigs/originals/edge_rider.jpg"
                      class="rounded-lg"
                    />
                    <figcaption class="text-center pt-2">
                      Radio Fang in Moonlight
                    </figcaption>
                  </figure>
                  <figure class="m-auto">
                    <img
                      src="~assets/img/rigs/originals/tracer.jpg"
                      class="rounded-lg"
                    />
                    <figcaption class="text-center pt-2">
                      Skipjack Thunderbolt in Electric
                    </figcaption>
                  </figure>
                  <figure class="m-auto">
                    <img
                      src="~assets/img/rigs/originals/hopper.jpg"
                      class="rounded-lg"
                    />
                    <figcaption class="text-center pt-2">
                      The Canyonlander in Dawn
                    </figcaption>
                  </figure>
                  <figure class="m-auto">
                    <img
                      src="~assets/img/rigs/originals/airelight.jpg"
                      class="rounded-lg"
                    />
                    <figcaption class="text-center pt-2">
                      The Monitor in Dawn
                    </figcaption>
                  </figure>
                  <figure class="m-auto">
                    <img
                      src="~assets/img/rigs/originals/foil.jpg"
                      class="rounded-lg"
                    />
                    <figcaption class="text-center pt-2">
                      Hydro Wasp in Electric
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Fleet
          section="titans"
          title="Titans"
          :rigs="titans"
          description="Heavy loader, lifters, and haulers of the high desert. The Titans are the muscle of Tableland. If you need to get sh*t done, you’re gonna need a Titan."
          styles="11"
          originals="28"
          delay="0"
        />
        <Fleet
          section="tumblers"
          title="Tumblers"
          :rigs="tumblers"
          description="Titans younger brother. Tumblers are a bundle of might packed into a small package. They can fit into tight spaces and what they lack in cargo capacity they make up for in range and agility."
          styles="9"
          originals="27"
          delay="2"
        />
        <Fleet
          section="sleds"
          title="Sleds"
          :rigs="sleds"
          description="Running the salt flats takes focus. If you need a stable Rig for the fast and straight, set your sights on a sled. Sure they’re loud, but it drowns out the sound of your teeth vibrating in your skull as you break the sound barrier."
          styles="8"
          originals="19"
          delay="4"
        />
        <Fleet
          section="edgeriders"
          title="Edge Riders"
          :rigs="edge_riders"
          description="Two wheels. One Edge. Nuff said."
          styles="10"
          originals="24"
          delay="0"
        />
        <Fleet
          section="tracers"
          title="Tracers"
          :rigs="tracers"
          description="If you’ve got verticality issues then Tracers are what you seek. Designed to hug the canyonlands and rise and fall faster than Gamestonk."
          styles="6"
          originals="19"
          delay="2"
        />
        <Fleet
          section="hoppers"
          title="Hoppers"
          :rigs="hoppers"
          description="Hoppers are Tracers’ smaller, more nimble cousins. If you’re prone to whiting out, you’re gonna want a G-suit to keep the blood from pooling in your boots."
          styles="8"
          originals="25"
          delay="4"
        />
        <Fleet
          section="airelights"
          title="Airelights"
          :rigs="airelights"
          description="The heavy birds rule the alpine of Tableland. Perfect for fast inserts and massive lifts. But keep your diamond hands on the controls because what goes up must come down."
          styles="8"
          originals="21"
          delay="0"
        />
        <Fleet
          section="foils"
          title="Foils"
          :rigs="foils"
          description="Aero, fast, and light. Foils are Moore’s Law personified. If you need to get off-chain in a hurry, you’ll be glad you’ve got a foil."
          styles="6"
          originals="18"
          delay="2"
        />
        <!-- upgrades -->
        <section id="upgrades">
          <div class="container section-container">
            <div class="px-6 sm:px-12 pt-36 pb-12">
              <h1
                data-aos="fade-up"
                class="section-header font-Orbitron w-full h-auto text-5xl lg:text-6xl xl:text-7xl choose leading-tighter mb-10 lg:mb-18"
              >
                Community upgrades
              </h1>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                <img
                  src="~assets/img/rigs/community.jpg"
                  class="text-flow"
                  style="width: 100%"
                />
                The power of Rigs is in their ability to evolve with immutable
                on-chain rules—a powerful primitive enabled by the Tableland
                protocol. Based on how an owner decides to explore Tableland,
                their Rig will change before their eyes.
              </p>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                <!-- <img src="~assets/img/badge.png" class="text-flow right" style="width:30%;" /> -->
                While some builders move data day and night, others are there to
                help newcomers find their way, and still others spread the word
                back to The Grid. No matter their contributions, all builders
                are valued. Together, they've come to recognize a handful of
                special Badges that signal different contributions to Tableland.
              </p>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                Badges are distinct and can only be earned by working in
                Tableland. Engineers, validators, stewards, and educators
                display Badges on their Rig for all to see.
              </p>
              <div
                class="container flex flex-col items-center text-sm mb-10 lg:mb-18"
              >
                <div class="w-full grid gap-10 grid-cols-2 sm:grid-cols-3">
                  <figure class="m-auto">
                    <img src="~assets/img/rigs/badges/code.png" />
                    <figcaption class="text-center pt-2">
                      Earned by coding
                    </figcaption>
                  </figure>
                  <figure class="m-auto">
                    <img src="~assets/img/rigs/badges/teaching.png" />
                    <figcaption class="text-center pt-2">
                      Earned by teaching
                    </figcaption>
                  </figure>
                  <figure class="m-auto">
                    <img src="~assets/img/rigs/badges/education.png" />
                    <figcaption class="text-center pt-2">
                      Earned with education
                    </figcaption>
                  </figure>
                  <figure class="m-auto">
                    <img src="~assets/img/rigs/badges/rewards.png" />
                    <figcaption class="text-center pt-2">
                      Earned by network validators
                    </figcaption>
                  </figure>
                  <figure class="m-auto">
                    <img src="~assets/img/rigs/badges/success.png" />
                    <figcaption class="text-center pt-2">
                      Earned by killer apps
                    </figcaption>
                  </figure>
                  <figure class="m-auto">
                    <img src="~assets/img/rigs/badges/filecoin.png" />
                    <figcaption class="text-center pt-2">
                      Earned by leveraging Filecoin
                    </figcaption>
                  </figure>
                </div>
              </div>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                Builders sometimes contribute so much that they’ll only show
                their most prized Badges. Since badged Rigs stay badged, this
                custom is also a way for builders to leave a mark on their Rig
                forever—an experience powered by Tableland's protocols.
              </p>
              <div class="code mb-8 lg:mb-10" data-aos="fade-up">
                <pre>
                  <code>
tableland> UPDATE rig_badges SET visible = true WHERE rig_id = 56 AND badge_id = 17;
                  </code>
                </pre>
              </div>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                <img
                  src="~assets/img/rigs/badged.jpg"
                  class="text-flow"
                  style="width: 100%"
                />
                The Dawn Ski Piggy is an Original from the Tumbler Fleet. The
                owner is showing badges for their effors in coding and teaching.
              </p>
            </div>
          </div>
        </section>
        <!-- meatspace -->
        <section id="meatspace">
          <div class="container section-container">
            <div class="px-6 sm:px-12 pt-12 pb-32 lg:pb-48">
              <h1
                data-aos="fade-up"
                class="font-Orbitron w-full h-auto text-4xl lg:text-6xl choose leading-tighter mb-4 lg:mb-10"
              >
                Back in meatspace
              </h1>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                Sure, Rigs will come in handy if a couple of Sock Puppets try to
                jack you out on Satoshi Mesa. But back in meatspace, you're
                going to need your Rig to access the Tableland community and all
                its opportunities.
              </p>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light"
                data-aos="fade-up"
              >
                It all starts with the community
                <a href="https://discord.gg/hpd5WWn4Ys" target="_blank"
                  >Discord</a
                >, where Rig ownership will be checked at the door. We'll also
                be launching developer experiences that will only be available
                to Rig pilots. The first of these cohorts will launch this
                summer. From there, Tableland will serve as a launching point to
                join our regular community programs and special events, access
                funding and grants, and meet investors and collaborators.
              </p>
            </div>
          </div>
        </section>
        <!-- artists -->
        <section id="artists" class="bg-black pb-32 lg:pb-48">
          <div class="container section-container">
            <div class="px-6 sm:px-12 py-24 lg:py-48">
              <h1
                class="w-full h-auto font-Orbitron text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                The Artists
              </h1>
              <p
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                <img
                  src="~assets/img/rigs/oddfellows.jpg"
                  class="text-flow"
                  style="width: 100%"
                />
                The Rigs project was developed alongside an über-talented team
                of artists and writers from
                <a href="https://oddfellows.tv" target="_blank">Oddfellows</a>.
              </p>
              <h2
                data-aos="fade-up"
                class="font-Orbitron h-auto text-2xl lg:text-4xl choose leading-tighter mb-4 lg:mb-10"
              >
                Executive Creative Directors
              </h2>
              <div
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                <ul>
                  <li>
                    Chris Kelly (<a
                      href="https://www.instagram.com/chruskelly/"
                      target="_blank"
                      >Instagram</a
                    >)
                  </li>
                  <li>
                    Colin Trenter (<a
                      href="https://twitter.com/wesleytrents"
                      target="_blank"
                      >Twitter</a
                    >)
                  </li>
                </ul>
              </div>
              <h2
                data-aos="fade-up"
                class="font-Orbitron h-auto text-2xl lg:text-4xl choose leading-tighter mb-4 lg:mb-10"
              >
                Executive Producer
              </h2>
              <div
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                <ul>
                  <li>
                    Erica Kelly (<a
                      href="https://www.instagram.com/ericafellow/"
                      target="_blank"
                      >Instagram</a
                    >)
                  </li>
                </ul>
              </div>
              <h2
                data-aos="fade-up"
                class="font-Orbitron h-auto text-2xl lg:text-4xl choose leading-tighter mb-4 lg:mb-10"
              >
                Producers
              </h2>
              <div
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                <ul>
                  <li>
                    Dennis Samatulski (<a
                      href="https://www.dennisdidthat.com/"
                      target="_blank"
                      >Homepage</a
                    >)
                  </li>
                  <li>
                    Desiree Etzel (<a
                      href="https://www.instagram.com/desetzel/"
                      target="_blank"
                      >Instagram</a
                    >)
                  </li>
                </ul>
              </div>
              <h2
                data-aos="fade-up"
                class="font-Orbitron h-auto text-2xl lg:text-4xl choose leading-tighter mb-4 lg:mb-10"
              >
                Art Direction
              </h2>
              <div
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                <ul>
                  <li>Yuki Yamada</li>
                </ul>
              </div>
              <h2
                data-aos="fade-up"
                class="font-Orbitron h-auto text-2xl lg:text-4xl choose leading-tighter mb-4 lg:mb-10"
              >
                Design Team
              </h2>
              <div
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                <ul>
                  <li>
                    Joyce Liu (<a
                      href="https://twitter.com/joiceloo_art"
                      target="_blank"
                      >Twitter</a
                    >)
                  </li>
                  <li>
                    Amy Sun (<a
                      href="https://www.instagram.com/amysunstory/"
                      target="_blank"
                      >Instagram</a
                    >)
                  </li>
                  <li>Yuki Yamada</li>
                  <li>
                    Justin Burks (<a
                      href="https://www.instagram.com/justin_burks_/"
                      target="_blank"
                      >Instagram</a
                    >)
                  </li>
                  <li>
                    Caroline Choi (<a
                      href="https://www.instagram.com/j._.n/"
                      target="_blank"
                      >Instagram</a
                    >)
                  </li>
                </ul>
              </div>
              <h2
                data-aos="fade-up"
                class="font-Orbitron h-auto text-2xl lg:text-4xl choose leading-tighter mb-4 lg:mb-10"
              >
                Story Development
              </h2>
              <div
                class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"
                data-aos="fade-up"
              >
                <ul>
                  <li>
                    inside.company (<a
                      href="https://www.inside.company/"
                      target="_blank"
                      >Website</a
                    >)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <Showcase use-break="true" />
    <FooterNav />
  </div>
</template>

<script>
import helpers from "~/plugins/helpers";

export default {
  data() {
    const now = new Date();
    const launchDate = new Date(2022, 5, 17, 10, 0);
    return {
      nav: [
        {
          title: "Story",
          href: "#story",
        },
        {
          title: "Fleets",
          href: "#fleets",
        },
        {
          title: "Upgrades",
          href: "#upgrades",
        },
        {
          title: "Artists",
          href: "#artists",
        },
        {
          title: "Mint a Rig",
          href: "/minter/"
        },
      ],
      time: launchDate - now,
      rigs: helpers.getRigs(20),
      titans: helpers.getRigs(20, "titans"),
      tumblers: helpers.getRigs(20, "tumblers"),
      sleds: helpers.getRigs(20, "sleds"),
      edge_riders: helpers.getRigs(20, "edge_riders"),
      tracers: helpers.getRigs(20, "tracers"),
      hoppers: helpers.getRigs(20, "hoppers"),
      airelights: helpers.getRigs(20, "airelights"),
      foils: helpers.getRigs(20, "foils"),
    };
  },

  head() {
    return {
      title: "The Tableland NFT: Rigs",
      meta: [
        { hid: "og-url", property: "og:url", content: `${this.$route.path}` },
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "og-title",
          property: "og:title",
          content: "The Tableland NFT: Rigs",
        },
        {
          hid: "og-sitename",
          property: "og:site_name",
          content: "tableland.xyz/rigs",
        },
        {
          hid: "og-desc",
          property: "og:description",
          content:
            "A generative NFT built from 1,074 handcrafted works of art for the builders and creatives of cyberspace.",
        },
        {
          hid: "og-image",
          property: "og:image",
          content: "https://i.imgur.com/5YHLnkC.png",
        },
      ],
    };
  },

  computed: {
    ethereum() {
      return window.ethereum;
    },
  },

  mounted() {
    // eslint-disable-next-line new-cap
    this.lmS = new this.locomotiveScroll({
      el: document.querySelector("#js-scroll"),
      smooth: true,
    });
  },
};
</script>
