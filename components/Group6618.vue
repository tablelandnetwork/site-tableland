<template>
  <div :class="[`group-6618`, className || ``]">
    <div class="frame-31">
      <div class="mainnet-launch orbitron-black-black-25px-2">{{ mainnetLaunch }}</div>
      <div class="number-2 orbitron-black-black-25px">{{ number }}</div>
    </div>
    <desktop-list-group3 :desktopListItemProps="desktopListGroup3Props.desktopListItemProps" />
  </div>
</template>

<script>
import DesktopListGroup3 from "./DesktopListGroup3";
export default {
  name: "Group6618",
  components: {
    DesktopListGroup3,
  },
  props: ["mainnetLaunch", "number", "className", "desktopListGroup3Props"],
};
</script>

<style>
.group-6618 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 540px;
  min-height: 109px;
  position: absolute;
  top: 1953px;
  width: 277px;
}

.frame-31 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 65px;
  width: 277px;
}

.mainnet-launch {
  letter-spacing: 0;
  line-height: 30px;
  min-height: 30px;
  white-space: nowrap;
}

.number-2 {
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 5px;
  min-height: 30px;
  white-space: nowrap;
}

.group-6618.group-6619 {
  left: 467px;
  top: 2489px;
}
</style>
