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

    <!-- Rig Gallery -->
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
          <!-- {{rigsMeta}} -->

          <div
            class="filters hidden lg:block text-black text-l"
            data-aos="fade-up"
          >
            <span
              class="filter"
              :class="{ active: currentFilter === 'ALL' }"
              @click="setFilter('ALL')"
              >View All</span
            >
            <span
              class="filter"
              :class="{ active: currentFilter === 'Titans' }"
              @click="setFilter('Titans')"
              >Titans</span
            >
            <span
              class="filter"
              :class="{ active: currentFilter === 'Tumblers' }"
              @click="setFilter('Tumblers')"
              >Tumblers</span
            >
            <span
              class="filter"
              :class="{ active: currentFilter === 'Sleds' }"
              @click="setFilter('Sleds')"
              >Sleds</span
            >
            <span
              class="filter"
              :class="{ active: currentFilter === 'Edge Riders' }"
              @click="setFilter('Edge Riders')"
              >Edge Riders</span
            >
            <span
              class="filter"
              :class="{ active: currentFilter === 'Tracers' }"
              @click="setFilter('Tracers')"
              >Tracers</span
            >
            <span
              class="filter"
              :class="{ active: currentFilter === 'Hoppers' }"
              @click="setFilter('Hoppers')"
              >Hoppers</span
            >
            <span
              class="filter"
              :class="{ active: currentFilter === 'Airelights' }"
              @click="setFilter('Airelights')"
              >Airelights</span
            >
            <span
              class="filter"
              :class="{ active: currentFilter === 'Foils' }"
              @click="setFilter('Foils')"
              >Foils</span
            >
            <span
              class="filter"
              :class="{ active: currentFilter == '100' }"
              @click="setFilter('100')"
              >Originals</span
            >
          </div>

          <div class="flex flex-wrap py-0 rig-garage">
            <div
              v-for="rig in rigsMeta"
              v-show="
                currentFilter === 'ALL' ||
                currentFilter === rig[0].attributes[4].value ||
                currentFilter == rig[0].attributes[0].value
              "
              :key="rig"
              class="w-1/2 xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-1/2 lg:px-3 lg:py-3 rigs my-2"
            >
              <a :href="'/rigs/' + rig[0].name.replace('#', '')">
                <div class="rig-frame" :class="rig[0].attributes[0].value">
                  <img :src="rig[0].thumb" />
                </div>
                <h2
                  class="text-black font-Orbitron text-l lg:text-xl px-3 lg:py-3"
                >
                  {{ rig[0].name }}
                </h2>

                <div v-if="rig[0].attributes[0].value == '100'">
                  <p class="text-black px-3 py-0">
                    Fleet: {{ rig[0].attributes[5].value }}
                  </p>
                  <p
                    class="text-black px-3 lg:py-3 lg:pb-3 text-bold"
                    :class="' rarity-' + rig[0].attributes[0].value"
                  >
                    Original: {{ rig[0].attributes[7].value }}
                    {{ rig[0].attributes[4].value }}
                  </p>
                </div>
                <div v-else>
                  <p class="text-black px-3 py-0">
                    Fleet: {{ rig[0].attributes[4].value }}
                  </p>
                  <p class="text-black px-3 lg:py-3 lg:pb-3">
                    Original: {{ rig[0].attributes[0].value }}%
                  </p>
                </div>
              </a>
            </div>
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
      currentFilter: "ALL",
      isAddClass: false,
      useWallet: true,
      rigInfos: [],
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
      title: "The Tableland NFT: Rigs Gallery",
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
  beforeMount() {
    this.setFilter("ALL");
    this.getRigs();
  },
  methods: {
    addClass() {
      this.isAddClass = true;
    },
    setFilter(filter) {
      this.currentFilter = filter;
    },
    async getRigs() {
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
    group by ${rigsTable}.id`);
      this.rigsMeta = query.rows;
    },
  },
};
</script>
