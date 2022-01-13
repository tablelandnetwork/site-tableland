<template>
  <div :class="isHeader ? 'header' : ''" class="desktop-table-single-row-1">
    <div v-for="cell in row" class="frame-row" :class="isHeader ? 'firacode-medium-black-16px' : 'firacode-normal-black-16px'">
      <div class="phone valign-text-middle">{{ cell }}</div>
    </div>
    <misc-table-divider :className="'misc-table-divider-1'" />
  </div>
</template>

<script>
import DesktopTableSingleRow3 from "./DesktopTableSingleRow3";
import MiscTableDivider from "./MiscTableDivider";
export default {
  name: "DesktopTableSingleRow2",
  components: {
    DesktopTableSingleRow3,
    MiscTableDivider,
  },
  props: ["row", "isHeader"],
};
</script>

<style>

.desktop-table-single-row-1 {
  align-items: flex-start;
  display: flex;
  margin-top: 5px;
  min-height: 30px;
  position: relative;
  width: 815px;
  border-bottom: 1px solid black;
}

.header.desktop-table-single-row-1 {
  border-bottom: 2px solid black;
}

</style>
