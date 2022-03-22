<script>
  import Parallax from 'vue-parallaxy';
  import AOS from 'aos'
  import 'aos/dist/aos.css'

  export default {
    components: {
      Parallax
    }
  };

</script>
<template >
  <div>
    <!-- Header -->
    <header class="bg-navbar" data-aos="fade-up" data-aos-anchor=".rig">
      <nav class="container px-6 md:px-9 lg:px-16 flex items-center py-2">
        <div class="py-4">
          <img src="~assets/img/logo-black.svg" alt="Tableland" class="h-5">
        </div>
        <ul class="flex flex-1 justify-end items-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-24 uppercase ml-3">
          <li><a href="https://mirror.xyz/tableland.eth">Blog</a></li>
          <li><a href="https://discord.gg/hpd5WWn4Ys" target="_blank">Discord</a></li>
          <li><a href="https://docs.tableland.xyz">Docs</a></li>
        </ul>
      </nav>
    </header>

    <!-- minting -->
    <section class="minting scroll-smooth">
      <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-18 lg:pt-36">
        <div class="lg:w-2/3"  data-aos="fade-up">
          <h1 class="text-white font-Orbitron w-full h-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10">
            Tableland Awaits
          </h1>
          <p class="text-white text-xl md:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
            Out beyond the megalopolis, where the broad boulevards of The Grid dissolve into dust and then yawn into great open source plains, you’ll find Tableland. The undeveloped frontier.</p>
            <p class="text-white text-xl md:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
              Terabyte upon terabyte of space waiting to be written into history. It’s raw, uncoded, and simmering with endless opportunity – and incalculable peril. So climb into your Rig and hold onto your brain chips. If you play this one right, the possibilities are endless.
            </p>
            <div class="hero-btn hidden md:inline-block text-center md:text-left mb-18 lg:mb-48">
              <ButtonLink href="https://docs.tableland.xyz">Get started</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <!-- rig -->
      <section class="rig">
        <div class="rig-break"></div>
        <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-18 lg:pt-36">
          <div class="lg:w-2/3" data-aos="fade-up">
            <h1 class="text-pink font-Orbitron w-full h-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10">
              Your Rig
            </h1>
            <p class="text-pink text-xl md:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
              Your Rig is your custom machine. There are none that are like it, and this one is yours. It’s a purpose-built code-based machine and your key to Tableland. Each Rig is minted from a set of modular code blocks with unique attributes to achieve specific tasks. And what you’ll do with it is totally up to you.
            </p>

            </div>
          </div>
          <div class="rig-break-bottom"></div>
        </section>

        <!-- guild -->
        <section class="guild js-show-on-scroll">
          <div class="container px-6 md:px-9 lg:px-16 flex items-center pt-18 lg:pt-36">
            <div class="lg:w-2/3" data-aos="fade-up">
              <h1 class="text-pink font-Orbitron w-full h-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10">
                The Guilds
              </h1>
              <p class="text-pink text-xl md:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
                The Guilds were formed to give us each our purpose. Each one with its unique knowledge, tools, and practices. Your Guild is your new family and its customs, rituals, and alliances will guide and protect you.
              </p>

              </div>
            </div>
          </section>

      <!-- garage -->
      <section class="garage">
        <div class="container px-12 md:px-12 lg:px-16 flex items-center pt-18 lg:pt-36">
          <div class="lg:w-full text-center" data-aos="fade-up">
            <h3 class="text-pink font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter mb-10 md:mb-4 lg:mb-10">
            Congratulations, it’s a Rig!
            </h3>
            <p class="text-pink text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-light mb-2">
              Each Rig is minted using randomization subroutines to ensure complete uniqueness. Rigs are born from a parts and Mods ledger called the Rarity Table. Every so often the components of a Rig come together in a infinitesimally elusive set called a Match Rig. If you got one, consider yourself lucky. They’re exceedingly rare and staggerlying valuable. If you have a Match, be prepared to guard it with your life.
            </p>
          </div>
        </div>
      </section>

      <!-- community -->
      <section class="community relative">
        <div class="container px-6 md:px-9 lg:px-16">

          <div class="community-bottom md:flex justify-center lg:justify-end text-white" data-aos="fade-up">
            <div>
              <h3 class="text-purple font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter md:leading-tighter lg:leading-tighter mb-4 lg:mb-10">
              We’re going to need to see some identification
              </h3>
              <p class="text-purple text-xl md:text-3xl leading-normal md:leading-normal font-light">
                Your Rig comes with an NFT certificate of its authenticity. It’s like the registration card for your machine. Proof that it’s yours and an invaluable document should you get stopped by QA. And it will really come in handy if a couple of Sock Puppets try to jack you out on Satoshi Mesa. You can also use your NFT to gain entry into Testnet and Tableland’s Discord. Don’t lose it.
              </p>
            </div>
          </div>
        </div>
        <div class="community-break"></div>
      </section>

      <!-- showcase -->
      <section class="md:block showcase py-32 relative">
        <div class="container px-6 md:px-9 lg:px-16">
          <div class="text-center text-white">
            <p class="text-3xl md:text-4xl lg:text-5xl md:leading-normal lg:leading-normal font-light mb-10">What will you build?</p>
            <ButtonLink href="https://textile.notion.site/Tableland-Use-cases-466b4ab8bb1248a497dd457f057abf5f">See use cases</ButtonLink>
          </div>
        </div>
      </section>

      <footer class="text-white py-10">
        <nav class="container px-6 md:px-9 lg:px-16 py-2">
          <div class="hidden py-4">
            <img src="~assets/img/logo-white.svg" alt="Tableland" class="h-5">
          </div>
          <ul class="flex justify-center items-center gap-x-3 sm:gap-x-6 md:gap-x-12 xl:gap-x-24 uppercase text-xs">
            <li class="hidden md:inline-block"><a href="https://twitter.com/tableland__">Twitter</a></li>
            <li><a href="https://textile.notion.site/Tableland-Grants-Funding-ebc1f398d53a481d94f090ab12d93be0">Grants</a></li>
            <li class="hidden md:inline-block"><a href="https://boards.greenhouse.io/textileio">Jobs</a></li>
            <li><a href="https://hhueol4i6vp.typeform.com/to/sgtDW2Xt">Token Info</a></li>
            <li><a href="https://docs.tableland.xyz/general/community/partners">Partners</a></li>
            <li><a href="https://textile.notion.site/Tableland-Privacy-Policy-6fd160e7f485491d9dc4cbab188043d5">Privacy</a></li>
            <li><a href="https://textile.notion.site/Tableland-Terms-of-Use-cf80f1b550b843ad9d4b8c3140b78e35">Terms</a></li>
          </ul>
        </nav>
      </footer>
    </div>
  </template>

  <script>

  export default {
    computed: {
      ethereum: function () {
        return window.ethereum;
      }
    }
  };
  </script>
