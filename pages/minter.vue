<template>
  <div class="mint-page">
    <!-- Header -->
    <HeaderNav
      :titles="nav.map((i) => i.title)"
      :hrefs="nav.map((i) => i.href)"
      :targets="nav.map((i) => i.target)"
    />

    <!-- minter -->
    <section class="minter">
      <div
        class="container px-2 sm:px-12 md:px-36 lg:px-36 xl:px-12 flex pt-24 lg:pt-24 2xl:pt-24 justify-between"
      >
        <div
          class="lg:w-full w-full px-0 lg:pb-12 pb-6 pt-0"
          data-aos="fade-up"
        >
          <div class="flex">
            <div class="text-center w-full pt-6" data-aos="fade-up">
              <h1
                class="font-bold text-center font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12"
                data-aos="fade-up"
              >
                <span id="minter-title">Mint a Rig</span>
                <!-- <span class="ghost" v-bind:class="{'progress': isAddClass}">Finding your parts</span><span class="ghost" v-bind:class="{'done': isAddClass}">It's your rig!</span> -->
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- showcase -->
    <section class="md:block showcase py-32 relative">
      <div
        class="minter-break flex container text-center justify-between"
      ></div>
      <div class="w-full" style="margin-top: -300px">
        <div
          id="animated-carousel"
          class="animated-carousel w-full"
          v-bind:class="{ mint: isAddClass }"
        >
          <div v-for="(item, index) in rigs" :key="index" class="vehicle">
            <img :src="item" />
          </div>
        </div>
      </div>

      <div class="container relative" v-if="provider">
        <div
          id="rig-result"
          class="rig-result"
          v-bind:class="{ active: isAddClass }"
        >
          <div
            id="rig-box"
            class="flex flex-wrap justify-center text-center"
          ></div>
          <div class="rig-btn">
            <a id="tx-btn" class="btn text-white" target="_blank"
              >VIEW TRANSACTION</a
            >
            <a id="os-btn" class="btn text-white" target="_blank"
              >VISIT GARAGE</a
            >
            <a href="/minter" class="btn btn-mint text-white">MINT ANOTHER</a>
            <h1>Explore your parts with Tableland</h1>
            <Playground></Playground>
          </div>
        </div>
        <div class="flex lg:px-12 xl:px-48 py-0">
          <div
            class="lg:w-1/2 w-full minter-console hidden md:block"
            id="minter-console"
            v-bind:class="{ active: isAddClass }"
          >
            <div class="text-white text-center" id="mint-log">
              <div id="mint-terminal" class="frame">
                <div v-if="$wallet.account">
                  ========================== WALLET CONNECTED
                  ===============================
                  <p>WALLET: {{ $wallet.account }}</p>
                  <p>BALANCE: {{ $wallet.balance }} ETH</p>
                  <p>QUANTITY: {{ quantity }}</p>
                  <p>PRICE: {{ 0.05 * quantity }} ETH</p>
                  ============================================================================
                  ============================================================================
                  ============================================================================
                  ================= READY TO MINT CONFIRM TRANSACTION TO PROCEED
                  =============
                </div>
                <div v-else>
                  ============================= CONNECT YOUR WALLET
                  ===================================
                  <p>
                    Tableland awaits! Connect your wallet to start your
                    adventure by grabbing one of the Rigs. Rigs give valuable
                    access to Tableland. Start your journey
                  </p>
                  <p>PRICE: 0.05 ETH</p>
                  ============================================================================
                  ============================================================================
                  ============================================================================
                  ========================== CONNECT YOUR WALLET =============
                </div>
              </div>
            </div>
          </div>
          <div
            class="lg:w-1/2 w-full minter-details"
            v-bind:class="{ active: isAddClass }"
            id="minter-details"
          >
            <div class="flex py-12 px-12">
              <div class="w-full lg:w-1/2">
                <h3 class="text-white lg:text-xl text-l">PRICE</h3>
                <h2
                  v-if="quantity"
                  class="overflow-hidden text-white lg:text-4xl text-xl font-Orbitron pr-12"
                >
                  {{ 0.05 * quantity }}ETH
                </h2>
                <h2 v-else class="text-white text-xl lg:text-4xl font-Orbitron">
                  0.05ETH
                </h2>
              </div>
              <div class="w-full lg:w-1/2">
                <h3 class="text-white lg:text-xl text-l">TOTAL SUPPLY</h3>
                <h2
                  id="rig-supply"
                  class="text-white text-xl lg:text-4xl font-Orbitron"
                >
                  3000
                </h2>
              </div>
            </div>
            <div class="flex py-0 px-12" v-if="$wallet.account">
              <div class="w-full lg:w-1/2">
                <h3 class="text-white lg:text-xl text-l">YOUR BALANCE</h3>
                <h2 class="text-white text-xl lg:text-4xl font-Orbitron">
                  {{ $wallet.balance }}
                </h2>
              </div>
              <div class="w-full lg:w-1/2">
                <h3 class="text-white lg:text-xl text-l">QUANTITY</h3>
                <input
                  class="quantity text-white text-2xl lg:text-4xl font-Orbitron"
                  v-model="quantity"
                  v-on:change="updateQuantity"
                  value="quantity"
                  type="number"
                  min="1"
                  max="9"
                />
              </div>
            </div>
            <div class="flex">
              <div v-if="provider" class="w-full px-12 py-18">
                <div v-if="$wallet.account">
                  <a
                    id="mint-button"
                    class="btn btn-mint text-white"
                    @click="$wallet.mintRig(quantity)"
                    >MINT RIG</a
                  >
                </div>
                <div v-else>
                  <a
                    id="connect-button"
                    class="btn bg-black text-white"
                    @click="$wallet.connect"
                  >
                    <strong>{{
                      !!$wallet.account
                        ? $wallet.accountCompact
                        : "Connect Wallet to Mint"
                    }}</strong>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container" v-else>
        <div class="flex xl:px-48 py-0">
          <div
            class="lg:w-1/2 w-full minter-console hidden md:block"
            id="minter-console"
            v-bind:class="{ active: isAddClass }"
          >
            <div class="text-white text-center" id="mint-log">
              <div id="mint-terminal" class="frame">
                ============================= NO WALLET DETECTED!
                ===============================
                <p>
                  In order to mint one of our Tableland rigs, you need to first
                  install Metamask chrome extension: https://metamask.io/
                </p>
                <p>
                  Afterwards, visit this link again to gain access to minting
                  functions
                </p>
                ============================================================================
                ============================================================================
                ===============================================================================
                ================= INSTALL METAMASK TO CONTINUE
                =============================
              </div>
            </div>
          </div>
          <div
            class="lg:w-1/2 w-full minter-details"
            v-bind:class="{ active: isAddClass }"
            id="minter-details"
          >
            <div class="flex flex-wrap py-12 px-12">
              <div class="w-1/2">
                <h3 class="text-white lg:text-xl text-l">PRICE</h3>
                <h2 class="text-white text-4xl font-Orbitron">0.05ETH</h2>
              </div>
              <div class="w-1/2">
                <h3 class="text-white lg:text-xl text-l">TOTAL SUPPLY</h3>
                <h2 class="text-white text-4xl font-Orbitron">3000</h2>
              </div>
              <div class="w-full px-0 py-24">
                <a
                  id="mint-button"
                  class="btn btn-mint text-white"
                  href="https://metamask.io/"
                  target="_blank"
                  >GET METAMASK</a
                >
              </div>
              <div></div>
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
import helpers from "~/plugins/helpers";
import rigsMeta from "~/assets/rigsMeta.json";
export default {
  head() {
    return {
      title: "Mint a Rig - Tableland",
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
  methods: {
    addClass: function () {
      this.isAddClass = true;
    },
    refresh() {
      this.$nuxt.refresh();
    },
    updateQuantity() {
      this.$wallet.quantity = this.quantity;
    },
  },
  data() {
    const now = new Date();
    const launchDate = new Date(2022, 4, 31, 0, 0);
    return {
      time: launchDate - now,
      isAddClass: false,
      rigs: rigsMeta,
      provider: window.ethereum,
      quantity: "1",
      rigs: helpers.getRigs(20),
      nav: [
        {
          title: "Gallery",
          href: "/gallery",
        },
        {
          title: "Rigs",
          href: "/rigs",
        },
      ],
    };
  },
};
</script>
