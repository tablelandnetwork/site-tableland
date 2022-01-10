<template>
  <div class="desktop-roadmap-block-1">
    <roadmap-number3 :price="roadmapNumberProps.price" />
    <div class="info-block-1">
      <div class="frame-64-2">
        <div class="frame-66-3">
          <div class="testnet-phase-1 orbitron-black-black-45px">{{ testnetPhase1 }}</div>
          <div class="number-3 orbitron-black-black-25px">{{ number }}</div>
        </div>
        <desktop-list-group7
          :desktopListItemProps="desktopListGroupProps.desktopListItemProps"
          :desktopListItem2Props="desktopListGroupProps.desktopListItem2Props"
          :desktopListItem3Props="desktopListGroupProps.desktopListItem3Props"
        />
      </div>
      <img class="rectangle-55-3" :src="rectangle55" />
    </div>
  </div>
</template>

<script>
import RoadmapNumber3 from "./RoadmapNumber3";
import DesktopListGroup7 from "./DesktopListGroup7";
export default {
  name: "Stateregular42",
  components: {
    RoadmapNumber3,
    DesktopListGroup7,
  },
  props: ["testnetPhase1", "number", "rectangle55", "roadmapNumberProps", "desktopListGroupProps"],
};
</script>

<style>
.desktop-roadmap-block-1 {
  align-items: flex-start;
  display: flex;
  height: 324px;
  left: 20%;
  min-width: 661px;
  position: absolute;
  top: 7032px;
}

.info-block-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 324px;
  width: 527px;
}

.frame-64-2 {
  align-items: center;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  min-height: 259px;
  position: relative;
  width: 527px;
}

.frame-66-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  min-height: 89px;
  width: 467px;
}

.testnet-phase-1 {
  letter-spacing: 0;
  line-height: 54px;
  min-height: 54px;
  white-space: nowrap;
}

.number-3 {
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 5px;
  min-height: 30px;
  white-space: nowrap;
}

.rectangle-55-3 {
  height: 1px;
  margin-top: 32px;
  width: 1px;
}
</style>
