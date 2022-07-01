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
      <div class="rigs-hero-top"></div>
      <div class="container px-0 sm:px-6 md:px-12 pt-12 sm:pt-12 lg:pt-32">
        <div class="lg:w-full px-6 pb-6 lg:pb-10 pt-12" data-aos="fade-up">
          <div class="lg:flex">
            <div class="w-full pt-6">
              <h1
                id="minter-title"
                class="minter-title text-white w-full h-auto font-Orbitron text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-12 lg:mb-10"
                v-bind:class="{ active: isAddClass }"
              >
                Mint a Rig
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="md:block story py-0 pb-48 pt-18 relative">
      <div class="w-full">
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
          <h1
            class="text-white w-full h-auto font-Orbitron text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-12 lg:mb-10 text-center"
          >
            <span id="minter-title">Rig Minted</span>
            <!-- <span class="ghost" v-bind:class="{'progress': isAddClass}">Finding your parts</span><span class="ghost" v-bind:class="{'done': isAddClass}">It's your rig!</span> -->
          </h1>
          <div id="rig-box"></div>
          <div class="rig-btn py-2 px-2">
            <a id="tx-btn" class="btn bg-black text-white" target="_blank"
              >VIEW TRANSACTION</a
            >
            <a id="os-btn" class="btn bg-black text-white" target="_blank"
              >VISIT GARAGE</a
            >
            <a href="/minter" class="btn btn-mint text-white">MINT ANOTHER</a>
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

                <code>
Tableland> SELECT * FROM rig_parts WHERE fleet = 'Foils';

