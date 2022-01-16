<template>
  <div class="desktop-list-group">
    <desktop-list-item :ethereumTableAndP="desktopListItemProps.ethereumTableAndP" />
    <desktop-list-item
      :ethereumTableAndP="desktopListItem2Props.ethereumTableAndP"
      :className="desktopListItem2Props.className"
    />
    <desktop-list-item
      :ethereumTableAndP="desktopListItem3Props.ethereumTableAndP"
      :className="desktopListItem3Props.className"
    />
  </div>
</template>

<script>
import DesktopListItem from "./DesktopListItem";
export default {
  name: "DesktopListGroup",
  components: {
    DesktopListItem,
  },
  props: ["desktopListItemProps", "desktopListItem2Props", "desktopListItem3Props"],
};
</script>

<style>
.desktop-list-group {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  min-height: 150px;
  position: relative;
  width: 277px;
}
</style>
