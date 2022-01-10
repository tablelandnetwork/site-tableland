<template>
  <div class="desktop-list-group-4">
    <desktop-list-item3 :ethereumTableAndP="desktopListItemProps.ethereumTableAndP" />
    <desktop-list-item3
      :ethereumTableAndP="desktopListItem2Props.ethereumTableAndP"
      :className="desktopListItem2Props.className"
    />
    <desktop-list-item3
      :ethereumTableAndP="desktopListItem3Props.ethereumTableAndP"
      :className="desktopListItem3Props.className"
    />
  </div>
</template>

<script>
import DesktopListItem3 from "./DesktopListItem3";
export default {
  name: "DesktopListGroup7",
  components: {
    DesktopListItem3,
  },
  props: ["desktopListItemProps", "desktopListItem2Props", "desktopListItem3Props"],
};
</script>

<style>
.desktop-list-group-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  min-height: 120px;
  position: relative;
  width: 467px;
}
</style>
