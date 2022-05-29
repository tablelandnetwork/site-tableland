<template>
  <header class="bg-navbar hidden sm:inline-block" data-aos="fade-down" :data-aos-anchor="anchor" data-aos-offset="0">
    <nav class="container px-6 md:px-9 lg:px-16 flex items-center py-2">
      <div class="py-4 logo">
        <a href="/"><img src="~assets/img/logo-black.svg" alt="Tableland" class="lg:h-5 h-4"></a>
      </div>
      <ul class="flex flex-1 justify-end items-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-12 uppercase ml-3">
        <li v-for="(item, index) in titles" :key="index">
          <a v-if="index != titles.length-1" :href="hrefs[index]" :target="targets[index] ? targets[index] : ''">
            {{ item }}
          </a>
          <a v-else :href="hrefs[index]" :target="targets[index] ? targets[index] : ''" class="btn bg-black text-white">
            {{ item }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: ['titles', 'hrefs', 'targets', 'anchor']
};
</script>
