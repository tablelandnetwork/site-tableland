<template>
  <div :class="[`desktop-button-nav-link`, className || ``]">
    <div class="navigation-link poppins-normal-spray-16px">{{ navigationLink }}</div>
  </div>
</template>

<script>
export default {
  name: "Property2regular",
  props: ["navigationLink", "className"],
};
</script>

<style>
.desktop-button-nav-link {
  align-items: center;
  border-radius: 10px;
  display: flex;
  height: 44px;
  min-width: 122px;
  padding: 0 25px;
}

.navigation-link {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  min-width: 72px;
  white-space: nowrap;
}

.desktop-button-nav-link.desktop-button-nav-link-1 {
  margin-left: 10px;
  min-width: 116px;
  padding: 0 24.5px;
}

.desktop-button-nav-link.desktop-button-nav-link-1 .navigation-link {
  min-width: 67px;
}

.desktop-button-nav-link.desktop-button-nav-link-2 {
  margin-left: 12px;
  min-width: 90px;
  padding: 0 23.5px;
}

.desktop-button-nav-link.desktop-button-nav-link-2 .navigation-link {
  min-width: 43px;
}
</style>
