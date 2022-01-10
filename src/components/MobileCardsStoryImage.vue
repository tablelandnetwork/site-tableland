<template>
  <div :class="[`mobile-cards-story-image`, className || ``]">
    <img
      class="frame-60"
      src="https://anima-uploads.s3.amazonaws.com/projects/61d356f9700a64e7b261164c/releases/61d360379b518eab9640b74a/img/frame-60@2x.svg"
    />
    <img
      class="rectangle-55"
      src="https://anima-uploads.s3.amazonaws.com/projects/61d356f9700a64e7b261164c/releases/61d360379b518eab9640b74a/img/rectangle-55@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "MobileCardsStoryImage",
  props: ["className"],
};
</script>

<style>
.mobile-cards-story-image {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 568px;
  width: 277px;
}

.frame-60 {
  height: 485px;
  width: 277px;
}

.rectangle-55 {
  height: 78px;
  margin-top: 2px;
  width: 277px;
}

.mobile-cards-story-image.mobile-cards-story-image-1 {
  margin-left: 15px;
}

.mobile-cards-story-image.mobile-cards-story-image-2 {
  margin-left: 15px;
  min-height: 640px;
}

.mobile-cards-story-image.mobile-cards-story-image-2 .frame-60 {
  height: 557px;
}

.mobile-cards-story-image.mobile-cards-story-image-3 {
  margin-left: 15px;
  min-height: 496px;
}

.mobile-cards-story-image.mobile-cards-story-image-3 .frame-60 {
  height: 413px;
}
</style>
