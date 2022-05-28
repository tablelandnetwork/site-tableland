<template>
  <div class="mint-page">
    <!-- Header -->
    <HeaderNav></HeaderNav>
    <div class="ship" data-aos="fade-down" data-aos-anchor=".info" data-aos-offset="0"></div>
    <header class="bg-navbar" data-aos="fade-down" data-aos-anchor=".choose" data-aos-offset="0">
      <nav class="container px-6 md:px-9 lg:px-16 flex items-center py-2">
        <div class="py-4 logo">
          <a href="/"><img src="~assets/img/logo-black.svg" alt="Tableland" class="lg:h-5 h-4"></a>
        </div>
        <ul class="flex flex-1 justify-end items-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-12 uppercase ml-3">
          <li class="hidden sm:inline-block"><a href="#story">Story</a></li>
          <li class="hidden sm:inline-block"><a href="#community">Community</a></li>
          <li class="hidden sm:inline-block"><a href="#fleets">Fleets</a></li>
          <li class="hidden sm:inline-block"><a href="#badges">Badges</a></li>
          <li class="hidden sm:inline-block"><a href="#artists">Artists</a></li>
          <li><a href="https://discord.gg/hpd5WWn4Ys" target="_blank" class="btn bg-black text-white">Join Discord</a></li>
        </ul>
      </nav>
    </header>
    <!-- hero -->
    <section class="minting">
      <div class="minting-top"></div>
      <div class="container px-0 sm:px-12 md:px-36 lg:px-48 xl:px-12 flex pt-8 lg:pt-12 2xl:pt-32 justify-between">
        <div class="lg:w-full px-6 lg:pb-12 pb-6 pt-12" data-aos="fade-up">
          <div class="lg:flex">
            <div class="lg:w-2/3 w-full pt-6" data-aos="fade-up">
              <h1 class="w-full h-auto font-Orbitron text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-12 lg:mb-10" data-aos="fade-up">
                Meet the <span class="font-black">Rigs</span>
              </h1>
            </div>
            <div class="lg:w-1/3 w-full px-0 lg:px-0 lg:pt-10 pt-0 text-right" data-aos="fade-up">
              <h2 class="text-white font-Orbitron text-2xl md:text-2xl lg:text-3xl xl:text-4xl pt-5" data-aos="fade-up">
                <countdown :time="time">
                  <template slot-scope="props">{{ props.days }}d:{{ props.hours }}h:{{ props.minutes }}m:{{ props.seconds }}s</template>
                </countdown>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="flex" style="margin-top:-50px;">
        <div class="animated-carousel w-full">
          <div class="vehicle"><img src="~assets/img/rigs/all/0.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/1.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/2.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/3.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/4.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/5.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/6.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/7.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/8.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/9.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/10.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/11.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/12.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/13.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/14.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/15.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/16.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/17.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/18.jpg" /></div>
          <div class="vehicle"><img src="~assets/img/rigs/all/19.jpg" /></div>
        </div>
      </div>
      <div class="container px-0 pt-0 sm:px-12 md:px-36 lg:px-48 xl:px-12 pt-0 lg:pt-0">
        <div class="flex">
          <div class="w-full md:w-full lg:w-1/2 xl:w-1/2 px-6 lg:pb-0 pb-0 pt-0">
            <h1 class="text-white w-full h-auto text-xl md:text-2xl xl:text-2xl leading-tighter mb-4 lg:mb-10">
              A generative NFT built from 1,043 handcrafted works of art for the builders and creatives of cyberspace. Coming June 2022.
            </h1>
          </div>
        </div>
        <div class="flex">
          <div class="w-full px-6 lg:pb-0 pb-0 pt-0">
            <a href="/rigs-preview" class="btn bg-black text-white">View sample outputs</a>
          </div>
        </div>
      </div>
    </section>

    <div class="info">
      <!-- story -->
      <section id="story">
        <div class="container px-64">
          <div class="lg:px-12 py-6 md:py-24">
            <h1 data-aos="fade-up" class="text-center font-Orbitron w-full h-auto text-4xl lg:text-6xl choose leading-tighter mb-4 lg:mb-10">
              Tableland awaits...
            </h1>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              <em>...but you're going to need a Rig to get there.</em>
            </p>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              <img src="~assets/img/story/pioneer_1.jpg" class="text-flow right" style="width:30%;" />
              It's 2133. The metaverse is now ubiquitous. The singularity caused a re-permissioning of cyberspace. It turns out that AGI was benevolent—human and machine are now one, but most sentients are cogs in the great megalopolis known as The Grid.
            </p>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              The builder migration started slow. We don’t know who took the first step, only that it led to the mysterious subculture we see today. Hailing from the deep mainframe tunnels to the billionth floor of the mega towers, an eclectic group of builders formed a new community away from The Grid. A decentralized zone, void of old rules. They wanted adventure born of pure curiosity and imagination. Something authentic. Something theirs—like their predecessors had a century before.
            </p>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              <img src="~assets/img/story/grid.jpg" class="text-flow left" style="width:50%;" />
              Out beyond The Grid, where the broad boulevards dissolve into dust and then yawn into the great open source country, you’ll find Tableland. The undeveloped frontier. Terabyte upon terabyte of space waiting to be written into history. It’s where the builders have gone. Divided into Fleets, pilots work day and night to map the canyons and high desert of Tableland. They prepare it for future generations of creators and dreamers. You’re invited.
            </p>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              It's a long journey and the land is vast even after you get there. It’s raw, uncoded, and simmering with endless opportunity. You're going to need a tool to explore. Fortunately, you've got the skills. You know how to build.
            </p>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              <img src="~assets/img/story/pioneer_2.jpg" class="text-flow right" style="width:30%;" />
              Like many others, you scan the chains for wreckage of technology from the web of yore. Part by part, you assemble your Rig to achieve specific tasks. This is your custom machine. There are none that are like it, and this one is yours. It’s a purpose-built code-based ticket to Tableland. And what you do with it is totally up to you.
            </p>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light" data-aos="fade-up">
              Hop inside and confirm your signature. There is a lot yet to do. Beyond the certainty of The Grid, a new community and journey awaits in Tableland.
            </p>
          </div>
        </div>
      </section>
      <!-- community -->
      <section id="community">
        <div class="container px-64">
          <div class="lg:px-12 py-6 md:py-24">
            <h1 data-aos="fade-up" class="text-center font-Orbitron w-full h-auto text-4xl lg:text-6xl choose leading-tighter mb-4 lg:mb-10">
              A unique ticket to the Tableland community
            </h1>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              <img src="~assets/img/story/meet_the_pioneers2.png" class="text-flow right" style="width:100%;" />
              Rigs are generated from 1,043 handcrafted works of art for the builders of cyberspace. They are a ticket and the only way to join the Tableland community. Rigs are updated using token-based rules and changes are directly visible on all NFT platforms—a powerful primitive enabled by the Tableland protocol.
            </p>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light" data-aos="fade-up">
              The power of Rigs is in their ability to evolve with immutable on-chain rules. Based on how an owner decides to explore Tableland, their Rig will change before their eyes.
            </p>
          </div>
        </div>
      </section>
      <!-- fleets -->
      <section id="fleets">
        <div class="container px-64">
          <div class="lg:px-12 py-6 md:py-24">
            <h1 data-aos="fade-up" class="text-center font-Orbitron w-full h-auto text-4xl lg:text-6xl leading-tighter mb-4 lg:mb-10">
              Fleets
            </h1>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              From fast and flat salts to the windy and steep desert mountains, each domain of Tableland demands a different tool to explore. Rigs are divided into eight mission-specific Fleets. Each is engineered to navigate the harsh and unforgiving landscape of Tableland. You'll find the whole Tableland community is ready to welcome you, but your Fleet feels like old friends.
            </p>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              Each Rig is assembled from the parts of machines that built the first truly user-owned metaverse a century before—now affectionately called The Original—decades before the rise of The Grid. These were the Original Rigs, now discarded, disassembled, and forgotten in the back alleys of The Grid.
            </p>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              Most builders fly parts from different Original Rigs. Since the beginning, they have maintained a Rig part table. The table contains 1,043 known parts that have been tracked from The Grid. Within Fleets, parts are modular, interoperable, and differ in rarity. If a rare part is ever lost, it may never be seen in Tableland again.
            </p>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light" data-aos="fade-up">
              Combining parts can be quite useful in Tableland. Nevertheless, a small faction of degens are obsessed with re-building every Original Rig. So far, they have managed to assemble one of each Original Rig—185 in total. If you pilot an Original, consider yourself lucky.
            </p>
          </div>
        </div>
      </section>
      <section id="titans">
        <div class="container px-64">
          <div class="lg:px-12 py-6">
            <h1 data-aos="fade-up" class="text-center font-Orbitron w-full h-auto text-3xl lg:text-4xl leading-tighter mb-4 lg:mb-10">
              Titans
            </h1>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              Heavy loader, lifters, and haulers of the high desert. The Titans are the muscle of Tableland. If you need to get sh*t done, you’re gonna need a Titan.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="animated-carousel w-full">
            <div class="vehicle"><img src="~assets/img/rigs/titans/0.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/1.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/2.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/3.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/4.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/5.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/6.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/7.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/8.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/9.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/10.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/11.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/12.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/13.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/14.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/15.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/16.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/17.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/18.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/titans/19.jpg" /></div>
          </div>
        </div>
      </section>
      <section id="tumblers">
        <div class="container px-64">
          <div class="lg:px-12 py-6">
            <h1 data-aos="fade-up" class="text-center font-Orbitron w-full h-auto text-3xl lg:text-4xl leading-tighter mb-4 lg:mb-10">
              Tumblers
            </h1>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              Titans younger brother. Tumblers are a bundle of might packed into a small package. They can fit into tight spaces and what they lack in cargo capacity they make up for in range and agility.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="animated-carousel w-full">
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/0.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/1.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/2.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/3.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/4.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/5.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/6.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/7.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/8.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/9.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/10.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/11.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/12.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/13.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/14.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/15.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/16.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/17.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/18.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tumblers/19.jpg" /></div>
          </div>
        </div>
      </section>
      <section id="Sleds">
        <div class="container px-64">
          <div class="lg:px-12 py-6">
            <h1 data-aos="fade-up" class="text-center font-Orbitron w-full h-auto text-3xl lg:text-4xl leading-tighter mb-4 lg:mb-10">
              Sleds
            </h1>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              Running the salt flats takes focus. If you need a stable Rig for the fast and straight, set your sights on a sled. Sure they’re loud, but it drowns out the sound of your teeth vibrating in your skull as you break the sound barrier.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="animated-carousel w-full">
            <div class="vehicle"><img src="~assets/img/rigs/sleds/0.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/1.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/2.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/3.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/4.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/5.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/6.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/7.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/8.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/9.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/10.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/11.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/12.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/13.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/14.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/15.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/16.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/17.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/18.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/sleds/19.jpg" /></div>
          </div>
        </div>
      </section>
      <section id="edgeriders">
        <div class="container px-64">
          <div class="lg:px-12 py-6">
            <h1 data-aos="fade-up" class="text-center font-Orbitron w-full h-auto text-3xl lg:text-4xl leading-tighter mb-4 lg:mb-10">
              Edge Riders
            </h1>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              Two wheels. One Edge. Nuff said.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="animated-carousel w-full">
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/0.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/1.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/2.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/3.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/4.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/5.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/6.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/7.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/8.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/9.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/10.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/11.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/12.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/13.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/14.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/15.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/16.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/17.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/18.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/edge_riders/19.jpg" /></div>
          </div>
        </div>
      </section>
      <section id="tracers">
        <div class="container px-64">
          <div class="lg:px-12 py-6">
            <h1 data-aos="fade-up" class="text-center font-Orbitron w-full h-auto text-3xl lg:text-4xl leading-tighter mb-4 lg:mb-10">
              Tracers
            </h1>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              If you’ve got verticality issues then Tracers are what you seek. Designed to hug the canyonlands and rise and fall faster than Gamestonk.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="animated-carousel w-full">
            <div class="vehicle"><img src="~assets/img/rigs/tracers/0.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/1.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/2.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/3.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/4.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/5.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/6.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/7.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/8.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/9.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/10.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/11.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/12.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/13.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/14.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/15.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/16.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/17.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/18.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/tracers/19.jpg" /></div>
          </div>
        </div>
      </section>
      <section id="hoppers">
        <div class="container px-64">
          <div class="lg:px-12 py-6">
            <h1 data-aos="fade-up" class="text-center font-Orbitron w-full h-auto text-3xl lg:text-4xl leading-tighter mb-4 lg:mb-10">
              Hoppers
            </h1>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              Hoppers are Tracers’ smaller, more nimble cousins. If you’re prone to whiting out, you’re gonna want a G-suit to keep the blood from pooling in your boots.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="animated-carousel w-full">
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/0.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/1.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/2.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/3.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/4.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/5.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/6.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/7.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/8.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/9.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/10.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/11.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/12.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/13.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/14.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/15.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/16.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/17.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/18.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/hoppers/19.jpg" /></div>
          </div>
        </div>
      </section>
      <section id="airelights">
        <div class="container px-64">
          <div class="lg:px-12 py-6">
            <h1 data-aos="fade-up" class="text-center font-Orbitron w-full h-auto text-3xl lg:text-4xl leading-tighter mb-4 lg:mb-10">
              Airelights
            </h1>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              The heavy birds rule the alpine of Tableland. Perfect for fast inserts and massive lifts. But keep your diamond hands on the controls because what goes up must come down.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="animated-carousel w-full">
            <div class="vehicle"><img src="~assets/img/rigs/airelights/0.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/1.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/2.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/3.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/4.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/5.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/6.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/7.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/8.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/9.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/10.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/11.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/12.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/13.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/14.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/15.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/16.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/17.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/18.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/airelights/19.jpg" /></div>
          </div>
        </div>
      </section>
      <section id="foils">
        <div class="container px-64">
          <div class="lg:px-12 py-6">
            <h1 data-aos="fade-up" class="text-center font-Orbitron w-full h-auto text-3xl lg:text-4xl leading-tighter mb-4 lg:mb-10">
              Foils
            </h1>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              Aero, fast, and light. Foils are Moore’s Law personified. If you need to get off-chain in a hurry, you’ll be glad you’ve got a foil.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="animated-carousel w-full">
            <div class="vehicle"><img src="~assets/img/rigs/foils/0.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/1.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/2.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/3.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/4.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/5.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/6.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/7.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/8.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/9.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/10.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/11.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/12.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/13.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/14.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/15.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/16.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/17.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/18.jpg" /></div>
            <div class="vehicle"><img src="~assets/img/rigs/foils/19.jpg" /></div>
          </div>
        </div>
      </section>

      <!-- badges -->
      <section id="badges">
        <div class="container px-64">
          <div class="lg:px-12 py-6 md:py-24">
            <h1 data-aos="fade-up" class="text-center font-Orbitron w-full h-auto text-4xl lg:text-6xl choose leading-tighter mb-4 lg:mb-10">
              Badges
            </h1>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              <img src="~assets/img/badge.png" class="text-flow right" />
              There is a lot of work to do in Tableland. While some builders move data day and night, others are there to help newcomers find their way, and still others spread the word back to The Grid. No matter their contributions, all builders are valued. Together, they've come to recognize a handful of special Badges that signal different contributions to Tableland.
            </p>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              Badges are distinct and can only be earned by working in Tableland. Engineers, validators, stewards, and educators display Badges on their Rig for all to see. Builders sometimes contribute so much that they’ll only show their most prized Badges. Since badged Rigs stay badged, this custom is also a way for builders to leave a mark on their Rig forever—an experience powered by Tableland's protocols.
            </p>
            <p class="code" data-aos="fade-up">
              <pre>
                <code>UPDATE rig_badges SET visible = true WHERE rig_id = 56 AND badge_id = 17;</code>
              </pre>
            </p>
          </div>
        </div>
      </section>

      <!-- artists -->
      <section id="artists">
        <div class="container px-64">
          <div class="lg:px-12 py-6 md:py-24">
            <h1 data-aos="fade-up" class="text-center font-Orbitron w-full h-auto text-4xl lg:text-6xl choose leading-tighter mb-4 lg:mb-10">
              The Artists
            </h1>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              <img src="~assets/img/story/oddfellows.jpg" class="text-flow" style="width:100%;" />
              The Rigs project was developed alongside an über-talented team of artists and writers from <a href="https://oddfellows.tv" target="_blank">Oddfellows</a>.
            </p>
            <h2 data-aos="fade-up" class="font-Orbitron h-auto text-2xl lg:text-4xl choose leading-tighter mb-4 lg:mb-10">
              Executive Creative Directors
            </h2>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              <ul>
                <li>Chris Kelly (<a href="https://www.instagram.com/chruskelly/" target="_blank">Instagram</a>)</li>
                <li>Colin Trenter (<a href="https://twitter.com/wesleytrents" target="_blank">Twitter</a>)</li>
              </ul>
            </p>
            <h2 data-aos="fade-up" class="font-Orbitron h-auto text-2xl lg:text-4xl choose leading-tighter mb-4 lg:mb-10">
              Executive Producer
            </h2>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              <ul>
                <li>Erica Kelly (<a href="https://www.instagram.com/ericafellow/" target="_blank">Instagram</a>)</li>
              </ul>
            </p>
            <h2 data-aos="fade-up" class="font-Orbitron h-auto text-2xl lg:text-4xl choose leading-tighter mb-4 lg:mb-10">
              Producers
            </h2>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              <ul>
                <li>Dennis Samatulski (<a href="https://www.dennisdidthat.com/" target="_blank">Homepage</a>)</li>
                <li>Desiree Etzel (<a href="https://www.instagram.com/desetzel/" target="_blank">Instagram</a>)</li>
              </ul>
            </p>
            <h2 data-aos="fade-up" class="font-Orbitron h-auto text-2xl lg:text-4xl choose leading-tighter mb-4 lg:mb-10">
              Art Direction
            </h2>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              <ul>
                <li>Yuki Yamada</li>
              </ul>
            </p>
            <h2 data-aos="fade-up" class="font-Orbitron h-auto text-2xl lg:text-4xl choose leading-tighter mb-4 lg:mb-10">
              Design Team
            </h2>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              <ul>
                <li>Joyce Liu (<a href="https://twitter.com/joiceloo_art" target="_blank">Twitter</a>)</li>
                <li>Amy Sun (<a href="https://www.instagram.com/amysunstory/" target="_blank">Instagram</a>)</li>
                <li>Yuki Yamada</li>
                <li>Justin Burks (<a href="https://www.instagram.com/justin_burks_/" target="_blank">Instagram</a>)</li>
                <li>Caroline Choi (<a href="https://www.instagram.com/j._.n/" target="_blank">Instagram</a>)</li>
              </ul>
            </p>
            <h2 data-aos="fade-up" class="font-Orbitron h-auto text-2xl lg:text-4xl choose leading-tighter mb-4 lg:mb-10">
              Writing Direction
            </h2>
            <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              <ul>
                <li>inside.company (<a href="https://www.inside.company/" target="_blank">Website</a>)</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </div>

    <footer class="text-blue py-10">
      <nav class="container px-6 md:px-9 lg:px-16 py-2">
        <div class="hidden py-4">
          <img id="js-scroll" src="~assets/img/logo-white.svg" alt="Tableland" class="h-5">
        </div>
        <ul class="flex justify-center items-center gap-x-3 sm:gap-x-6 md:gap-x-12 xl:gap-x-24 uppercase text-xs">
          <li class="hidden md:inline-block"><a href="https://twitter.com/tableland__">Twitter</a></li>
          <li><a href="https://textile.notion.site/Tableland-Grants-Funding-ebc1f398d53a481d94f090ab12d93be0">Grants</a></li>
          <li class="hidden md:inline-block"><a href="https://boards.greenhouse.io/textileio">Jobs</a></li>
          <li><a href="https://hhueol4i6vp.typeform.com/to/sgtDW2Xt">Token Info</a></li>
          <li><a href="https://docs.tableland.xyz/general/community/partners">Partners</a></li>
          <li><a href="https://textile.notion.site/Tableland-Privacy-Policy-6fd160e7f485491d9dc4cbab188043d5">Privacy</a></li>
          <li><a href="https://textile.notion.site/Tableland-Terms-of-Use-cf80f1b550b843ad9d4b8c3140b78e35">Terms</a></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  data: function () {
    const now = new Date();
    const launchDate = new Date(2022, 5, 14, 10, 0);
    return {
      time: launchDate - now
    };
  },
  head: function () {
    return {
      title: 'The Tableland NFT: Rigs',
      meta: [
        { hid: 'og-url', property: 'og:url', content: `/${this.$route.path}` },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'Meet the Rigs' },
        { hid: 'og-sitename', property: 'og:site_name', content: 'Tableland—Build web3 with SQL' },
        { hid: 'og-desc', property: 'og:description', content: 'A generative NFT with 1,043 handcrafted works of art. Rigs are your ride to Tableland.' },
        {
          hid: 'og-image',
          property: 'og:image',
          content: 'https://i.imgur.com/5YHLnkC.png'
        }
      ]
    };
  },
  computed: {
    ethereum: function () {
      return window.ethereum;
    }
  },
  mounted: function () {
    // eslint-disable-next-line new-cap
    this.lmS = new this.locomotiveScroll({
      el: document.querySelector('#js-scroll'),
      smooth: true
    });
  }
};
</script>
