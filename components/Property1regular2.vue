<template>
  <div :class="[`mobile-tab-link-1`, className || ``]">
    <div class="tab-navigation-1 valign-text-middle poppins-semi-bold-black-12px">{{ tabNavigation }}</div>
  </div>
</template>

<script>
export default {
  name: "Property1regular2",
  props: ["tabNavigation", "className"],
};
</script>

<style>
.mobile-tab-link-1 {
  align-items: center;
  display: flex;
  height: 44px;
  left: 0;
  min-width: 350px;
  padding: 0 88px;
  position: absolute;
  top: 0;
}

.tab-navigation-1 {
  height: 14px;
  letter-spacing: 1.8px;
  line-height: 14.4px;
  min-width: 174px;
  text-align: center;
  white-space: nowrap;
}

.mobile-tab-link-1.mobile-tab-link-2 {
  padding: 0 97.5px;
  top: 44px;
}

.mobile-tab-link-1.mobile-tab-link-2 .tab-navigation-1 {
  min-width: 155px;
}

.mobile-tab-link-1.mobile-tab-link-3 {
  padding: 0 134.5px;
  top: 88px;
}

.mobile-tab-link-1.mobile-tab-link-3 .tab-navigation-1 {
  min-width: 81px;
}
</style>
