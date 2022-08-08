<template>
  <div class="mint-page">
    <!-- Header -->
    <HeaderNav
      :titles="nav.map((i) => i.title)"
      :hrefs="nav.map((i) => i.href)"
      :targets="nav.map((i) => i.target)"
    />

    <!-- Individual rig page -->
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
          RIG #{{ rigId }}
        </h1>
        <div class="flex px-6 xl:px-24 py-6 lg:py-12">
          <div class="lg:w-full minter-details">
            <div
              v-for="rig in rigsMeta[0]"
              :key="rig"
              class="flex flex-wrap py-0 lg:px-12 px-0"
              data-aos="fade-up"
            >
              <div class="w-full md:w-full lg:w-1/2">
                <div class="rig-frame">
                  <img :src="rig.image" />
                </div>
              </div>

              <div class="w-full md:w-full lg:w-1/2 lg:px-12">
                <div v-if="rig.attributes[1].value == '100'">
                  <p
                    class="text-black px-3 py-3 pb-3 text-bold"
                    :class="' rarity-' + rig.attributes[1].value"
                  >
                    Original: {{ rig.attributes[2].value }}
                    {{ rig.attributes[3].value }}
                  </p>
                </div>
                <div id="minter-console" class="minter-console">
                  <div id="mint-log" class="text-white text-left">
                    <div id="mint-terminal" class="frame">
                      <div class="text-left">> Querying Rig #{{ rigId }}</div>

                      <div id="rig-owner"></div>
                      <br />
                      <div class="text-left">
                        <p>
                          tableland> SELECT * FROM rig_parts WHERE fleet =
                          '<strong v-if="rig.attributes[1].value == '100'">{{
                            rig.attributes[5].value
                          }}</strong
                          ><strong v-else>{{ rig.attributes[4].value }}</strong
                          >';
                        </p>
                      </div>
                      <br />

                      <div class="flex flex-wrap">
                        <div
                          class="xl:w-1/3 lg:w-1/2 w-1/2 px-0 py-2"
                          v-for="parts in rig.attributes"
                          :key="parts"
                        >
                          <strong>{{ parts.trait_type }}</strong
                          ><br />
                          -------------<br />
                          {{ parts.value }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full px-0 pt-6 lg:pt-6">
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
    <FooterNav />
  </div>
</template>

<script>
import { connect } from "@tableland/sdk";

export default {
  data: function () {
    return {
      rigId: this.$route.params.id,
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

  head: function () {
    return {
      title: "Rig #" + this.rigId + " - The Tableland NFT: Rigs",
      meta: [
        { hid: "og-url", property: "og:url", content: `${this.$route.path}` },
        { hid: "og-type", property: "og:type", content: "website" },
        {
          hid: "og-title",
          property: "og:title",
          content: "Rig #" + this.rigId + " - The Tableland NFT: Rigs",
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
    this.rigsMeta();
  },

  methods: {
    refresh() {
      this.$nuxt.refresh();
    },
    rigsMeta: async function () {

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
      where id = ${this.rigId}
      `);

      this.rigsMeta = query.rows;

    },
  },
};
</script>
