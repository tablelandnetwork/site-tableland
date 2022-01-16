<template>
  <div class="secondarylargeblack border-2px-black">
    <p class="join-us-on-discord poppins-semi-bold-black-16px">{{ joinUsOnDiscord }}</p>
    <img
      class="arrow-fat-lines-right-5"
      src="img/arrowfatlinesright-2@2x.svg"
    />
  </div>
</template>

<script>
export default {
  name: "Stateregular14",
  props: ["joinUsOnDiscord"],
};
</script>

<style>
.secondarylargeblack {
  align-items: center;
  border-radius: 20px;
  display: flex;
  height: 64px;
  margin-top: 40px;
  min-width: 376px;
  padding: 0 30px;
}

.join-us-on-discord {
  letter-spacing: 2.4px;
  line-height: 22.4px;
  margin-bottom: 2px;
  min-height: 22px;
  min-width: 272px;
  white-space: nowrap;
}

.arrow-fat-lines-right-5 {
  height: 24px;
  margin-left: 20px;
  width: 24px;
}
</style>
