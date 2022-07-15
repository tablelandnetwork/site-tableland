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
      <span class="filter" v-bind:class="{ active: currentFilter === '100' }" v-on:click="setFilter('100')">Originals</span>

		</div>

    <div class="flex flex-wrap py-0 rig-garage">
     <div class="w-1/2 xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-1/2 lg:px-3 lg:py-3 rigs my-2" v-for="rig in rigsMeta" v-show="currentFilter === 'ALL' || currentFilter === rig.attributes[1].value || currentFilter === rig.attributes[2].value">
       <a :href="'/rigs/' + rig.name" >
        <div class="rig-frame" :class="rig.attributes[1].value" >
          <img :src="rig.thumb"/>
        </div>
      <h2 class="text-black font-Orbitron text-l lg:text-xl px-3 lg:py-3">{{ rig.name }}</h2>

      <div v-if="rig.attributes[2].value === '100'">
        <p class="text-black px-3 py-0">Fleet: {{ rig.attributes[3].value }}  </p>
        <p class="text-black px-3 lg:py-3 lg:pb-3 text-bold" :class="' rarity-' + rig.attributes[2].value">Original: {{ rig.attributes[1].value }} {{ rig.attributes[0].value }}</p>
      </div>
      <div v-else>
        <p class="text-black px-3 py-0">Fleet: {{ rig.attributes[1].value }}</p>
        <p class="text-black px-3 lg:py-3 lg:pb-3">Original: {{ rig.attributes[0].value * 100 }}%</p>
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
        const rigSupply = await(await fetch('https://api.looksrare.org/api/v1/collections/stats?address=0x8EAa9AE1Ac89B1c8C8a8104D08C045f78Aadb42D')).json();
        const totalSupply = rigSupply.data.totalSupply;
        const rigsFeed =  await(await fetch('https://testnet.tableland.network/query?mode=rows&s=select%20json_object(%27name%27%2C%27%23%27%7C%7Cid%2C%27external_url%27%2C%27https%3A%2F%2Ftableland.xyz%2Frigs%2F%27%7C%7Cid%2C%27image%27%2Cimage%2C%27image_alpha%27%2Cimage_alpha%2C%27thumb%27%2Cthumb%2C%27thumb_alpha%27%2Cthumb_alpha%2C%27attributes%27%2Cjson_group_array(json_object(%27display_type%27%2Cdisplay_type%2C%27trait_type%27%2Ctrait_type%2C%27value%27%2Cvalue)))%20from%20rigs_5_28%20join%20rig_attributes_5_27%20on%20rigs_5_28.id%3Drig_attributes_5_27.rig_id%20where%20id%20%3C%20' + totalSupply + '%20group%20by%20id%20order%20by%20id%3B', options)).json();
        console.log(rigsFeed);
        this.rigsMeta = rigsFeed;
        const rigsMeta = this.rigsMeta;

      },
	}
};
</script>
