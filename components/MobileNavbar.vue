<template>
  <div>
    <div class="mobile-navbar flex w-full px-6 md:px-16 justify-between z-10">
      <div class="flex flex-col justify-center">
        <img
          class="logo-black-1"
          src="img/logo---black@2x.svg"
        >
      </div>

      <div class="flex flex-col justify-center">
        <div class="relative py-3 sm:max-w-xl mx-auto">
          <nav>
            <button class="w-14 h-14 relative focus:outline-none" @click="toggleOpen">
              <div class="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  class="block absolute h-0.5 w-7 text-black bg-current transform transition duration-500 ease-in-out"
                  :class="{
                    'rotate-45': open,
                    ' -translate-y-1.5': !open
                  }"
                ></span>
                <span
                  class="block absolute h-0.5 w-5 text-black bg-current transform transition duration-500 ease-in-out"
                  :class="{
                    'opacity-0': open
                  }"
                ></span>
                <span
                  class="block absolute h-0.5 w-7 text-black bg-current transform transition duration-500 ease-in-out"
                  :class="{
                    '-rotate-45': open,
                    ' translate-y-1.5': !open
                  }"
                ></span>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['open', 'property2regular3Props', 'property2regular32Props', 'property2regular33Props', 'property1regular3Props'],
  methods: {
    toggleOpen: function () {
      this.$emit('menu-open', !this.open);
    }
  }
};

</script>

<style>

.mobile-navbar {
  width: 100%;
}

.logo-black-1 {
  height: 18px;
  width: 167px;
}

</style>
