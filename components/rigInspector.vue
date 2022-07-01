<template>
  <section class="rig-gallery">
    <div class="filters hidden lg:block text-black text-l" data-aos="fade-up">
			<span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">View All</span>
      <span class="filter" v-bind:class="{ active: currentFilter === 'Titans' }" v-on:click="setFilter('Titans')">Titans</span>
      <span class="filter" v-bind:class="{ active: currentFilter === 'Tumblers' }" v-on:click="setFilter('Tumblers')">Tumblers</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Sleds' }" v-on:click="setFilter('Sleds')">Sleds</span>
      <span class="filter" v-bind:class="{ active: currentFilter === 'Edge Riders' }" v-on:click="setFilter('Edge Riders')">Edge Riders</span>
      <span class="filter" v-bind:class="{ active: currentFilter === 'Tracers' }" v-on:click="setFilter('Tracers')">Tracers</span>
      <span class="filter" v-bind:class="{ active: currentFilter === 'Hoppers' }" v-on:click="setFilter('Hoppers')">Hoppers</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Airelights' }" v-on:click="setFilter('Airelights')">Airelights</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Foils' }" v-on:click="setFilter('Foils')">Foils</span>
      <span class="filter" v-bind:class="{ active: currentFilter === '1.000000' }" v-on:click="setFilter('1.000000')">Originals</span>

		</div>

    <div class="flex flex-wrap py-0 rig-garage">
     <div class="w-1/2 xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-1/2 lg:px-3 lg:py-3 rigs my-2" v-for="rig in rigsMeta" v-show="currentFilter === 'ALL' || currentFilter === rig.json_build_object.attributes[1].value || currentFilter === rig.json_build_object.attributes[2].value">
       <a :href="'/rigs/' + rig.json_build_object.name.replace('#', '') " >
        <div class="rig-frame" :class="rig.json_build_object.attributes[1].value" >
          <img :src="rig.json_build_object.thumb"/>
        </div>
      <h2 class="text-black font-Orbitron text-l lg:text-xl px-3 lg:py-3">{{ rig.json_build_object.name }}</h2>

      <div v-if="rig.json_build_object.attributes[2].value === '1.000000'">
        <p class="text-black px-3 py-0">Fleet: {{ rig.json_build_object.attributes[3].value }}  </p>
        <p class="text-black px-3 lg:py-3 lg:pb-3 text-bold" :class="' rarity-' + rig.json_build_object.attributes[2].value">Original: {{ rig.json_build_object.attributes[1].value }} {{ rig.json_build_object.attributes[0].value }}</p>
      </div>
      <div v-else>
        <div class="flex flex-wrap">
        <div class="xl:w-1/2 lg:w-1/2 w-1/2 px-0 py-2" v-for="parts in rig.json_build_object.attributes">
        <strong>{{ parts.trait_type }}</strong><br>
        -------------<br>
        {{ parts.value }}
      </div>
    </div>
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
          currentFilter: 'ALL',
          rigsMeta: this.rigsMeta,
      };
    },
    beforeMount(){
        this.rigsMeta();
        this.setFilter('ALL');
    },
    methods: {
      setFilter: function(filter) {
  			this.currentFilter = filter;
  		},
      rigsMeta: async function() {
        const options = {method: 'GET', headers: {Accept: 'application/json'}};

        // // Use for main net / rinkeby queries
        // const rigSupply = await(await fetch('https://api-rinkeby.looksrare.org/api/v1/collections/stats?address=0x879A53A8Ac46fc87Cfe6F7700f0624F50a750713')).json();
        // const totalSupply = rigSupply.data.totalSupply;

        // Use for optimism network queries
        const rigSupply = await(await fetch('https://api-kovan-optimistic.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x61a748d5f21e7b235f740bdb496b66b852687000&apikey=SAHJW4NKQD6IFP49Y8DGBSH7NHQBR2FXK3')).json();
        const totalSupply = rigSupply.result;

        const rigsFeed =  await(await fetch('https://staging.tableland.network/query?s=select%20json_build_object(%27name%27%2C%20concat(%27%23%27%2C%20id)%2C%20%27external_url%27%2C%20concat(%27https%3A%2F%2Ftableland.xyz%2Frigs%2F%27%2C%20id)%2C%20%27image%27%2C%20image%2C%20%27image_alpha%27%2C%20image_alpha%2C%20%27thumb%27%2C%20thumb%2C%20%27thumb_alpha%27%2C%20thumb_alpha%2C%20%27attributes%27%2C%20%20json_agg(json_build_object(%27display_type%27%2C%20display_type%2C%20%27trait_type%27%2C%20trait_type%2C%20%27value%27%2C%20value)))%20from%20test_rigs_69_5%20join%20test_rig_attributes_69_6%20on%20test_rigs_69_5.id%20%3D%20test_rig_attributes_69_6.rig_id%20where%20id%20%3C%2030000%20group%20by%20id%20order%20by%20id%3B&mode=json', options)).json();
        this.rigsMeta = rigsFeed;
        const rigsMeta = this.rigsMeta;

      },
	}
};
</script>
