<template>
  <div>

    <!-- Header -->
    <HeaderNav></HeaderNav>

    <header class="bg-navbar pt-0" data-aos="fade-down" data-aos-anchor=".bg-gradient">
      <HeaderNav></HeaderNav>
    </header>


    <!-- hero -->
    <section class="hero">
      <div class="container">
      <div class="px-6 md:px-9 lg:px-16 flex items-center pt-36 lg:pt-48">
        <div class="lg:w-2/3">
          <h1 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10" data-aos="fade-up">
            Build web3 with <span class="font-black">SQL</span>
          </h1>
          <p class="text-xl md:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
            Tableland is a network and relational metadata protocol for EVM chains like Ethereum.
            Built for developers, NFT creators, and web3 visionaries.
          </p>
          <div class="hero-btn hidden md:inline-block text-center md:text-left" data-aos="fade-up">
            <ButtonLink href="https://docs.tableland.xyz">Get started</ButtonLink>
          </div>
          <p class="hidden text-2xl md:text-3xl lg:text-4.25xl leading-snug md:leading-snug font-medium" data-aos="fade-up">
            Use familiar SQL tables to read and write dynamic NFT metadata or application
            data–all orchestrated by token networks like Ethereum.
          </p>
        </div>
      </div>
      <div class="px-6 md:px-9 lg:px-16 flex justify-between mt-24">
        <div class="lg:w-1/2">
          <h1 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10 choose lg:px-6" data-aos="fade-up">
            Choose your <span class="font-black">Rig</span>
          </h1>
          <p class="text-xl md:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18 lg:px-6" data-aos="fade-up">
            Your Rig is your custom machine. There are none that are like it, and this one is yours. It’s a purpose-built code-based machine and your key to Tableland.
          </p>
          <div class="hero-btn md:inline-block md:text-left mb-18 lg:mb-48" data-aos="fade-up">
            <ButtonLink href="/rigs">Learn more</ButtonLink>
          </div>
        </div>
        <div class="lg:w-1/2 px-12 py-12">
          <div class="carousel">
            <div><img src="~assets/img/slide_1.jpg"/></div>
            <div><img src="~assets/img/slide_2.jpg"/></div>
            <div><img src="~assets/img/slide_3.jpg"/></div>
            <div><img src="~assets/img/slide_4.jpg"/></div>
            <div><img src="~assets/img/slide_5.jpg"/></div>
          </div>
        </div>
      </div>
    </div>
    </section>

    <!-- garage -->
    <section class="garage">
      <div class="container px-6 md:px-9 lg:px-16 flex items-center">
        <div class="lg:w-2/3">
          <h3 class="font-Orbitron text-white text-4xl md:text-5xl lg:text-6xl leading-tighter mb-10 md:mb-4 lg:mb-10" data-aos="fade-up">
            Welcome to Tableland
          </h3>
          <p class="text-white text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-light mb-2" data-aos="fade-up">
            1—Use tables to store mutable, partially mutable, or immutable NFT metadata.
          </p>
          <p class="text-white text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-light mb-2" data-aos="fade-up">
            2—Use tables to attach in-app or in-game metadata to existing NFTs.
          </p>
          <p class="text-white text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-light mb-2" data-aos="fade-up">
            3—Control table write access with token or address-based rules.
          </p>
          <p class="text-white text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
            4—Use tables to build fully decentralized apps and games that require complex relational data models.
          </p>
          <div class="text-center md:text-left" data-aos="fade-up">
            <ButtonLink href="https://docs.tableland.xyz/building/examples/playbooks">See playbooks</ButtonLink>
          </div>
        </div>
      </div>
    </section>

    <!-- sql -->
    <!-- <section class="sql">
      <div class="garage-break"></div>
      <div class="container px-6 md:px-9 lg:px-16 flex pt-10 xl:pt-14">
        <div class="lg:w-2/3 xl:w-1/2">

          <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter mb-4 lg:mb-10" data-aos="fade-up">
            Learn, connect, and build on the frontiers of the Web.
          </h3>
          <p class="text-xl md:text-3xl leading-normal md:leading-normal font-light mb-2" data-aos="fade-up">
          Join our summer cohort for access to exclusive mentorship, hackathons, and small group learning on the cutting edge of the open web.
          </p>
          <div class="md:text-left" data-aos="fade-up">
            <ButtonLink href="/cohort">Learn More</ButtonLink>
          </div>
        </div>
      </div>
    </section> -->

    <!-- playground -->
    <div class="bg-gradient bg-gradient-to-b from-violet to-pink">
      <section class="playground text-white pt-6 md:pt-32 pb-32">
        <div class="container px-6 md:px-9 lg:px-16 flex justify-center">
          <div class="md:w-2/3">
            <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter mb-4 lg:mb-10" data-aos="fade-up">
              Try it out
            </h3>
            <p v-if="ethereum" class="text-xl md:text-3xl leading-normal md:leading-normal font-light mb-4 lg:mb-6" data-aos="fade-up">
              Go ahead! Don't take our word for it.
            </p>
            <p v-if="!ethereum" class="text-xl md:text-3xl leading-normal md:leading-normal font-light mb-4 lg:mb-6" data-aos="fade-up">
              Uh oh! You need a browser wallet. Go install <a href="https://metamask.io/" target="_blank" class="underline">Metamask</a> or use a browser with a built-in wallet like <a href="https://brave.com/" target="_blank" class="underline">Brave</a>.
            </p>
            <playground></playground>
          </div>
        </div>
      </section>
    </div>

    <!-- community -->
    <section class="community relative">
      <div class="container px-6 md:px-9 lg:px-16">
        <div class="community-top pt-32">
          <div class="md:w-2/3 xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter mb-4 lg:mb-10" data-aos="fade-up">
              Join the community
            </h3>
            <p class="text-xl md:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              Whether you're a developer, NFT creator, token holder, or just curious about web3, there's a place for you in Tableland. Join a fast-growing community of innovators from all over the world.
            </p>
            <div class="text-center md:text-left mt-5" data-aos="fade-up">
              <ButtonLink href="https://discord.gg/hpd5WWn4Ys">Join us on Discord</ButtonLink>
            </div>
          </div>
        </div>

        <div class="community-bottom md:flex justify-center lg:justify-end text-white" >
          <div>
            <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter md:leading-tighter lg:leading-tighter mb-4 lg:mb-10" data-aos="fade-up">
              User-owned token networks are the future of the internet
            </h3>
            <p class="text-xl md:text-3xl leading-normal md:leading-normal font-light" data-aos="fade-up">
              Web3 needs a relational and queryable metadata layer. Tableland is a decentralized user-owned network for structured metadata—data from apps, games, social, analytics, AI/ML, or whatever else you can imagine. Tableland tables are also NFTs, making them own-able, tradable, and composable assets themselves.
            </p>
          </div>
        </div>
      </div>
      <div class="community-break"></div>
    </section>

    <!-- showcase -->
    <section class="md:block showcase py-32 relative">
    <div class="showcase-break"></div>
      <div class="container" style="margin-top:-100px;z-index:999!important;">
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
  head(){
    return {
      title: 'Tableland - Build web3 with SQL',
      meta:[
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'Summer Cohort' },
        { hid: 'og-sitename', property: 'og:site_name', content: 'Tableland - Build web3 with SQL' },
        { hid: 'og-desc', property: 'og:description', content: 'Tableland is a network and relational metadata protocol for EVM chains like Ethereum. Built for developers, NFT creators, and web3 visionaries.' },
        { hid: 'og-image', property: 'og:image',
          content: 'https://i.imgur.com/5ErjwNI.png'
        },
      ]
    }
  },
  computed: {
    ethereum: function () {
      return window.ethereum;
    }
  }
};


</script>
