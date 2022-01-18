<template>
  <div :class="[`desktop-list-item-10`, className || ``]">

    <svg
      v-if="!textWhite"
      class="arrow-fat-right-1"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.75 3L21.75 12L12.75 21V16.5H4.5C4.30109 16.5 4.11032 16.421 3.96967 16.2803C3.82902 16.1397 3.75 15.9489 3.75 15.75V8.25C3.75 8.05109 3.82902 7.86032 3.96967 7.71967C4.11032 7.57902 4.30109 7.5 4.5 7.5H12.75V3Z"
        stroke="black"
        stroke-opacity="0.7"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <svg
      v-if="textWhite"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.75 3.5L21.75 12.5L12.75 21.5V17H9.75V8H12.75V3.5Z" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M3.75 17V8" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6.75 17V8" stroke="#F1F1F1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>


    <div
      :class="{
        'poppins-normal-black-20px': !textWhite,
        'poppins-normal-white-20px': textWhite
      }"
      class="ethereum-table-and-p-1 poppins-normal-black-20px"
    >
      {{ ethereumTableAndP }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesktopListItem3',
  props: ['ethereumTableAndP', 'className', 'textWhite']
};
</script>

<style>
.desktop-list-item-10 {
  align-items: center;
  display: flex;
}

.arrow-fat-right-1 {
  height: 24px;
  width: 24px;
}

.ethereum-table-and-p-1 {
  letter-spacing: 0;
  line-height: 30px;
  margin-left: 10px;
  white-space: nowrap;
}

.desktop-list-item-10.desktop-list-item-8 {
  margin-top: 15px;
}

</style>
