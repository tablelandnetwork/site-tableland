<template>
  <div>
    <!-- Header -->
    <HeaderNav
      :titles="nav.map(i => i.title)"
      :hrefs="nav.map(i => i.href)"
      :targets="nav.map(i => i.target)"
    />
    <div class="ship" data-aos="fade-down" data-aos-anchor=".story" data-aos-offset="0"></div>
    <HeaderScrollNav
      anchor=".choose"
      :titles="nav.map(i => i.title)"
      :hrefs="nav.map(i => i.href)"
      :targets="nav.map(i => i.target)"
    />

    <!-- cohort -->
    <section class="cohort">
      <div class="container px-6 sm:px-6 md:px-24 lg:px-42 flex items-left pt-48 lg:pt-48">
        <div class="lg:w-2/3 md:w-full" data-aos="fade-up" style="margin:auto">
          <h1 class="font-Orbitron w-full h-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10">
            Learn, connect, and build on the frontiers of the Web.
          </h1>
          <p class="text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
            Join our summer pilot program for access to exclusive mentorship, prizes, and small group building on the cutting edge of the open web.</p>
          <a href="https://hhueol4i6vp.typeform.com/to/b1VDj6sU" class="btn bg-black text-white">Apply Now</a>
          <br id="js-scroll" />
        </div>
      </div>
    </section>

    <!-- rig -->
    <section id="about" class="rig">
      <div class="rig-break"></div>
      <div class="container lg:py-16 px-4 lg:px-16">
        <div class="flex">

          <div class="lg:w-2/3 px-2">
            <h1 data-aos="fade-up" class="text-pink font-Orbitron w-full h-auto text-2xl lg:text-4xl leading-tighter mb-0 lg:mb-10">
              Tableland is a composable data network that brings SQL to smart contracts on Ethereum and other EVM-compatible chains. Read and write structured data to the blockchain to supercharge NFTs, games, metaverse experiences, and all of web3.
            </h1>
          </div>
          <div data-aos="fade-up" data-aos-anchor=".rig" class="w-1/3" style="margin-top: -700px;overflow: auto;position: absolute;right: 0;">
            <img src="~assets/img/wall.png" />
          </div>
        </div>
        <div class="lg:flex lg:py-12">
          <div class="lg:w-1/2 w-full lg:mt-48">
            <img src="~assets/img/wall2.png" />
          </div>
          <div class="lg:w-1/2 px-12 py-12 lg:py-32 lg:mt-32">
            <p data-aos="fade-up" class="text-pink text-xl lg:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
              We’re home to those who are in pursuit of that same vision, and we’re ready to support them with tools, resources, and rewards.
            </p>
          </div>
        </div>

        <div class="lg:flex py-12">
          <div class="lg:w-1/2 px-0 py-12">
            <h1 data-aos="fade-up" class="text-pink font-Orbitron w-full h-auto text-3xl lg:text-6xl leading-tighter mb-4 lg:mb-10">
              Tableland is seeking pioneers on a mission to push the boundaries of web3.
            </h1>
            <p data-aos="fade-up" class="text-pink text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
              The Pilot Program is here to support you with funding, technical mentors, public showcases, and more. Starting in July, the 7-week program is low-lift and high reward for any builder with a vision and dedication.</p>
          </div>
          <div class="lg:w-1/2 lg:mt-48">
            <img src="~assets/img/craft.png" />
          </div>
        </div>
      </div>

      <div class="rig-break-bottom"></div>
    </section>


    <section id="why" class="cohort-info">
      <!-- Airlights -->
      <div class="container px-6 md:px-9 lg:px-16 pt-24 ">
        <div class="flex py-12 px-12 text-center">
          <div class="w-full px-12 lg:pt-24 py-0">
            <h1 class="font-Orbitron w-full h-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10 text-white">
              Why should i apply?
            </h1>
          </div>
        </div>
        <div class="lg:flex py-12 pb-12 text-center text-white">
          <div class="lg:w-1/3 w-full px-12 py-0">
            <img class="icon py-12" src="~assets/img/wrench2.png" data-aos="fade-up" />
            <p class="font-Orbitron text-3xl" data-aos="fade-up">Connect and Learn at the Frontier </p><br>
            <p class="text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">You will receive mentoring from our genesis team and direct onboarding onto the Tableland stack.  Connect with other leading developers at the frontier.</p>
          </div>
          <div class="lg:w-1/3 w-full px-12 py-0">
            <img class="icon py-12" src="~assets/img/chip2.png" data-aos="fade-up" />
            <p class="font-Orbitron text-3xl" data-aos="fade-up">Access to Tableland Support</p><br>
            <p class="text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">Access both funding and dedicated engineering support to help your project become real.</p>
          </div>
          <div class="lg:w-1/3 w-full px-12 py-0">
            <img class="icon py-12 " src="~assets/img/match2.png" data-aos="fade-up" />
            <p class="font-Orbitron text-3xl" data-aos="fade-up">Rigs NFT</p><br>
            <p class="text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
              Every team will be granted a free Tableland Rig per member (up to 3) to continue building and collaborating on the network.
            </p>
          </div>
        </div>
        <div class="lg:flex lg:px-48 py-0 pb-12 text-center text-white">
          <div class="lg:w-1/2 w-full px-12 py-0">
            <img class="icon py-12" src="~assets/img/wrench2.png" data-aos="fade-up" />
            <p class="font-Orbitron text-3xl" data-aos="fade-up">Build Fundable Prototypes</p><br>
            <p class="text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">Create portfolio-worthy prototypes with the help of mentors and peers.</p>
          </div>
          <div class="lg:w-1/2 w-full px-12 py-0">
            <img class="icon py-12" src="~assets/img/chip2.png" data-aos="fade-up" />
            <p class="font-Orbitron text-3xl" data-aos="fade-up">Marketing and PR</p><br>
            <p class="text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">Including showcasing work outcomes to the Tableland community, inclusion in our private investor newsletter, and our social outlets.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- showcase -->
    <section class="md:block showcase py-32 relative">
      <div class="container px-24 md:px-32 lg:px-48">
        <div class="text-center">
          <p class="font-Orbitron text-pink text-3xl md:text-4xl lg:text-5xl md:leading-normal lg:leading-normal font-light mb-10">Launching on July 11th.</p>
          <p class="font-Orbitron text-pink text-2xl md:text-2xl lg:text-3xl md:leading-normal lg:leading-normal font-light mb-10">If you’re ready to explore the frontiers together</p>
          <ButtonLink href="https://hhueol4i6vp.typeform.com/to/b1VDj6sU">Apply Now</ButtonLink>
        </div>
      </div>
    </section>

    <footer class="text-blue py-10">
      <nav class="container px-6 md:px-9 lg:px-16 py-2">
        <div class="hidden py-4">
          <img id="js-scroll" src="~assets/img/logo-white.svg" alt="Tableland" class="h-5">
        </div>
        <ul class="flex justify-center items-center gap-x-3 sm:gap-x-6 md:gap-x-12 xl:gap-x-24 uppercase text-xs">
          <li class="hidden md:inline-block"><a href="https://twitter.com/tableland__">Twitter</a></li>
          <li class="hidden md:inline-block"><a href="https://boards.greenhouse.io/textileio">Jobs</a></li>
          <li><a href="https://tableland.xyz/rigs">Rigs</a></li>
          <li><a href="https://docs.tableland.xyz/">Docs</a></li>
          <li><a href="https://textile.notion.site/Tableland-Privacy-Policy-6fd160e7f485491d9dc4cbab188043d5">Privacy</a></li>
          <li><a href="https://textile.notion.site/Tableland-Terms-of-Use-cf80f1b550b843ad9d4b8c3140b78e35">Terms</a></li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      nav: [
        {
          title: 'About',
          href: '#about'
        },
        {
          title: 'Why?',
          href: '#why'
        },
        {
          title: 'Apply Now',
          href: 'https://hhueol4i6vp.typeform.com/to/b1VDj6sU',
          target: '_blank'
        }
      ]
    };
  },

  head: function () {
    return {
      title: 'Tableland Pilot Program',
      meta: [
        { hid: 'og-url', property: 'og:url', content: `${this.$route.path}` },
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'Tableland Pilot Program' },
        { hid: 'og-sitename', property: 'og:site_name', content: 'tableland.xyz/pilot-program' },
        { hid: 'og-desc', property: 'og:description', content: 'Learn, connect, and build on the frontiers of the Web.' },
        {
          hid: 'og-image',
          property: 'og:image',
          content: 'https://i.imgur.com/o1i83B0.jpg'
        }
      ]
    };
  },

  computed: {
    ethereum: function () {
      return window.ethereum;
    }
  },

  mounted: function () {
    // eslint-disable-next-line new-cap
    this.lmS = new this.locomotiveScroll({
      el: document.querySelector('#js-scroll'),
      smooth: true
    });
  }

};

</script>
