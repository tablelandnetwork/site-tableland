<template>
  <div :class="[`flex items-center h-16 sm:h-32 w-16 sm:w-32 px-3 sm:px-7 bg-var-black rounded-full roadmap-number-7-1`, className || ``]">
    <div class="price-1 orbitron-black-seashell-25px sm:orbitron-black-seashell-45px z-10 whitespace-nowrap">{{ number }}</div>
  </div>
</template>

<script>
export default {
  name: 'RoadmapNumber3',
  props: ['number', 'className']
};
</script>

<style>
.roadmap-number-7-1.fill-right {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.price-1 {
  letter-spacing: 0;
  line-height: 54px;
  min-height: 54px;
  min-width: 78px;
}

.roadmap-number-7-1.roadmap-number-8 {
  padding: 0 28.5px;
}

.roadmap-number-7-1.roadmap-number-8 .price-1 {
  min-width: 77px;
}

.roadmap-number-7-1.roadmap-number-9 {
  padding: 0 38px;
}

.roadmap-number-7-1.roadmap-number-9 .price-1 {
  min-width: 58px;
}

.roadmap-number-7-1.roadmap-number-10 {
  align-items: center;
  background-color: var(--black);
  border-radius: 80px;
  display: flex;
  height: 134px;
  min-width: 134px;
  padding: 0 30.5px;
}

.roadmap-number-7-1.roadmap-number-10 .price-1 {
  min-width: 73px;
}
</style>
