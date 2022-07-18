<template>
  <div class="mint-page">
    <!-- Header -->
    <HeaderNav
      :titles="nav.map((i) => i.title)"
      :hrefs="nav.map((i) => i.href)"
      :targets="nav.map((i) => i.target)"
    />

    <section class="rig-gallery">
      <div
        class="container px-2 sm:px-12 md:px-36 lg:px-36 xl:px-12 flex pt-8 lg:pt-12 2xl:pt-24 justify-between"
      ></div>
    </section>

    <!-- showcase -->
    <section class="md:block bg-solid py-24 relative">
      <div class="container px-0 sm:px-12 md:px-12 lg:px-24 xl:px-24">
        <div class="flex">
          <div class="lg:w-full px-3 pt-0" data-aos="fade-up">
            <h1
              class="font-Orbitron w-full h-auto text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-12 lg:mb-10"
              data-aos="fade-up"
            >
              The Rigs
            </h1>
          </div>
        </div>
        <div class="container mx-auto">
          <div class="filters hidden lg:block text-black text-l" data-aos="fade-up">
            <span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">View All</span>
            <span class="filter" v-bind:class="{ active: currentFilter === 'Titans' }" v-on:click="setFilter('Titans')">Titans</span>
            <span class="filter" v-bind:class="{ active: currentFilter === 'Tumblers' }" v-on:click="setFilter('Tumblers')">Tumblers</span>
            <span class="filter" v-bind:class="{ active: currentFilter === 'Sleds' }" v-on:click="setFilter('Sleds')">Sleds</span>
            <span class="filter" v-bind:class="{ active: currentFilter === 'Edge Riders' }" v-on:click="setFilter('Edge Riders')">Edge Riders</span>
            <span class="filter" v-bind:class="{ active: currentFilter === 'Tracers' }" v-on:click="setFilter('Tracers')">Tracers</span>
            <span class="filter" v-bind:class="{ active: currentFilter === 'Hoppers' }" v-on:click="setFilter('Hoppers')">Hoppers</span>
            <span class="filter" v-bind:class="{ active: currentFilter === 'Airelights' }" v-on:click="setFilter('Airelights')">Airelights</span>
            <span class="filter" v-bind:class="{ active: currentFilter === 'Foils' }" v-on:click="setFilter('Foils')">Foils</span>
            <span class="filter" v-bind:class="{ active: currentFilter == '100' }" v-on:click="setFilter('100')">Originals</span>

          </div>

          <div class="flex flex-wrap py-0 rig-garage">
           <div class="w-1/2 xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-1/2 lg:px-3 lg:py-3 rigs my-2" v-for="rig in rigsMeta" v-show="currentFilter === 'ALL' || currentFilter === rig[0].attributes[4].value || currentFilter == rig[0].attributes[0].value">
             <a :href="'/rigs/' + rig[0].name.replace('#', '')" >
              <div class="rig-frame" :class="rig[0].attributes[0].value" >
                <img :src="rig[0].thumb"/>
              </div>
            <h2 class="text-black font-Orbitron text-l lg:text-xl px-3 lg:py-3">{{ rig[0].name }}</h2>

            <div v-if="rig[0].attributes[0].value == '100'">
              <p class="text-black px-3 py-0">Fleet: {{ rig[0].attributes[5].value }}  </p>
              <p class="text-black px-3 lg:py-3 lg:pb-3 text-bold" :class="' rarity-' + rig[0].attributes[0].value">Original: {{ rig[0].attributes[4].value }} {{ rig[0].attributes[7].value }}</p>
            </div>
            <div v-else>
              <p class="text-black px-3 py-0">Fleet: {{ rig[0].attributes[4].value }}</p>
              <p class="text-black px-3 lg:py-3 lg:pb-3">Original: {{ rig[0].attributes[0].value}}%</p>
            </div>
            </a>
           </div>
         </div>
        </div>
      </div>
    </section>

    <footer class="text-blue py-10">
      <nav class="container px-6 md:px-9 lg:px-16 py-2">
        <div class="hidden py-4">
          <img
            src="~assets/img/logo-white.svg"
            alt="Tableland"
            class="h-5"
            id="js-scroll"
          />
        </div>
        <ul
          class="flex justify-center items-center gap-x-3 sm:gap-x-6 md:gap-x-12 xl:gap-x-24 uppercase text-xs"
        >
          <li class="hidden md:inline-block">
            <a href="https://twitter.com/tableland__">Twitter</a>
          </li>
          <li>
            <a
              href="https://textile.notion.site/Tableland-Grants-Funding-ebc1f398d53a481d94f090ab12d93be0"
              >Grants</a
            >
          </li>
          <li class="hidden md:inline-block">
            <a href="https://boards.greenhouse.io/textileio">Jobs</a>
          </li>
          <li>
            <a href="https://hhueol4i6vp.typeform.com/to/sgtDW2Xt"
              >Token Info</a
            >
          </li>
          <li>
            <a href="https://docs.tableland.xyz/general/community/partners"
              >Partners</a
            >
          </li>
          <li>
            <a
              href="https://textile.notion.site/Tableland-Privacy-Policy-6fd160e7f485491d9dc4cbab188043d5"
              >Privacy</a
            >
          </li>
          <li>
            <a
              href="https://textile.notion.site/Tableland-Terms-of-Use-cf80f1b550b843ad9d4b8c3140b78e35"
              >Terms</a
            >
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Gallery - Tableland",
      meta: [
        { hid: `og-url`, property: "og:url", content: `/${this.$route.path}` },
        { hid: "og-type", property: "og:type", content: "website" },
        { hid: "og-title", property: "og:title", content: "Mint a rig" },
        {
          hid: "og-sitename",
          property: "og:site_name",
          content: "Tableland - Build web3 with SQL",
        },
        {
          hid: "og-desc",
          property: "og:description",
          content:
            "A generative NFT with 1,074 handcrafted works of art. Rigs are your ride to Tableland.",
        },
        {
          hid: "og-image",
          property: "og:image",
          content: "https://i.imgur.com/5YHLnkC.png",
        },
      ],
    };
  },

  methods: {
    addClass: function () {
      this.isAddClass = true;
    },
    setFilter: function(filter) {
      this.currentFilter = filter;
    },
    rigsMeta: async function() {
      const options = {method: 'GET', headers: {Accept: 'application/json'}};
      const rigSupply = await(await fetch('https://api.looksrare.org/api/v1/collections/stats?address=0x8EAa9AE1Ac89B1c8C8a8104D08C045f78Aadb42D')).json();
      const totalSupply = rigSupply.data.totalSupply;
      const rigsFeed =  await(await fetch('https://testnet.tableland.network/query?mode=rows&s=select%20json_object(%27name%27%2C%27%23%27%7C%7Cid%2C%27external_url%27%2C%27https%3A%2F%2Ftableland.xyz%2Frigs%2F%27%7C%7Cid%2C%27image%27%2Cimage%2C%27image_alpha%27%2Cimage_alpha%2C%27thumb%27%2Cthumb%2C%27thumb_alpha%27%2Cthumb_alpha%2C%27attributes%27%2Cjson_group_array(json_object(%27display_type%27%2Cdisplay_type%2C%27trait_type%27%2Ctrait_type%2C%27value%27%2Cvalue)))%20from%20rigs_5_28%20join%20rig_attributes_5_27%20on%20rigs_5_28.id%3Drig_attributes_5_27.rig_id%20where%20id%20%3C%20' + totalSupply + '%20group%20by%20id%20order%20by%20id%3B', options)).json();

      this.rigsMeta = rigsFeed;
      const rigsMeta = this.rigsMeta;

    },
  },
  beforeMount(){
      this.rigsMeta();
      this.setFilter('ALL');
  },
  data() {
    const now = new Date();
    const launchDate = new Date(2022, 4, 31, 0, 0);
    return {
      currentFilter: 'ALL',
      rigsMeta: this.rigsMeta,
      time: launchDate - now,
      isAddClass: false,
      useWallet: true,
      nav: [
        {
          title: "Discord",
          href: "https://discord.gg/dc8EBEhGbg",
          target: "_blank",
        },
        {
          title: "Blog",
          href: "https://mirror.xyz/tableland.eth",
          target: "_blank",
        },
        {
          title: "Docs",
          href: "https://docs.tableland.xyz",
          target: "_blank",
        },
        {
          title: "More Info",
          href: "/rigs",
          main: true,
        },
      ],
    };
  },
};
</script>
