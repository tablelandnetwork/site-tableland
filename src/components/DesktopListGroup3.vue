<template>
  <div class="desktop-list-group-3">
    <desktop-list-item
      :ethereumTableAndP="desktopListItemProps.ethereumTableAndP"
      :className="desktopListItemProps.className"
    />
  </div>
</template>

<script>
import DesktopListItem from "./DesktopListItem";
export default {
  name: "DesktopListGroup3",
  components: {
    DesktopListItem,
  },
  props: ["desktopListItemProps"],
};
</script>

<style>
.desktop-list-group-3 {
  align-items: flex-start;
  display: flex;
  height: 24px;
  margin-top: 20px;
  min-width: 276px;
  position: relative;
}
</style>
