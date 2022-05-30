<template>
  <div class="mint-page">
    <!-- Header -->
    <HeaderNav></HeaderNav>


      <section class="info">
          <div class="container px-8 pt-24">
            <div class="lg:flex">
              <div class="lg:w-full lg:px-64 py-6 md:py-24 lg:py-32" >
                <h3 class="lg:text-2xl text-xl">// MAY 3 2022</h3>
                <h1 data-aos="fade-up" class="font-Orbitron w-full h-auto text-4xl lg:text-6xl choose leading-tighter mb-4 lg:mb-10">
                Introducing Tableland Rigs
                </h1>
                <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                  It’s 2047. The metaverse is now ubiquitous. The singularity happened. Humanity survived. It turns out that sentient AI was benevolent. Rather than the rise of the machines wiping us out – technology brought us all together. Now, at the fringes of The Grid – out beyond the megalopolis – is Tableland. A decentralized zone, where the old rules don’t apply. Where our Avatars, on board meta-machines called Rigs, are embarking on the greatest adventure yet.
                </p>
                <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                  Tableland enables builders to create dynamic Web3 experiences through relational metadata and SQL. We’re launching an NFT experience to showcase the power of Tableland and reward our growing community with awesome art.
                </p>
                <p class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                  Tableland Rigs reveal relational NFT trait mutability governed by token-based rules—a powerful primitive uniquely enabled by the Tableland protocol. It’s also your key to access testnet and a new frontier of builders united in their pursuit of a new user-owned web.
                </p>
                <img src="~assets/img/grid.png"/>
              </div>
            </div>
          </div>
      </section>


      <!-- showcase -->
      <section class="md:block showcase py-32 relative">
      <div class="showcase-break"></div>
      <div class="lg:w-1/2 w-full " style="margin-top:-100px;z-index:999;position: absolute;left: 0;overflow:auto;">
        <img src="~assets/img/wall2.png"/>
      </div>
      <div data-aos="fade-up" class="w-1/3" style="margin-top: -700px;overflow: auto;position: absolute;right: 0;">
        <img src="~assets/img/wall.png"/>
      </div>
        <div class="container" style="margin-top:-150px;">
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
    },
    data() {
      const now = new Date();
      const launchDate = new Date(2022, 4, 31, 0, 0);
      return {
        time: launchDate - now,
      };
    },
  };
  </script>
