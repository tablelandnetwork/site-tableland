<template>
  <div class="desktop-list-group-7">
    <desktop-list-item3
      :ethereumTableAndP="desktopListItemProps.ethereumTableAndP"
      :className="desktopListItemProps.className"
    />
  </div>
</template>

<script>
import DesktopListItem3 from "./DesktopListItem3";
export default {
  name: "DesktopListGroup32",
  components: {
    DesktopListItem3,
  },
  props: ["desktopListItemProps"],
};
</script>

<style>
.desktop-list-group-7 {
  align-items: flex-start;
  display: flex;
  height: 30px;
  margin-top: 30px;
  min-width: 424px;
  position: relative;
}
</style>
