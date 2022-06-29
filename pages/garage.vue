<template>
  <div class="mint-page">
    <!-- Header -->
    <HeaderNav
      :titles="nav.map((i) => i.title)"
      :hrefs="nav.map((i) => i.href)"
      :targets="nav.map((i) => i.target)"
    />

    <section class="md:block story py-4 md:py-12 relative">
      <div class="rigs-hero-top"></div>
      <h1
        class="text-white text-center font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12 lg:mb-10"
        data-aos="fade-up"
        v-if="!$wallet.account"
      >
        Connect your wallet
      </h1>

      <div
        class="container px-0 sm:px-6 md:px-12 pt-12 sm:pt-12 lg:pt-32"
        v-if="$wallet.account"
      >
        <div class="lg:w-full px-6 pb-6 lg:pb-10 pt-12" data-aos="fade-up">
          <div class="lg:flex">
            <div class="lg:w-1/2 w-full pt-6">
              <h1
                class="text-white w-full h-auto font-Orbitron text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-12 lg:mb-10"
              >
                Your Garage
              </h1>
            </div>
            <div
              class="lg:w-1/2 w-full px-6 lg:px-12 lg:pb-12 py-16"
              data-aos="fade-up"
            >
              <h4
                id="rig-balance"
                class="text-white text-right lg:text-2xl text-md"
                v-show="$wallet.tokenBalance"
              >
                {{ $wallet.tokenBalance }} RIGS OWNED
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div
        id="rig-garage"
        class="flex flex-wrap py-0 px-0 md:px-38 lg:px-40 rig-garage"
        v-if="$wallet.account"
      >
        <div id="rig-message px-12" v-if="$wallet.tokenBalance == '0'">
          No rigs found! Visit the <a href="/minter/">mint a rig</a> page to
          grab your first rig captain!
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
import rigsMeta from "~/assets/rigsMeta.json";

export default {
  head() {
    return {
      title: "Garage - Tableland",
      meta: [
        { hid: `og-url`, property: "og:url", content: `/${this.$route.path}` },
        { hid: "og-type", property: "og:type", content: "website" },
        { hid: "og-title", property: "og:title", content: "Garage" },
        {
          hid: "og-sitename",
          property: "og:site_name",
          content: "Tableland - Build web3 with SQL",
        },
        {
          hid: "og-desc",
          property: "og:description",
          content:
            "A generative NFT with 1,043 handcrafted works of art. Rigs are your ride to Tableland.",
        },
        {
          hid: "og-image",
          property: "og:image",
          content: "https://i.imgur.com/5YHLnkC.png",
        },
      ],
    };
  },
  computed: {
    ethereum: function () {
      return window.ethereum;
    },
  },
  data() {
    const now = new Date();
    const launchDate = new Date(2022, 4, 31, 0, 0);
    return {
      time: launchDate - now,
      isAddClass: false,
      rigsMeta: rigsMeta,
      useWallet: true,
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
          href: "/minter",
          main: true,
        },
      ],
    };
  },
};
</script>
