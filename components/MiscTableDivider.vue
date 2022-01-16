<template>
  <div :class="[`misc-table-divider-2`, className || ``]"></div>
</template>

<script>
export default {
  name: "MiscTableDivider",
  props: ["className"],
};
</script>

<style>
.misc-table-divider-2 {
  background-color: var(--black);
  height: 1px;
  margin-top: 5px;
  width: 326px;
}

.misc-table-divider-2.misc-table-divider-1 {
  width: 815px;
}
</style>
