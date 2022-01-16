<template>
  <div class="button-filled">
    <div class="explore-the-possibilities poppins-semi-bold-seashell-16px">EXPLORE THE POSSIBILITIES</div>
    <img
      class="arrow-fat-lines-right-4"
      src="img/arrowfatlinesright@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "ButtonFilled",
};
</script>

<style>
.button-filled {
  align-items: center;
  background-color: var(--black);
  border-radius: 20px;
  display: flex;
  height: 65px;
  margin-top: 40px;
  min-width: 405px;
  padding: 0 30px;
}

.explore-the-possibilities {
  letter-spacing: 2.4px;
  line-height: 22.4px;
  margin-bottom: 3px;
  min-height: 22px;
  min-width: 268px;
  white-space: nowrap;
}

.arrow-fat-lines-right-4 {
  height: 25px;
  margin-left: 53px;
  width: 24px;
}
</style>
