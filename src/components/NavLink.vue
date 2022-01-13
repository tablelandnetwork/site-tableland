<template>
  <a :href="navigationLink" :class="[`desktop-nav-link-3`, className || ``]" v-on="$listeners">
    <div class="nav-link-1 poppins-normal-black-16px-2">{{ navigationText }}</div>
  </a>
</template>

<script>
export default {
  name: "NavLink",
  props: ["navigationLink", "navigationText", "className"],
};
</script>

<style>
.desktop-nav-link-3 {
  align-items: center;
  border-radius: 10px;
  display: flex;
  height: 44px;
  margin-right: 20px;
  margin-top: 134px;
  min-width: 88px;
  padding: 0 20px;
}

a.desktop-nav-link-3:hover {
  text-decoration: underline;
  text-decoration-color: var(--black);
}

.nav-link-1 {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 24px;
  min-width: 48px;
  white-space: nowrap;
}

.desktop-nav-link-3.desktop-button-nav-link-4 {
  margin-top: 40px;
  min-width: 96px;
}

.desktop-nav-link-3.desktop-button-nav-link-4 .nav-link-1,
.desktop-nav-link-3.desktop-button-nav-link-7 .nav-link-1 {
  min-width: 56px;
}

.desktop-nav-link-3.desktop-button-nav-link-5 {
  margin-top: 40px;
  min-width: 80px;
}

.desktop-nav-link-3.desktop-button-nav-link-5 .nav-link-1,
.desktop-nav-link-3.desktop-button-nav-link-8 .nav-link-1 {
  min-width: 40px;
}

.desktop-nav-link-3.desktop-button-nav-link-6 {
  margin-right: unset;
  margin-top: unset;
}

.desktop-nav-link-3.desktop-button-nav-link-7 {
  margin-left: 10px;
  margin-right: unset;
  margin-top: unset;
  min-width: 96px;
}

.desktop-nav-link-3.desktop-button-nav-link-8 {
  margin-left: 10px;
  margin-right: unset;
  margin-top: unset;
  min-width: 80px;
}
</style>
