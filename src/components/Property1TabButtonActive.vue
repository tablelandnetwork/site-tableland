<template>
  <div class="desktop-tab-link">
    <div class="text valign-text-middle poppins-semi-bold-seashell-14px">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "Property1TabButtonActive",
  props: ["text"],
};
</script>

<style>
.desktop-tab-link {
  align-items: center;
  background-color: var(--black);
  display: flex;
  height: 60px;
  left: 0;
  min-width: 285px;
  padding: 0 30px;
  position: absolute;
  top: 0;
}

.text {
  height: 20px;
  letter-spacing: 2.1px;
  line-height: 19.6px;
  min-width: 192px;
  text-align: center;
  white-space: nowrap;
}
</style>