fleet       original         type        name                    color
----------  ---------------  ----------  ----------------------  ----------
Foils       Solar Scarab     Airframe    DHA                     Dawn
Foils       Solar Scarab     Airframe    DHA                     Electric
Foils       Solar Scarab     Airframe    DHA                     Ruby
Foils       The Cricket      Propulsion  EVM                     Alpenglow
Foils       The Cricket      Propulsion  EVM                     Blaze
Foils       The Cricket      Propulsion  EVM                     Midnight
Foils       Hydro Wasp       Propulsion  SPoF                    Dawn
Foils       Hydro Wasp       Propulsion  SPoF                    Electric
Foils       Hydro Wasp       Propulsion  SPoF                    Sunset
Foils       G-Nat            Cockpit     Simple Query            Dawn
Foils       G-Nat            Cockpit     Simple Query            Midnight
Foils       G-Nat            Cockpit     Simple Query            Sunset
Foils       The Cricket      Cockpit     Staker                  Alpenglow
Foils       The Cricket      Cockpit     Staker                  Blaze
Foils       The Cricket      Cockpit     Staker                  Midnight
Foils       Stark Tangler    Cockpit     Stark                   Alpenglow
Foils       Stark Tangler    Cockpit     Stark                   Midnight
Foils       Stark Tangler    Cockpit     Stark                   Sunset
Foils       Solar Scarab     Cockpit     State Machine           Dawn
Foils       Solar Scarab     Cockpit     State Machine           Electric
Foils       Solar Scarab     Cockpit     State Machine           Ruby
Foils       The Cricket      Airframe    Supersingular           Alpenglow
Foils       The Cricket      Airframe    Supersingular           Blaze
Foils       The Cricket      Airframe    Supersingular           Midnight
                </code>
                <!-- <div v-if="$wallet.account">
                  <p class="text-justify">
                    ========================== WALLET CONNECTED
                    ============================
                  </p>
                  <p>WALLET: {{ $wallet.account }}</p>
                  <p>BALANCE: {{ $wallet.balance }} ETH</p>
                  <p>QUANTITY: {{ quantity }}</p>
                  <p>PRICE: {{ $wallet.priceFix * quantity }} ETH</p>
                  ============================================================================
                  ============================================================================
                  ============================================================================
                  <p>
                    ================= READY TO MINT CONFIRM TRANSACTION TO
                    PROCEED =============
                  </p>
                </div>
                <div v-else>
                  <p class="text-justify">
                    ============================= CONNECT YOUR WALLET
                    =====================
                  </p>
                  <p>
                    Tableland awaits! Connect your wallet to start your
                    adventure by grabbing one of the Rigs. Rigs give valuable
                    access to Tableland. Start your journey
                  </p>
                  <p>PRICE: 0.05 ETH</p>
                  ============================================================================
                  ============================================================================
                  ============================================================================
                  <p>
                    ========================== CONNECT YOUR WALLET
                    =============================
                  </p>
                </div> -->
              </div>
            </div>
          </div>
          <div
            class="lg:w-1/2 w-full minter-details"
            v-bind:class="{ active: isAddClass }"
            id="minter-details"
          >
            <div class="flex py-12 px-12">
              <div class="w-1/2 lg:w-1/2">
                <h3 class="text-black lg:text-xl xl:text-2xl text-l">PRICE</h3>
                <h2
                  v-if="quantity"
                  class="overflow-hidden text-black lg:text-4xl text-xl font-Orbitron pr-12 price-box"
                >
                  <span>{{ $wallet.priceFix * quantity || "0.05" }}</span>
                </h2>
                <h2 v-else class="text-black text-xl lg:text-4xl font-Orbitron">
                  0.05ETH
                </h2>
              </div>
              <div class="w-1/2 lg:w-1/2">
                <h3 class="text-black xl:text-2xl lg:text-xl text-l">
                  TOTAL SUPPLY
                </h3>
                <h2
                  id="rig-supply"
                  class="text-black text-xl lg:text-4xl font-Orbitron"
                >
                  {{ 3000 - $wallet.totalSupply }}
                </h2>
              </div>
            </div>
            <div class="flex py-0 px-12" v-if="$wallet.account">
              <div class="w-full lg:w-1/2">
                <h3 class="text-black xl:text-2xl lg:text-xl text-l">
                  YOUR BALANCE
                </h3>
                <h2 class="text-black text-xl lg:text-4xl font-Orbitron">
                  {{ $wallet.balance }}
                </h2>
              </div>
              <div class="w-full lg:w-1/2">
                <h3 class="text-black xl:text-2xl lg:text-xl text-l">
                  QUANTITY
                </h3>
                <input
                  class="quantity text-black text-2xl lg:text-4xl font-Orbitron"
                  v-model="quantity"
                  v-on:change="updateQuantity"
                  value="quantity"
                  type="number"
                  min="1"
                  max="10"
                />
                <!-- <select
                  class="quantity text-black text-2xl lg:text-4xl font-Orbitron"
                  v-model="quantity"
                  v-on:change="updateQuantity"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select> -->
              </div>
            </div>
            <div class="flex">
              <div v-if="provider !== null" class="w-full lg:px-12 lg:py-12 px-12 pb-12 py-0">
                <div v-if="$wallet.account" v-show="$wallet.claimStatus === null">
                  <a
                    id="claim-button"
                    class="btn btn-mint text-white"
                    @click="$wallet.claimRig()"
                    >CLAIM RIG</a
                  >
                </div>
                <div v-if="$wallet.claimStatus === 1">
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
                    v-show="!$wallet.account"
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
            <p class="px-12">
              ===== DEVELOPMENT NOTE, USE ONLY ON OPTIMISM KOVAN TESTNET! ======
            </p>
          </div>
        </div>

        <!-- <div id="rig-box" class="md:flex justify-center text-center" style="max-width:1280px;margin: 60px auto;">
           <div class="w-full md:w-1/3 rig-frame">
            <img src="https://ipfs.infura-ipfs.io/ipfs/bafybeibyf3gmhmv32bg6h4k3w5swmpg3drnetzefhbkzzwrbfap5uyryga/image.png">
           </div>
           <div class="w-full md:w-2/3">
             <div class="minter-console" id="minter-console">
               <div class="text-white text-left" id="mint-log">
                 <div id="mint-terminal" class="frame">

                       <div class="text-left">> Querying Rig ID #00{{rigId}}</div>

                       <div id="rig-owner"></div><br>
                       <div class="text-left">tableland> SELECT * FROM rig_parts WHERE fleet = 'Foils';</div><br>

                       <div class="flex flex-wrap" >
                      test
                       </div>


                 </div>
               </div>
             </div>
          </div>
        </div> -->
      </div>

      <div class="container" v-else>
        <div class="lg:flex px-6 xl:px-48 py-0">
          <div
            class="lg:w-1/2 w-full minter-details block md:hidden px-6"
            v-bind:class="{ active: isAddClass }"
            id="minter-details"
          >
            <div class="flex flex-wrap py-3 lg:py-12 px-0">
              <div class="w-1/2 lg:w-1/2">
                <h3 class="text-black lg:text-xl text-l">PRICE</h3>
                <h2 class="text-black text-xl lg:text-4xl font-Orbitron">
                  0.05ETH
                </h2>
              </div>
              <div class="w-1/2 lg:w-1/2">
                <h3 class="text-black lg:text-xl text-l">TOTAL SUPPLY</h3>
                <h2 class="text-black text-xl lg:text-4xl font-Orbitron">
                  {{ 3000 - $wallet.totalSupply }}
                </h2>
              </div>
              <div class="w-full px-0 py-6">
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
          <div
            class="lg:w-1/2 w-full minter-console md:block"
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
                  functions. We recommend if on mobile to use Metamask's built
                  in dApp browser for the best experience.
                </p>
                ============================================================================
                ============================================================================
                ===============================================================================
                <p>================= INSTALL METAMASK TO CONTINUE ============================</p>
              </div>
            </div>
          </div>
          <div
            class="lg:w-1/2 w-full minter-details hidden sm:block"
            v-bind:class="{ active: isAddClass }"
            id="minter-details"
          >
            <div class="flex flex-wrap py-3 lg:py-12 px-12">
              <div class="w-1/2 lg:w-1/2">
                <h3 class="text-black lg:text-xl text-l">PRICE</h3>
                <h2 class="text-black text-xl lg:text-4xl font-Orbitron">
                  0.05ETH
                </h2>
              </div>
              <div class="w-1/2 lg:w-1/2">
                <h3 class="text-black lg:text-xl text-l">TOTAL SUPPLY</h3>
                <h2 class="text-black text-xl lg:text-4xl font-Orbitron">
                  {{ 3000 - $wallet.totalSupply }}
                </h2>
              </div>
              <div class="w-full px-0 py-6">
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
      <!-- <div class="container section-container" id="minter-console">
        <div class="lg:px-24 px-12 py-24">

          <h1 class="text-center font-Orbitron w-full h-auto text-l sm:text-xl lg:text-3xl md:text-2xl leading-tighter py-12 px-3"
          data-aos="fade-up">Explore your parts with Tableland</h1>
          <Playground></Playground>
        </div>
      </div> -->
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
