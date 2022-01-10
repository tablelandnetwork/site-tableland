<template>
  <div class="desktop-roadmap-block-2">
    <roadmap-number3 :price="roadmapNumberProps.price" :className="roadmapNumberProps.className" />
    <div class="info-block-2">
      <div class="frame-64-3">
        <frame663 :testnetPhase1="frame66Props.testnetPhase1" :number="frame66Props.number" />
        <desktop-list-group22
          :desktopListItemProps="desktopListGroup2Props.desktopListItemProps"
          :desktopListItem2Props="desktopListGroup2Props.desktopListItem2Props"
        />
      </div>
      <img class="rectangle-55-4" :src="rectangle55" />
    </div>
  </div>
</template>

<script>
import RoadmapNumber3 from "./RoadmapNumber3";
import Frame663 from "./Frame663";
import DesktopListGroup22 from "./DesktopListGroup22";
export default {
  name: "Stateregular5",
  components: {
    RoadmapNumber3,
    Frame663,
    DesktopListGroup22,
  },
  props: ["rectangle55", "roadmapNumberProps", "frame66Props", "desktopListGroup2Props"],
};
</script>

<style>
.desktop-roadmap-block-2 {
  align-items: flex-start;
  display: flex;
  height: 279px;
  left: 45%;
  width: 45%;
  position: absolute;
  top: 7500px;
}

.info-block-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 279px;
  width: 484px;
}

.frame-64-3 {
  align-items: center;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  min-height: 214px;
  position: relative;
  width: 484px;
}

.rectangle-55-4 {
  height: 1px;
  margin-top: 32px;
  width: 1px;
}
</style>
