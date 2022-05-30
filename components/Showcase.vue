<template>
  <section :class="classs" class="md:block showcase py-12 md:py-32 relative">
    <div v-if="useBreak" class="showcase-break"></div>
    <div class="container">
      <div class="text-center">
        <p class="font-Orbitron text-blue text-3xl md:text-4xl lg:text-5xl md:leading-normal lg:leading-normal font-light mb-10">What will you build?</p>
        <ButtonLink href="https://docs.tableland.xyz">Read the docs</ButtonLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['classs', 'useBreak']
};
</script>
