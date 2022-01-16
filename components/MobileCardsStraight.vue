<template>
  <div class="mobile-cards-straight">
    <div class="frame-72-1">
      <div class="frame-29">
        <img
          class="arrow-fat-lines-up"
          src="img/arrowfatlinesup@2x.svg"
        />
        <div class="extend-existing-nf-ts orbitron-black-seashell-18px">{{ extendExistingNfts }}</div>
        <p class="copy poppins-normal-white-16px">{{ copy }}</p>
      </div>
      <property1regular />
    </div>
  </div>
</template>

<script>
import Property1regular from "./Property1regular";
export default {
  name: "MobileCardsStraight",
  components: {
    Property1regular,
  },
  props: ["extendExistingNfts", "copy"],
};
</script>

<style>
.mobile-cards-straight {
  align-items: flex-start;
  border-radius: 30px;
  display: flex;
  height: 458px;
  min-width: 277px;
}

.frame-72-1 {
  align-items: flex-start;
  background-color: var(--black);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  min-height: 412px;
  padding: 40px 0;
  position: relative;
  width: 277px;
}

.frame-29 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  min-height: 252px;
  width: 217px;
}

.arrow-fat-lines-up {
  height: 46px;
  width: 46px;
}

.extend-existing-nf-ts {
  letter-spacing: 0;
  line-height: 21.6px;
  margin-top: 20px;
  min-height: 22px;
  white-space: nowrap;
}

.copy {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 20px;
  min-height: 144px;
  width: 217px;
}
</style>
