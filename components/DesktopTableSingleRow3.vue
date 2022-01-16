<template>
  <div :class="[`frame-14-3-1 firacode-normal-black-16px`, className || ``]">
    <div class="number-7 valign-text-middle">{{ number }}</div>
    <div class="phone valign-text-middle">7725742</div>
    <div class="number-8 valign-text-middle">1983746</div>
    <div class="number-6 valign-text-middle">17625367</div>
  </div>
</template>

<script>
export default {
  name: "DesktopTableSingleRow3",
  props: ["number", "className"],
};
</script>

<style>
.frame-14-3-1 {
  align-items: flex-start;
  display: flex;
  min-width: 815px;
}

.number-7,
.phone,
.number-8 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
  width: 204px;
}

.number-6 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.frame-14-3-1.desktop-table-single-row-2 {
  align-items: flex-start;
  display: flex;
  margin-top: 5px;
  min-width: 815px;
}
</style>
