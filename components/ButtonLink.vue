<template>
  <a v-bind:href="href" class="btn bg-black text-white">
    <span class="flex">
      <slot></slot>
      <img src="~assets/img/arrow_white.png" srcset="~assets/img/arrow_white.png 1x, ~assets/img/arrow_white@2x.png 2x" class="hidden sm:inline-block ml-4" alt="">
    </span>
  </a>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['href']
};
</script>
