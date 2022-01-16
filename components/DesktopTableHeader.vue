<template>
  <div class="desktop-table-header-container">
    <div class="desktop-table-header">
      <div v-for="column in columns" class="frame-column firacode-medium-black-16px">
        <div class="frame-14-item-1 valign-text-middle">{{ column }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import MiscTableDivider from "./MiscTableDivider";
export default {
  name: "DesktopTableSingleRow",
  components: {
    MiscTableDivider,
  },
  props: ["columns"],
};
</script>

<style>
.desktop-table-header-container {
  width: 815px;
}

.desktop-table-header {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  min-height: 30px;
  position: relative;
  width: 100%;
}

.frame-column {
  display: flex;
}

.frame-14-item-1 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}

.x17625367 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}
</style>
