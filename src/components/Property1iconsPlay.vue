<template>
  <div :class="[`frame-47`, className || ``]">
    <img
      class="play"
      src="https://anima-uploads.s3.amazonaws.com/projects/61d356f9700a64e7b261164c/releases/61d360379b518eab9640b74a/img/play@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Property1iconsPlay",
  props: ["className"],
};
</script>

<style>
.frame-47 {
  align-items: center;
  background-color: var(--black);
  border-radius: 25px;
  display: flex;
  height: 44px;
  min-width: 44px;
  padding: 0 10px;
}

.play {
  height: 25px;
  width: 24px;
}

.frame-47.videolargeblack .play {
  height: 24px;
}
</style>
