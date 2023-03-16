import path from "path";

export default {
  env: {
    chain: "ethereum-goerli",
    chainId: "0x5",
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Tableland-Build web3 with SQL",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Tableland is a network and relational metadata protocol for EVM chains like Ethereum. Built for developers, NFT creators, and web3 visionaries.",
      },
      { name: "format-detection", content: "telephone=no" },
      { hid: "og-type", property: "og:type", content: "website" },
      {
        hid: "og-title",
        property: "og:title",
        content: "Tableland-Build web3 with SQL",
      },
      {
        hid: "og-sitename",
        property: "og:site_name",
        content: "tableland.xyz",
      },
      {
        hid: "og-desc",
        property: "og:description",
        content:
          "Tableland is a network and relational metadata protocol for EVM chains like Ethereum. Built for developers, NFT creators, and web3 visionaries.",
      },
      {
        hid: "og-image",
        property: "og:image",
        content: "https://i.imgur.com/5ErjwNI.png",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://quiet-instinctive.tableland.xyz/script.js",
        "data-site": "QLCGWETC",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/globals.css", "@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "~/plugins/aos",
      ssr: false,
    },
    {
      src: "~/plugins/locomotiveScroll.js",
      mode: "client",
    },
    {
      src: "~/plugins/countdown.js",
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    options: {
      fix: true,
    },
    babel: {
      presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
      ],
      plugins: ["@babel/plugin-proposal-nullish-coalescing-operator"],
      include: [
        "/Users/jwagner/Workspaces/textile/github/site-tableland/node_modules/@tableland/sdk/dist/esm/statement.js",
      ],
    },
  },

  hooks: {
    "generate:page": (page) => {
      page.html = page.html
        .replace(/ data-n-head=".*?"/gi, "")
        .replace(/ data-hid=".*?"/gi, "");
    },
  },
};
