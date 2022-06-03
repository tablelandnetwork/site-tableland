<template>
  <div class="mint-page">

    <!-- Header -->
    <HeaderNav></HeaderNav>

    <!-- minter -->
    <section class="user-garage">
      <div class="container px-2 sm:px-12 md:px-36 lg:px-36 xl:px-12 flex pt-8 lg:pt-12 2xl:pt-24 justify-between">
        <div class="lg:w-full px-0 lg:pb-12 pb-6 pt-0" data-aos="fade-up">
          <div class="lg:flex ">
            <div class="text-left w-full pt-24 px-24" data-aos="fade-up">
              <h1 class="text-black font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12 lg:mb-10" data-aos="fade-up" >
                Tableland Gallery
              </h1>
              <div class="hero-btn md:inline-block md:text-left mb-18 lg:mb-24 px-6" data-aos="fade-up">
                <ButtonLink href="/minter">Mint a Rig</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- showcase -->
    <section class="md:block showcase py-24 relative">
    <div class="minter-break flex container text-center justify-between"></div>
      <div class="container px-12 sm:px-12 md:px-36 lg:px-36 xl:px-36" style="margin-top:-300px;">
        <div class="flex">
          <div class="lg:w-full px-6 pt-0" data-aos="fade-up">
          <h1 class="text-pink font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter" data-aos="fade-up" >
            The Rigs
          </h1>
          </div>
        </div>
        <div class="container mx-auto">
          <ul class="filters flex justify-right space-x-2 text-white px-6 py-12">
            <li>
              <button
                @click="currentTab(1)"
                class="inline-block px-4 py-2 active"
              >
                View All
              </button>
            </li>
            <li>
              <button
                @click="currentTab(2)"
                class="inline-block px-4 py-2 "
              >
                Tumblers
              </button>
            </li>
            <li>
              <button
                @click="currentTab(3)"
                class="inline-block px-4 py-2 "
              >
                Foils
              </button>
            </li>
            <li>
              <button
                @click="currentTab(4)"
                class="inline-block px-4 py-2 "
              >
                Hoppers
              </button>
            </li>
            <li>
              <button
                @click="currentTab(5)"
                class="inline-block px-4 py-2 "
              >
                Titans
              </button>
            </li>
            <li>
              <button
                @click="currentTab(6)"
                class="inline-block px-4 py-2 "
              >
                Airelights
              </button>
            </li>
            <li>
              <button
                @click="currentTab(7)"
                class="inline-block px-4 py-2 "
              >
                Sleds
              </button>
            </li>
            <li>
              <button
                @click="currentTab(8)"
                class="inline-block px-4 py-2 "
              >
                Tracers
              </button>
            </li>
            <li>
              <button
                @click="currentTab(9)"
                class="inline-block px-4 py-2 "
              >
                Edgeriders
              </button>
            </li>
          </ul>
          <div>
            <div v-if="tab === 1">
              <div class="flex py-6">
                <div class="w-1/4 px-6 rigs">
                  <a href="/minted"><img src="~assets/img/card.png"/></a>
                </div>
                <div class="w-1/4 px-6 rigs">
                  <a href="/minted"><img src="~assets/img/card2.png"/></a>
                </div>
                <div class="w-1/4 px-6 rigs">
                  <a href="/minted"><img src="~assets/img/card3.png"/></a>
                </div>
                <div class="w-1/4 px-6 rigs">
                  <a href="/minted"><img src="~assets/img/card.png"/></a>
                </div>
              </div>
              <div class="flex py-6">
                <div class="w-1/4 px-6 rigs">
                  <a href="/minted"><img src="~assets/img/card.png"/></a>
                </div>
                <div class="w-1/4 px-6 rigs">
                  <a href="/minted"><img src="~assets/img/card2.png"/></a>
                </div>
                <div class="w-1/4 px-6 rigs">
                  <a href="/minted"><img src="~assets/img/card3.png"/></a>
                </div>
                <div class="w-1/4 px-6 rigs">
                  <a href="/minted"><img src="~assets/img/card.png"/></a>
                </div>
              </div>
              <div class="flex py-6">
                <div class="w-1/4 px-6 rigs">
                  <a href="/minted"><img src="~assets/img/card.png"/></a>
                </div>
                <div class="w-1/4 px-6 rigs">
                  <a href="/minted"><img src="~assets/img/card2.png"/></a>
                </div>
                <div class="w-1/4 px-6 rigs">
                  <a href="/minted"><img src="~assets/img/card3.png"/></a>
                </div>
                <div class="w-1/4 px-6 rigs">
                  <a href="/minted"><img src="~assets/img/card.png"/></a>
                </div>
              </div>
            </div>
            <div v-if="tab === 2">
              Tab 2 Content show Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. aliquam rem. Exercitationem corporis eius voluptatibus.
            </div>
            <div v-if="tab === 3">
              Tab 3 Content show Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </div>
          </div>
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
        title: 'Meet the RIGS - Tableland',
        meta:[
          { hid: `og-url`, property: 'og:url', content: `/${this.$route.path}`},
          { hid: 'og-type', property: 'og:type', content: 'website' },
          { hid: 'og-title', property: 'og:title', content: 'Mint a rig' },
          { hid: 'og-sitename', property: 'og:site_name', content: 'Tableland - Build web3 with SQL' },
          { hid: 'og-desc', property: 'og:description', content: 'A generative NFT with 1,074 handcrafted works of art. Rigs are your ride to Tableland.' },
          { hid: 'og-image', property: 'og:image',
            content: 'https://i.imgur.com/5YHLnkC.png'
          },

        ],
      }
    },

    computed: {
      ethereum: function () {
        return window.ethereum;
      }
    },

    methods: {
        addClass: function() {
         this.isAddClass = true;
       },
       currentTab: function (tabNumber) {
         this.tab = tabNumber;
       },
   },
    data() {
      const now = new Date();
      const launchDate = new Date(2022, 4, 31, 0, 0);
      return {
        time: launchDate - now,
        isAddClass: false,
        tab: 1,

      };
    },
  };
  </script>
