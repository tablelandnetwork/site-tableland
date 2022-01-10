<template>
  <div :class="[`desktop-tab-link-1`, className || ``]">
    <div class="text-3 valign-text-middle poppins-semi-bold-black-14px">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "Property1TabButton",
  props: ["text", "className"],
};
</script>

<style>
.desktop-tab-link-1 {
  align-items: center;
  display: flex;
  height: 60px;
  left: 0;
  min-width: 285px;
  padding: 0 30px;
  position: absolute;
  top: 60px;
}

.text-3 {
  height: 20px;
  letter-spacing: 2.1px;
  line-height: 19.6px;
  min-width: 203px;
  text-align: center;
  white-space: nowrap;
}

.desktop-tab-link-1.desktop-tab-link-2 {
  top: 120px;
}

.desktop-tab-link-1.desktop-tab-link-2 .text-3 {
  min-width: 181px;
}

.desktop-tab-link-1.desktop-tab-link-3 {
  top: 180px;
}

.desktop-tab-link-1.desktop-tab-link-3 .text-3 {
  min-width: 94px;
}
</style>
