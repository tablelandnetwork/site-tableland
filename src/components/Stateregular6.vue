<template>
  <div :class="[`desktop-roadmap-block-3`, className || ``]">
    <roadmap-number3 :price="roadmapNumberProps.price" :className="roadmapNumberProps.className" />
    <info-block
      :frame66Props="infoBlockProps.frame66Props"
      :desktopListGroup3Props="infoBlockProps.desktopListGroup3Props"
    />
  </div>
</template>

<script>
import RoadmapNumber3 from "./RoadmapNumber3";
import InfoBlock from "./InfoBlock";
export default {
  name: "Stateregular6",
  components: {
    RoadmapNumber3,
    InfoBlock,
  },
  props: ["className", "roadmapNumberProps", "infoBlockProps"],
};
</script>

<style>
.desktop-roadmap-block-3 {
  align-items: flex-start;
  display: flex;
  height: 234px;
  left: 20%;
  width: 50%;
  position: absolute;
  top: 7900px;
}

.desktop-roadmap-block-3.desktop-roadmap-block-4 {
  left: 45%;
  top: 8350px;
}
</style>
