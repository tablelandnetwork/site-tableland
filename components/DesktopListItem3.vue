<template>
  <div :class="[`desktop-list-item-10`, className || ``]">
    <img
      class="arrow-fat-right-1"
      src="img/arrowfatright@2x.svg"
    />
    <div class="ethereum-table-and-p-1 poppins-normal-black-20px">{{ ethereumTableAndP }}</div>
  </div>
</template>

<script>
export default {
  name: "DesktopListItem3",
  props: ["ethereumTableAndP", "className"],
};
</script>

<style>
.desktop-list-item-10 {
  align-items: center;
  display: flex;
  height: 30px;
  min-width: 467px;
}

.arrow-fat-right-1 {
  height: 24px;
  width: 24px;
}

.ethereum-table-and-p-1 {
  letter-spacing: 0;
  line-height: 30px;
  margin-left: 10px;
  min-height: 30px;
  white-space: nowrap;
  width: 433px;
}

.desktop-list-item-10.desktop-list-item-8 {
  margin-top: 15px;
}

.desktop-list-item-10.desktop-list-item-9,
.desktop-list-item-10.desktop-list-item-9-1,
.desktop-list-item-10.desktop-list-item-9-2 {
  min-width: 424px;
}

.desktop-list-item-10.desktop-list-item-9-1 .ethereum-table-and-p-1,
.desktop-list-item-10.desktop-list-item-11 .ethereum-table-and-p-1,
.desktop-list-item-10.desktop-list-item-9-2 .ethereum-table-and-p-1,
.desktop-list-item-10.desktop-list-item-9 .ethereum-table-and-p-1 {
  width: 390px;
}

.desktop-list-item-10.desktop-list-item-11 {
  margin-top: 15px;
  min-width: 424px;
}

.desktop-list-item-10.desktop-list-item-12 {
  min-width: 639px;
}

.desktop-list-item-10.desktop-list-item-12 .ethereum-table-and-p-1,
.desktop-list-item-10.desktop-list-item-13 .ethereum-table-and-p-1 {
  width: 605px;
}

.desktop-list-item-10.desktop-list-item-13 {
  margin-top: 15px;
  min-width: 639px;
}
</style>
