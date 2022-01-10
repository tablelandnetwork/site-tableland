<template>
  <div class="mobile-tab-link">
    <div class="tab-navigation valign-text-middle">{{ tabNavigation }}</div>
  </div>
</template>

<script>
export default {
  name: "Property1active",
  props: ["tabNavigation"],
};
</script>

<style>
.mobile-tab-link {
  align-items: center;
  background-color: var(--black);
  display: flex;
  height: 44px;
  left: 0;
  min-width: 350px;
  padding: 0 93px;
  position: absolute;
  top: 1px;
}

.tab-navigation {
  color: var(--seashell);
  font-family: var(--font-family-poppins);
  font-size: 12px;
  font-weight: 600;
  height: 14px;
  letter-spacing: 1.8px;
  line-height: 14.4px;
  min-width: 164px;
  text-align: center;
  white-space: nowrap;
}
</style>
