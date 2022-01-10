<template>
  <div class="desktop-button-filled-black">
    <div class="primary-button-2 poppins-semi-bold-seashell-16px">{{ primaryButton }}</div>
    <img
      class="arrow-fat-lines-right-6"
      src="../../img/arrowfatlinesright-3@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Stateregular22",
  props: ["primaryButton"],
};
</script>

<style>
.desktop-button-filled-black {
  align-items: center;
  background-color: var(--black);
  border-radius: 20px;
  display: flex;
  height: 64px;
  margin-top: 40px;
  min-width: 372px;
  padding: 0 30px;
}

.primary-button-2 {
  letter-spacing: 2.4px;
  line-height: 22.4px;
  min-height: 22px;
  min-width: 268px;
  white-space: nowrap;
}

.arrow-fat-lines-right-6 {
  height: 24px;
  margin-left: 20px;
  width: 24px;
}
</style>
