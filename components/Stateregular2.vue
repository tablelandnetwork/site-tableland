<template>
  <div class="mobile-button-outline-black border-2px-black">
    <p class="secondory-button poppins-semi-bold-black-14px">{{ secondoryButton }}</p>
    <img
      class="arrow-fat-lines-right-1"
      src="img/arrowfatlinesright-2@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Stateregular2",
  props: ["secondoryButton"],
};
</script>

<style>
.mobile-button-outline-black {
  align-items: center;
  border-radius: 10px;
  display: flex;
  height: 44px;
  margin-top: 40px;
  min-width: 322px;
  padding: 0 20px;
}

.secondory-button {
  letter-spacing: 2.1px;
  line-height: 19.6px;
  min-height: 20px;
  min-width: 238px;
  white-space: nowrap;
}

.arrow-fat-lines-right-1 {
  height: 24px;
  margin-left: 20px;
  width: 24px;
}
</style>
