<template>
  <div :class="[`desktop-list-item-7`, className || ``]">
    <img
      class="arrow-fat-right"
      src="img/arrowfatright@2x.svg"
    />
    <div class="ethereum-table-and-p poppins-normal-black-16px">{{ ethereumTableAndP }}</div>
  </div>
</template>

<script>
export default {
  name: "DesktopListItem",
  props: ["ethereumTableAndP", "className"],
};
</script>

<style>
.desktop-list-item-7 {
  align-items: center;
  display: flex;
  height: 48px;
  min-width: 277px;
}

.arrow-fat-right {
  height: 24px;
  width: 24px;
}

.ethereum-table-and-p {
  letter-spacing: 0;
  line-height: 24px;
  margin-left: 10px;
  min-height: 48px;
  width: 243px;
}

.desktop-list-item-7.desktop-list-item-1 {
  margin-top: 15px;
}

.desktop-list-item-7.desktop-list-item-2,
.desktop-list-item-7.desktop-list-item-2-1 {
  align-items: flex-start;
  height: unset;
  margin-top: 15px;
}

.desktop-list-item-7.desktop-list-item-2-1 .ethereum-table-and-p,
.desktop-list-item-7.desktop-list-item-3-1 .ethereum-table-and-p,
.desktop-list-item-7.desktop-list-item-4 .ethereum-table-and-p,
.desktop-list-item-7.desktop-list-item-2 .ethereum-table-and-p,
.desktop-list-item-7.desktop-list-item-3-2 .ethereum-table-and-p,
.desktop-list-item-7.desktop-list-item-3 .ethereum-table-and-p {
  min-height: 24px;
  white-space: nowrap;
  width: unset;
}

.desktop-list-item-7.desktop-list-item-3,
.desktop-list-item-7.desktop-list-item-3-1,
.desktop-list-item-7.desktop-list-item-3-2 {
  align-items: flex-start;
  height: unset;
  min-width: 276px;
}

.desktop-list-item-7.desktop-list-item-4 {
  align-items: flex-start;
  height: unset;
  margin-top: 15px;
  min-width: 276px;
}

.desktop-list-item-7.desktop-list-item-5 {
  align-items: center;
  display: flex;
  height: 48px;
  min-width: 266px;
}

.desktop-list-item-7.desktop-list-item-5 .ethereum-table-and-p,
.desktop-list-item-7.desktop-list-item-6 .ethereum-table-and-p {
  width: 232px;
}

.desktop-list-item-7.desktop-list-item-6 {
  align-items: center;
  display: flex;
  height: 48px;
  margin-top: 15px;
  min-width: 266px;
}
</style>
