<template>
  <div>
    <!-- Header -->
    <header class="bg-navbar" data-aos="fade-down" data-aos-anchor=".choose">
      <nav class="container px-6 md:px-9 lg:px-16 flex items-center py-2">
        <div class="py-4">
          <img src="~assets/img/logo-black.svg" alt="Tableland" class="h-5">
        </div>
        <ul class="flex flex-1 justify-end items-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-12 uppercase ml-3">
          <li><a href="#start">Rigs</a></li>
          <li><a href="#fleets">Fleets</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#whitelist" class="btn bg-black text-white">Join Discord</a></li>
        </ul>
      </nav>
    </header>

    <!-- minting -->
    <section class="minting">
      <nav class="container px-6 md:px-9 lg:px-16 flex items-center py-2 pt-10">
        <div class="py-4">
          <img src="~assets/img/logo-black.svg" alt="Tableland" class="h-5">
        </div>
        <ul class="flex flex-1 justify-end items-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-12 uppercase ml-3">
          <li><a href="https://mirror.xyz/tableland.eth">Blog</a></li>
          <li><a href="/cohort">Cohort</a></li>
          <li><a href="/minting">Mint</a></li>
          <li><a href="https://discord.gg/hpd5WWn4Ys" target="_blank">Discord</a></li>
          <li><a href="https://docs.tableland.xyz">Docs</a></li>
          <li><a href="https://docs.tableland.xyz" class="btn bg-black text-white">Get started</a></li>
        </ul>
      </nav>
      <div class="container px-6 sm:px-12 md:px-36 lg:px-48 flex pt-12 lg:pt-12">

        <div class="lg:w-full px-12 lg:pb-32 pb-12 pt-12" data-aos="fade-up">

          <div class="lg:flex">
            <div class="lg:w-1/2 w-full" data-aos="fade-up">
              <h1 class="text-white font-Orbitron w-full h-auto text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10" data-aos="fade-up">
                Tableland Awaits
              </h1>
              <p class="text-white text-l lg:text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                Out beyond the megalopolis, where the broad boulevards of The Grid dissolve into dust and then yawn into great open source plains, you’ll find Tableland. The undeveloped frontier. Terabyte upon terabyte of space waiting to be written into history. It’s raw, uncoded, and simmering with endless opportunity – and incalculable peril. So climb into your Rig and hold onto your brain chips. If you play this one right, the possibilities are endless.
              </p>

            </div>
            <div class="lg:w-1/2 w-full px-0 lg:px-12 pt-4" data-aos="fade-up">

              <h1 data-aos="fade-up" class="font-Orbitron text-white w-full h-auto text-2xl md:text-4xl leading-tighter mb-4 lg:mb-10">A generative 10K NFT with 1,043 handcrafted works of art</h1>
              <div class="flex">
                <div class="w-1/2 " data-aos="fade-up">
                  <h3 class="lg:text-2xl text-xl text-white" data-aos="fade-up">PRICE</h3>
                  <h2 class="lg:text-4xl text-2xl text-white font-Orbitron" data-aos="fade-up">0.05 ETH</h2>
                  <br><br>
                  <h3 class="lg:text-2xl text-xl text-white" data-aos="fade-up">TOTAL SUPPLY</h3>
                  <h2 class="lg:text-4xl text-2xl text-white font-Orbitron" data-aos="fade-up">10,000</h2>

                </div>
                <div class="w-1/2">
                  <h3 class="lg:text-2xl text-xl text-white" data-aos="fade-up">WHITELIST LOCK</h3>
                  <h2 class="lg:text-4xl text-2xl text-white font-Orbitron" data-aos="fade-up">05-30-22</h2>
                  <br><br>
                  <h3 class="lg:text-2xl text-xl text-white" data-aos="fade-up">AVAILABLE IN</h3>
                  <h2 class="lg:text-4xl text-2xl text-white font-Orbitron" data-aos="fade-up"><countdown :time="2 * 24 * 60 * 60 * 1000"><template slot-scope="props">{{ props.days }}d:{{ props.hours }}h:{{ props.minutes }}m:{{ props.seconds }}s</template></countdown></h2>  
                </div>
              </div>
              <div class="flex">
                <div class="w-full pt-12">
                  <a href="https://docs.tableland.xyz" class="btn bg-black text-white" data-aos="fade-up">Join Discord</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <!-- rig -->
      <section class="info" id="start">
          <div class="container px-16 ">
            <div class="flex">
              <div class="animated-carousel w-full float-frame" >
                  <div class="vehicle" data-aos="fade-up"><img src="~assets/img/veh_10.png"/></div>
                  <div class="vehicle pt-48" data-aos="fade-up"><img class="a-1" src="~assets/img/veh_2.png"/></div>
                  <div class="vehicle pt-12" data-aos="fade-up"><img class="a-2" src="~assets/img/veh_3.png"/></div>
                  <div class="vehicle pt-24" data-aos="fade-up"><img class="a-3" src="~assets/img/veh_4.png"/></div>
                  <div class="vehicle pt-14" data-aos="fade-up"><img class="a-1" src="~assets/img/veh_5.png"/></div>
                  <div class="vehicle pt-48" data-aos="fade-up"><img class="a-3" src="~assets/img/veh_6.png"/></div>
                  <div class="vehicle pt-32" data-aos="fade-up"><img class="a-2" src="~assets/img/veh_7.png"/></div>
                  <div class="vehicle pt-6" data-aos="fade-up"><img class="a-1" src="~assets/img/veh_9.png"/></div>
              </div>
            </div>
            <div class="flex">
              <div class="w-1/2 px-12 py-0">
                <div class="carousel" data-aos="fade-up">
                	<div><img src="~assets/img/slide_1.jpg"/></div>
                  <div><img src="~assets/img/slide_2.jpg"/></div>
                  <div><img src="~assets/img/slide_3.jpg"/></div>
                  <div><img src="~assets/img/slide_4.jpg"/></div>
                  <div><img src="~assets/img/slide_5.jpg"/></div>
                </div>
              </div>
              <div class="w-1/2 px-12 py-32" >
                <h1 data-aos="fade-up" class="font-Orbitron w-full h-auto text-6xl choose leading-tighter mb-4 lg:mb-10">
                  Choose a RIG
                </h1>
                <p class="text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                  Your Rig is your custom machine. There are none that are like it, and this one is yours. It’s a purpose-built code-based machine and your key to Tableland. Each Rig is minted from a set of modular code blocks with unique attributes to achieve specific tasks. And what you’ll do with it is totally up to you
                </p>
                <p class="text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                  Tableland Rigs are divided into eight mission specific Fleets . Each is engineered to navigate the harsh and unforgiving landscape of Tableland. Your Fleet is your new family and its customs, rituals, and alliances will guide and protect you.
                </p>
              </div>
            </div>
            <div class="flex py-12">
              <div class="w-1/2 px-12 py-0" >
                <h1 data-aos="fade-up" class="font-Orbitron w-full h-auto text-6xl leading-tighter mb-4 lg:mb-10">
                  Congrats, it's a MATCH!
                </h1>
                <p data-aos="fade-up" class="text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
                  Each Rig is minted using randomization subroutines to ensure complete uniqueness. Rigs are born from a parts and Mods ledger called the Rarity Table. Every so often the components of a Rig come together in an infinitesimally elusive set called a Match Rig . If you got one, consider yourself lucky. They’re exceedingly rare and staggeringly valuable. If you have a Match, be prepared to guard it with your life.
                </p>
              <div class="flex">
                <p class="font-Orbitron text-3xl" data-aos="fade-up" >Use SQL to query for parts and Mods. Dig into rarity data
                or integrate them into a new NFT or world.</p>
                </div>
                <div class="flex py-12">
                  <div class="w-1/2" data-aos="fade-up">
                    <h3 class="text-2xl">TOTAL RIG STYLES</h3>
                    <h2 class="text-4xl font-Orbitron">67</h2>
                  </div>
                  <div class="w-1/2" data-aos="fade-up">
                    <h3 class="text-2xl">TOTAL MATCH RIGS</h3>
                    <h2 class="text-4xl font-Orbitron">187</h2>
                  </div>
                </div>
                <div class="flex">
                  <div class="w-1/2" data-aos="fade-up">
                    <h3 class="text-2xl">POSSIBLE RIG SETUPS</h3>
                    <h2 class="text-4xl font-Orbitron">1,000,000,000+</h2>
                  </div>
                </div>
              </div>
              <div class="w-1/2 mt-48 part-frame">

                <img class="part part_1" src="~assets/img/part_1.png" data-aos="fade-up"/>
                <img class="part a-2 part_2" src="~assets/img/part_2.png" data-aos="fade-up"/>
                <img class="part a-1 part_3" src="~assets/img/part_3.png" data-aos="fade-up"/>
                <img class="part a-3 part_4" src="~assets/img/part_4.png" data-aos="fade-up"/>
                <img class="part a-1 light_1" src="~assets/img/light_1.png" data-aos="fade-up"/>
                <img class="part light_2" src="~assets/img/light_2.png" data-aos="fade-up"/>
              </div>
            </div>
            <div class="flex py-12">
              <div class="w-1/2 mt-16" >
                <img src="~assets/img/token.png" data-aos="fade-up" />
              </div>
              <div class="w-1/2 px-12 py-36" >
                <h1 data-aos="fade-up" class="font-Orbitron w-full h-auto text-6xl leading-tighter mb-4 lg:mb-10">
                  Rigs are packed with utility and rich interaction.
                </h1>
                <p data-aos="fade-up" class="text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
                  Each Rig is minted using randomization subroutines to ensure complete uniqueness. Rigs are born from a parts and Mods ledger called the Rarity Table. Every so often the components of a Rig come together in a infinitesimally elusive set called a Match Rig. If you got one, consider yourself lucky. They’re exceedingly rare and staggerlying valuable. If you have a Match, be prepared to guard it with your life.
                </p>
              </div>
            </div>
            <div class="flex py-12 pb-48 text-left">
              <div class="w-1/3 px-12 py-0">
                <img class="icon py-12" src="~assets/img/wrench.png" data-aos="fade-up"/>
                <p class="font-Orbitron text-3xl" data-aos="fade-up">BUILDER COHORT ONBOARDING</p><br>
                <p class="text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">Community is at the heart of Tableland. We’re excited to launch a developer mentoring and onboarding program. These cohorts will run seasonally. The summer session will be starting after the Rigs launch in early June.</p>
              </div>
              <div class="w-1/3 px-12 py-0">
                <img class="icon py-12" src="~assets/img/chip.png" data-aos="fade-up"/>
                <p class="font-Orbitron text-3xl" data-aos="fade-up">BUILDER ACCESS TO TESTNET</p><br>
                <p class="text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">We are aiming for a high-touch onboarding experience. Rigs are the key to testnet. After earning enough POAP to claim a Rig, cohort members will be able to join owner channels in Tableland Discord and start building.</p>
              </div>
              <div class="w-1/3 px-12 py-0">
                <img class="icon py-12 " src="~assets/img/match.png" data-aos="fade-up"/>
                <p class="font-Orbitron text-3xl" data-aos="fade-up">EXCLUSIVE ACCESS TO PROGRAMS</p><br>
                <p class="text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                  <ul>
                    <li>• Funding opportunities including grant and reward incentives only available to Rig holders. </li>
                    <li>• Investor pitches for builders. </li>
                    <li>• Events including virtual and in-person. </li>
                    <li>• Access to bi-weekly protocol status updates from core Tableland team.</li>
                  </ul>
                </p>
              </div>
            </div>
            <div class="flex mb-48">

              <div class="w-1/2 px-12 py-12" >
                <h1 data-aos="fade-up" class="font-Orbitron w-full h-auto text-6xl  leading-tighter mb-4 lg:mb-10">
                  Rig Badges, powered by POAP
                </h1>
                <p class="text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                  Rig Badges are where the fun begins. Earners of Tableland POAP can alter the state of their Rig by layering Badges, leaving their mark on the token forever. This experience is enabled by Tableland’s unique blend of trait mutability governed by token-based rules. Use SQL to control which badges are visible in a particular context or world.
                </p>
                <p class="text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                  In Tableland, this kind of integration can be built into any NFT project using existing POAP or any other existing NFT or fungible token. The possibilities are endless.
                </p>
                <p class="text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                  Badges are just the beginning—we also have some post-launch enhancements for Rigs, including the ability to pilot your Rig and unlock animation.
                </p>
              </div>
              <div class="w-1/2 px-12 py-32">
                <img src="~assets/img/poap.png" />
              </div>
            </div>
          </div>
      </section>

      <section class="whitelist">
        <div class="whitelist-break"></div>
        <div class="container px-6 md:px-9 lg:px-16 pt-0 pb-48 px-32 max-w-7xl" id="whitelist">
          <div class="flex text-right">
            <h3 class="w-1/2 text-left  font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter md:leading-tighter lg:leading-tighter mb-4 lg:mb-10" data-aos="fade-up">
              What are you waiting for?
            </h3>
            <div class="w-1/2 text-right pt-16">
              <a href="https://docs.tableland.xyz" class="btn bg-black text-white" data-aos="fade-up">Join Discord</a>
            </div>
          </div>
          <div class="flex text-left pt-16">
            <div class="w-1/2 " data-aos="fade-up">
              <h3 class="text-2xl">PRICE</h3>
              <h2 class="text-4xl font-Orbitron">0.05 ETH</h2>
              <br><br>
              <h3 class="text-2xl">WHITELIST LOCK</h3>
              <h2 class="text-4xl font-Orbitron">05-30-22</h2>
            </div>
            <div class="w-1/2" data-aos="fade-up">
              <h3 class="text-2xl">TOTAL SUPPLY</h3>
              <h2 class="text-4xl font-Orbitron">10,000</h2>
              <br><br>
              <h3 class="text-2xl">MINT DATE</h3>
              <h2 class="text-4xl font-Orbitron">05-31-22</h2>
            </div>
          </div>
        </div>
      </section>

        <!-- guild -->
        <section class="guild" id="fleets">
          <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-18 lg:pt-36">
            <div class="lg:w-2/3" data-aos="fade-up">
              <h1 class="font-Orbitron w-full h-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10">
                The Fleets
              </h1>
              <p class="text-xl md:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
                Were formed to give us each our purpose. Each one with its unique knowledge, tools, and practices. Your Guild is your new family and its customs, rituals, and alliances will guide and protect you.
              </p>

              </div>
            </div>
            <div class="fleet-break"></div>
          </section>

          <section class="guild-list">
            <!-- Airlights -->
            <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-0 lg:pt-0">
              <div class="fleet-container lg:w-2/3" data-aos="fade-up">
                <h2 class="font-Orbitron w-full h-auto text-4xl md:text-5xl leading-tighter mb-4 lg:mb-10">
                  Airelights
                </h2>
                <div class="flex">
                  <p class="text-3xl" data-aos="fade-up" >The heavy birds rule the alpine of Tableland. Perfect for fast inserts and massive lifts. But keep your diamond hands on the controls because what goes up must come down.</p>
                </div>
                <div class="flex py-12">
                  <div class="w-1/2" data-aos="fade-up">
                    <h3 class="text-2xl">TOTAL RIG STYLES</h3>
                    <h2 class="text-4xl font-Orbitron">8</h2>
                  </div>
                  <div class="w-1/2" data-aos="fade-up">
                    <h3 class="text-2xl">TOTAL MATCH RIGS</h3>
                    <h2 class="text-4xl font-Orbitron">21</h2>
                  </div>
                </div>
                </div>
                <div class="w-2/3 vehicle-right">
                  <div class="vehicle a-1 pt-48" data-aos="fade-up"><img src="~assets/img/air_1.png"/></div>
                  <div class="vehicle a-2 pt-12" data-aos="fade-up"><img src="~assets/img/air_2.png"/></div>
                  <div class="vehicle a-3 pt-4" data-aos="fade-up"><img src="~assets/img/air_3.png"/></div>
                </div>
              </div>
              <!-- Foils -->

              <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-0 lg:pt-0">
                <div class="w-2/3">
                  <div class="vehicle a-1 pt-48"><img src="~assets/img/foil_1.png"/></div>
                  <div class="vehicle a-2 pt-12"><img src="~assets/img/foil_2.png"/></div>
                  <div class="vehicle a-3 pt-4"><img src="~assets/img/foil_3.png"/></div>
                </div>
                <div class="fleet-container lg:w-2/3 text-left" data-aos="fade-up">
                  <h2 class="font-Orbitron w-full h-auto text-4xl md:text-5xl leading-tighter mb-4 lg:mb-10">
                    Foils
                  </h2>
                  <div class="flex">
                    <p class="text-3xl" data-aos="fade-up">Aero, fast, and light. Foils are Moore’s Law personified. If you need to get off-chain in a hurry, you’ll be glad you’ve got a foil.</p>
                  </div>
                  <div class="flex py-12">
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL RIG STYLES</h3>
                      <h2 class="text-4xl font-Orbitron">6</h2>
                    </div>
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL MATCH RIGS</h3>
                      <h2 class="text-4xl font-Orbitron">18</h2>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Hopper -->
              <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-0 lg:pt-0">
                <div class="fleet-container lg:w-2/3 text-left" data-aos="fade-up">
                  <h2 class="font-Orbitron w-full h-auto text-4xl md:text-5xl leading-tighter mb-4 lg:mb-10">
                    Hoppers
                  </h2>
                  <div class="flex">
                    <p class="text-3xl" data-aos="fade-up" >Hoppers are Tracers’ smaller, more nimble cousins. If you’re prone to whiting out, you’re gonna want a G-suit to keep the blood from pooling in your boots.</p>
                  </div>
                  <div class="flex py-12">
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL RIG STYLES</h3>
                      <h2 class="text-4xl font-Orbitron">8</h2>
                    </div>
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL MATCH RIGS</h3>
                      <h2 class="text-4xl font-Orbitron">25</h2>
                    </div>
                  </div>
                </div>
                <div class="w-2/3 vehicle-right">
                  <div class="vehicle a-1 pt-48"><img src="~assets/img/hopper_1.png"/></div>
                  <div class="vehicle a-2 pt-12"><img src="~assets/img/hopper_2.png"/></div>
                  <div class="vehicle a-3 pt-4"><img src="~assets/img/hopper_3.png"/></div>
                </div>
              </div>
              <!-- Tracer -->
              <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-0 lg:pt-0">
                <div class="w-2/3">
                  <div class="vehicle a-1 pt-48"><img src="~assets/img/tracer_1.png"/></div>
                  <div class="vehicle a-2 pt-12"><img src="~assets/img/tracer_2.png"/></div>
                  <div class="vehicle a-3 pt-4"><img src="~assets/img/tracer_3.png"/></div>
                </div>
                <div class="fleet-container lg:w-2/3 text-left" data-aos="fade-up">
                  <h2 class="font-Orbitron w-full h-auto text-4xl md:text-5xl leading-tighter mb-4 lg:mb-10">
                    Tracers
                  </h2>
                  <div class="flex">
                    <p class="text-3xl" data-aos="fade-up" >If you’ve got verticality issues then Tracers are what you seek. Designed to hug the canyonlands and rise and fall faster than Gamestonk.</p>
                  </div>
                  <div class="flex py-12">
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL RIG STYLES</h3>
                      <h2 class="text-4xl font-Orbitron">8</h2>
                    </div>
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL MATCH RIGS</h3>
                      <h2 class="text-4xl font-Orbitron">21</h2>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Sleds -->
              <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-0 lg:pt-0">
                <div class="fleet-container lg:w-2/3 text-left" data-aos="fade-up">
                  <h2 class="font-Orbitron w-full h-auto text-4xl md:text-5xl leading-tighter mb-4 lg:mb-10">
                    Sleds
                  </h2>
                  <div class="flex">
                    <p class="text-3xl" data-aos="fade-up" >Running the salt flats takes focus. If you need a stable Rig for the fast and straight, set your sights on a sled. Sure they’re loud, but it drowns out the sound of your teeth vibrating in your skull as you break the sound barrier.</p>
                  </div>
                  <div class="flex py-12">
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL RIG STYLES</h3>
                      <h2 class="text-4xl font-Orbitron">8</h2>
                    </div>
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL MATCH RIGS</h3>
                      <h2 class="text-4xl font-Orbitron">19</h2>
                    </div>
                  </div>
                </div>
                <div class="w-2/3 vehicle-right">
                  <div class="vehicle a-1 pt-48"><img src="~assets/img/sled_1.png"/></div>
                  <div class="vehicle a-2 pt-12"><img src="~assets/img/sled_2.png"/></div>
                  <div class="vehicle a-3 pt-4"><img src="~assets/img/sled_3.png"/></div>
                </div>
              </div>
              <!-- Edgeriders -->
              <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-0 lg:pt-0">
                <div class="w-2/3">
                  <div class="vehicle a-1 pt-48"><img src="~assets/img/edge_1.png"/></div>
                  <div class="vehicle a-2 pt-12"><img src="~assets/img/edge_2.png"/></div>
                  <div class="vehicle a-3 pt-4"><img src="~assets/img/edge_3.png"/></div>
                </div>
                <div class="fleet-container lg:w-2/3 text-left" data-aos="fade-up">
                  <h2 class="font-Orbitron w-full h-auto text-4xl md:text-5xl leading-tighter mb-4 lg:mb-10">
                    Edgeriders
                  </h2>
                  <div class="flex">
                    <p class="text-3xl" data-aos="fade-up" >Two wheels. One Edge. Nuff said.</p>
                  </div>
                  <div class="flex py-12">
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL RIG STYLES</h3>
                      <h2 class="text-4xl font-Orbitron">10</h2>
                    </div>
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL MATCH RIGS</h3>
                      <h2 class="text-4xl font-Orbitron">24</h2>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Titans -->
              <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-0 lg:pt-0">
                <div class="fleet-container lg:w-2/3 text-left" data-aos="fade-up">
                  <h2 class="font-Orbitron w-full h-auto text-4xl md:text-5xl leading-tighter mb-4 lg:mb-10">
                    Titans
                  </h2>
                  <div class="flex">
                    <p class="text-3xl" data-aos="fade-up" >Heavy loader, lifters, and haulers of the high desert. The Titans are the muscle of Tableland. If you need to get sh*t done, you’re gonna need a Titan.</p>
                  </div>
                  <div class="flex py-12">
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL RIG STYLES</h3>
                      <h2 class="text-4xl font-Orbitron">11</h2>
                    </div>
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL MATCH RIGS</h3>
                      <h2 class="text-4xl font-Orbitron">32</h2>
                    </div>
                  </div>
                </div>
                <div class="w-2/3 vehicle-right">
                  <div class="vehicle a-1 pt-48"><img src="~assets/img/titan_1.png"/></div>
                  <div class="vehicle a-2 pt-12"><img src="~assets/img/titan_2.png"/></div>
                  <div class="vehicle a-3 pt-4"><img src="~assets/img/titan_3.png"/></div>
                </div>
              </div>
              <!-- Tumblers -->

              <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-0 lg:pt-0">
                <div class="w-2/3">
                  <div class="vehicle a-1 pt-48"><img src="~assets/img/tumbler_1.png"/></div>
                  <div class="vehicle a-2 pt-12"><img src="~assets/img/tumbler_2.png"/></div>
                  <div class="vehicle a-3 pt-4"><img src="~assets/img/tumbler_3.png"/></div>
                </div>
                <div class="fleet-container lg:w-2/3 text-left" data-aos="fade-up">
                  <h2 class="font-Orbitron w-full h-auto text-4xl md:text-5xl leading-tighter mb-4 lg:mb-10">
                    Tumblers
                  </h2>
                  <div class="flex">
                    <p class="text-3xl" data-aos="fade-up" >Titans younger brother. Tumblers are a bundle of might packed into a small package. They can fit into tight spaces and what they lack in cargo capacity they make up for in range and agility.</p>
                  </div>
                  <div class="flex py-12">
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL RIG STYLES</h3>
                      <h2 class="text-4xl font-Orbitron">9</h2>
                    </div>
                    <div class="w-1/2" data-aos="fade-up">
                      <h3 class="text-2xl">TOTAL MATCH RIGS</h3>
                      <h2 class="text-4xl font-Orbitron">27</h2>
                    </div>
                  </div>
                </div>
              </div>
            <div class="guild-list-break"></div>
            </section>

      <!-- faq -->
      <section class="faq" id="faq">

        <div class="container px-6 md:px-9 lg:px-16 py-32">
          <div class="md:flex justify-center lg:justify-center">
            <h3 class="text-center text-white font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter md:leading-tighter lg:leading-tighter mb-4 lg:mb-10" data-aos="fade-up">
            Frequenty Asked Questions
            </h3>
          </div>
          <div class="tabs">
              <div class="tab">
                <input type="checkbox" id="tab-1">
                <label class="tab-label" for="tab-1">When is the mint date?</label>
                <div class="tab-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor cursus risus lacinia fringilla. Fusce nec arcu in nunc varius viverra. Maecenas nec tempus felis. Phasellus id urna erat. Mauris lacus ex, fringilla ac odio elementum, finibus porttitor urna. Duis augue leo, egestas ut sodales eget, dictum in tellus.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="tab-2">
                <label class="tab-label" for="tab-2">Is there a fixed price? Or how will mint pricing take place?</label>
                <div class="tab-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor cursus risus lacinia fringilla. Fusce nec arcu in nunc varius viverra. Maecenas nec tempus felis. Phasellus id urna erat. Mauris lacus ex, fringilla ac odio elementum, finibus porttitor urna. Duis augue leo, egestas ut sodales eget, dictum in tellus.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="tab-3">
                <label class="tab-label" for="tab-3">What is the utility of the Tableland NFT?</label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor cursus risus lacinia fringilla. Fusce nec arcu in nunc varius viverra. Maecenas nec tempus felis. Phasellus id urna erat. Mauris lacus ex, fringilla ac odio elementum, finibus porttitor urna. Duis augue leo, egestas ut sodales eget, dictum in tellus.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="tab-4">
                <label class="tab-label" for="tab-4">How many NFTs are there total?</label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor cursus risus lacinia fringilla. Fusce nec arcu in nunc varius viverra. Maecenas nec tempus felis. Phasellus id urna erat. Mauris lacus ex, fringilla ac odio elementum, finibus porttitor urna. Duis augue leo, egestas ut sodales eget, dictum in tellus.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="tab-5">
                <label class="tab-label" for="tab-5">How many will be minted on the above mint date?</label>
                <div class="tab-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor cursus risus lacinia fringilla. Fusce nec arcu in nunc varius viverra. Maecenas nec tempus felis. Phasellus id urna erat. Mauris lacus ex, fringilla ac odio elementum, finibus porttitor urna. Duis augue leo, egestas ut sodales eget, dictum in tellus.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="tab-6">
                <label class="tab-label" for="tab-6">Do the different types of NFTs grant different roles or have different utility?</label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor cursus risus lacinia fringilla. Fusce nec arcu in nunc varius viverra. Maecenas nec tempus felis. Phasellus id urna erat. Mauris lacus ex, fringilla ac odio elementum, finibus porttitor urna. Duis augue leo, egestas ut sodales eget, dictum in tellus.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="tab-7">
                <label class="tab-label" for="tab-7">Who are the artists?</label>
                <div class="tab-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor cursus risus lacinia fringilla. Fusce nec arcu in nunc varius viverra. Maecenas nec tempus felis. Phasellus id urna erat. Mauris lacus ex, fringilla ac odio elementum, finibus porttitor urna. Duis augue leo, egestas ut sodales eget, dictum in tellus.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="tab-8">
                <label class="tab-label" for="tab-8">Have they done other projects before?</label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor cursus risus lacinia fringilla. Fusce nec arcu in nunc varius viverra. Maecenas nec tempus felis. Phasellus id urna erat. Mauris lacus ex, fringilla ac odio elementum, finibus porttitor urna. Duis augue leo, egestas ut sodales eget, dictum in tellus.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="tab-9">
                <label class="tab-label" for="tab-9">Is there a plan for the next round of NFTs to be minted?</label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor cursus risus lacinia fringilla. Fusce nec arcu in nunc varius viverra. Maecenas nec tempus felis. Phasellus id urna erat. Mauris lacus ex, fringilla ac odio elementum, finibus porttitor urna. Duis augue leo, egestas ut sodales eget, dictum in tellus.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="tab-10">
                <label class="tab-label" for="tab-10">How do I get on the whitelist? </label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor cursus risus lacinia fringilla. Fusce nec arcu in nunc varius viverra. Maecenas nec tempus felis. Phasellus id urna erat. Mauris lacus ex, fringilla ac odio elementum, finibus porttitor urna. Duis augue leo, egestas ut sodales eget, dictum in tellus.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="tab-11">
                <label class="tab-label" for="tab-11">Will they be sold in ETH?</label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor cursus risus lacinia fringilla. Fusce nec arcu in nunc varius viverra. Maecenas nec tempus felis. Phasellus id urna erat. Mauris lacus ex, fringilla ac odio elementum, finibus porttitor urna. Duis augue leo, egestas ut sodales eget, dictum in tellus.
                </div>
              </div>
              <div class="tab">
                <input type="checkbox" id="tab-12">
                <label class="tab-label" for="tab-12">Is there a window of time they are open for sale? Or available until are all sold? </label>
                <div class="tab-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec tortor cursus risus lacinia fringilla. Fusce nec arcu in nunc varius viverra. Maecenas nec tempus felis. Phasellus id urna erat. Mauris lacus ex, fringilla ac odio elementum, finibus porttitor urna. Duis augue leo, egestas ut sodales eget, dictum in tellus.
                </div>
              </div>
            </div>
        </div>
      </section>

      <!-- showcase -->
      <section class="md:block showcase py-32 relative">
        <div class="container px-6 md:px-9 lg:px-16">
          <div class="text-center">
            <p class="font-Orbitron text-blue text-3xl md:text-4xl lg:text-5xl md:leading-normal lg:leading-normal font-light mb-10">What will you build?</p>
            <ButtonLink href="https://textile.notion.site/Tableland-Use-cases-466b4ab8bb1248a497dd457f057abf5f">See use cases</ButtonLink>
          </div>
        </div>
      </section>

      <footer class="text-blue py-10">
        <nav class="container px-6 md:px-9 lg:px-16 py-2">
          <div class="hidden py-4">
            <img src="~assets/img/logo-white.svg" alt="Tableland" class="h-5" id="js-scroll">
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
    computed: {
      ethereum: function () {
        return window.ethereum;
      }
    },
    mounted() {
      this.lmS = new this.locomotiveScroll({
        el: document.querySelector('#js-scroll'),
        smooth: true,
      });
    }
  };
  </script>
