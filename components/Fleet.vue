<template>
  <section :id="section">
    <div class="container section-container">
      <div class="px-6 sm:px-12 pt-24">
        <h1
          data-aos="fade-up"
          class="section-header-small font-Orbitron w-full h-auto text-4xl lg:text-6xl choose leading-tighter mb-4 lg:mb-10"
        >
          {{ title }}
        </h1>
      </div>
    </div>
    <div class="flex">
      <div class="animated-carousel w-full" data-aos="fade-up">
        <div
          v-for="(item, index) in rigs"
          :key="index"
          class="vehicle"
          :style="'animation-delay:' + delay + 's;'"
        >
          <img :src="item" />
        </div>
      </div>
    </div>
    <div class="container section-container">
      <div class="px-6 sm:px-12 md:pb-24">
        <p
          class="text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-8 md:mb-10"
          data-aos="fade-up"
        >
          {{ description }}
        </p>
        <div class="flex">
          <div class="w-1/2">
            <h3 class="lg:text-2xl text-xl">NUM. ORIGINALS</h3>
            <h2 class="text-4xl font-Orbitron">{{ styles }}</h2>
          </div>
          <div class="w-1/2">
            <h3 class="lg:text-2xl text-xl">COLOR VARIANTS</h3>
            <h2 class="text-4xl font-Orbitron">{{ originals }}</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: [
    "section",
    "title",
    "rigs",
    "description",
    "styles",
    "originals",
    "delay",
  ],
};
</script>
