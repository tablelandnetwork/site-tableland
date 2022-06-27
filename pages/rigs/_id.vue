<template>
  <div class="mint-page">
    <!-- Header -->
    <HeaderNav
      :titles="nav.map((i) => i.title)"
      :hrefs="nav.map((i) => i.href)"
      :targets="nav.map((i) => i.target)"
    />

    <!-- minter -->
    <section class="rig-id">
      <div class="rigs-hero-top"></div>
      <div
        v-if="rigId"
        class="container px-2 sm:px-12 md:px-36 lg:px-36 xl:px-36 pt-30 lg:pt-48 justify-between"
      >
        <h1
          class="text-white text-center font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12 lg:mb-10"
          data-aos="fade-up"
        >
          RIG ID #00{{ rigId }}
        </h1>
        <div class="rig-frame">
          <!-- <img :src="rigsMeta.json_build_object.image" /> -->
        </div>
        <h3
          id="rig-owner"
          class="text-white text-center lg:text-xl text-l"
        ></h3>
        <div class="flex px-6 lg:px-24 py-6 lg:py-12">
          <div class="lg:w-full minter-details">
            <div class="flex flex-wrap py-0 lg:px-12 px-0">
                  {{rigsMeta[0].json_build_object.name}}
              <!-- <div
                class="lg:w-1/2 w-full px-0 py-3"
                v-for="(rig, index) in rigsMeta.json_build_object[rigId].attributes"
                data-aos="fade-up"
              >
                <h3 class="text-white lg:text-xl text-l">
                  {{ rig.trait_type }}
                </h3>
                <h2 class="text-white text-3xl font-Orbitron">
                  {{ rig.value }}
                </h2>
              </div> -->
            </div>
            <div class="flex">
              <div class="w-full lg:px-24 py-6 lg:py-18">
                <a
                  class="btn btn-mint text-white"
                  :href="
                    'https://testnets.opensea.io/assets/goerli/0x88694d0b8c8E800AB3D9eecBF9A8923B3b5825fA/' +
                    rigId
                  "
                  >VIEW ON OPENSEA</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="container"
        style="margin-top: -900px; max-width: 1280px; z-index: 999"
        v-if="!rigId"
      >
        Rig not found!
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
  data: function () {
    return {
      rigId: this.$route.params.id,
      provider: window.ethereum,
      nav: [
        {
          title: "Gallery",
          href: "/gallery",
        },
        {
          title: "Garage",
          href: "/garage",
        },
        {
          title: "Docs",
          href: "https://docs.tableland.xyz",
          target: "_blank",
        },
        {
          title: "Rigs",
          href: "/rigs",
        },
      ],
    };
  },

  head: function () {
    return {
      title: "Rig #00" + this.rigId + " - The Tableland NFT: Rigs",
      meta: [
        { hid: "og-url", property: "og:url", content: `${this.$route.path}` },
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "og-title",
          property: "og:title",
          content: "Rig #00" + this.rigId + " - The Tableland NFT: Rigs",
        },
        {
          hid: "og-sitename",
          property: "og:site_name",
          content: "tableland.xyz/rigs",
        },
        {
          hid: "og-desc",
          property: "og:description",
          content:
            "A generative NFT built from 1,074 handcrafted works of art for the builders and creatives of cyberspace.",
        },
        {
          hid: "og-image",
          property: "og:image",
          content: "https://i.imgur.com/5YHLnkC.png",
        },
      ],
    };
  },

  beforeMount() {
    if (this.provider) {
      this.$wallet.rigId = this.rigId;
    };
    this.rigsMeta()
  },

  methods: {
    refresh() {
      this.$nuxt.refresh();
    },
    rigsMeta: async function() {
      const options = {method: 'GET', headers: {Accept: 'application/json'}};
      const rigsMeta =  await(await fetch('https://staging.tableland.network/query?s=select%20json_build_object(%27name%27%2C%20concat(%27%23%27%2C%20id)%2C%20%27external_url%27%2C%20concat(%27https%3A%2F%2Ftableland.xyz%2Frigs%2F%27%2C%20id)%2C%20%27image%27%2C%20image%2C%20%27image_alpha%27%2C%20image_alpha%2C%20%27thumb%27%2C%20thumb%2C%20%27thumb_alpha%27%2C%20thumb_alpha%2C%20%27attributes%27%2C%20%20json_agg(json_build_object(%27display_type%27%2C%20display_type%2C%20%27trait_type%27%2C%20trait_type%2C%20%27value%27%2C%20value)))%20from%20test_rigs_69_5%20join%20test_rig_attributes_69_6%20on%20test_rigs_69_5.id%20%3D%20test_rig_attributes_69_6.rig_id%20group%20by%20id%3B&mode=json', options)).json();
      this.rigsMeta = rigsMeta;
      console.log(rigsMeta);
    },
  },
};
</script>
