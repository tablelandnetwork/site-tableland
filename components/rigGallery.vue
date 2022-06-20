<template>
  <section class="rig-gallery">
    <div class="filters hidden lg:block text-black" data-aos="fade-up">
			<span class="filter" v-bind:class="{ active: currentFilter === 'All' }" v-on:click="setFilter('All')">View All</span>
      <span class="filter" v-bind:class="{ active: currentFilter === 'Titans' }" v-on:click="setFilter('Titans')">Titans</span>
      <span class="filter" v-bind:class="{ active: currentFilter === 'Tumblers' }" v-on:click="setFilter('Tumblers')">Tumblers</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Sleds' }" v-on:click="setFilter('Sleds')">Sleds</span>
      <span class="filter" v-bind:class="{ active: currentFilter === 'Edge' }" v-on:click="setFilter('Edge')">Edge Riders</span>
      <span class="filter" v-bind:class="{ active: currentFilter === 'Tracers' }" v-on:click="setFilter('Tracers')">Tracers</span>
      <span class="filter" v-bind:class="{ active: currentFilter === 'Hoppers' }" v-on:click="setFilter('Hoppers')">Hoppers</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Airelights' }" v-on:click="setFilter('Airelights')">Airelights</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Foils' }" v-on:click="setFilter('Foils')">Foils</span>
		</div>
	</div>

    <!-- <ul v-for="(rig, index) in rigsMeta.rigs" :key="index">
      <li class="py-4 text-white" v-if="currentFilter === rig.attributes[1].value || currentFilter === 'All'">
       <h3 class="text-sm font-medium">{{ rig.id }}</h3>
       {{ rig.image }}
       FLEET: {{ rig.attributes[1].value }}
      </li>
    </ul> -->

    <div class="flex flex-wrap py-0 rig-garage">
     <div class="w-1/2 xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-1/2 lg:px-3 lg:py-3 rigs my-2" v-for="(rig, index) in rigsMeta.rigs" :key="index" data-aos="fade-up" v-if="currentFilter === rig.attributes[1].value || currentFilter === 'All'">
       <a :href="'/rigs/' + rig.id ">
        <div class="rig-frame" :class="rig.attributes[1].value">
        <img :src="rig.image"/>
      </div>
      <h2 class="text-black font-Orbitron text-l lg:text-xl px-3 lg:py-3">RIG ID #00{{ rig.id }}</h2>
      <p class="text-black px-3 py-0">{{ rig.attributes[1].value }}</p>
      <p class="text-black px-3 lg:py-3 pb-3" :class="' rarity-' + rig.attributes[0].value">{{ rig.attributes[0].value }}/100</p>
       </a>
     </div>
   </div>

  </section>
</template>


<script>
import rigsMeta from '~/assets/rigsMeta.json';
export default {
    data() {
      return {
          rigsMeta: rigsMeta,
          currentFilter: 'All',
      };
    },
    methods: {
  		setFilter: function(filter) {
  			this.currentFilter = filter;
  		}
	}
};
</script>
