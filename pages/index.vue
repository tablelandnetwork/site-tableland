<template>
  <div>
    <!-- Header -->
    <header class="bg-navbar">
      <nav class="container px-6 md:px-9 lg:px-16 flex items-center py-2">
        <div class="py-4">
          <img src="~assets/img/logo-black.svg" alt="Tableland" class="h-5">
        </div>
        <ul class="flex flex-1 justify-end items-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-24 uppercase text-sm ml-3">
          <li><a href="https://mirror.xyz/tableland.eth">Blog</a></li>
          <li><a href="https://discord.gg/hpd5WWn4Ys" target="_blank">Discord</a></li>
          <li><a href="https://docs.tableland.xyz">Docs</a></li>
        </ul>
      </nav>
    </header>

    <!-- hero -->
    <section class="hero">
      <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-18 lg:pt-36">
        <div class="lg:w-2/3">
          <h1 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10">
            Build web3 with <span class="font-black">SQL</span>
          </h1>
          <p class="text-xl md:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
            Tableland is a network and relational metadata protocol for EVM chains like Ethereum.
            Built for developers, NFT creators, and web3 visionaries.
          </p>
          <div class="hero-btn hidden md:inline-block text-center md:text-left mb-18 lg:mb-48 2xl:mb-100">
            <ButtonLink href="https://docs.tableland.xyz">Get started</ButtonLink>
          </div>
          <div class="md:hidden text-center md:text-left">
            <ButtonLink href="https://discord.gg/hpd5WWn4Ys">Discord</ButtonLink>
          </div>
          <p class="hidden md:inline-block text-2xl md:text-3xl lg:text-4.25xl 3xl:text-5xl leading-normal lg:leading-snug font-medium">
            Use familiar SQL tables to read and write dynamic NFT metadata or application
            data–all orchestrated by token networks like Ethereum.
          </p>
        </div>
      </div>
    </section>

    <!-- garage -->
    <section class="garage">
      <div class="container px-6 md:px-9 lg:px-16 flex items-center">
        <div class="lg:w-2/3">
          <h3 class="font-Orbitron text-white text-4xl md:text-5xl lg:text-6xl leading-tighter mb-10 md:mb-4 lg:mb-10">
            Welcome to Tableland
          </h3>
          <p class="text-white text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-light mb-2">
            1—Use tables to store mutable, partially mutable, or immutable NFT metadata.
          </p>
          <p class="text-white text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-light mb-2">
            2—Use tables to attach in-app or in-game metadata to existing NFTs.
          </p>
          <p class="text-white text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-light mb-2">
            3—Control table write access with token or address-based rules.
          </p>
          <p class="text-white text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-light mb-10 lg:mb-18">
            4—Use tables to build fully decentralized apps and games that require complex relational data models.
          </p>
          <div class="text-center md:text-left">
            <ButtonLink href="https://docs.tableland.xyz/building/examples/playbooks">See playbooks</ButtonLink>
          </div>
        </div>
      </div>
    </section>

    <!-- sql -->
    <section class="sql">
      <div class="garage-break"></div>
      <div class="container px-6 md:px-9 lg:px-16 flex pt-10 xl:pt-14">
        <div class="lg:w-2/3 xl:w-1/2">
          <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter mb-4 lg:mb-10">
            In Tableland, we speak SQL
          </h3>
          <p class="text-xl md:text-3xl leading-normal md:leading-normal font-light mb-2">
            1–The bulk of digital information is stored in relational tables.
          </p>
          <p class="text-xl md:text-3xl leading-normal md:leading-normal font-light mb-2">
            2–Your familiar SQL tables are stored on a decentralized network of validators
            and anchored to Ethereum as transferable NFTs, providing ownership and access control.
          </p>
          <p class="text-xl md:text-3xl leading-normal md:leading-normal font-light">
            3–Easy as pie, right?
          </p>
        </div>
      </div>
    </section>

    <!-- playground -->
    <div class="bg-gradient bg-gradient-to-b from-violet to-pink">
      <section class="playground text-white pt-6 md:pt-32 pb-32">
        <div class="container px-6 md:px-9 lg:px-16 flex justify-center">
          <div class="md:w-2/3">
            <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter mb-4 lg:mb-10">
              Try it out
            </h3>
            <p v-if="ethereum" class="text-xl md:text-3xl leading-normal md:leading-normal font-light mb-4 lg:mb-6">
              Go ahead! Don't take our word for it.
            </p>
            <p v-if="!ethereum" class="text-xl md:text-3xl leading-normal md:leading-normal font-light mb-4 lg:mb-6">
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
            <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter mb-4 lg:mb-10">
              Join the community
            </h3>
            <p class="text-xl md:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
              Whether you're a developer, NFT creator, token holder, or just curious about web3, there's a place for you in Tableland. Join a fast-growing community of innovators from all over the world.
            </p>
            <div class="text-center md:text-left">
              <ButtonLink href="https://discord.gg/hpd5WWn4Ys">Join us on Discord</ButtonLink>
            </div>
          </div>
        </div>

        <div class="community-bottom md:flex justify-center lg:justify-end text-white">
          <div>
            <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter md:leading-tighter lg:leading-tighter mb-4 lg:mb-10">
              User-owned token networks are the future of the internet
            </h3>
            <p class="text-xl md:text-3xl leading-normal md:leading-normal font-light">
              Web3 needs a relational and queryable metadata layer. Tableland is a decentralized user-owned network for structured metadata—data from apps, games, social, analytics, AI/ML, or whatever else you can imagine. Tableland tables are also NFTs, making them own-able, tradable, and composable assets themselves.
            </p>
          </div>
        </div>
      </div>
      <div class="community-break"></div>
    </section>

    <!-- showcase -->
    <section class="md:block showcase py-32 relative">
      <div class="container px-6 md:px-9 lg:px-16">
        <div class="text-center text-white">
          <p class="text-3xl md:text-4xl lg:text-5xl md:leading-normal lg:leading-normal font-light mb-10">What will you build?</p>
          <ButtonLink href="https://docs.tableland.xyz">Get started</ButtonLink>
        </div>
      </div>
    </section>

    <footer class="text-white py-10">
      <nav class="container px-6 md:px-9 lg:px-16 py-2">
        <div class="hidden py-4">
          <img src="~assets/img/logo-white.svg" alt="Tableland" class="h-5">
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
  }
};

</script>
