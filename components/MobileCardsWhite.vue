<template>
  <div :class="[`mobile-cards-white`, className || ``]">
    <img
      class="frame-72-2"
      src="img/frame-72@2x.svg"
    />
    <img
      class="rectangle-136"
      src="img/rectangle-136@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "MobileCardsWhite",
  props: ["className"],
};
</script>

<style>
.mobile-cards-white {
  align-items: flex-start;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  left: 772px;
  min-height: 359px;
  position: absolute;
  top: 4074px;
  width: 277px;
}

.frame-72-2 {
  height: 301px;
  width: 277px;
}

.rectangle-136 {
  height: 78px;
  margin-top: 2px;
  width: 277px;
}

.mobile-cards-white.mobile-cards-white-1 {
  left: 467px;
}
</style>
