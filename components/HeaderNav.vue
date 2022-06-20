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
            <li v-if="isMinter">
              <a
                v-if="provider"
                v-show="!$wallet.account"
                class="btn bg-white text-white w-50 text-center"
                :disabled="!$wallet.accountCompact"
                @click="$wallet.connect"
              >
                <strong>Connect Wallet</strong>
              </a>
              <a
                v-if="provider"
                v-show="$wallet.account"
                class="btn bg-white text-white w-50 text-center"
                :disabled="!$wallet.accountCompact"
                @click="account = !account"
              >
                <strong>{{ $wallet.accountCompact }}</strong>
              </a>
              <a
                @click="wallet = !wallet"
                v-else
                class="btn bg-black text-white"
              >
                <strong>Connect Wallet

                </strong>
              </a>
              <div
                v-if="account"
                v-show="$wallet.account"
                class="absolute px-3 py-3 mt-2 z-10 bg-white divide-y divide-gray-100 rounded shadow w-50 dark:bg-gray-700"
              >
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a
                      href="/garage/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Your Garage</a
                    >
                  </li>
                  <li>
                    <a
                      @click="$wallet.disconnect"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Disconnect</a
                    >
                  </li>
                </ul>
              </div>
              <div
                v-else
                v-show="wallet"
                class="absolute px-3 py-3 mt-2 z-10 bg-white divide-y divide-gray-100 rounded shadow w-50 dark:bg-gray-700"
              >
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a
                      href="metamask.io"
                      target="_blank"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Get Metamask</a
                    >
                  </li>
                  <li>
                    <a
                      @click="connectWallet"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >WalletConnect</a
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
          <h1
            v-if="isMinter"
            v-show="provider"
            class="font-Orbitron px-6 py-6 text-xl"
          >
            Your Wallet
          </h1>
          <li v-show="isMinter">
            <a
              v-if="provider"
              class="btn bg-white text-white text-xl"
              :disabled="!$wallet.accountCompact"
              @click="$wallet.connect"
            >
              <strong>{{
                !!$wallet.account ? $wallet.accountCompact : "Connect Wallet"
              }}</strong>
            </a>
            <a
              v-if="provider"
              v-show="$wallet.account"
              class="p-6 block text-l"
              href="/garage/"
            >
              <strong>Your Garage</strong>
            </a>
            <a
              v-if="provider"
              v-show="$wallet.account"
              class="p-6 block text-l"
              @click="$wallet.disconnect"
            >
              <strong>Disconnect</strong>
            </a>
            <a
              v-else
              @click="connectWallet"
              v-else
              class="btn bg-black text-white"
            >
              <strong>Connect Wallet</strong>
            </a>
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers } from "ethers";

export default {
  props: ["titles", "hrefs", "targets"],
  methods: {
    connectWallet() {
      const provider2 = new WalletConnectProvider({
        infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
      });
      console.log(provider2);
      this.provider2 = new ethers.providers.Web3Provider(provider2);
      const signer = this.provider2.getSigner();
      // this.$wallet.provider = this.provider2;
      console.log("signer add: " + signer.address);
      // const account = this.provider.getAccounts();
      // console.log("account id",account)
      // if (provider) {
      // }
    },
  },
  computed: {
    ethereum: function () {
      return window.ethereum;
    },
    isMinter() {
      if (
        this.$route.path === "/minter/" ||
        this.$route.path === "/garage/" ||
        this.$route.path === "/gallery/"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  data: function () {
    return {
      menu: false,
      account: false,
      wallet: false,
      provider: window.ethereum,
    };
  },
};
</script>
