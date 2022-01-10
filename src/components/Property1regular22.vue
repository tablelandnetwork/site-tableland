<template>
  <div :class="[`desktop-button-text-link-white`, className || ``]">
    <div class="view-code poppins-semi-bold-seashell-16px">VIEW CODE</div>
    <img
      class="vector-88-1"
      src="../../img/vector-88@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Property1regular22",
  props: ["className"],
};
</script>

<style>
.desktop-button-text-link-white {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 24px;
  min-height: 27px;
  width: 109px;
}

.view-code {
  letter-spacing: 2.4px;
  line-height: 22.4px;
  min-height: 22px;
  white-space: nowrap;
}

.vector-88-1 {
  height: 2px;
  margin-top: 4px;
  width: 109px;
}

.desktop-button-text-link-white.desktop-button-text-link-white-1 {
  min-height: 26px;
}

.desktop-button-text-link-white.desktop-button-text-link-white-1 .vector-88-1 {
  margin-top: 3px;
}

.desktop-button-text-link-white.desktop-button-text-link-white-2 {
  margin-top: 26px;
}

.desktop-button-text-link-white.desktop-button-text-link-white-3 {
  margin-top: 32px;
}

.desktop-button-text-link-white.desktop-button-text-link-white-4 {
  margin-top: 23px;
}
</style>
