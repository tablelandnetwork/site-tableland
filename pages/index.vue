<template>
  <div>
    <!-- Header -->
    <header class="bg-navbar">
      <nav class="container px-6 md:px-9 lg:px-16 flex items-center py-2">
        <div class="py-4">
          <img src="~assets/img/logo-black.svg" alt="Tableland" class="h-5">
        </div>
        <ul class="flex flex-1 justify-end items-center gap-x-8 md:gap-x-10 lg:gap-x-24 uppercase text-sm">
          <li><a href="https://tableland.substack.com">Blog</a></li>
          <li><a href="https://discord.gg/7WDqyanQ" target="_blank">Discord</a></li>
          <li><a href="https://docs.tableland.xyz">Docs</a></li>
        </ul>
      </nav>
    </header>

    <!-- hero -->
    <section class="hero">
      <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-36">
        <div class="lg:w-2/3 xl:w-1/2">
          <h1 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10">
            Build web3 with <span class="font-black">SQL</span>
          </h1>
          <p class="text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-18">
            Tableland is a network and relational metadata protocol for EVM chains like Ethereum. Built for developers, NFT creators, and web3 visionaries.
          </p>
          <div class="text-center lg:text-left mb-50">
            <ButtonLink href="https://docs.tableland.xyz">Get started</ButtonLink>
          </div>
          <p class="text-3xl md:text-4xl lg:text-4.25xl leading-normal md:leading-normal lg:leading-snug font-medium">
            Use familiar SQL tables to read and write dynamic NFT metadata or application data–all orchestrated by token networks like Ethereum.
          </p>
        </div>
      </div>
    </section>

    <!-- garage -->
    <section class="garage">
      <div class="container px-6 md:px-9 lg:px-16 flex items-center">
        <div class="lg:w-2/3 xl:w-1/2">
          <p class="text-white text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-18">
            Tableland isn't a new database—it’s just web3-native relational tables.
          </p>
          <div class="text-center lg:text-left">
            <ButtonLink href="https://docs.tableland.xyz/building/examples/playbooks">See playbooks</ButtonLink>
          </div>
        </div>
      </div>
      <div class="playbooks container px-6 md:px-9 lg:px-24 lg:flex justify-between">
        <div class="lg:w-1/3 xl:w-1/3">
          <div class="text-white playbook">
            <p class="playbook-left bg-purple text-2xl lg:text-3xl px-6 py-4 font-medium rounded">Store NFT metadata</p>
          </div>

          <div class="text-white">
            <p class="playbook-left bg-purple text-2xl lg:text-3xl px-6 py-4 font-medium rounded">Extend existing NFTs</p>
          </div>
        </div>
        <div class="lg:w-1/3 xl:w-1/3">
          <div class="text-white playbook">
            <p class="playbook-right bg-purple text-2xl lg:text-3xl px-6 py-4 font-medium rounded">Control table access</p>
          </div>

          <div class="text-white">
            <p class="playbook-right bg-purple text-2xl lg:text-3xl px-6 py-4 font-medium rounded">Compose with tables</p>
          </div>
        </div>
      </div>
    </section>

    <!-- sql -->
    <section class="sql">
      <div class="garage-break"></div>
      <div class="container px-6 md:px-9 lg:px-16 flex pt-20 2xl:pb-68">
        <div class="lg:w-2/3 xl:w-1/2">
          <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10">
            In Tableland, we speak SQL
          </h3>
          <p class="text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-1">
            1 – The bulk of digital information is stored in relational tables.
          </p>
          <p class="text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-1">
            2 – Your familiar SQL tables are stored on a decentralized network of validators
            and anchored to Ethereum as transferable NFTs, providing ownership and access control.
          </p>
          <p class="text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-4">
            3 – Easy as pie, right?
          </p>
        </div>
      </div>
    </section>

    <div class="bg-gradient bg-gradient-to-b from-violet to-pink">
      <!-- tables -->
      <section class="tables relative text-white hidden">
        <div class="container px-6 md:px-9 lg:px-16 flex justify-end">
          <div class="lg:w-2/3 xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10">
            </h3>
            <p class="text-2xl md:text-3xl md:leading-normal font-light mb-18">
            </p>
            <div class="text-center lg:text-left">
              <ButtonLink href="#"></ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <!-- playground -->
      <section class="playground text-white pt-32">
        <div class="container px-6 md:px-9 lg:px-16 flex justify-center">
          <div class="md:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10">
              Try it out
            </h3>
            <p class="text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-10">
              Go ahead! Don't take our word for it.
            </p>
            <playground></playground>
          </div>
        </div>
      </section>
    </div>

    <!-- community -->
    <section class="community relative">
      <div class="container px-6 md:px-9 lg:px-16">
        <div class="community-top pt-70">
          <div class="md:w-2/3 xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10">
              Join the community
            </h3>
            <p class="text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-18">
              Whether you're a developer, NFT creator, token holder, or just curious about web3, there's a place for you in Tableland. Join a fast-growing community of innovators from all over the world.
            </p>
            <div class="text-center lg:text-left">
              <ButtonLink href="https://discord.gg/7WDqyanQ">Join us on Discord</ButtonLink>
            </div>
          </div>
        </div>

        <div class="community-bottom md:flex justify-center md:justify-end text-white">
          <div class="md:w-2/3 xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:leading-tighter mb-10">
              User-owned token networks are the future of the internet
            </h3>
            <p class="text-2xl md:text-3xl leading-normal md:leading-normal font-light">
              Tableland is the meta-layer of web3. It encompasses everything from NFT metadata, social, financial, machine-learning, research data, or anything else. Tableland tables are also NFTs themselves, making them own-able, tradable, and composable assets.
            </p>
          </div>
        </div>
      </div>
      <div class="community-break"></div>
    </section>

    <!-- phases -->
    <section class="phases mb-48 hidden">
      <div class="container px-6 md:px-9 lg:px-16">
        <div class="mb-62">
          <div class="xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10">
            </h3>
            <p class="font-Orbitron text-2xl md:text-3xl lg:text-4.5xl mb-5"></p>
            <div class="bg-black text-white py-8 md:py-10 lg:py-14 px-10 md:px-12 lg:px-16 rounded-3xl">
              <p class="text-2xl md:text-3xl md:leading-normal font-light mb-4">
              </p>
              <p>
                <a class="text-xl md:text-2xl uppercase underline" href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>

        <div class="mb-62 xl:mb-14 xl:flex xl:justify-end">
          <div class="xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10">
            </h3>
            <p class="font-Orbitron text-2xl md:text-3xl lg:text-4.5xl mb-5"></p>
            <div class="bg-black text-white py-8 md:py-10 lg:py-14 px-10 md:px-12 lg:px-16 rounded-3xl">
              <p class="text-2xl md:text-3xl md:leading-normal font-light mb-4">
              </p>
              <p>
                <a class="text-xl md:text-2xl uppercase underline" href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>

        <div class="mb-48">
          <div class="xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10">
            </h3>
            <p class="font-Orbitron text-2xl md:text-3xl lg:text-4.5xl mb-5"></p>
            <div class="bg-black text-white py-8 md:py-10 lg:py-14 px-10 md:px-12 lg:px-16 rounded-3xl">
              <p class="text-2xl md:text-3xl md:leading-normal font-light mb-4">
              </p>
              <p>
                <a class="text-xl md:text-2xl uppercase underline" href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>

        <div class="text-center">
          <p class="text-2xl md:text-3xl md:leading-normal font-light mb-4">Any suggestions?</p>
          <ButtonLink href="#"></ButtonLink>
        </div>
      </div>
    </section>

    <!-- showcase -->
    <section class="md:block showcase pt-24 pb-32 relative">
      <div class="showcase-break hidden"></div>
      <div class="container px-6 md:px-9 lg:px-16">
        <div class="slider flex gap-x-3.5 mb-32 hidden">
          <div class="bg-white pt-8 lg:pt-14 pb-120 px-10 lg:px-16 rounded-7xl lg:rounded-8xl slide active" @click="handleSliderClick">
            <div class="md:w-1/2 xl:w-1/3">
              <h4 class="text-3xl md:text-4xl xl:text-5xl xl:leading-tighter">
              </h4>
              <a class="text-2xl uppercase underline" href="#">Link</a>
            </div>
          </div>

          <div class="bg-white pt-8 lg:pt-14 pb-120 px-10 lg:px-16 rounded-7xl lg:rounded-8xl slide inactive" @click="handleSliderClick">
            <div class="md:w-1/2 xl:w-1/3">
              <h4 class="text-3xl md:text-4xl xl:text-5xl xl:leading-tighter">
              </h4>
              <a class="text-2xl uppercase underline" href="#">Link</a>
            </div>
          </div>

          <div class="bg-white pt-8 lg:pt-14 pb-120 px-10 lg:px-16 rounded-7xl lg:rounded-8xl slide inactive" @click="handleSliderClick">
            <div class="md:w-1/2 xl:w-1/3">
              <h4 class="text-3xl md:text-4xl xl:text-5xl xl:leading-tighter">
              </h4>
              <a class="text-2xl uppercase underline" href="#">Link</a>
            </div>
          </div>
        </div>

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
        <ul class="flex justify-center items-center gap-x-3 sm:gap-x-6 md:gap-x-12 xl:gap-x-24 uppercase text-sm">
          <li><a href="https://twitter.com/tableland__">Twitter</a></li>
          <li><a href="https://textile.notion.site/Tableland-Grants-Funding-ebc1f398d53a481d94f090ab12d93be0">Grants</a></li>
          <li><a href="https://boards.greenhouse.io/textileio">Jobs</a></li>
          <li><a href="https://hhueol4i6vp.typeform.com/to/sgtDW2Xt">Token Info</a></li>
          <li><a href="https://docs.tableland.xyz/general/community/partners">Partners</a></li>
          <li><a href="https://textile.notion.site/Tableland-Privacy-Policy-6fd160e7f485491d9dc4cbab188043d5">Privacy Policy</a></li>
          <li><a href="https://textile.notion.site/Tableland-Terms-of-Use-cf80f1b550b843ad9d4b8c3140b78e35">Terms of Use</a></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
    };
  },

  methods: {
    activateSlide: function (slide) {
      slide.classList.add('active');
      slide.classList.remove('inactive');
    },

    deactivateSlide: function (slide) {
      slide.classList.add('inactive');
      slide.classList.remove('active');
    },

    handleSliderClick: function ({ target }) {
      if (!target.classList.contains('active')) {
        const siblings = Array.from(target.parentElement.children).filter(c => c !== target);
        this.activateSlide(target);
        siblings.forEach(this.deactivateSlide);
      }
    }
  }
};

</script>
