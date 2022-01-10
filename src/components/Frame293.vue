<template>
  <div :class="[`frame-29-4`, className || ``]">
    <img
      class="arrow-fat-lines-up-2"
      src="../../img/arrowfatlinesup@2x.svg"
    />
    <div class="extend-existing-nf-ts-2 orbitron-black-seashell-25px">{{ extendExistingNfts }}</div>
    <p class="attach-in-app-or-gam poppins-normal-white-16px">{{ attachInAppOrGam }}</p>
  </div>
</template>

<script>
export default {
  name: "Frame293",
  props: ["extendExistingNfts", "attachInAppOrGam", "className"],
};
</script>

<style>
.frame-29-4 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  min-height: 314px;
  width: 225px;
}

.arrow-fat-lines-up-2 {
  height: 46px;
  width: 46px;
}

.extend-existing-nf-ts-2 {
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 20px;
  min-height: 60px;
  width: 225px;
}

.attach-in-app-or-gam {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 20px;
  min-height: 168px;
  width: 225px;
}

.frame-29-4.frame-29-5 {
  min-height: 386px;
}

.frame-29-4.frame-29-5 .attach-in-app-or-gam {
  min-height: 240px;
}

.frame-29-4.frame-29-6 {
  min-height: 266px;
}

.frame-29-4.frame-29-6 .attach-in-app-or-gam {
  min-height: 120px;
}

.frame-29-4.frame-29-7 {
  min-height: 218px;
}

.frame-29-4.frame-29-7 .attach-in-app-or-gam {
  min-height: 72px;
}
</style>
