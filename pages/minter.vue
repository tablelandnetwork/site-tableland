<template>
  <div class="mint-page">

    <!-- Header -->
    <HeaderNav></HeaderNav>

    <!-- minter -->
    <section class="minter">

      <div class="container px-2 sm:px-12 md:px-36 lg:px-36 xl:px-12 flex pt-8 lg:pt-12 2xl:pt-24 justify-between">

        <div class="lg:w-full px-0 lg:pb-12 pb-6 pt-0" data-aos="fade-up">

          <div class="lg:flex ">
            <div class="text-center w-full pt-6 " data-aos="fade-up">
              <h1 class="font-bold text-center font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12 lg:mb-10" data-aos="fade-up">
              Mint a Rig
              </h1>
            </div>
          </div>

        </div>
      </div>
    </section>

      <!-- showcase -->
      <section class="md:block showcase py-32 relative">
      <div class="minter-break flex container text-center justify-between">
        <div class="w-full">
          <div class="part-frame part1" v-bind:class="{'mint': isAddClass}">
            <div class="carousel" data-aos="fade-up">
              <div><img src="~assets/img/piece1.png"/></div>
              <div><img src="~assets/img/piece2.png"/></div>
              <div><img src="~assets/img/piece3.png"/></div>
              <div><img src="~assets/img/piece4.png"/></div>
            </div>
            <div class="part-result" v-bind:class="{'active': isAddClass}">
              <img src="~assets/img/piece4.png"/>
            </div>
          </div>

          <div class="part-frame part2" v-bind:class="{'mint': isAddClass}">
            <div class="carousel" data-aos="fade-up">
              <div><img src="~assets/img/piece3.png"/></div>
              <div><img src="~assets/img/piece4.png"/></div>
              <div><img src="~assets/img/piece1.png"/></div>
              <div><img src="~assets/img/piece2.png"/></div>
            </div>
            <div class="part-result" v-bind:class="{'active': isAddClass}">
              <img src="~assets/img/piece3.png"/>
            </div>
          </div>

          <div class="part-frame part3" v-bind:class="{'mint': isAddClass}">
            <div class="carousel" data-aos="fade-up">
              <div><img src="~assets/img/piece2.png"/></div>
              <div><img src="~assets/img/piece3.png"/></div>
              <div><img src="~assets/img/piece4.png"/></div>
              <div><img src="~assets/img/piece1.png"/></div>
            </div>
            <div class="part-result" v-bind:class="{'active': isAddClass}">
              <img src="~assets/img/piece2.png"/>
            </div>
          </div>

          <div class="part-frame part4" v-bind:class="{'mint': isAddClass}">
            <div class="carousel" data-aos="fade-up">
              <div><img src="~assets/img/piece4.png"/></div>
              <div><img src="~assets/img/piece1.png"/></div>
              <div><img src="~assets/img/piece2.png"/></div>
              <div><img src="~assets/img/piece3.png"/></div>
            </div>
            <div class="part-result" v-bind:class="{'active': isAddClass}">
              <img src="~assets/img/piece1.png"/>
            </div>
          </div>
          <div class="rig-result" v-bind:class="{'active': isAddClass}">
            <img src="~assets/img/card.png"/>
            <div class="flex">
              <div class="w-full px-0 py-12">
                <a class="btn btn-mint text-white">VIEW TRANSACTION</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="container" style="margin-top:-150px;">
          <div class="flex px-48 py-0">
            <div class="lg:w-1/2 minter-console" v-bind:class="{'active': isAddClass}">
              <MinterConsole></MinterConsole>
            </div>
            <div class="lg:w-1/2 minter-details" v-bind:class="{'active': isAddClass}">
              <div class="flex py-12 px-12">
                <div class="w-1/2" >
                  <h3 class="text-white lg:text-xl text-l">PRICE</h3>
                  <h2 class="text-white text-4xl font-Orbitron">0.01ETH</h2>
                </div>
                <div class="w-1/2">
                  <h3 class="text-white lg:text-xl text-l">AVAILABLE</h3>
                  <h2 class="text-white text-4xl font-Orbitron">10,000</h2>
                </div>
              </div>
              <div class="flex py-0 px-12">
                <div class="w-1/2" >
                  <h3 class="text-white lg:text-xl text-l">METAVALUE</h3>
                  <h2 class="text-white text-4xl font-Orbitron">placeholder</h2>
                </div>
                <div class="w-1/2">
                  <h3 class="text-white lg:text-xl text-l">METAVALUE</h3>
                  <h2 class="text-white text-4xl font-Orbitron">placeholder</h2>
                </div>
              </div>
              <div class="flex">
                <div class="w-full px-12 py-18">
                  <a v-on:click="addClass" class="btn btn-mint text-white">MINT RIG</a>
                </div>
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
          { hid: 'og-desc', property: 'og:description', content: 'A generative NFT with 1,043 handcrafted works of art. Rigs are your ride to Tableland.' },
          { hid: 'og-image', property: 'og:image',
            content: 'https://i.imgur.com/5YHLnkC.png'
          },

        ]
      }
    },

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
    methods: {
           addClass: function() {
               this.isAddClass = true;
       }
   },
    data() {
      const now = new Date();
      const launchDate = new Date(2022, 4, 31, 0, 0);
      return {
        time: launchDate - now,
        isAddClass: false,

      };
    },
  };
  </script>
