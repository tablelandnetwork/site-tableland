<template>
  <div class="mobile-table-single-row-1">
    <div class="frame-14-1 firacode-normal-black-16px">
      <div class="id-1 valign-text-middle">{{ id }}</div>
      <div class="product valign-text-middle">7725742</div>
      <div class="value valign-text-middle">1983746</div>
      <div class="price valign-text-middle">17625367</div>
    </div>
    <misc-table-divider />
  </div>
</template>

<script>
import MiscTableDivider from "./MiscTableDivider";
export default {
  name: "MobileTableSingleRow2",
  components: {
    MiscTableDivider,
  },
  props: ["id"],
};
</script>

<style>
.mobile-table-single-row-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  min-height: 30px;
  position: relative;
  width: 326px;
}

.frame-14-1 {
  align-items: flex-start;
  display: flex;
  min-width: 326px;
}

.id-1,
.id-2,
.id-3,
.id-4,
.id-5,
.id-6,
.id-7,
.id-8,
.id-9,
.id-10 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
  width: 50px;
}

.product,
.value,
.product-1,
.value-1,
.product-2,
.value-2,
.product-3,
.value-3,
.product-4,
.value-4,
.product-5,
.value-5,
.product-6,
.value-6,
.product-7,
.value-7,
.product-8,
.value-8,
.product-9,
.value-9 {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
  width: 92px;
}

.price {
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
}
</style>
