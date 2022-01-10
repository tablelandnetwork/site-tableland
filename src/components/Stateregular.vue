<template>
  <div :class="[`mobile-button-filled-black`, className || ``]">
    <div class="primary-button poppins-semi-bold-seashell-14px">EXPLORE THE POSSIBILITIES</div>
    <img
      class="arrow-fat-lines-right"
      src="../../img/arrowfatlinesright@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Stateregular",
  props: ["className"],
};
</script>

<style>
.mobile-button-filled-black {
  align-items: center;
  background-color: var(--black);
  border-radius: 10px;
  display: flex;
  height: 44px;
  margin-top: 20px;
  min-width: 350px;
  padding: 0 20px;
}

.primary-button {
  letter-spacing: 2.1px;
  line-height: 19.6px;
  min-height: 20px;
  min-width: 234px;
  white-space: nowrap;
}

.arrow-fat-lines-right {
  height: 25px;
  margin-left: 52px;
  width: 24px;
}

.mobile-button-filled-black.mobile-button-filled-black-1 {
  left: 483px;
  margin-top: unset;
  min-width: 318px;
  position: absolute;
  top: 3703px;
}

.mobile-button-filled-black.mobile-button-filled-black-1 .arrow-fat-lines-right {
  height: 24px;
  margin-left: 20px;
}
</style>
