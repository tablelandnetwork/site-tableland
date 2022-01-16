<template>
  <div class="mobile-button-text-link-white">
    <div class="text-link poppins-semi-bold-seashell-14px">TEXT LINK</div>
    <img
      class="vector-88"
      src="img/vector-88@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Property1regular",
};
</script>

<style>
.mobile-button-text-link-white {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 55px;
  min-height: 25px;
  width: 84px;
}

.text-link {
  letter-spacing: 2.1px;
  line-height: 19.6px;
  min-height: 20px;
  white-space: nowrap;
}

.vector-88 {
  height: 2px;
  margin-top: 4px;
  width: 84px;
}
</style>
