<template>
  <div class="mobile-navbar">
    <img
      class="logo"
      src="img/logo@2x.svg"
    />
    <img
      class="list"
      src="img/list@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Property1navbarProperty2regular",
};
</script>

<style>
.mobile-navbar {
  align-items: center;
  display: flex;
  height: 72px;
  left: 495px;
  min-width: 390px;
  padding: 0 20px;
  position: absolute;
  top: 375px;
}

.logo {
  height: 14px;
  width: 131px;
}

.list {
  height: 32px;
  margin-left: 187px;
  width: 32px;
}
</style>
