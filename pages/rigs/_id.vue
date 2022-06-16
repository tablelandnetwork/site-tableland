<template>
  <div class="mint-page">

    <!-- Header -->
    <HeaderNav
      :titles="nav.map(i => i.title)"
      :hrefs="nav.map(i => i.href)"
      :targets="nav.map(i => i.target)"
    />

    <!-- minter -->
    <section class="minted">

      <div class="container px-2 sm:px-12 md:px-36 lg:px-36 xl:px-12 flex pt-8 lg:pt-12 2xl:pt-24 justify-between">

        <div class="lg:w-full px-0 lg:pb-12 pb-6 pt-0" data-aos="fade-up">

          <div class="lg:flex ">
            <div class="text-center w-full pt-6 " data-aos="fade-up">


            </div>
          </div>

        </div>
      </div>
    </section>

      <!-- showcase -->
      <section class="md:block showcase py-12 relative">
      <div class="minter-break flex container text-center justify-between"></div>
        <div class="container" style="margin-top:-900px;max-width: 1280px;z-index:999" v-if="rigId">
          <h1 class="text-black text-center font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12 lg:mb-10" data-aos="fade-up" >
            RIG ID #00{{rigId}}
          </h1>
          <div class="rig-frame" :class="rigsMeta.rigs[rigIdName].attributes[1].value + ' rarity-' + rigsMeta.rigs[rigIdName].attributes[0].value">
            <img :src="rigsMeta.rigs[rigIdName].image"/>
          </div>
          <h3 id="rig-owner" class="text-white text-center lg:text-xl text-l"></h3>
          <div class="flex px-6 lg:px-48 py-12">
            <div class="lg:w-full minter-details">
              <div class="flex flex-wrap py-0 lg:px-12 px-12" >
                <div class="lg:w-1/2 w-full px-0 py-3" v-for="(rig, index) in rigsMeta.rigs[rigIdName].attributes" data-aos="fade-up">
                  <h3 class="text-white lg:text-xl text-l">{{rig.trait_type}}</h3>
                  <h2 class="text-white text-3xl font-Orbitron">{{rig.value}}</h2>
                </div>
              </div>
              <div class="flex">
                <div class="w-full px-24 py-18">
                  <a class="btn btn-mint text-white" :href="'https://testnets.opensea.io/assets/goerli/0x88694d0b8c8E800AB3D9eecBF9A8923B3b5825fA/' + rigId" >VIEW ON OPENSEA</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="container" style="margin-top:-900px;max-width: 1280px;z-index:999" v-if="!rigId">
          Rig not found!
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
    data: function() {
      return {
        rigsMeta: rigsMeta,
        rigId: this.$route.params.id,
        rigIdName: this.$route.params.id - 1,
        provider: window.ethereum,
        nav: [
          {
            title: 'Gallery',
            href: '/gallery',
          },
          {
            title: 'Garage',
            href: '/garage',
          },
          {
            title: 'Docs',
            href: 'https://docs.tableland.xyz',
            target: '_blank'
          },
          {
            title: 'Rigs',
            href: '/rigs',
          },
        ]
      }
    },

    head: function () {
      return {
        title: 'Rig #00' + this.rigId + ' - The Tableland NFT: Rigs',
        meta: [
          { hid: 'og-url', property: 'og:url', content: `${this.$route.path}` },
          { hid: 'og-type', property: 'og:type', content: 'website' },
          { hid: 'og-title', property: 'og:title', content: 'Rig #00' + this.rigId + ' - The Tableland NFT: Rigs' },
          { hid: 'og-sitename', property: 'og:site_name', content: 'tableland.xyz/rigs' },
          { hid: 'og-desc', property: 'og:description', content: 'A generative NFT built from 1,074 handcrafted works of art for the builders and creatives of cyberspace.' },
          {
            hid: 'og-image',
            property: 'og:image',
            content: 'https://i.imgur.com/5YHLnkC.png'
          }
        ]
      };
    },

    beforeMount(){
      if(this.provider) {
        this.$wallet.rigId = this.rigId;
      }
   },

    methods: {
     refresh() {
      this.$nuxt.refresh()
     },
   },

  }
</script>
