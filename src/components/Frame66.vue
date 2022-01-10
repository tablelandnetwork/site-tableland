<template>
  <div :class="[`frame-66-1-1`, className || ``]">
    <div class="testnet-phase orbitron-black-black-28px">{{ testnetPhase2 }}</div>
    <div class="number-1 orbitron-black-black-28px-2">2022</div>
  </div>
</template>

<script>
export default {
  name: "Frame66",
  props: ["testnetPhase2", "className"],
};
</script>

<style>
.frame-66-1-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 73px;
  width: 277px;
}

.testnet-phase {
  letter-spacing: 0;
  line-height: 33.6px;
  min-height: 34px;
  white-space: nowrap;
}

.number-1 {
  letter-spacing: 0;
  line-height: 33.6px;
  margin-top: 5px;
  min-height: 34px;
  white-space: nowrap;
}

.frame-66-1-1.frame-66-2 {
  width: 276px;
}
</style>
