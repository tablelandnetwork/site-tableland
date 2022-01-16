<template>
  <div class="mobile-table-single-row">
    <div class="frame-14 firacode-normal-black-14px">
      <div class="id valign-text-middle">{{ id }}</div>
      <div class="frame-14-item valign-text-middle">{{ product }}</div>
      <div class="frame-14-item valign-text-middle">{{ value }}</div>
      <div class="surname valign-text-middle">{{ surname }}</div>
    </div>
    <misc-table-divider />
  </div>
</template>

<script>
import MiscTableDivider from "./MiscTableDivider";
export default {
  name: "MobileTableSingleRow",
  components: {
    MiscTableDivider,
  },
  props: ["id", "product", "value", "surname"],
};
</script>

<style>
.mobile-table-single-row {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 27px;
  position: relative;
  width: 326px;
}

.frame-14 {
  align-items: flex-start;
  display: flex;
  min-width: 326px;
}

.id {
  height: 21px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
  width: 50px;
}

.frame-14-item {
  height: 21px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
  width: 92px;
}

.surname {
  height: 21px;
  letter-spacing: 0;
  line-height: 21px;
  white-space: nowrap;
}
</style>
