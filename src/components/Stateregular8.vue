<template>
  <div class="desktop-button-outline-black border-2px-black">
    <div class="secondory-button-3 poppins-semi-bold-black-16px">{{ secondoryButton }}</div>
    <img
      class="arrow-fat-lines-right-8"
      src="img/arrowfatlinesright-2@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Stateregular8",
  props: ["secondoryButton"],
};
</script>

<style>
.desktop-button-outline-black {
  align-items: center;
  border-radius: 20px;
  display: flex;
  height: 64px;
  right: 10%;
  padding: 0 30px;
  position: absolute;
  top: 2811px;
}

.secondory-button-3 {
  letter-spacing: 2.4px;
  line-height: 22.4px;
  margin-bottom: 2px;
  min-height: 22px;
  min-width: 129px;
  white-space: nowrap;
}

.arrow-fat-lines-right-8 {
  height: 24px;
  margin: 20px;
  width: 24px;
}
</style>
