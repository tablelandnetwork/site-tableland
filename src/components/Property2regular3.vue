<template>
  <div :class="[`desktop-button-nav-link-3`, className || ``]">
    <div class="navigation-link-1 poppins-normal-black-16px-2">{{ navigationLink }}</div>
  </div>
</template>

<script>
export default {
  name: "Property2regular3",
  props: ["navigationLink", "className"],
};
</script>

<style>
.desktop-button-nav-link-3 {
  align-items: center;
  border-radius: 10px;
  display: flex;
  height: 44px;
  margin-right: 20px;
  margin-top: 134px;
  min-width: 88px;
  padding: 0 20px;
}

.navigation-link-1 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  min-width: 48px;
  white-space: nowrap;
}

.desktop-button-nav-link-3.desktop-button-nav-link-4 {
  margin-top: 40px;
  min-width: 96px;
}

.desktop-button-nav-link-3.desktop-button-nav-link-4 .navigation-link-1,
.desktop-button-nav-link-3.desktop-button-nav-link-7 .navigation-link-1 {
  min-width: 56px;
}

.desktop-button-nav-link-3.desktop-button-nav-link-5 {
  margin-top: 40px;
  min-width: 80px;
}

.desktop-button-nav-link-3.desktop-button-nav-link-5 .navigation-link-1,
.desktop-button-nav-link-3.desktop-button-nav-link-8 .navigation-link-1 {
  min-width: 40px;
}

.desktop-button-nav-link-3.desktop-button-nav-link-6 {
  margin-right: unset;
  margin-top: unset;
}

.desktop-button-nav-link-3.desktop-button-nav-link-7 {
  margin-left: 10px;
  margin-right: unset;
  margin-top: unset;
  min-width: 96px;
}

.desktop-button-nav-link-3.desktop-button-nav-link-8 {
  margin-left: 10px;
  margin-right: unset;
  margin-top: unset;
  min-width: 80px;
}
</style>
