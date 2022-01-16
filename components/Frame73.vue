<template>
  <div class="frame-7">
    <div class="any-suggestions-1 orbitron-black-black-70px">Any suggestions?</div>
    <button-black button-text="EXPLORE THE POSSIBILITIES" :has-arrow="true" />
  </div>
</template>

<script>
import ButtonBlack from "./ButtonBlack";
export default {
  name: "Frame73",
  components: {
    ButtonBlack,
  },
};
</script>

<style>
.frame-7 {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 189px;
  position: absolute;
  top: 9710px;
  width: 100%;
}

.any-suggestions-1 {
  letter-spacing: 0;
  line-height: 84px;
  min-height: 84px;
  min-width: 697px;
  text-align: center;
  white-space: nowrap;
}
</style>
