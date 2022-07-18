<template>
  <div
    class="nav-bar"
    :class="{ 'absolute w-full h-screen top-0 left-0': menu }"
  >
    <div class="sm:mx-auto flex flex-wrap">
      <!-- Desktop nav -->
      <nav
        class="container hidden md:inline-flex justify-between px-6 md:px-9 lg:px-16 flex items-center py-2 pt-6"
      >
        <div class="py-4">
          <a href="/"
            ><img src="~assets/img/logo-black.svg" alt="Tableland" class="h-5"
          /></a>
        </div>
        <div class="py-4">
          <ul
            class="flex justify-end items-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-12 uppercase ml-3"
          >
            <li v-for="(item, index) in titles" :key="index">
              <a
                v-if="index != titles.length - 1"
                :href="hrefs[index]"
                :target="targets[index] ? targets[index] : ''"
              >
                {{ item }}
              </a>
              <a
                v-else
                :href="hrefs[index]"
                :target="targets[index] ? targets[index] : ''"
                class="btn bg-black text-white"
              >
                {{ item }}
              </a>
            </li>
            <li v-show="!isRigs">
              <a
                v-if="!address"
                v-show="!address"
                class="btn bg-white text-white w-50 text-center"
                @click="connect"
              >
                <strong>Connect Wallet</strong>
              </a>
              <a
                v-if="address"
                v-show="address"
                class="btn bg-white text-white w-50 text-center"
                @click="account = !account"
              >
                <strong
                  >{{ address.substring(0, 5) }}...{{
                    address.substring(address.length - 4)
                  }}</strong
                >
              </a>
              <div
                v-if="account"
                v-show="address"
                class="absolute px-3 py-3 mt-2 z-10 bg-white divide-y divide-gray-100 rounded shadow w-50 dark:bg-gray-700"
              >
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a
                      href="/rigs/garage/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Your Garage</a
                    >
                  </li>
                  <li>
                    <a
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      @click="disconnect"
                      >Disconnect</a
                    >
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <!-- Toggle menu mobile -->
      <div class="py-12 px-6 md:hidden logo">
        <a href="/"
          ><img src="~assets/img/logo-black.svg" alt="Tableland" class="h-4"
        /></a>
      </div>
      <button class="ml-auto md:hidden p-6" @click="menu = !menu">
        {{ !!menu ? "CLOSE" : "MENU" }}
      </button>
    </div>

    <!-- Mobile nav  -->
    <transition name="mobile">
      <nav v-show="menu" class="w-full mobile-nav">
        <ul class="flex flex-col text-center">
          <li v-for="(item, index) in titles" :key="index">
            <a
              :href="hrefs[index]"
              :target="targets[index] ? targets[index] : ''"
              class="p-6 block text-l"
            >
              {{ item }}
            </a>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["titles", "hrefs", "targets"],
  data() {
    return {
      menu: false,
      address: status.address,
      account: false,
    };
  },
  computed: {
    isRigs() {
      if (this.$route.path === "/rigs/" || this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },
  beforeMount() {
    // this.rigsConnect();
  },
  methods: {
    async rigsConnect() {
      const status = await this.$store.dispatch("getRigsProvider");
    },
    async connect() {
      const status = await this.$store.dispatch("getRigsStatus");
      this.address = status.address;
      if (status) {
        this.address = status.address;
        this.rigs = await this.$store.dispatch("getRigsMetadata", {
          tokens: this.tokens,
        });
      }
    },
    disconnect() {
      this.address = undefined;
      window.localStorage.removeItem("provider");
    },
  },
};
</script>
