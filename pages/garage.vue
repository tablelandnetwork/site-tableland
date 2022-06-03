<template>
  <div class="mint-page">

    <!-- Header -->
    <!-- Header -->
    <div class="nav-bar" :class="{ 'absolute w-full h-screen top-0 left-0': menu }">
      <div class="sm:mx-auto flex flex-wrap">

        <!-- Desktop nav -->

        <nav class="container hidden md:inline-flex justify-between px-6 md:px-9 lg:px-16 flex items-center py-2 pt-6">
          <div class="py-4">
            <a href="/"><img src="~assets/img/logo-black.svg" alt="Tableland" class="h-5"></a>
          </div>
          <div class="py-4">
            <ul class="flex justify-end items-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-12 uppercase ml-3">
              <li v-for="(item, index) in items" :key="index">
                <a :href="item.href">
                  {{ item.title }}
                </a>
              </li>
              <li>
                <a class="btn bg-black text-white"
                     :disabled="!!$wallet.account"
                     @click="$wallet.connect">
                     <strong>{{
                         !!$wallet.account ? $wallet.accountCompact : 'Connect Wallet'
                     }}</strong>
                 </a>
              </li>
            </ul>
          </div>
        </nav>

        <!-- Toggle menu mobile -->
        <div class="py-12 px-6 md:hidden logo">
          <a href="/"><img src="~assets/img/logo-black.svg" alt="Tableland" class="h-4"></a>
        </div>
          <button
            class="ml-auto md:hidden p-6" @click="menu = !menu">
          MENU
        </button>
        </div>

        <!-- Mobile nav  -->
        <nav v-show="menu" data-aos="fade-down" class="aos-animate w-full" style="background: #b172a1; transition: all 0.2s ease-in-out">
          <ul class="flex flex-col text-center">
          <li v-for="(item, index) in items" :key="index">
            <a :href="item.href" class="hover: p-6 block">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- minter -->
    <section class="user-garage">
      <div class="container px-2 sm:px-12 md:px-36 lg:px-36 xl:px-12 flex pt-8 lg:pt-12 2xl:pt-24 justify-between">
        <div class="lg:w-full px-0 lg:pb-12 pb-6 pt-0" data-aos="fade-up">
          <div class="lg:flex ">
            <div class="text-left w-full pt-24 px-24" data-aos="fade-up">
              <h3 class="text-black lg:text-xl text-l" v-if="$wallet.account">WALLET ID: {{$wallet.account}}</h3>
              <h1 class="text-black font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12 lg:mb-10" data-aos="fade-up" v-if="$wallet.account">
                Welcome to your Garage
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- showcase -->
    <section class="md:block showcase py-24 relative">
    <div class="minter-break flex container text-center justify-between"></div>

      <div class="container px-12 sm:px-12 md:px-36 lg:px-36 xl:px-36" style="margin-top:-300px;" v-if="$wallet.account">
        <div class="flex flex-wrap">
          <div class="lg:w-full px-12 lg:pb-12 pb-6 pt-0" data-aos="fade-up">
          <h1 class="text-pink font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12 lg:mb-10" data-aos="fade-up" >
            Your Rigs
          </h1>

          </div>
        </div>
        <div class="flex flex-wrap py-0 rig-garage">
          <div class="w-1/3 px-3 py-3 rigs" v-for="(rig, index) in rigsMeta.rigs" data-aos="fade-up">
            <a href="/minted">
             <div class="rig-frame" :class="rig.attributes[1].value + ' rarity-' + rig.attributes[0].value">
             <img :src="rig.image"/>
           </div>
             <h2 class="text-white font-Orbitron text-l">RIG ID {{ rig.id }}</h2>
             <p class="text-white">FLEET: {{ rig.attributes[1].value }}</p>
            </a>
          </div>
        </div>
        <div class="flex">
          <div class="lg:w-full px-12 lg:pb-12 pb-6 pt-36" data-aos="fade-up">
          <h1 class="text-pink font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12 lg:mb-10" data-aos="fade-up" >
            Your Badges
          </h1>
          </div>
        </div>
        <div class="flex py-0 ">
          <div class="w-1/3 px-12 text-center">
            <img src="~assets/img/badge1.png"/>
            <h3 class="text-pink lg:text-xl text-l py-2">badge_name</h3>
            <h3 class="text-pink lg:text-xl text-l">earned 05/05/2022</h3>
          </div>
          <div class="w-1/3 px-12 text-center">
            <img src="~assets/img/badge2.png"/>
            <h3 class="text-pink lg:text-xl text-l py-2">badge_name</h3>
            <h3 class="text-pink lg:text-xl text-l">earned 05/05/2022</h3>
          </div>
          <div class="w-1/3 px-12 text-center">
            <img src="~assets/img/badge3.png"/>
            <h3 class="text-pink lg:text-xl text-l py-2">badge_name</h3>
            <h3 class="text-pink lg:text-xl text-l">earned 05/05/2022</h3>
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
  import rigsMeta from '~/assets/rigsMeta.json';

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

    data() {
      const now = new Date();
      const launchDate = new Date(2022, 4, 31, 0, 0);
      return {
        time: launchDate - now,
        isAddClass: false,
        rigsMeta: rigsMeta,
      };
    },
  };
  </script>
