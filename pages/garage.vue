<template>
  <div class="mint-page">
    <!-- Header -->
    <HeaderNav
      :titles="nav.map((i) => i.title)"
      :hrefs="nav.map((i) => i.href)"
      :targets="nav.map((i) => i.target)"
    />

    <!-- minter -->
    <section class="user-garage">
      <div
        class="container px-2 sm:px-12 md:px-36 lg:px-36 xl:px-12 flex pt-8 lg:pt-12 2xl:pt-24 justify-between"
      ></div>
    </section>

    <section class="md:block bg-solid py-24 relative">
      <h4 class="text-black lg:text-xl text-md" v-if="$wallet.account">
        WALLET ID: {{ $wallet.account }}
      </h4>
      <h1
        class="text-black font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12 lg:mb-10"
        data-aos="fade-up"
        v-if="$wallet.account"
      >
        Welcome to the Garage
      </h1>
      <h1
        class="text-black text-center font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12 lg:mb-10"
        data-aos="fade-up"
        v-if="!$wallet.account"
      >
        Connect your wallet
      </h1>

      <div
        class="container px-4 sm:px-12 md:px-12 lg:px-24 xl:px-24"
        v-if="$wallet.account"
      >
        <div class="flex flex-wrap">
          <div class="lg:w-full px-12 lg:pb-12 pb-6 pt-0" data-aos="fade-up">
            <h1
              class="text-black font-Orbitron w-full h-auto text-3xl sm:text-4xl lg:text-5xl md:text-4xl leading-tighter mb-12 lg:mb-10"
              data-aos="fade-up"
            >
              Your Rigs
            </h1>
          </div>
        </div>
        <div id="rig-garage" class="flex flex-wrap py-0 px-12 rig-garage"></div>
        <div class="flex">
          <div class="lg:w-full px-12 lg:pb-12 pb-6 pt-36" data-aos="fade-up">
            <h1
              class="text-black font-Orbitron w-full h-auto text-3xl sm:text-4xl lg:text-5xl md:text-4xl leading-tighter mb-12 lg:mb-10"
              data-aos="fade-up"
            >
              Your Badges
            </h1>
          </div>
        </div>
        <div class="flex py-0">
          <div class="w-1/3 px-12 text-center">
            <img src="~assets/img/badge1.png" />
            <h3 class="text-black lg:text-xl text-l py-2">badge_name</h3>
            <h3 class="text-black lg:text-xl text-l">earned 05/05/2022</h3>
          </div>
          <div class="w-1/3 px-12 text-center">
            <img src="~assets/img/badge2.png" />
            <h3 class="text-black lg:text-xl text-l py-2">badge_name</h3>
            <h3 class="text-black lg:text-xl text-l">earned 05/05/2022</h3>
          </div>
          <div class="w-1/3 px-12 text-center">
            <img src="~assets/img/badge3.png" />
            <h3 class="text-black lg:text-xl text-l py-2">badge_name</h3>
            <h3 class="text-black lg:text-xl text-l">earned 05/05/2022</h3>
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
