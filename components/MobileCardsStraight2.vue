<template>
  <div :class="[`mobile-cards-straight-2`, className || ``]">
    <div class="frame-72-3">
      <frame29
        :extendExistingNfts="frame29Props.extendExistingNfts"
        :copy="frame29Props.copy"
        :className="frame29Props.className"
      />
      <property1regular />
    </div>
  </div>
</template>

<script>
import Frame29 from "./Frame29";
import Property1regular from "./Property1regular";
export default {
  name: "MobileCardsStraight2",
  components: {
    Frame29,
    Property1regular,
  },
  props: ["className", "frame29Props"],
};
</script>

<style>
.mobile-cards-straight-2 {
  align-items: flex-end;
  border-radius: 30px;
  display: flex;
  height: 433px;
  margin-left: 15px;
  min-width: 277px;
}

.frame-72-3 {
  align-items: flex-start;
  background-color: var(--black);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: -25px;
  min-height: 458px;
  padding: 40px 0;
  position: relative;
  width: 277px;
}

.mobile-cards-straight-2.mobile-cards-straight-1,
.mobile-cards-straight-2.mobile-cards-straight-1-1,
.mobile-cards-straight-2.mobile-cards-straight-1-2 {
  align-items: flex-start;
}

.mobile-cards-straight-2.mobile-cards-straight-1-1 .frame-72-3 {
  margin-bottom: unset;
  min-height: 386px;
}

.mobile-cards-straight-2.mobile-cards-straight-1-2 .frame-72-3,
.mobile-cards-straight-2.mobile-cards-straight-1 .frame-72-3 {
  margin-bottom: unset;
  min-height: 362px;
}
</style>
