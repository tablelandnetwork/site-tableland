<template>
  <div :class="[`mobile-button-filled-black`, className || ``]">
    <div class="primary-button poppins-semi-bold-seashell-14px">EXPLORE THE POSSIBILITIES</div>
    <img
      class="arrow-fat-lines-right"
      src="img/arrowfatlinesright@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: 'Stateregular',
  props: ['className']
};
</script>
