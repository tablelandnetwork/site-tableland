<template>
  <div class="mint-page samples">
    <HeaderNav
      :titles="nav.map(i => i.title)"
      :hrefs="nav.map(i => i.href)"
      :targets="nav.map(i => i.target)"
    />
    <HeaderScrollNav
      anchor=".choose"
      :titles="nav.map(i => i.title)"
      :hrefs="nav.map(i => i.href)"
      :targets="nav.map(i => i.target)"
    />
    <!-- hero -->
    <section class="rigs-hero">
      <div class="container px-0 sm:px-6 md:px-12 pt-12 sm:pt-24 lg:pt-32 xl:pt-48 justify-between">
        <div class="w-full px-6 pb-6 lg:pb-10 pt-12" data-aos="fade-up">
          <div class="w-full pt-6">
            <h1 class="text-white w-full h-auto font-Orbitron text-5xl lg:text-6xl xl:text-7xl leading-tighter">
              Test <span class="font-black">Rigs</span>
            </h1>
          </div>
        </div>
      </div>
      <div class="container px-0 sm:px-6 md:px-12 pt-0 lg:pt-0 pb-24" data-aos="fade-up">
        <div class="w-full md:w-full lg:w-1/2 xl:w-1/2 px-6 pb-0 lg:pb-0 pt-0">
          <h1 class="text-white w-full h-auto text-xl md:text-2xl xl:text-2xl leading-tighter mb-10 lg:mb-18">
            Each Rig is generated from 1,074 handcrafted works of art for the builders and creatives of cyberspace. Here are 1,000 random Rigs.
          </h1>
        </div>
        <div class="w-full px-6 pb-0 lg:pb-0 pt-0">
          <ButtonLink href="/rigs">More info</ButtonLink>
        </div>
      </div>
    </section>
    <div class="bg-solid">
      <div class="main min-h-screen container flex flex-col items-center p-8 text-sm">
        <div ref="grid" class="w-full grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div v-for="(src, i) in rigs" :key="i">
            <v-lazy-image
              v-if="i < 20"
              :style="{ minHeight: imageHeight }"
              class="m-auto bg-black dark:bg-white bg-opacity-20 dark:bg-opacity-20"
              :src="src"
              @intersect="imageIntersect"
              @load="imageLoad"
            />
            <v-lazy-image
              v-else
              :style="{ minHeight: imageHeight }"
              class="m-auto bg-black dark:bg-white bg-opacity-20 dark:bg-opacity-20 choose"
              :src="src"
              @intersect="imageIntersect"
              @load="imageLoad"
            />
          </div>
        </div>
      </div>
    </div>
    <Showcase />
    <FooterNav />
  </div>
</template>

<script>
import VLazyImage from 'v-lazy-image/v2';
import helpers from '~/plugins/helpers';

export default {
  components: {
    VLazyImage: VLazyImage
  },

  data: function () {
    return {
      nav: [
        {
          title: 'Discord',
          href: 'https://discord.gg/hpd5WWn4Ys',
          target: '_blank'
        },
        {
          title: 'Blog',
          href: 'https://mirror.xyz/tableland.eth',
          target: '_blank'
        },
        {
          title: 'Docs',
          href: 'https://docs.tableland.xyz',
          target: '_blank'
        },
        {
          title: 'Rigs',
          href: '/rigs',
          main: true
        }
      ],
      rigs: helpers.getRigs(1000),
      imageHeight: '0px'
    };
  },

  head: function () {
    return {
      title: 'The Tableland NFT: Test Rigs',
      meta: [
        { hid: 'og-url', property: 'og:url', content: `${this.$route.path}` },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'The Tableland NFT: Test Rigs' },
        { hid: 'og-sitename', property: 'og:site_name', content: 'tableland.xyz/test-rigs' },
        { hid: 'og-desc', property: 'og:description', content: 'A generative NFT built from 1,074 handcrafted works of art for the builders and creatives of cyberspace.' },
        {
          hid: 'og-image',
          property: 'og:image',
          content: 'https://i.imgur.com/5YHLnkC.png'
        }
      ]
    };
  },

  created: function () {
    addEventListener('resize', this.resizeImages);
  },

  mounted: function () {
    this.resizeImages();
  },

  destroyed: function () {
    removeEventListener('resize', this.resizeImages);
  },

  methods: {
    resizeImages: function () {
      const grid = getComputedStyle(this.$refs.grid);
      this.imageHeight = grid.getPropertyValue('grid-template-columns').split(' ')[0];
    },

    imageIntersect: function () {
      console.log('intersect detected'); // eslint-disable-line no-console
    },

    imageLoad: function () {
      console.log('image loaded'); // eslint-disable-line no-console
    }
  }
};

</script>

<style scoped src="~/assets/css/samples.css"></style>
