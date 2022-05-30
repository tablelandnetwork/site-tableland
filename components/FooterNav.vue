<template>
  <footer :class="classs" class="text-blue py-10">
    <nav class="container px-6 md:px-9 lg:px-16 py-2">
      <div class="hidden py-4">
        <img id="js-scroll" src="~assets/img/logo-white.svg" alt="Tableland" class="h-5">
      </div>
      <ul class="flex justify-center items-center gap-x-6 md:gap-x-12 xl:gap-x-24 uppercase text-xs">
        <li>
          <a href="https://twitter.com/tableland__" target="_blank">Twitter</a>
        </li>
        <li>
          <a href="https://mirror.xyz/tableland.eth" target="_blank">Blog</a>
        </li>
        <li>
          <a href="https://docs.tableland.xyz" target="_blank">Docs</a>
        </li>
        <li class="hidden md:inline-block">
          <a href="https://textile.notion.site/Tableland-Grants-Funding-ebc1f398d53a481d94f090ab12d93be0" target="_blank">Grants</a>
        </li>
        <li class="hidden md:inline-block">
          <a href="https://hhueol4i6vp.typeform.com/to/sgtDW2Xt" target="_blank">Token Info</a></li>
        <li>
          <a href="https://textile.notion.site/Tableland-Privacy-Policy-6fd160e7f485491d9dc4cbab188043d5" target="_blank">Privacy</a>
        </li>
        <li>
          <a href="https://textile.notion.site/Tableland-Terms-of-Use-cf80f1b550b843ad9d4b8c3140b78e35" target="_blank">Terms</a>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  props: ['classs']
};
</script>
