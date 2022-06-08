<template>
  <div class="mint-page">

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
        <div class="container" style="margin-top:-900px;max-width: 1280px;z-index:999">
          <h1 class="text-black text-center font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12 lg:mb-10" data-aos="fade-up" >
            RIG ID #00{{ rigsMeta.rigs[rigIdName].id }}
          </h1>
          <div class="rig-frame" :class="rigsMeta.rigs[rigId].attributes[1].value + ' rarity-' + rigsMeta.rigs[rigId].attributes[0].value">
            <img :src="rigsMeta.rigs[rigId].image"/>
          </div>
          <h3 id="rig-owner" class="text-white text-center lg:text-xl text-l"></h3>
          <div class="flex px-48 py-12">
            <div class="lg:w-full minter-details">
              <div class="flex flex-wrap py-0 px-24" >
                <div class="w-1/2 px-0 py-3" v-for="(rig, index) in rigsMeta.rigs[rigId].attributes" data-aos="fade-up">
                  <h3 class="text-white lg:text-xl text-l">{{rig.trait_type}}</h3>
                  <h2 class="text-white text-3xl font-Orbitron">{{rig.value}}</h2>
                </div>
              </div>
              <div class="flex">
                <div class="w-full px-24 py-18">
                  <a class="btn btn-mint text-white" href="https://goerli.etherscan.io/token/0x88694d0b8c8e800ab3d9eecbf9a8923b3b5825fa?a=">VIEW TRANSACTION</a>
                </div>
              </div>
            </div>
            <div class="lg:w-1/2 halo1 hidden" v-bind:class="{'active': isAddClass}">
              <img class=" a-1" src="~assets/img/light_1.png" data-aos="fade-up"/>
            </div>
            <div class="lg:w-1/2 halo2 hidden" v-bind:class="{'active': isAddClass}">
              <img class="a-2" src="~assets/img/light_2.png" data-aos="fade-up"/>
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
    data() {
      return {
        rigsMeta: rigsMeta,
        rigId: this.$route.params.id,
        rigIdName: this.$route.params.id - 1,
      }
    },
  }
</script>
