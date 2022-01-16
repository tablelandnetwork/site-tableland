<template>
  <div class="mobile-button-outline-white border-2px-seashell">
    <div class="secondory-button-1 poppins-semi-bold-seashell-14px">{{ secondoryButton }}</div>
    <img
      class="arrow-fat-lines-right-2"
      src="img/arrowfatlinesright-3@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Stateregular3",
  props: ["secondoryButton"],
};
</script>

<style>
.mobile-button-outline-white {
  align-items: center;
  border-radius: 10px;
  display: flex;
  height: 44px;
  margin-right: 25px;
  margin-top: 40px;
  min-width: 266px;
  padding: 0 20px;
}

.secondory-button-1 {
  letter-spacing: 2.1px;
  line-height: 19.6px;
  min-height: 20px;
  min-width: 182px;
  white-space: nowrap;
}

.arrow-fat-lines-right-2 {
  height: 24px;
  margin-left: 20px;
  width: 24px;
}
</style>
