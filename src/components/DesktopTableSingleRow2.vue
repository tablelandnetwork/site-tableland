<template>
  <div class="desktop-table-single-row-1">
    <desktop-table-single-row3 :number="desktopTableSingleRow3Props.number" />
    <misc-table-divider :className="desktopTableSingleRow3Props2.className" />
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
  props: ["desktopTableSingleRow3Props", "desktopTableSingleRow3Props2"],
};
</script>

<style>
.desktop-table-single-row-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  min-height: 30px;
  position: relative;
  width: 815px;
}
</style>
