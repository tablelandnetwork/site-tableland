<template>
  <div class="mobile-button-filled-orange">
    <div class="primary-button-1 poppins-semi-bold-black-14px">{{ primaryButton }}</div>
    <img
      class="arrow-fat-lines-right-3"
      src="img/arrowfatlinesright-3@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Stateregular4",
  props: ["primaryButton"],
};
</script>

<style>
.mobile-button-filled-orange {
  align-items: center;
  background-color: #fd9f58;
  border-radius: 10px;
  display: flex;
  height: 44px;
  justify-content: flex-end;
  margin-top: 40px;
  min-width: 223px;
  padding: 0 19.5px;
}

.primary-button-1 {
  letter-spacing: 2.1px;
  line-height: 19.6px;
  min-height: 20px;
  min-width: 139px;
  white-space: nowrap;
}

.arrow-fat-lines-right-3 {
  height: 24px;
  margin-left: 20px;
  width: 25px;
}
</style>
