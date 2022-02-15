<template>
  <div>
    <!-- Header -->
    <header class="bg-navbar">
      <nav class="container px-6 md:px-8 lg:px-12 flex items-center py-2">
        <div class="py-4">
          <img src="~assets/img/logo-black.svg" alt="Tableland" class="h-5">
        </div>
        <ul class="hidden md:flex flex-1 justify-end items-center gap-x-10 lg:gap-x-24 uppercase text-sm pr-20">
          <li><a href="#">About</a></li>
          <li><a href="#">Join Us</a></li>
          <li><a href="#">Docs</a></li>
          <li><a href="#">Mint</a></li>
        </ul>
      </nav>
    </header>

    <!-- hero -->
    <section class="hero">
      <div class="container px-6 md:px-9 lg:px-12 flex items-center py-64">
        <div class="lg:w-2/3 xl:w-1/2">
          <h1 class="font-Orbitron text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-tight mb-6">
            Build dApps and NFT games using familiar SQL
          </h1>
          <p class="text-2xl md:text-3xl leading-normal mb-18">
            Tableland is a network and SQL database protocol for Ethereum.
            Built for developers, NFT creators, and Web3 visionaries.
          </p>
          <div class="text-center lg:text-left mb-64">
            <ButtonLink href="#">Call to Action</ButtonLink>
          </div>
          <p class="text-3xl md:text-4xl xl:text-5xl tracking-tight xl:leading-tighter">
            Use familiar SQL tables to read and write NFT meatadata, media, social
            data, or anything else – all orchestrated by token networks like Ethereum.
          </p>
        </div>
      </div>
    </section>

    <!-- garage -->
    <section class="garage">
      <div class="container px-6 md:px-8 lg:px-12 lg:flex justify-between">
        <div class="lg:w-1/2 xl:w-1/3 lg:px-4">
          <div class="bg-black text-white pt-14 pb-8 pl-8 pr-6 lg:pl-12 lg:pr-10 mb-24 rounded-4xl">
            <p class="text-3xl md:text-4xl xl:text-5xl xl:leading-tighter mb-4">Extend existing NFTs</p>
            <p class="mb-30">
              <a class="text-lg lg:text-xl uppercase underline" href="#">View Code</a>
            </p>
            <p class="text-right">
              <button><ExpandIcon /></button>
            </p>
          </div>

          <div class="bg-black text-white pt-14 pb-8 pl-8 pr-6 lg:pl-12 lg:pr-10 mb-24 rounded-4xl">
            <p class="text-3xl md:text-4xl xl:text-5xl xl:leading-tighter mb-4">Create new dynamic NFTs</p>
            <p class="mb-30">
              <a class="text-lg lg:text-xl uppercase underline" href="#">View Code</a>
            </p>
            <p class="text-right">
              <button><ExpandIcon /></button>
            </p>
          </div>
        </div>
        <div class="lg:w-1/2 xl:w-1/3 lg:px-4">
          <div class="bg-black text-white pt-14 pb-8 pl-8 pr-6 lg:pl-12 lg:pr-10 mb-24 rounded-4xl">
            <p class="text-3xl md:text-4xl xl:text-5xl xl:leading-tighter mb-4">Use tokens to control table access</p>
            <p class="mb-18">
              <a class="text-lg lg:text-xl uppercase underline" href="#">View Code</a>
            </p>
            <p class="text-right">
              <button><ExpandIcon /></button>
            </p>
          </div>

          <div class="bg-black text-white pt-14 pb-8 pl-8 pr-6 lg:pl-12 lg:pr-10 mb-24 rounded-4xl">
            <p class="text-3xl md:text-4xl xl:text-5xl xl:leading-tighter mb-4">Compose with existing tables</p>
            <p class="mb-18">
              <a class="text-lg lg:text-xl uppercase underline" href="#">View Code</a>
            </p>
            <p class="text-right">
              <button><ExpandIcon /></button>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- sql -->
    <section class="sql">
      <div class="garage-break"></div>
      <div class="container px-6 md:px-8 lg:px-12 flex pt-20">
        <div class="lg:w-2/3 xl:w-1/2">
          <h3 class="font-Orbitron text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-8">
            In Tableland, we speak SQL
          </h3>
          <p class="text-2xl md:text-3xl leading-normal tracking-wide mb-1">
            1 – The bulk of digital information is stored in relational tables.
          </p>
          <p class="text-2xl md:text-3xl leading-normal tracking-wide mb-1">
            2 – Your familiar SQL tables are stored on a decentralized network of validators
            and anchored to Ethereum as transferable NFTs, providing ownership and access control.
          </p>
          <p class="text-2xl md:text-3xl leading-normal tracking-wide mb-4">
            3 – Easy as pie, right?
          </p>
        </div>
      </div>
    </section>

    <div class="bg-gradient">
      <!-- tables -->
      <section class="tables relative text-white">
        <div class="container px-6 md:px-8 lg:px-12 flex justify-end">
          <div class="lg:w-2/3 xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-8">
              Easy to releate tables
            </h3>
            <p class="text-2xl md:text-3xl leading-normal tracking-wide mb-16">
              Whether you're a developer, NFT creator, token holder, or just curious about Web3,
              there's a place for you in Tableland. Join a fast-growing community of innovators
              from all over the world.
            </p>
            <div class="text-center lg:text-left">
              <ButtonLink href="#">Call to Action</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <!-- playground -->
      <section class="playground text-white py-32">
        <div class="container px-6 md:px-8 lg:px-12 flex justify-center">
          <div class="lg:w-2/3 xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-8">
              Try it out
            </h3>
            <p class="text-2xl md:text-3xl leading-normal tracking-wide mb-8">
              Don't take just our word for it. Type <span class="font-mono">connect</span>
              below to see how easy it is.
            </p>
            <playground></playground>
          </div>
        </div>
      </section>
    </div>

    <!-- community -->
    <section class="community relative">
      <div class="container px-6 md:px-8 lg:px-12">
        <div class="mb-280">
          <div class="lg:w-2/3 xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-10">
              Join the community
            </h3>
            <p class="text-2xl md:text-3xl leading-normal tracking-wide mb-14">
              Whether you're a developer, NFT creator, token holder, or just curious about Web3,
              there's a place for you in Tableland. Join a fast-growing community of innovators
              from all over the world.
            </p>
            <div class="text-center lg:text-left">
              <ButtonLink href="#">Call to Action</ButtonLink>
            </div>
          </div>
        </div>

        <div class="flex justify-end text-white">
          <div class="lg:w-2/3 xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-14">
              User-owned token networks are the future of the internet
            </h3>
            <p class="text-2xl md:text-3xl leading-normal tracking-wide mb-14">
              Tableland is a compassable meta-layer-it and encompasses everything from NFT
              metadata, social, financial, machine-learning, and research data, or anything else.
              Tableland tables are also own-able, tradable, and interoperable assets on their
              parent networks.
            </p>
          </div>
        </div>
      </div>
      <div class="community-break"></div>
    </section>

    <!-- phases -->
    <section class="phases mb-48">
      <div class="container px-6 md:px-8 lg:px-12">
        <div class="mb-62">
          <div class="xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-1">
              Q1<br>
              Testnet Phase 1
            </h3>
            <p class="font-Orbitron text-2xl md:text-3xl lg:text-4.5xl mb-5">2022</p>
            <div class="bg-black text-white py-8 md:py-10 lg:py-14 px-10 md:px-12 lg:px-16 rounded-3xl">
              <p class="text-3xl md:text-4xl xl:text-5xl xl:leading-tighter mb-4">
                Ethereum table &amp; payment channel support
              </p>
              <p>
                <a class="text-xl md:text-2xl uppercase underline" href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>

        <div class="mb-62 xl:mb-14 xl:flex xl:justify-end">
          <div class="xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-1">
              Q2<br>
              Testnet Phase 2
            </h3>
            <p class="font-Orbitron text-2xl md:text-3xl lg:text-4.5xl mb-5">2022</p>
            <div class="bg-black text-white py-8 md:py-10 lg:py-14 px-10 md:px-12 lg:px-16 rounded-3xl">
              <p class="text-3xl md:text-4xl xl:text-5xl xl:leading-tighter mb-4">
                Permissionless validator network
              </p>
              <p>
                <a class="text-xl md:text-2xl uppercase underline" href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>

        <div class="mb-48">
          <div class="xl:w-1/2">
            <h3 class="font-Orbitron text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter leading-none mb-1">
              Q3<br>
              Testnet Phase 3
            </h3>
            <p class="font-Orbitron text-2xl md:text-3xl lg:text-4.5xl mb-5">2022</p>
            <div class="bg-black text-white py-8 md:py-10 lg:py-14 px-10 md:px-12 lg:px-16 rounded-3xl">
              <p class="text-3xl md:text-4xl xl:text-5xl xl:leading-tighter mb-4">
                Ethereum table &amp; payment channel support
              </p>
              <p>
                <a class="text-xl md:text-2xl uppercase underline" href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>

        <div class="text-center">
          <p class="text-3xl md:text-4xl xl:text-5xl xl:leading-normal mb-8">Any Suggestions?</p>
          <ButtonLink href="#">Call to Action</ButtonLink>
        </div>
      </div>
    </section>

    <!-- showcase -->
    <section class="hidden md:block showcase pt-72 pb-36 relative">
      <div class="showcase-break"></div>
      <div class="container px-6 md:px-8 lg:px-12">
        <div class="slider flex gap-x-3.5 mb-32">
          <div class="bg-white pt-8 lg:pt-14 pb-120 px-10 lg:px-16 rounded-7xl lg:rounded-8xl slide active" @click="handleSliderClick">
            <div class="md:w-1/2 xl:w-1/3">
              <h4 class="text-3xl md:text-4xl xl:text-5xl xl:leading-tighter">
                Showcase Example 1
              </h4>
              <a class="text-2xl uppercase underline" href="#">Link</a>
            </div>
          </div>

          <div class="bg-white pt-8 lg:pt-14 pb-120 px-10 lg:px-16 rounded-7xl lg:rounded-8xl slide inactive" @click="handleSliderClick">
            <div class="md:w-1/2 xl:w-1/3">
              <h4 class="text-3xl md:text-4xl xl:text-5xl xl:leading-tighter">
                Showcase Example 2
              </h4>
              <a class="text-2xl uppercase underline" href="#">Link</a>
            </div>
          </div>

          <div class="bg-white pt-8 lg:pt-14 pb-120 px-10 lg:px-16 rounded-7xl lg:rounded-8xl slide inactive" @click="handleSliderClick">
            <div class="md:w-1/2 xl:w-1/3">
              <h4 class="text-3xl md:text-4xl xl:text-5xl xl:leading-tighter">
                Showcase Example 3
              </h4>
              <a class="text-2xl uppercase underline" href="#">Link</a>
            </div>
          </div>
        </div>

        <div class="text-center text-white">
          <p class="text-3xl md:text-4xl xl:text-5xl xl:leading-normal mb-2">What Will You Build?</p>
          <ButtonLink href="#">Call to Action</ButtonLink>
        </div>
      </div>
    </section>

    <footer class="text-white py-24">
      <nav class="container px-6 md:px-8 lg:px-12 flex items-center py-2">
        <div class="py-4">
          <img src="~assets/img/logo-white.svg" alt="Tableland" class="h-5">
        </div>
        <ul class="hidden sm:flex flex-1 justify-end items-center gap-x-12 xl:gap-x-24 uppercase text-sm pr-20">
          <li><a href="#">Investors</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Legal</a></li>
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
