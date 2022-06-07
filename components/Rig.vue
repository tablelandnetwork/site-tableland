<template>

    <section class="md:block showcase py-24 relative">
      <div class="minter-break flex container text-center justify-between"></div>
        <div class="container" style="margin-top:-900px;max-width: 1280px;z-index:999">
          <h1 class="text-black text-left font-Orbitron w-full h-auto text-4xl sm:text-5xl lg:text-6xl md:text-5xl leading-tighter mb-12 lg:mb-10" data-aos="fade-up" >
            {{ title }}
          </h1>
          <div class="rig-frame">
            <img :src="{{image}}"/>
          </div>
          <h3 class="text-white text-center lg:text-xl text-l">tx {{ transaction }}/h3>
          <div class="flex px-48 py-0">
            <div class="lg:w-full minter-details">
              <div class="flex py-12 px-24">
                <div class="w-1/2" >
                  <h3 class="text-white lg:text-xl text-l">METAVALUE</h3>
                  <h2 class="text-white text-4xl font-Orbitron">placeholder</h2>
                </div>
                <div class="w-1/2">
                  <h3 class="text-white lg:text-xl text-l">METAVALUE</h3>
                  <h2 class="text-white text-4xl font-Orbitron">placeholder</h2>
                </div>
              </div>
              <div class="flex py-0 px-24">
                <div class="w-1/2" >
                  <h3 class="text-white lg:text-xl text-l">METAVALUE</h3>
                  <h2 class="text-white text-4xl font-Orbitron">placeholder</h2>
                </div>
                <div class="w-1/2">
                  <h3 class="text-white lg:text-xl text-l">METAVALUE</h3>
                  <h2 class="text-white text-4xl font-Orbitron">placeholder</h2>
                </div>
              </div>
              <div class="flex">
                <div class="w-full px-24 py-18">
                  <a class="btn btn-mint text-white">VIEW TRANSACTION</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

</template>

<script>
export default {
  props: ['title', 'transaction', 'image']
};
</script>
