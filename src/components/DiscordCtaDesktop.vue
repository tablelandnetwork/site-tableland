<template>
  <a href="https://discord.gg/JS2vyQaa" class="discord-cta-1">
    <img
      class="vector-20"
      src="../../img/vector-9@2x.svg"
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
  align-items: center;
  background-color: var(--black);
  border: solid 1px aliceblue;
  border-radius: 20px;
  display: flex !important;
  height: 84px;
  justify-content: flex-end;
  right: 37px;
  min-width: 97px;
  padding: 0 20px;
  position: fixed;
  bottom: 37px;
  z-index: 200;
}

.discord-cta-1:hover {
  background-color: var(--black-2);
}

.vector-20 {
  height: 44px;
  width: 57px;
}
</style>
