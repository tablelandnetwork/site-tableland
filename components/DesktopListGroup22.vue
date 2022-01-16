<template>
  <div :class="[`desktop-list-group-5`, className || ``]">
    <desktop-list-item3
      :ethereumTableAndP="desktopListItemProps.ethereumTableAndP"
      :className="desktopListItemProps.className"
    />
    <desktop-list-item3
      :ethereumTableAndP="desktopListItem2Props.ethereumTableAndP"
      :className="desktopListItem2Props.className"
    />
  </div>
</template>

<script>
import DesktopListItem3 from "./DesktopListItem3";
export default {
  name: "DesktopListGroup22",
  components: {
    DesktopListItem3,
  },
  props: ["className", "desktopListItemProps", "desktopListItem2Props"],
};
</script>

<style>
.desktop-list-group-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  min-height: 75px;
  position: relative;
  width: 424px;
}

.desktop-list-group-5.desktop-list-group-6 {
  width: 639px;
}
</style>
