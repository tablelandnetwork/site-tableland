<template>
  <div :class="[`desktop-list-group-1`, className || ``]">
    <desktop-list-item
      :ethereumTableAndP="desktopListItemProps.ethereumTableAndP"
      :className="desktopListItemProps.className"
    />
    <desktop-list-item
      :ethereumTableAndP="desktopListItem2Props.ethereumTableAndP"
      :className="desktopListItem2Props.className"
    />
  </div>
</template>

<script>
import DesktopListItem from "./DesktopListItem";
export default {
  name: "DesktopListGroup2",
  components: {
    DesktopListItem,
  },
  props: ["className", "desktopListItemProps", "desktopListItem2Props"],
};
</script>

<style>
.desktop-list-group-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  min-height: 63px;
  position: relative;
  width: 276px;
}

.desktop-list-group-1.desktop-list-group-2 {
  margin-top: 20px;
  min-height: 111px;
  width: 266px;
}
</style>
