<template>
  <div class="button-black border-2px-seashell" v-on="$listeners">
    <div class="primary-button-2 poppins-semi-bold-seashell-16px">{{ buttonText }}</div>

    <div
      v-if="hasArrow"
      class="arrow-fat-lines-right"
    >
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.75 3.5L21.75 12.5L12.75 21.5V17H9.75V8H12.75V3.5Z" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.75 17V8" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.75 17V8" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

  </div>
</template>

<script>
export default {
  name: "ButtonBlack",
  props: ["buttonText", "hasArrow"],
};
</script>

<style>
.button-black {
  cursor: pointer;
  align-items: center;
  background-color: var(--black);
  border-radius: 20px;
  display: flex;
  height: 64px;
  min-width: 372px;
  padding: 0 30px;
  -moz-transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.button-black svg {
  display: block;
}

.button-black:hover {
  background: rgba(77, 77, 77, 0.5);
  margin-left: 2px;
  padding-left: 32px;
}

.primary-button-2 {
  letter-spacing: 2.4px;
  line-height: 22.4px;
  min-height: 22px;
  min-width: 268px;
  white-space: nowrap;
}

.button-black:hover .primary-button-2 {
  color: white;
  text-shadow: 1px 1px 1px black;

}

.arrow-fat-lines-right-6 {
  height: 24px;
  margin-top:  -2px;
  margin-left: 20px;
  width: 24px;
}


.button-black:hover .arrow-fat-lines-right-6 {
  margin-left: 22px;
  margin-top:  -4px;
}

</style>
