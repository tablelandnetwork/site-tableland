<template>
  <div class="desktop-table-single-row">
    <div class="frame-14-2 firacode-medium-black-16px">
      <div class="frame-14-item-1 valign-text-middle">{{ x1 }}</div>
      <div class="frame-14-item-1 valign-text-middle">{{ x7725742 }}</div>
      <div class="frame-14-item-1 valign-text-middle">{{ x1983746 }}</div>
      <div class="x17625367 valign-text-middle">{{ x17625367 }}</div>
    </div>
    <misc-table-divider :className="miscTableDividerProps.className" />
  </div>
</template>

<script>
import MiscTableDivider from "./MiscTableDivider";
export default {
  name: "DesktopTableSingleRow",
  components: {
    MiscTableDivider,
  },
  props: ["x1", "x7725742", "x1983746", "x17625367", "miscTableDividerProps"],
};
</script>

<style>
.desktop-table-single-row {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  min-height: 30px;
  position: relative;
  width: 815px;
}

.frame-14-2 {
  align-items: flex-start;
  display: flex;
  min-width: 815px;
}

.frame-14-item-1 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
  width: 204px;
}

.x17625367 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}
</style>
