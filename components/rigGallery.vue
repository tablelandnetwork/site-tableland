<template>
  <section class="rig-gallery">
    <div class="filters text-pink" data-aos="fade-up">
			<span class="filter" v-bind:class="{ active: currentFilter === 'All' }" v-on:click="setFilter('All')">View All</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Sleds' }" v-on:click="setFilter('Sleds')">Sleds</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Airelights' }" v-on:click="setFilter('Airelights')">Airelights</span>
			<span class="filter" v-bind:class="{ active: currentFilter === 'Titans' }" v-on:click="setFilter('Titans')">Titans</span>
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
     <div class="w-1/2 xl:w-1/4 lg:w-1/3 md:w-1/3 sm:w-1/2 px-3 py-3 rigs" v-for="(rig, index) in rigsMeta.rigs" :key="index" data-aos="fade-up" v-if="currentFilter === rig.attributes[1].value || currentFilter === 'All'">
       <a :href="'/rigs/' + rig.id ">
        <div class="rig-frame" :class="rig.attributes[1].value + ' rarity-' + rig.attributes[0].value">
        <img :src="rig.image"/>
      </div>
      <h2 class="text-white font-Orbitron text-xl px-3 py-3">RIG ID #00{{ rig.id }}</h2>
      <p class="text-white px-3 py-0">{{ rig.attributes[1].value }}</p>
      <p class="text-white px-3 py-0 pb-3">{{ rig.attributes[0].value }}/100</p>
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
