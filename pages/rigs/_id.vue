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
        class="container px-2 sm:px-2 md:px-2 lg:px-6 2xl:px-24 pt-30 lg:pt-48 justify-between story"
      >
        <h1
          class="text-white text-center font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12 lg:mb-10"
          data-aos="fade-up"
        >
          RIG ID #00{{ rigId }}
        </h1>

        <div class="flex px-6 xl:px-24 py-6 lg:py-12">
          <div class="lg:w-full minter-details">
              <div
                class="flex flex-wrap py-0 lg:px-12 px-0"
                v-for="rig in rigsMeta[0]"
                data-aos="fade-up"
              >

                  <div class="w-full md:w-full lg:w-1/2">
                    <div class="rig-frame">
                      <img :src="rig.image" />
                    </div>
                  </div>

                  <div class="w-full md:w-full lg:w-1/2 lg:px-12">
                    <div v-if="rig.attributes[0].value == '100'">
                      <p class="text-black px-3 py-3 pb-3 text-bold" :class="' rarity-' + rig.attributes[0].value">Original: {{ rig.attributes[3].value }} {{ rig.attributes[6].value }}</p>
                    </div>
                  <div class="minter-console" id="minter-console">
                    <div class="text-white text-left" id="mint-log">
                      <div id="mint-terminal" class="frame">

                            <div class="text-left">> Querying Rig ID #00{{rigId}}</div>

                            <div id="rig-owner"></div><br>
                            <div class="text-left"><p>tableland> SELECT * FROM rig_parts WHERE fleet = '<strong v-if="rig.attributes[0].value == '100'">{{ rig.attributes[5].value }}</strong><strong v-else>{{ rig.attributes[4].value }}</strong>';</p></div><br>

                            <div class="flex flex-wrap" >
                              <div class="xl:w-1/3 lg:w-1/2 w-1/2 px-0 py-2" v-for="parts in rig.attributes">
                              <strong>{{ parts.trait_type }}</strong><br>
                              -------------<br>
                              {{ parts.value }}
                            </div>
                            </div>


                      </div>
                    </div>
                    <div class="w-full px-0 pt-6 lg:pt-18">
                      <a
                        class="btn btn-mint text-white"
                        :href="
                          'https://opensea.io/assets/ethereum/0x8eaa9ae1ac89b1c8c8a8104d08c045f78aadb42d/' +
                          rigId
                        "
                        >VIEW ON OPENSEA</a
                      >
                    </div>
                    <div class="w-full px-0 py-2">
                      <a
                        class="btn btn-mint text-white"
                        :href="
                          'https://looksrare.org/collections/0x8EAa9AE1Ac89B1c8C8a8104D08C045f78Aadb42D/' +
                          rigId
                        "
                        >VIEW ON LOOKSRARE</a
                      >
                    </div>
                </div>
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
      rigsMeta: this.rigsMeta,
      totalSupply: this.$wallet.totalSupply,
      nav: [
        {
          title: "Gallery",
          href: "/gallery",
        },
        {
          title: "Rigs",
          href: "/rigs",
        },
        {
          title: "Mint a Rig",
          href: "/minter/",
          main: true,
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
          content: "tableland.xyz/rigs/" + this.rigId,
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
          content: "",
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

      const rigSupply = await(await fetch('https://api.looksrare.org/api/v1/collections/stats?address=0x8EAa9AE1Ac89B1c8C8a8104D08C045f78Aadb42D')).json();
      const totalSupply = rigSupply.data.totalSupply;

      const rigsFeed =  await(await fetch('https://testnet.tableland.network/query?mode=rows&s=select%20json_object(%27name%27%2C%27%23%27%7C%7Cid%2C%27external_url%27%2C%27https%3A%2F%2Ftableland.xyz%2Frigs%2F%27%7C%7Cid%2C%27image%27%2Cimage%2C%27image_alpha%27%2Cimage_alpha%2C%27thumb%27%2Cthumb%2C%27thumb_alpha%27%2Cthumb_alpha%2C%27attributes%27%2Cjson_group_array(json_object(%27display_type%27%2Cdisplay_type%2C%27trait_type%27%2Ctrait_type%2C%27value%27%2Cvalue)))%20from%20rigs_5_28%20join%20rig_attributes_5_27%20on%20rigs_5_28.id%3Drig_attributes_5_27.rig_id%20where%20id%3D' + this.rigId + '%20group%20by%20id%3B', options)).json();

      this.rigsMeta = rigsFeed;
      console.log(this.rigsMeta);
      rigsMeta = this.rigsMeta;
    },
  },
};
</script>
