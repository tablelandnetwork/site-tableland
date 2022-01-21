<template>
  <div class="flex flex-col items-center justify-start h-20 xs:h-28 sm:pb-8 w-full bg-black z-50 px-4 sm:px-16">
    <div class="flex justify-between items-center h-20 w-full">
      <div class="flex justify-around w-full">
        <div class="">
          <a href="#investors" class="hover:underline poppins-normal-spray-16px">{{ property2regularProps.navigationLink }}</a>
        </div>
        <div class="">
          <a href="#partners" class="hover:underline poppins-normal-spray-16px">{{ property2regular2Props.navigationLink }}</a>
        </div>
        <div class="">
          <a href="#legal" class="hover:underline poppins-normal-spray-16px">{{ property2regular3Props.navigationLink }}</a>
        </div>
      </div>
    </div>
    <img
      class="w-32"
      src="img/logo--spray.svg"
    />
  </div>
</template>

<script>
export default {
  props: ['property2regularProps', 'property2regular2Props', 'property2regular3Props']
};
</script>

<style>
</style>
