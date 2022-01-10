<template>
  <a href="https://discord.gg/JS2vyQaa" target="_blank">
    <div class="desktop-button-outline-white border-2px-seashell">
      <div class="secondory-button-2 poppins-semi-bold-seashell-16px">{{ secondoryButton }}</div>
      <img
        class="arrow-fat-lines-right-7"
        src="../../img/arrowfatlinesright-3@2x.svg"
      />
    </div>
  </a>
</template>

<script>
export default {
  name: "Stateregular32",
  props: ["secondoryButton"],
};
</script>

<style>
.desktop-button-outline-white {
  align-items: center;
  border-radius: 20px;
  display: flex;
  height: 64px;
  margin-left: 4px;
  margin-top: 40px;
  min-width: 333px;
  padding: 0 30px;
}

.desktop-button-outline-white:hover {
  background-color: #333;
}

.secondory-button-2 {
  letter-spacing: 2.4px;
  line-height: 22.4px;
  margin-bottom: 2px;
  min-height: 22px;
  min-width: 208px;
  white-space: nowrap;
}

.arrow-fat-lines-right-7 {
  height: 24px;
  margin-left: 41px;
  width: 24px;
}
</style>
