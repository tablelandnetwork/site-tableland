<template>
  <div :class="[`desktop-cards-straight`, className || ``]">
    <div class="frame-72-5">
      <frame293
        :extendExistingNfts="frame29Props.extendExistingNfts"
        :attachInAppOrGam="frame29Props.attachInAppOrGam"
        :className="frame29Props.className"
      />
      <property1regular22 :className="property1regular2Props.className" />
    </div>
  </div>
</template>

<script>
import Frame293 from "./Frame293";
import Property1regular22 from "./Property1regular22";
export default {
  name: "DesktopCardsStraight",
  components: {
    Frame293,
    Property1regular22,
  },
  props: ["className", "frame29Props", "property1regular2Props"],
};
</script>

<style>
.desktop-cards-straight {
  align-items: flex-start;
  border-radius: 30px;
  display: flex;
  height: 445px;
  min-width: 285px;
}

.frame-72-5 {
  align-items: flex-start;
  background-color: var(--black);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  min-height: 445px;
  padding: 40px 0;
  position: relative;
  width: 285px;
}

.desktop-cards-straight.desktop-cards-straight-1 {
  align-self: flex-end;
  height: 516px;
  margin-bottom: -71px;
  margin-left: 20px;
}

.desktop-cards-straight.desktop-cards-straight-1 .frame-72-5 {
  min-height: 516px;
}

.desktop-cards-straight.desktop-cards-straight-2 {
  height: 405px;
  margin-left: 20px;
}

.desktop-cards-straight.desktop-cards-straight-2 .frame-72-5 {
  min-height: 405px;
}

.desktop-cards-straight.desktop-cards-straight-3 {
  height: 348px;
  margin-left: 20px;
}

.desktop-cards-straight.desktop-cards-straight-3 .frame-72-5 {
  min-height: 348px;
}
</style>
