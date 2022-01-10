<template>
  <div class="info-block-3">
    <div class="frame-64-4">
      <frame663 :testnetPhase1="frame66Props.testnetPhase1" :number="frame66Props.number" />
      <desktop-list-group32 :desktopListItemProps="desktopListGroup3Props.desktopListItemProps" />
    </div>
    <img
      class="rectangle-55-5"
      src="../../img/rectangle-55-1@2x.png"
    />
  </div>
</template>

<script>
import Frame663 from "./Frame663";
import DesktopListGroup32 from "./DesktopListGroup32";
export default {
  name: "InfoBlock",
  components: {
    Frame663,
    DesktopListGroup32,
  },
  props: ["frame66Props", "desktopListGroup3Props"],
};
</script>

<style>
.info-block-3 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 234px;
  width: 484px;
}

.frame-64-4 {
  align-items: center;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  min-height: 169px;
  position: relative;
  width: 484px;
}

.rectangle-55-5 {
  height: 1px;
  margin-top: 32px;
  width: 1px;
}
</style>
