<template>
  <a href="https://discord.gg/JS2vyQaa" class="discord-cta-1">
    <img
      class="vector-20"
      src="img/vector-9@2x.svg"
    />
  </a>
</template>

<script>
export default {
  name: "DiscordCtaDesktop",
};
</script>

<style>
.discord-cta-1 {
  height: 84px;
  width: 99px;
  padding: 0 20px;
  z-index: 200;

  background-color: var(--black);
  border: solid 1px aliceblue;
  border-radius: 20px;
  
  align-items: center;
  display: flex !important;
  justify-content: flex-end;

  position: fixed;
  right: 37px;
  bottom: 37px;

  -moz-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.discord-cta-1:hover {
  background-color: var(--black-2);
  height: 86px;
  min-width: 100px;
  right: 36px;
  bottom: 36px;
}

.vector-20 {
  height: 44px;
  width: 57px;
}
</style>
