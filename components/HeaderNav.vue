<template>
  <div
    class="text-white nav-bar" :class="{ 'absolute w-full h-screen top-0 left-0': menu }">
    <div class="sm:mx-auto flex flex-wrap">

      <!-- Desktop nav -->

      <nav class="container hidden sm:inline-flex justify-between px-6 md:px-9 lg:px-16 flex items-center py-2 pt-6">
        <div class="py-4">
          <img src="~assets/img/logo-black.svg" alt="Tableland" class="h-5">
        </div>
        <div class="py-4">
          <ul class="flex justify-end items-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-12 uppercase ml-3">
            <li v-for="(item, index) in items" :key="index">
              <a :href="item.href">
                {{ item.title }}
              </a>
            </li>
            <li><a href="https://docs.tableland.xyz" class="btn bg-black text-white">Get started</a></li>
          </ul>
        </div>
      </nav>

      <!-- Toggle menu mobile -->
      <div class="py-12 px-6 sm:hidden">
        <img src="~assets/img/logo-black.svg" alt="Tableland" class="h-4">
      </div>
        <button
          class="ml-auto sm:hidden p-6" @click="menu = !menu">
        menu
      </button>
      </div>

      <!-- Mobile nav  -->
      <nav v-show="menu" class="w-full" style="background: #b172a1; transition: all 0.2s ease-in-out">
        <ul class="flex flex-col text-center">
        <li v-for="(item, index) in items" :key="index">
          <a :href="item.href" class="hover: p-6 block">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      items: [
        {
          title: 'Blog',
          href: 'https://mirror.xyz/tableland.eth'
        },
        {
          title: 'Cohort',
          href: '/cohort'
        },
        {
          title: 'Mint',
          href: '/minting'
        },
        {
          title: 'Discord',
          href: 'https://discord.gg/hpd5WWn4Ys'
        },
        {
          title: 'Docs',
          href: 'https://docs.tableland.xyz'
        }
      ]
    }
  }
}
</script>
