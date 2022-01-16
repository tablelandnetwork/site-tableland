<template>
  <div
    :class="{
      'sm': size === 'sm',
      'arrow': hasArrow
    }"
    class="button-cta border-2px-black"
    v-on="$listeners"
  >
    <div class="navigation-cta poppins-normal-black-16px-2">{{ buttonText }}</div>

    <div
      v-if="hasArrow"
      class="arrow-fat-lines-right"
    >
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.75 3.5L21.75 12.5L12.75 21.5V17H9.75V8H12.75V3.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.75 17V8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.75 17V8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonRegular",
  props: ["buttonText", "className", "hasArrow", "size"],
};
</script>

<style>
.button-cta {
  cursor: pointer;
  align-items: center;
  background-color: var(--orange);
  border-radius: 15px;
  display: flex;
  height: 64px;
  min-width: 170px;
  padding: 0 30px;
  -moz-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.button-cta.sm {
  height: 44px;
  min-width: 120px;
}

.button-cta svg {
  display: block;
}

.button-cta:hover {
  background: rgba(255, 212, 180, 0.8);
}

.arrow.button-cta:hover {
  margin-left: 2px;
  padding-left: 32px;
}

.button-cta:hover path {
  stroke: white;
}

.navigation-cta {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  min-width: 130px;
  white-space: nowrap;
  padding: 0 20px;
}

.button-cta.sm .navigation-cta {
  padding: 0;
}

.button-cta:hover .navigation-cta {
  color: var(--seashell);
  text-shadow: 1px 1px 1px black;
}

.button-cta .arrow-fat-lines-right {
  height: 24px;
  margin-top:  -2px;
  margin-left: 20px;
  width: 24px;
}

.button-cta:hover .arrow-fat-lines-right {
  margin-left: 22px;
  margin-top:  -4px;
}

</style>
