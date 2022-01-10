<template>
  <div :class="[`desktop-button-navigation-cta border-2px-black`, className || ``]">
    <div class="navigation-cta poppins-normal-black-16px-2">{{ navigationCta }}</div>
  </div>
</template>

<script>
export default {
  name: "Property1regular32",
  props: ["navigationCta", "className"],
};
</script>

<style>
.desktop-button-navigation-cta {
  align-items: center;
  border-radius: 15px;
  display: flex;
  height: 44px;
  margin-top: 80px;
  min-width: 170px;
  padding: 0 20px;
}

.navigation-cta {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  min-width: 130px;
  white-space: nowrap;
}

.desktop-button-navigation-cta.desktop-button-navigation-cta-1 {
  margin-left: 10px;
  margin-top: unset;
}
</style>
