<template>
  <div class="desktop-cards-straight-4">
    <div class="frame-72-6">
      <div class="frame-29-8">
        <img
          class="arrow-fat-lines-up-3"
          src="img/arrowfatlinesup@2x.svg"
        />
        <div class="extend-existing-nf-ts-3 orbitron-black-seashell-25px">{{ extendExistingNfts }}</div>
        <p class="attach-in-app-or-gam-1 poppins-normal-white-16px">{{ attachInAppOrGam }}</p>
      </div>
      <property1regular22 :className="property1regular2Props.className" />
    </div>
  </div>
</template>

<script>
import Property1regular22 from "./Property1regular22";
export default {
  name: "DesktopCardsStraight2",
  components: {
    Property1regular22,
  },
  props: ["extendExistingNfts", "attachInAppOrGam", "property1regular2Props"],
};
</script>

<style>
.desktop-cards-straight-4 {
  align-items: flex-start;
  border-radius: 30px;
  display: flex;
  height: 405px;
  margin-left: 20px;
  min-width: 285px;
}

.frame-72-6 {
  align-items: flex-start;
  background-color: var(--black);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  min-height: 405px;
  padding: 40px 0;
  position: relative;
  width: 285px;
}

.frame-29-8 {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  min-height: 272px;
  width: 225px;
}

.arrow-fat-lines-up-3 {
  height: 46px;
  width: 46px;
}

.extend-existing-nf-ts-3 {
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 20px;
  min-height: 90px;
  width: 225px;
}

.attach-in-app-or-gam-1 {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 20px;
  min-height: 96px;
  width: 225px;
}
</style>
