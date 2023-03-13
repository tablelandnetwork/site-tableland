<template>
  <footer :class="classs" class="text-blue py-10">
    <nav
      class="container flex justify-around md:justify-items-center gap-x-6 grid md:grid-cols-4 gap-4 px-10"
    >
      <ul>
        <h3 class="font-bold text-white uppercase">Community</h3>
        <li>
          <a href="https://discord.gg/dc8EBEhGbg" target="_blank">Discord</a>
        </li>
        <li>
          <a href="https://twitter.com/tableland__" target="_blank">Twitter</a>
        </li>
        <li>
          <a href="https://tableland.xyz/pilot-program/" target="_blank"
            >Pilot Program</a
          >
        </li>
      </ul>

      <ul>
        <h3 class="font-bold text-white uppercase">Use Cases</h3>
        <li>
          <a href="https://dev.tableland.xyz/one-pagers/tableland-for-nfts"
            >NFTs</a
          >
        </li>
        <li>
          <a href="https://dev.tableland.xyz/one-pagers/tableland-for-gaming"
            >Gaming</a
          >
        </li>
        <li>
          <a href="https://docs.tableland.xyz/use-cases">More Use Cases</a>
        </li>
      </ul>
      <ul>
        <h3 class="font-bold text-white uppercase">Resources</h3>
        <li>
          <a href="https://dev.tableland.xyz" target="_blank">Tech Blog</a>
        </li>
        <li>
          <a href="https://docs.tableland.xyz" target="_blank">Docs</a>
        </li>
      </ul>

      <ul>
        <h3 class="font-bold text-white uppercase">References</h3>
        <li class="hidden md:inline-block">
          <a href="https://hhueol4i6vp.typeform.com/to/sgtDW2Xt" target="_blank"
            >Token Info</a
          >
        </li>
        <li>
          <a
            href="https://textile.notion.site/Tableland-Privacy-Policy-6fd160e7f485491d9dc4cbab188043d5"
            target="_blank"
            >Privacy</a
          >
        </li>
        <li>
          <a
            href="https://textile.notion.site/Tableland-Terms-of-Use-cf80f1b550b843ad9d4b8c3140b78e35"
            target="_blank"
            >Terms</a
          >
        </li>
      </ul>
      <div class="hidden py-4">
        <img
          id="js-scroll"
          src="~assets/img/logo-white.svg"
          alt="Tableland"
          class="h-5"
        />
      </div>
    </nav>
  </footer>
</template>

<script>
export default {
  props: ["classs"],
};
</script>
