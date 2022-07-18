<template>
  <div class="mint-page mint-rigs">
    <HeaderNav
      :titles="nav.map((i) => i.title)"
      :hrefs="nav.map((i) => i.href)"
      :targets="nav.map((i) => i.target)"
    />

    <!-- hero -->
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
        id="rig-garage"
        class="flex flex-wrap py-0 px-0 md:px-12 lg:px-24 xl:px-36 rig-garage"
        v-if="address"
      >
        <div
          class="lg:w-1/3 md:w-1/2 w-full px-3 py-3 rigs"
          v-for="(src, i) in rigs"
          :key="i"
        >
          <a :href="'/rigs/' + src[0]">
            <div class="rig-frame">
              <v-lazy-image
                v-if="i < 20"
                :style="{ minHeight: imageHeight }"
                class="m-auto bg-black dark:bg-white bg-opacity-20 dark:bg-opacity-20"
                :src="src[3]"
                @intersect="imageIntersect"
                @load="imageLoad"
              />
              <v-lazy-image
                v-else
                :style="{ minHeight: imageHeight }"
                class="m-auto bg-black dark:bg-white bg-opacity-20 dark:bg-opacity-20 choose"
                :src="src[3]"
                @intersect="imageIntersect"
                @load="imageLoad"
              />
            </div>
            <h2 class="text-black font-Orbitron text-xl px-3 py-3">
              #{{ src[0] }}
            </h2>
          </a>
        </div>
        <!-- <div v-for="(src, i) in rigs" :key="i">
        <a href="/rigs/"
        <v-lazy-image
          v-if="i < 20"
          :style="{ minHeight: imageHeight }"
          class="m-auto bg-black dark:bg-white bg-opacity-20 dark:bg-opacity-20"
          :src="src[3]"
          @intersect="imageIntersect"
          @load="imageLoad"
        />
        <v-lazy-image
          v-else
          :style="{ minHeight: imageHeight }"
          class="m-auto bg-black dark:bg-white bg-opacity-20 dark:bg-opacity-20 choose"
          :src="src[3]"
          @intersect="imageIntersect"
          @load="imageLoad"
        />
        {{src[0]}}

      </div> -->
      </div>
    </section>
    <FooterNav />
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image/v2";
export default {
  components: {
    VLazyImage,
  },

  data() {
    return {
      isLoading: false,
      mintphase: 0,
      supply: 0,
      address: status.address,
      tokens: undefined,
      quantity: 1,
      tokens: [],
      freeAllowance: 0,
      paidAllowance: 0,
      proof: [],
      claimed: { allowClaims: 0, waitClaims: 0 },
      rigs: [],
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
      if (status) {
        this.address = status.address;
        this.mintphase = status.mintphase || 0;
        this.freeAllowance = status.entry ? status.entry[1] : 0;
        this.paidAllowance = status.entry ? status.entry[2] : 0;
        this.proof = status.proof || [];
        this.tokens = status.tokens || [];
        this.supply = status.supply || 0;
        this.claimed = status.claimed || { allowClaims: 0, waitClaims: 0 };
        this.rigs = await this.$store.dispatch("getRigsMetadata", {
          tokens: this.tokens,
        });
      }
    },
    async connect() {
      const status = await this.$store.dispatch("getRigsStatus");
      if (status) {
        this.address = status.address;

        this.rigs = await this.$store.dispatch("getRigsMetadata", {
          tokens: this.tokens,
        });
      }
    },
    imageIntersect() {
      // console.log('intersect detected');
    },

    imageLoad() {
      // console.log('image loaded');
    },
  },

  created() {
    addEventListener("resize", this.resizeImages);
  },

  destroyed() {
    removeEventListener("resize", this.resizeImages);
  },
};
</script>

<style scoped src="~/assets/css/samples.css"></style>
