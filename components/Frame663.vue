<template>
  <div class="frame-66-4">
    <div class="testnet-phase-1-1 orbitron-black-black-45px">{{ testnetPhase1 }}</div>
    <div class="number-4 orbitron-black-black-25px">{{ number }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame663",
  props: ["testnetPhase1", "number"],
};
</script>

<style>
.frame-66-4 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  min-height: 89px;
  width: 424px;
}

.testnet-phase-1-1 {
  letter-spacing: 0;
  line-height: 54px;
  min-height: 54px;
  white-space: nowrap;
}

.number-4,
.number-5,
.x2022 {
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 5px;
  min-height: 30px;
  white-space: nowrap;
}
</style>
