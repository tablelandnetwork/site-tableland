<template>
  <div class="mint-page mint-rigs">
    <HeaderNav :titles="nav.map((i) => i.title)" :hrefs="nav.map((i) => i.href)" :targets="nav.map((i) => i.target)" />
    <HeaderScrollNav anchor=".choose" :titles="nav.map((i) => i.title)" :hrefs="nav.map((i) => i.href)"
      :targets="nav.map((i) => i.target)" />
    <!-- hero -->
    <section class="rigs-hero">
      <div class="container px-0 sm:px-6 md:px-12 pt-12 sm:pt-24 lg:pt-32 xl:pt-48 justify-between">
        <div class="w-full px-6 pb-6 lg:pb-10 pt-12" data-aos="fade-up">
          <div class="w-full pt-6">
            <h1 class="text-white w-full h-auto font-Orbitron text-5xl lg:text-6xl xl:text-7xl leading-tighter">
              Mint <span class="font-black">Rigs</span>
            </h1>
          </div>
        </div>
      </div>
      <div class="container px-0 sm:px-6 md:px-12 pt-0 lg:pt-0 pb-24" data-aos="fade-up">
        <div v-if="!address" class="w-full md:w-full lg:w-1/2 xl:w-1/2 px-6 pb-0 lg:pb-0 pt-0">
          <h1 class="text-white w-full h-auto text-xl md:text-2xl xl:text-2xl leading-tighter mb-10 lg:mb-18">
            Each Rig is generated from 1,074 handcrafted works of art for the
            builders and creatives of cyberspace. It's time to grab yours.
          </h1>
        </div>
        <div v-else-if="paidAllowance + freeAllowance - tokens.length > 0"
          class="w-full md:w-full lg:w-1/2 xl:w-1/2 px-6 pb-0 lg:pb-0 pt-0">
          <h1 class="text-white w-full h-auto text-xl md:text-2xl xl:text-2xl leading-tighter mb-10 lg:mb-18">
            Each Rig is generated from 1,074 handcrafted works of art for the
            builders and creatives of cyberspace. It's time to grab yours.
          </h1>
          <h1 class="text-white w-full h-auto text-xl md:text-2xl xl:text-2xl leading-tighter mb-10 lg:mb-18">
            Hey Tablelander! Looks like you can grab
            {{ paidAllowance + freeAllowance - tokens.length }} Rig(s) for 0.05E each +
            gas.
          </h1>
        </div>
        <div v-else class="w-full md:w-full lg:w-1/2 xl:w-1/2 px-6 pb-0 lg:pb-0 pt-0">
          <h1 class="text-white w-full h-auto text-xl md:text-2xl xl:text-2xl leading-tighter mb-10 lg:mb-18">
            Each Rig is generated from 1,074 handcrafted works of art for the
            builders and creatives of cyberspace. It's time to grab yours.
          </h1>
          <h1 class="text-white w-full h-auto text-xl md:text-2xl xl:text-2xl leading-tighter mb-10 lg:mb-18">
            Hey Friend! Looks like you don't have any allocation for this mint phase. If you're on the waitlist, check
            back on Monday at 12AM.
          </h1>
        </div>
        <div class="w-full px-6 pb-0 lg:pb-0 pt-0">
          <a v-if="!address" class="btn bg-black text-white" @click="connect">
            <span class="flex">
              Connect Wallet
              <img src="~assets/img/arrow_white.png" srcset="
                  ~assets/img/arrow_white.png    1x,
                  ~assets/img/arrow_white@2x.png 2x
                " class="hidden sm:inline-block ml-4" alt="" /> </span></a>
          <div v-else-if="paidAllowance + freeAllowance - tokens.length > 0">
            <a class="btn bg-black text-white" @click="mint">
              <span class="flex">
                Mint
                <img src="~assets/img/arrow_white.png" srcset="
                    ~assets/img/arrow_white.png    1x,
                    ~assets/img/arrow_white@2x.png 2x
                  " class="hidden sm:inline-block ml-4" alt="" /> </span></a>
            <input v-model.number="quantity" class="inline" type="number" min="1"
              :max="freeAllowance + paidAllowance - tokens.length" />
          </div>
        </div>
      </div>
    </section>
    <div class="bg-solid">
      <div class="main min-h-screen container flex flex-col items-center p-8 text-sm">
        <div ref="grid" class="w-full grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div v-for="(src, i) in rigs" :key="i">
            <v-lazy-image v-if="i < 20" :style="{ minHeight: imageHeight }"
              class="m-auto bg-black dark:bg-white bg-opacity-20 dark:bg-opacity-20" :src="src"
              @intersect="imageIntersect" @load="imageLoad" />
            <v-lazy-image v-else :style="{ minHeight: imageHeight }"
              class="m-auto bg-black dark:bg-white bg-opacity-20 dark:bg-opacity-20 choose" :src="src"
              @intersect="imageIntersect" @load="imageLoad" />
          </div>
        </div>
      </div>
    </div>
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
      mintstatus: 0,
      address: undefined,
      quantity: 1,
      tokens: [],
      freeAllowance: 0,
      paidAllowance: 0,
      proof: [],
      rigs: [],
      nav: [
        {
          title: "Discord",
          href: "https://discord.gg/hpd5WWn4Ys",
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

  created() {
    addEventListener("resize", this.resizeImages);
  },

  mounted() {
    this.resizeImages();
  },

  destroyed() {
    removeEventListener("resize", this.resizeImages);
  },

  methods: {
    async connect() {
      const status = await this.$store.dispatch("getRigsStatus");
      if (status) {
        this.address = status.address;
        this.mintstatus = status.mintstatus || 0;
        this.freeAllowance = status.entry ? status.entry[1] : 0;
        this.paidAllowance = status.entry ? status.entry[2] : 0;
        this.proof = status.proof || [];
        this.tokens = status.tokens || [];

        this.rigs = await this.$store.dispatch("getRigsMetadata", { tokens: this.tokens });
      }
    },

    async mint() {
      const receipt = await this.$store.dispatch("mintRigs", {
        quantity: this.quantity,
        freeAllowance: this.freeAllowance,
        paidAllowance: this.paidAllowance,
        proof: this.proof,
        tokens: this.tokens.length
      });
      console.log(receipt);

      this.rigs = await this.$store.dispatch("getRigsMetadata", { tokens: this.tokens });
    },

    resizeImages() {
      const grid = getComputedStyle(this.$refs.grid);
      this.imageHeight = grid
        .getPropertyValue("grid-template-columns")
        .split(" ")[0];
    },

    imageIntersect() {
      // console.log('intersect detected');
    },

    imageLoad() {
      // console.log('image loaded');
    },
  },
};
</script>

<style scoped src="~/assets/css/samples.css">
</style>
