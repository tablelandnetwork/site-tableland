<template>
  <div :class="[`frame-29-2`, className || ``]">
    <img
      class="arrow-fat-lines-up-1"
      src="img/arrowfatlinesup@2x.svg"
    />
    <div class="extend-existing-nf-ts-1 orbitron-black-seashell-18px">{{ extendExistingNfts }}</div>
    <p class="copy-2 poppins-normal-white-16px">{{ copy }}</p>
  </div>
</template>

<script>
export default {
  name: "Frame29",
  props: ["extendExistingNfts", "copy", "className"],
};
</script>

<style>
.frame-29-2 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  min-height: 298px;
  width: 217px;
}

.arrow-fat-lines-up-1 {
  height: 46px;
  width: 46px;
}

.extend-existing-nf-ts-1 {
  letter-spacing: 0;
  line-height: 21.6px;
  margin-top: 20px;
  min-height: 44px;
  width: 217px;
}

.copy-2 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 20px;
  min-height: 168px;
  width: 217px;
}

.frame-29-2.frame-29-3 {
  min-height: 226px;
}

.frame-29-2.frame-29-3 .copy-2 {
  min-height: 96px;
}

.frame-29-2.frame-29-1,
.frame-29-2.frame-29-1-1 {
  min-height: 202px;
}

.frame-29-2.frame-29-1-1 .copy-2,
.frame-29-2.frame-29-1 .copy-2 {
  min-height: 72px;
}
</style>
