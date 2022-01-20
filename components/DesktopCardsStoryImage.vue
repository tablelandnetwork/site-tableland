<template>
  <div :class="[`desktop-cards-story-image`, className || ``]">
    <div :class="['desktop-cards-story-image-content', (padTop ? 'pad-top-' + padTop : '')]">
      <h4 class="card-title orbitron-black-seashell-45px">{{ cardTitle }}</h4>
      <smoking-gun-image class="smoking-gun"></smoking-gun-image>
      <div class="card-content">
        <p class="poppins-normal-white-20px leading-none">{{ cardContent }}</p>
      </div>
    </div>
    <svg width="100%" viewBox="0 0 285 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_103_47" fill="white">
        <path d="M0 0H285V7.4504C285 22.004 274.554 34.4584 260.223 36.9922L35.2231 76.7725C16.8501 80.0209 0 65.8886 0 47.2307L0 0Z"/>
      </mask>
      <path d="M0 0H285V7.4504C285 22.004 274.554 34.4584 260.223 36.9922L35.2231 76.7725C16.8501 80.0209 0 65.8886 0 47.2307L0 0Z" fill="black"/>
      <path d="M0 0V-2H-2V0L0 0ZM285 0H287V-2H285V0ZM35.2231 76.7725L34.8749 74.8031L35.2231 76.7725ZM0 2H285V-2H0V2ZM283 0V7.4504H287V0H283ZM259.875 35.0228L34.8749 74.8031L35.5713 78.742L260.571 38.9617L259.875 35.0228ZM2 47.2307V0L-2 0V47.2307H2ZM34.8749 74.8031C17.7268 77.8349 2 64.6447 2 47.2307H-2C-2 67.1325 15.9734 82.2069 35.5713 78.742L34.8749 74.8031ZM283 7.4504C283 21.0338 273.251 32.6579 259.875 35.0228L260.571 38.9617C275.858 36.259 287 22.9742 287 7.4504H283Z" fill="black" mask="url(#path-1-inside-1_103_47)"/>
    </svg>
  </div>
</template>

<script>
import SmokingGunImage from "./SmokingGunImage";

export default {
  name: "DesktopCardsStoryImage",
  components: { SmokingGunImage },
  props: ["className", "cardTitle", "cardContent", "padTop"],
};
</script>

<style>
.desktop-cards-story-image {
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  flex-basis: calc(100% / 4);
  flex-direction: column;
  min-height: 488px;
}

.desktop-cards-story-image-content {
  min-height: 405px;
  width: 100%;
  background: #000;
  border-radius: 40px 40px 0 0;
  margin-bottom: -7px;
}

.desktop-cards-story-image-content .card-title {
  margin-top: 30px;
  margin-left: 30px;
}

.desktop-cards-story-image-content .card-content {
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
}

.desktop-cards-story-image-content.pad-top-md {
  margin-top: 40px;
}

.desktop-cards-story-image-content.pad-top-lg {
  margin-top: 80px;
}

.smoking-gun {
  width: 80%;
  margin: 40px 10%;
}

.rectangle-55-1 {
  height: 78px;
  margin-top: 2px;
  width: 285px;
}

</style>
