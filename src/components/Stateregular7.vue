<template>
  <div class="desktop-roadmap-block-5">
    <roadmap-number3 :price="roadmapNumberProps.price" :className="roadmapNumberProps.className" />
    <div class="info-block-4">
      <div class="frame-64-5">
        <div class="frame-66-5">
          <div class="testnet-phase-1-2 orbitron-black-black-45px">{{ testnetPhase1 }}</div>
          <div class="x2022-1 orbitron-black-black-25px">{{ x2022 }}</div>
        </div>
        <desktop-list-group22
          :className="desktopListGroup2Props.className"
          :desktopListItemProps="desktopListGroup2Props.desktopListItemProps"
          :desktopListItem2Props="desktopListGroup2Props.desktopListItem2Props"
        />
      </div>
      <img class="rectangle-55-6" :src="rectangle55" />
    </div>
  </div>
</template>

<script>
import RoadmapNumber3 from "./RoadmapNumber3";
import DesktopListGroup22 from "./DesktopListGroup22";
export default {
  name: "Stateregular7",
  components: {
    RoadmapNumber3,
    DesktopListGroup22,
  },
  props: ["testnetPhase1", "x2022", "rectangle55", "roadmapNumberProps", "desktopListGroup2Props"],
};
</script>

<style>
.desktop-roadmap-block-5 {
  align-items: flex-start;
  display: flex;
  left: 20%;
  width: 50%;
  position: absolute;
  top: 8750px;
}

.info-block-4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 279px;
  width: 699px;
}

.frame-64-5 {
  align-items: center;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  min-height: 214px;
  position: relative;
  width: 699px;
}

.frame-66-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  min-height: 89px;
  width: 639px;
}

.testnet-phase-1-2 {
  letter-spacing: 0;
  line-height: 54px;
  min-height: 54px;
  white-space: nowrap;
}

.x2022-1 {
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 5px;
  min-height: 30px;
  white-space: nowrap;
}

.rectangle-55-6 {
  height: 1px;
  margin-top: 32px;
  width: 1px;
}
</style>
