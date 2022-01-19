<template>
  <div :class="property1iconsPlayProps.className" class="videolargeblack-1">
    <property1icons-play :className="property1iconsPlayProps.className" />
    <div class="video-introduction-1 poppins-semi-bold-black-16px">{{ videoIntroduction }}</div>
  </div>
</template>

<script>

export default {
  props: ['videoIntroduction', 'property1iconsPlayProps']
};

</script>

<style>
.videolargeblack-1 {
  align-items: center;
  display: flex;
  height: 44px;
  min-width: 279px;
  position: relative;
}

.video-introduction-1 {
  letter-spacing: 2.4px;
  line-height: 22.4px;
  margin-left: 20px;
  min-height: 22px;
  min-width: 215px;
  white-space: nowrap;
}
</style>
