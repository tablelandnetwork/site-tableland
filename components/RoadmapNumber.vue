<template>
  <div class="roadmap-number">
    <div class="q2 orbitron-black-seashell-18px">{{ number }}</div>
  </div>
</template>

<script>
export default {
  name: 'RoadmapNumber',
  props: ['number']
};
</script>

<style>
.roadmap-number {
  align-items: center;
  background-color: var(--black);
  border-radius: 80px 0 0 80px;
  display: flex;
  height: 58px;
  left: 294px;
  min-width: 58px;
  padding: 0 17.5px;
  position: absolute;
  top: 0;
  transform: rotate(-180deg);
}

.q2 {
  letter-spacing: 0;
  line-height: 21.6px;
  min-height: 22px;
  min-width: 23px;
  white-space: nowrap;
}

.roadmap-number.roadmap-number-1 {
  left: 0;
  padding: 0 13.5px;
  top: 648px;
}

.roadmap-number.roadmap-number-1 .q2,
.roadmap-number.roadmap-number-2 .q2,
.roadmap-number.roadmap-number-4 .q2 {
  min-width: 31px;
}

.roadmap-number.roadmap-number-2 {
  left: 293px;
  padding: 0 13.5px;
  top: 1098px;
}

.roadmap-number.roadmap-number-3 {
  left: 2px;
  top: 1418px;
}

.roadmap-number.roadmap-number-4 {
  left: 292px;
  padding: 0 13.5px;
}

.roadmap-number.roadmap-number-5 {
  left: 0;
  padding: 0 14px;
  top: 349px;
}

.roadmap-number.roadmap-number-5 .q2 {
  min-width: 30px;
}
</style>
