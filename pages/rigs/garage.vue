<template>
  <div class="mint-page mint-rigs">
    <HeaderNav
      :titles="nav.map((i) => i.title)"
      :hrefs="nav.map((i) => i.href)"
      :targets="nav.map((i) => i.target)"
    />

    <!-- Rig Garage -->
    <section class="md:block story py-4 md:py-12 relative">
      <div class="rigs-hero-top"></div>
      <div
        class="container px-0 sm:px-6 md:px-12 pt-12 sm:pt-24 lg:pt-32 xl:pt-48 justify-between"
      >
        <div class="w-full px-6 pb-6 lg:pb-10 pt-12" data-aos="fade-up">
          <div class="lg:flex">
            <div class="lg:w-1/2 w-full pt-6">
              <h1
                class="text-white w-full h-auto font-Orbitron text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-2 lg:mb-10"
              >
                Your Garage
              </h1>
            </div>
            <div
              class="lg:w-1/2 w-full px-3 lg:px-12 lg:pb-12 lg:py-16"
              data-aos="fade-up"
            >
              <h4
                id="rig-balance"
                class="text-white text-left lg:text-right lg:text-2xl text-md"
              >
                {{ tokens.length }} RIGS OWNED
              </h4>
            </div>
          </div>
        </div>
        <!-- Connect buttons -->
        <div v-if="!address" class="w-full px-6 pb-0 lg:pb-0 pt-0 relative">
          <a class="btn bg-black text-white" @click="connect">
            <span class="flex">
              Connect Wallet
              <img
                src="~assets/img/arrow_white.png"
                srcset="
                  ~assets/img/arrow_white.png    1x,
                  ~assets/img/arrow_white@2x.png 2x
                "
                class="hidden sm:inline-block ml-4"
                alt=""
              /> </span
          ></a>
        </div>
      </div>
      <div
        v-if="address"
        id="rig-garage"
        class="flex flex-wrap py-0 px-0 md:px-12 lg:px-24 xl:px-28 rig-garage"
      >
        <div
          v-for="rig in rigsMeta"
          :key="rig"
          class="w-1/2 xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-1/2 lg:px-3 lg:py-3 rigs my-2"
        >
          <div v-if="rig.name">
            <a :href="'/rigs/' + rig.name.replace('#', '')">
              <div class="rig-frame" :class="rig.attributes[1].value">
                <img :src="rig.thumb" />
              </div>
              <h2
                class="text-black font-Orbitron text-l lg:text-xl px-3 lg:py-3"
              >
                {{ rig.name }}
              </h2>
            </a>
          </div>
          <div v-else>
            <p>No Rigs owned by Wallet ID: {{ address }}</p>
          </div>
        </div>
      </div>
    </section>
    <FooterNav />
  </div>
</template>

<script>
import { connect } from "@tableland/sdk";

export default {
  data() {
    return {
      isLoading: false,
      address: status.address,
      tokens: [],
      rigs: [],
      rigsMeta: this.rigsMeta,
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

  head() {
    return {
      title: "The Tableland NFT: Grab your Rig",
      meta: [
        { hid: "og-url", property: "og:url", content: `${this.$route.path}` },
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "og-title",
          property: "og:title",
          content: "The Tableland NFT: Grab your Rig",
        },
        {
          hid: "og-sitename",
          property: "og:site_name",
          content: "tableland.xyz/rigs/mint",
        },
        {
          hid: "og-desc",
          property: "og:description",
          content:
            "A 3k generative NFT built from 1,074 handcrafted works of art for the builders and creatives of cyberspace.",
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
    this.rigsGarage();
  },
  methods: {
    async rigsGarage() {
      const status = await this.$store.dispatch("getRigsStatus");
      this.address = status.address;
      this.tokens = status.tokens || [];
      const connection = await connect({ network: "testnet" });
      const rigsTable = "rigs_5_28";
      const rigsAttrTable = "rig_attributes_5_27";

      const query = await connection.read(`select json_object(
        'name','#'||id,
        'image',image,
        'image_alpha',image_alpha,
        'thumb',thumb,
        'thumb_alpha',thumb_alpha,
        'attributes',json_group_array(
          json_object(
            'display_type',display_type,
            'trait_type',trait_type,
            'value',value
          )
        )
      ) as obj
      from ${rigsTable}
        join (select * from ${rigsAttrTable} order by rowid) as a
          on ${rigsTable}.id=a.rig_id
      where id in (${this.tokens})
      `);
      this.rigsMeta = query.rows[0];
    },
    async connect() {
      const status = await this.$store.dispatch("getRigsStatus");
      this.address = status.address;
      this.tokens = status.tokens || [];
      this.rigs = await this.$store.dispatch("getRigsMetadata", {
        tokens: this.tokens,
      });
    },
  },
};
</script>

<style scoped src="~/assets/css/samples.css"></style>
