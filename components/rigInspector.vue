<template>
  <section class="rig-gallery">
    <div class="filters hidden lg:block text-black text-l" data-aos="fade-up">
      <span
        class="filter"
        :class="{ active: currentFilter === 'All' }"
        @click="setFilter('All')"
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
        :class="{ active: currentFilter === 100 }"
        @click="setFilter(100)"
        >Originals</span
      >
    </div>

    <div class="flex flex-wrap py-0 rig-garage">
      <div
        v-for="rigInfo in rigInfos"
        v-show="
          currentFilter === 'All' ||
          rigInfo.fleet === currentFilter ||
          rigInfo.percentOrig === currentFilter
        "
        :key="rigInfo.name"
        class="
          w-1/2
          xl:w-1/4
          lg:w-1/3
          md:w-1/3
          sm:w-1/2
          lg:px-3 lg:py-3
          rigs
          my-2
        "
      >
        <a :href="'/rigs/' + rigInfo.id">
          <div class="rig-frame" :class="rigInfo.fleet">
            <img :src="rigInfo.thumbUrl" />
          </div>
          <h2 class="text-black font-Orbitron text-l lg:text-xl px-3 lg:py-3">
            {{ rigInfo.name }}
          </h2>
          <div v-if="rigInfo.percentOrig === 100">
            <p class="text-black px-3 py-0">Fleet: {{ rigInfo.fleet }}</p>
            <p class="text-black px-3 lg:py-3 lg:pb-3 text-bold rarity-100">
              Original: {{ rigInfo.origColor }} {{ rigInfo.origName }}
            </p>
          </div>
          <div v-else>
            <p class="text-black px-3 py-0">Fleet: {{ rigInfo.fleet }}</p>
            <p class="text-black px-3 py-0">
              {{ rigInfo.percentOrig }}% original
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentFilter: "All",
      rigInfos: [],
    };
  },
  beforeMount() {
    this.loadRigs();
    this.setFilter("All");
  },
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    },
    async loadRigs() {
      const rigsTable = this.$route.query.r;
      const rigsAttrTable = this.$route.query.a;

      const baseUrl = `${this.$config.tblAPIURL}/query?mode=json&s=`;
      const query = `select json_object(
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
      group by ${rigsTable}.id`;

      const url = baseUrl + encodeURIComponent(query);

      const res = await fetch(url, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      const json = await res.json();
      const mapped = json.map((item) => {
        let percentOrig;
        let fleet;
        let origName;
        let origColor;
        for (const attr of item.obj.attributes) {
          if (attr.trait_type === "Fleet") {
            fleet = attr.value;
          }
          if (attr.trait_type === "% Original") {
            percentOrig = attr.value;
          }
          if (attr.trait_type === "Name") {
            origName = attr.value;
          }
          if (attr.trait_type === "Color") {
            origColor = attr.value;
          }
        }
        return {
          id: item.obj.name.replace("#", ""),
          name: item.obj.name,
          thumbUrl: item.obj.thumb.replace(
            "ipfs://",
            this.$config.ipfsGatewayURL + "/ipfs/"
          ),
          percentOrig,
          fleet,
          origName,
          origColor,
        };
      });
      this.rigInfos = mapped;
    },
  },
};
</script>
