<template>
  <div
    class="nav-bar"
    :class="{ 'absolute w-full h-screen top-0 left-0': menu }"
  >
    <div class="sm:mx-auto flex flex-wrap">

      <!-- Desktop nav -->
      <nav class="container hidden md:inline-flex justify-between px-6 md:px-9 lg:px-16 flex items-center py-2 pt-6">
        <div class="py-4">
          <a href="/"><img src="~assets/img/logo-black.svg" alt="Tableland" class="h-5"></a>
        </div>
        <div class="py-4">
          <ul class="flex justify-end items-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-12 uppercase ml-3">
            <li v-for="(item, index) in titles" :key="index">
              <a v-if="index != titles.length" :href="hrefs[index]" :target="targets[index] ? targets[index] : ''">
                {{ item }}
              </a>
              <a v-else :href="hrefs[index]" :target="targets[index] ? targets[index] : ''" class="btn bg-black text-white">
                {{ item }}
              </a>
            </li>
            <li v-if="isMinter">
               <a v-if="provider" class="btn bg-white text-white"
                    :disabled="!$wallet.accountCompact"
                    @click="$wallet.connect">
                    <strong>{{
                        !!$wallet.account ? $wallet.accountCompact : 'Connect Wallet'
                    }}</strong>
                </a>
                <a v-else class="btn bg-black text-white">
                     <strong>Get Metamask</strong>
                </a>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Toggle menu mobile -->
      <div class="py-12 px-6 md:hidden logo">
        <a href="/"><img src="~assets/img/logo-black.svg" alt="Tableland" class="h-4"></a>
      </div>
      <button
        class="ml-auto md:hidden p-6"
        @click="menu = !menu"
      >
      {{ !!menu ? 'CLOSE' : 'MENU'}}
      </button>
    </div>

    <!-- Mobile nav  -->
    <transition name="mobile">
    <nav v-show="menu" class="w-full mobile-nav">
      <ul class="flex flex-col text-center">
        <li v-for="(item, index) in titles" :key="index">
          <a :href="hrefs[index]" :target="targets[index] ? targets[index] : ''" class="p-6 block text-l">
            {{ item }}
          </a>
        </li>
        <h1 v-if="provider" class="font-Orbitron px-6 py-6 text-xl"> Your Wallet</h1>
        <li>
           <a v-if="provider" class="btn bg-white text-white text-xl"
                :disabled="!$wallet.accountCompact"
                @click="$wallet.connect">
                <strong>{{
                    !!$wallet.account ? $wallet.accountCompact : 'Connect Wallet'
                }}</strong>
            </a>
            <a v-else class="btn bg-black text-white">
                 <strong>Get Metamask</strong>
            </a>
        </li>
      </ul>
    </nav>
  </transition>
  </div>
</template>

<script>
export default {
  props: ['titles', 'hrefs', 'targets'],
  computed: {
    ethereum: function () {
      return window.ethereum;
    },
    isMinter() {
      return this.$route.name == 'minter';
    }
  },
  data: function () {
    return {
      menu: false,
      provider: window.ethereum,
    };
  },
};
</script>
