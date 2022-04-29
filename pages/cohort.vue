<template>
  <div>
    <!-- Header -->
    <HeaderNav></HeaderNav>

    <header class="bg-navbar" data-aos="fade-down" data-aos-anchor=".rig">
      <nav class="container px-6 md:px-9 lg:px-16 flex items-center py-2">
        <div class="py-4">
          <a href="/"><img src="~assets/img/logo-black.svg" alt="Tableland" class="lg:h-5 h-4"></a>
        </div>
        <ul class="flex flex-1 justify-end items-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-12 uppercase ml-3">
          <li><a class="hidden sm:inline-block" href="#rig">About</a></li>
          <li><a class="hidden sm:inline-block" href="#faq">Why?</a></li>
          <li><a href="#whitelist" class="btn bg-black text-white">Apply Now</a></li>
        </ul>
      </nav>
    </header>

    <!-- cohort -->
    <section class="cohort">
      <div class="container px-6 sm:px-6 md:px-24 lg:px-42 flex items-left pt-48 lg:pt-48">
        <div class="lg:w-2/3 md:w-full" data-aos="fade-up" style="margin:auto">
          <h1 class="font-Orbitron w-full h-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10">
            Learn, connect, and build on the frontiers of the Web.
          </h1>
          <p class="text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
            Join our summer cohort for access to exclusive mentorship, hackathons, and small group learning on the cutting edge of the open web.</p>
          <a href="#start" class="btn bg-black text-white">Apply Now</a>
            <br id="js-scroll"/>
          </div>
        </div>
      </section>

      <!-- rig -->
      <section class="rig" id="start">
        <div class="rig-break"></div>
          <div class="container lg:py-16 px-4 lg:px-16">
            <div class="flex">

              <div class="lg:w-2/3 px-2" >
                <h1 data-aos="fade-up" class="text-pink font-Orbitron w-full h-auto text-3xl lg:text-6xl leading-tighter mb-0 lg:mb-10">
                  Tableland enables developers to build dynamic Web3 experiences through relational metadata and SQL
                </h1>
              </div>
              <div data-aos="fade-up" data-aos-anchor=".rig" class="w-1/3" style="margin-top: -700px;overflow: auto;position: absolute;right: 0;">
                <img src="~assets/img/wall.png"/>
              </div>
            </div>
            <div class="lg:flex lg:py-12">
              <div class="lg:w-1/2 w-full lg:mt-48" >
                <img src="~assets/img/wall2.png"/>
              </div>
              <div class="lg:w-1/2 px-12 py-12 lg:py-32 lg:mt-32" >
                <p data-aos="fade-up" class="text-pink text-xl lg:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
                  We’re home to those who are in pursuit of that same vision, and we’re ready to support them with tools, resources, and rewards.
                </p>
              </div>
            </div>

            <div class="lg:flex py-12">
              <div class="lg:w-1/2 px-0 py-12" >
                <h1 data-aos="fade-up" class="text-pink font-Orbitron w-full h-auto text-3xl lg:text-6xl leading-tighter mb-4 lg:mb-10">
                This summer we’re offering a cohort based community experience
                </h1>
                <p data-aos="fade-up" class="text-pink text-xl lg:text-2xl leading-normal md:leading-normal font-light mb-10 lg:mb-18">
                  for a small group of pioneer developers to hone their skills, envision, and build radically new web3 experiences using Tableland.</p>
              </div>
              <div class="lg:w-1/2 lg:mt-48" >
                <img src="~assets/img/craft.png"/>
              </div>
            </div>
          </div>

          <div class="rig-break-bottom"></div>
      </section>


          <section class="cohort-info">
            <!-- Airlights -->
              <div class="container px-6 md:px-9 lg:px-16 pt-24 ">
                <div class="flex py-12 px-12 text-center">
                  <div class="w-full px-12 pt-24 py-0">
                    <h1 class="font-Orbitron w-full h-auto text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10 text-white">
                    Why should i apply?
                    </h1>
                  </div>
                </div>
                <div class="lg:flex py-12 pb-12 text-center text-white">
                  <div class="lg:w-1/3 w-full px-12 py-0">
                    <img class="icon py-12" src="~assets/img/wrench2.png" data-aos="fade-up"/>
                    <p class="font-Orbitron text-3xl" data-aos="fade-up">Connect and Learn at the Frontier </p><br>
                    <p class="text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">You will receive mentoring from our genesis team and mentor pool and direct onboarding onto the Tableland stack.  Connect with other leading developers at the frontier.</p>
                  </div>
                  <div class="lg:w-1/3 w-full px-12 py-0">
                    <img class="icon py-12" src="~assets/img/chip2.png" data-aos="fade-up"/>
                    <p class="font-Orbitron text-3xl" data-aos="fade-up">Access to Tableland TestNet</p><br>
                    <p class="text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">Join owner channels in Tableland Discord and start building your own unique use cases.</p>
                  </div>
                  <div class="lg:w-1/3 w-full px-12 py-0">
                    <img class="icon py-12 " src="~assets/img/match2.png" data-aos="fade-up"/>
                    <p class="font-Orbitron text-3xl" data-aos="fade-up">Weekly Events and Hackathons</p><br>
                    <p class="text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                      Build alongside the best at monthly hackathons and in weekly small group sessions.
                    </p>
                  </div>
                </div>
                <div class="lg:flex lg:px-48 py-0 pb-12 text-center text-white">
                  <div class="lg:w-1/2 w-full px-12 py-0">
                    <img class="icon py-12" src="~assets/img/wrench2.png" data-aos="fade-up"/>
                    <p class="font-Orbitron text-3xl" data-aos="fade-up">Build Fundable Prototypes</p><br>
                    <p class="text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">Create portfolio-worthy prototypes with the help of mentors and peers.</p>
                  </div>
                  <div class="lg:w-1/2 w-full px-12 py-0">
                    <img class="icon py-12" src="~assets/img/chip2.png" data-aos="fade-up"/>
                    <p class="font-Orbitron text-3xl" data-aos="fade-up">Access Exclusive Opportunities</p><br>
                    <p class="text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">Access exclusive funding opportunities including grants and rewards only available to cohort participants.</p>
                  </div>
                </div>
              </div>
            </section>

      <!-- showcase -->
      <section class="md:block showcase py-32 relative">
        <div class="container px-24 md:px-32 lg:px-48">
          <div class="text-center">
            <div class="flex">
              <div class="w-full px-0 py-24" >
                <img src="~assets/img/timeline.png" style="margin:auto"/>
              </div>
            </div>
            <div class="lg:flex py-12 pb-12 text-center text-white">
              <div class="lg:w-1/4 w-full px-12 py-0">
                <p class="text-pink text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                  Three month learning journey runs July through September 2022
                </p>
              </div>
              <div class="lg:w-1/4 w-full px-12 py-0">
                <p class="text-pink text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                  Monthly hackathons with mentors and advisors
                </p>
              </div>
              <div class="lg:w-1/4 w-full px-12 py-0">
                <p class="text-pink text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                  Weekly small group learning sessions to explore the frontiers
                </p>
              </div>
              <div class="lg:w-1/4 w-full px-12 py-0">
                <p class="text-pink text-xl leading-normal md:leading-normal font-light mb-10 lg:mb-18" data-aos="fade-up">
                  Pod based mentorship with the Tableland team and other world class developers
                </p>
              </div>
            </div>
            <p class="font-Orbitron text-pink text-3xl md:text-4xl lg:text-5xl md:leading-normal lg:leading-normal font-light mb-10">We’re building a cohort based guild of pioneering builders.</p>
            <p class="font-Orbitron text-pink text-2xl md:text-2xl lg:text-3xl md:leading-normal lg:leading-normal font-light mb-10">If you’re ready to explore the frontiers together</p>
            <ButtonLink href="https://textile.notion.site/Tableland-Use-cases-466b4ab8bb1248a497dd457f057abf5f">Apply Now</ButtonLink>
          </div>
        </div>
      </section>

      <footer class="text-blue py-10">
        <nav class="container px-6 md:px-9 lg:px-16 py-2">
          <div class="hidden py-4">
            <img src="~assets/img/logo-white.svg" alt="Tableland" class="h-5" id="js-scroll">
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
    },
    mounted() {
      this.lmS = new this.locomotiveScroll({
        el: document.querySelector('#js-scroll'),
        smooth: true,
      });
    }
  };
  </script>
