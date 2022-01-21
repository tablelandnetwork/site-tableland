<template>
  <div class="mobile-content block lg:hidden flex flex-col overflow-hidden w-full">

    <div :class="{'open': menuOpen}" class="mobile-menu bg-gray-100 z-10">
      <button class="w-20 h-20 right-4 top-4 absolute focus:outline-none" @click="toggleMenu(false)">
        <div class="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            class="block absolute h-0.5 w-7 text-black bg-current transform transition duration-500 ease-in-out"
            :class="{
              'rotate-45': menuOpen,
              '-translate-y-1.5': !menuOpen
            }"
          ></span>
          <span
            class="block absolute h-0.5 w-7 text-black bg-current transform transition duration-500 ease-in-out"
            :class="{
              '-rotate-45': menuOpen,
              'translate-y-1.5': !menuOpen
            }"
          ></span>
        </div>
      </button>
      <nav-link
        :navigation-text="mobileMenuProps1.navigationLink"
        class-name="justify-center mt-24"
      />
      <nav-link
        :navigation-text="mobileMenuProps2.navigationLink"
        navigation-link="https://boards.greenhouse.io/textileio"
        class-name="justify-center margin-nav-link"
      />
      <nav-link
        :navigation-text="mobileMenuProps3.navigationLink"
        navigation-link="https://app.gitbook.com/o/dAgpEM9p2w3kBJyy4fDH/s/5KnS0zEEv7UZbi8kCXVA/"
        class-name="justify-center margin-nav-link"
      />

      <div class="flex justify-center margin-nav-link">
        <button-regular :button-text="mobileMenuProps4.navigationCta" />
      </div>

      <div class="flex justify-center margin-nav-link">
        <a href="https://discord.gg/JS2vyQaa" class="discord-cta flex items-center justify-center bg-var-black rounded-lg h-16 w-20">
          <svg width="40" height="31" viewBox="0 0 40 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.8737 2.57414C31.2332 1.36062 28.4842 0.478055 25.6266 0C25.2649 0.661922 24.867 1.50771 24.5777 2.20641C21.5393 1.72835 18.4647 1.72835 15.4263 2.20641C15.1008 1.43416 14.7391 0.698695 14.3412 0C11.4836 0.478055 8.69846 1.36062 6.09413 2.61091C0.885466 10.5172 -0.525216 18.2028 0.162039 25.8149C3.2366 28.1317 6.6367 29.8968 10.29 31C11.1219 29.86 11.8454 28.6833 12.4603 27.433C11.2666 26.9917 10.1453 26.4401 9.06018 25.7782C9.34955 25.5575 9.60275 25.3369 9.89212 25.1163C16.2944 28.2052 23.7457 28.2052 30.148 25.1163C30.4374 25.3369 30.6906 25.5575 30.98 25.7782C29.8948 26.4401 28.7374 26.9917 27.5437 27.433C28.1586 28.6833 28.882 29.86 29.714 31C33.3673 29.86 36.8035 28.1317 39.8419 25.8149C40.6377 16.9893 38.3951 9.34045 33.8737 2.57414ZM13.3284 21.108C11.339 21.108 9.74743 19.2693 9.74743 17.0261C9.74743 14.7829 11.339 12.9075 13.3284 12.9075C15.354 12.9075 16.9455 14.7461 16.9455 17.0261C16.9093 19.2693 15.354 21.108 13.3284 21.108ZM26.6394 21.108C24.65 21.108 23.0585 19.2693 23.0585 17.0261C23.0585 14.7829 24.65 12.9075 26.6394 12.9075C28.665 12.9075 30.2566 14.7461 30.2204 17.0261C30.1842 19.306 28.6288 21.108 26.6394 21.108Z" fill="#F1F1F1" />
          </svg>
        </a>
      </div>
    </div>

    <div class="background-layer parallax">
      <div class="parallax__group">
        <div class="parallax__layer--base z-50">
          <mobile-navbar
            :open="menuOpen"
            @menu-open="toggleMenu"
          />

          <div class="mt-72 md:mt-96 mx-4 md:mx-16 z-10">
            <div class="md:pt-60">
              <property1regular6
                class="py-8"
                :video-introduction="videoIntroduction"
                :property1icons-play-props="{className: 'mobile'}"
              />
              <div class="orbitron-black-black-45px">{{ buildDappsAndNft }}</div>
              <div class="tableland-is-a-netwo poppins-normal-black-20px">{{ aNewGenerationOf }}</div>
              <button-black
                :button-text="stateregular2Props.primaryButton"
                :has-arrow="true"
                :mobile="true"
                @click="alert('TODO')"
              />
            </div>
          </div>

          <div class="welcome-to-tableland-1 my-20 scroll-container">
            <div class="scroll-text orbitron-black-white-55px">{{ welcomeToTableland }}</div>
          </div>

          <div class="mx-4 md:mx-16">
            <h3 class="orbitron-black-black-28px">
              {{ why }}
            </h3>
            <p class="pt-8 leading-relaxed poppins-normal-black-16px">{{ buildingAppsInThe }}</p>
          </div>

          <div class="mt-60 mx-4 md:mx-16">
            <h3 class="orbitron-black-black-28px">
              {{ thePossibilitiesAreEndless }}
            </h3>

            <div class="cards-straight-container">
              <div class="scroll-container-right">
                <div class="scroll-text flex flex-row">

                  <!-- need enough sets of duplicate cards for the side scroll to work -->
                  <desktop-cards-straight
                    :title-text="mobileCardsStraightProps.extendExistingNfts"
                    :description-text="mobileCardsStraightProps.copy"
                    code-link="#"
                  />
                  <desktop-cards-straight
                    :title-text="mobileCardsStraight2Props.frame29Props.extendExistingNfts"
                    :description-text="mobileCardsStraight2Props.frame29Props.copy"
                    code-link="#"
                  />
                  <desktop-cards-straight
                    :title-text="mobileCardsStraight22Props.frame29Props.extendExistingNfts"
                    :description-text="mobileCardsStraight22Props.frame29Props.copy"
                    code-link="#"
                  />
                  <desktop-cards-straight
                    :title-text="mobileCardsStraight23Props.frame29Props.extendExistingNfts"
                    :description-text="mobileCardsStraight23Props.frame29Props.copy"
                    code-link="#"
                  />
                  <desktop-cards-straight
                    :title-text="mobileCardsStraight24Props.frame29Props.extendExistingNfts"
                    :description-text="mobileCardsStraight24Props.frame29Props.copy"
                    code-link="#"
                  />

                  <!-- second set -->
                  <desktop-cards-straight
                    :title-text="mobileCardsStraightProps.extendExistingNfts"
                    :description-text="mobileCardsStraightProps.copy"
                    code-link="#"
                  />
                  <desktop-cards-straight
                    :title-text="mobileCardsStraight2Props.frame29Props.extendExistingNfts"
                    :description-text="mobileCardsStraight2Props.frame29Props.copy"
                    code-link="#"
                  />
                  <desktop-cards-straight
                    :title-text="mobileCardsStraight22Props.frame29Props.extendExistingNfts"
                    :description-text="mobileCardsStraight22Props.frame29Props.copy"
                    code-link="#"
                  />
                  <desktop-cards-straight
                    :title-text="mobileCardsStraight23Props.frame29Props.extendExistingNfts"
                    :description-text="mobileCardsStraight23Props.frame29Props.copy"
                    code-link="#"
                  />
                  <desktop-cards-straight
                    :title-text="mobileCardsStraight24Props.frame29Props.extendExistingNfts"
                    :description-text="mobileCardsStraight24Props.frame29Props.copy"
                    code-link="#"
                  />

                  <!-- third set -->
                  <desktop-cards-straight
                    :title-text="mobileCardsStraightProps.extendExistingNfts"
                    :description-text="mobileCardsStraightProps.copy"
                    code-link="#"
                  />
                  <desktop-cards-straight
                    :title-text="mobileCardsStraight2Props.frame29Props.extendExistingNfts"
                    :description-text="mobileCardsStraight2Props.frame29Props.copy"
                    code-link="#"
                  />
                  <desktop-cards-straight
                    :title-text="mobileCardsStraight22Props.frame29Props.extendExistingNfts"
                    :description-text="mobileCardsStraight22Props.frame29Props.copy"
                    code-link="#"
                  />
                  <desktop-cards-straight
                    :title-text="mobileCardsStraight23Props.frame29Props.extendExistingNfts"
                    :description-text="mobileCardsStraight23Props.frame29Props.copy"
                    code-link="#"
                  />
                  <desktop-cards-straight
                    :title-text="mobileCardsStraight24Props.frame29Props.extendExistingNfts"
                    :description-text="mobileCardsStraight24Props.frame29Props.copy"
                    code-link="#"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="mt-40 mx-4 md:mx-16">
            <div class="how-it-works-how-it-works scroll-container">
              <div class="scroll-text orbitron-black-white-55px">
                {{ howItWorksHowItWorks }}
              </div>
            </div>
          </div>

          <div class="mt-20 mx-4 md:mx-16">
            <h3 class="orbitron-black-black-28px">
              {{ inTablelandWeSpeakSql }}
            </h3>

            <div class="mt-16 flex justify-between gap-4">
              <desktop-cards-story-image
                :card-title="mobileCardsStoryImage1Props.cardTitle"
                :card-content="mobileCardsStoryImage1Props.cardContent"
                pad-top="md"
              />
              <desktop-cards-story-image
                :card-title="mobileCardsStoryImage2Props.cardTitle"
                :card-content="mobileCardsStoryImage2Props.cardContent"
                pad-top="lg"
              />
              <desktop-cards-story-image
                :card-title="mobileCardsStoryImage3Props.cardTitle"
                :card-content="mobileCardsStoryImage3Props.cardContent"
                pad-top=""
              />
              <desktop-cards-story-image
                :card-title="mobileCardsStoryImage4Props.cardTitle"
                :card-content="mobileCardsStoryImage4Props.cardContent"
                pad-top="md"
              />
            </div>
          </div>

          <div class="mt-96 pt-24 mx-4 md:mx-16">
            <h3 class="pt-40 orbitron-black-black-28px">
              {{ userOwnedTokenNet }}
            </h3>

            <p class="pt-8 poppins-semi-bold-black-16px">
              {{ tablelandExistsTo }}
            </p>

            <p class="pt-8 leading-relaxed poppins-normal-black-14px">{{ ethereumAndOtherN }}</p>

            <div class="btn-lite-paper mt-8">
              <button-regular
                :button-text="stateregular2Props.secondoryButton"
                :has-arrow="true"
              />
            </div>
          </div>

          <div class="try-it-try-it-try-it-1 mt-60 scroll-container whitespace-nowrap">
            <div class="scroll-text orbitron-black-white-110px">{{ tryItTryItTryIt }}</div>
          </div>

          <div class="mt-10 mx-4 md:mx-16 mx-4 md:mx-16">
            <h3 class="orbitron-black-black-28px">
              {{ getAFeelForHowE }}
            </h3>

            <div class="mt-20 w-full">
              <desktop-tab-group
                :tabs-data="[
                  {
                    id: 0,
                    tabText: property1activeProps.tabNavigation,
                    sqlText: [
                      {
                        className: 'firacode-normal-hot-pink-16px',
                        text: spanText
                      }, {
                        className: 'firacode-normal-seashell-16px',
                        text: spanText2
                      }, {
                        className: 'firacode-normal-emerald-16px',
                        text: spanText3
                      }, {
                        className: 'firacode-normal-seashell-16px',
                        text: spanText4
                      }, {
                        className: 'firacode-normal-sea-serpent-16px',
                        text: spanText5
                      }, {
                        className: 'firacode-normal-seashell-16px',
                        text: spanText6
                      }
                    ],
                    columns: [
                      mobileTableSingleRowProps.id,
                      mobileTableSingleRowProps.product,
                      mobileTableSingleRowProps.value,
                      mobileTableSingleRowProps.price
                    ],
                    rows: [
                      ['1', '7725742', '1983746', '17625367'],
                      ['2', '7725742', '1983746', '17625367'],
                      ['3', '7725742', '1983746', '17625367'],
                      ['4', '7725742', '1983746', '17625367'],
                      ['5', '7725742', '1983746', '17625367'],
                      ['6', '7725742', '1983746', '17625367'],
                      ['7', '7725742', '1983746', '17625367'],
                      ['8', '7725742', '1983746', '17625367'],
                      ['9', '7725742', '1983746', '17625367'],
                      ['10', '7725742', '1983746', '17625367']
                    ]
                  }, {
                    id: 1,
                    tabText: property1regular2Props.tabNavigation,
                    sqlText: []
                  }, {
                    id: 2,
                    tabText: property1regular22Props.tabNavigation,
                    sqlText: []
                  }, {
                    id: 3,
                    tabText: property1regular23Props.tabNavigation,
                    sqlText: []
                  }
                ]"
              />
            </div>
          </div>


          <div class="mt-96 pt-96 mx-4 md:mx-16">
            <div class="frame-72-4 flex flex-col items-start rounded-3xl p-8">
              <div class="flex flex-col items-start self-end w-full mb-10">
                <h3 class="orbitron-black-seashell-28px">
                  {{ meetTheWorldwideCommunity }}
                </h3>
                <div class="whether-youre-a-dev-1 poppins-normal-white-20px">{{ whetherYouReADev }}</div>
              </div>
              <button-black button-link="https://discord.gg/JS2vyQaa" :button-text="stateregular3Props.secondoryButton" :has-arrow="true" />
            </div>
          </div>

          <div class="scroll-container be-ready-for-the-future-2 whitespace-nowrap mt-40">
            <h1 class="scroll-text orbitron-black-white-110px">{{ beReadyForTheFuture }}</h1>
          </div>

          <div class="mt-60 mx-4 md:mx-16">
            <roadmap-mobile
              :phase1="roadmapPhase1"
              :phase2="roadmapPhase2"
              :phase3="roadmapPhase3"
              :phase4="roadmapPhase4"
              :phase5="roadmapPhase5"
              :phase6="roadmapPhase6"
            />
          </div>


        </div>

        <div class="parallax__layer parallax__layer--back-2">
          <img class="delorean-hug-mobile" src="img/delorean.png">

          <div class="group-93-1 mobile">
            <div class="overlap-group-4">
              <img class="untitled-7-1-1" src="~/assets/img/untitled-7-1@1x.png">
            </div>
          </div>

          <div class="mesas-3-mobile">
            <mesas3-solid />
          </div>

          <div class="sun-spot-wide-mobile">
            <yellow-blur-wide />
          </div>

          <div class="bike-gang-mobile">
            <img src="~/static/img/bike-gang@2x.png">
          </div>

        </div>

        <div class="parallax__layer parallax__layer--back-3">
          <div class="mesas-1-mobile">
            <mesas-1 />
          </div>

          <div class="mesas-5-mobile">
            <mesas-5 />
          </div>
        </div>


        <div class="parallax__layer parallax__layer--back-4">

          <page-background />

          <div class="mesas-2-mobile">
            <mesas-2 />
          </div>

          <div class="sun-spot-1-mobile">
            <yellow-blur-1 />
          </div>

          <div class="sun-spot-1-mobile-2">
            <yellow-blur-1 />
          </div>

          <div class="mesas-4-mobile-2">
            <mesas-4 />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  props: [
    'videoIntroduction',
    'buildDappsAndNft',
    'aNewGenerationOf',
    'why',
    'buildingAppsInThe',
    'time',
    'text1',
    'domain',
    'thePossibilitiesAreEndless',
    'untitled11',
    'welcomeToTableland',
    'howItWorksHowItWorks',
    'inTablelandWeSpeakSql',
    'userOwnedTokenNet',
    'tablelandExistsTo',
    'ethereumAndOtherN',
    'untitled71',
    'untitled51',
    'tryItTryItTryIt',
    'getAFeelForHowE',
    'spanText',
    'spanText2',
    'spanText3',
    'spanText4',
    'spanText5',
    'spanText6',
    'meetTheWorldwideCommunity',
    'whetherYouReADev',
    'beReadyForTheFuture',
    'beReadyForTheFuture2',
    'screenshot20211206At12041',
    'anySuggestions',
    'showcaseShowcase',
    'whatWillYouBuild',
    'untitled81',
    'untitled41',
    'untitled33',
    'untitled34',
    'chainExpansion',
    'number',
    'mobileCardsStraightProps',
    'mobileCardsStraight2Props',
    'mobileCardsStraight22Props',
    'mobileCardsStraight23Props',
    'mobileCardsStraight24Props',
    'stateregular2Props',
    'mobileCardsStoryImage1Props',
    'mobileCardsStoryImage2Props',
    'mobileCardsStoryImage3Props',
    'mobileCardsStoryImage4Props',
    'mobileTableSingleRowProps',
    'mobileTableSingleRow2Props',
    'mobileTableSingleRow22Props',
    'mobileTableSingleRow23Props',
    'mobileTableSingleRow24Props',
    'mobileTableSingleRow25Props',
    'mobileTableSingleRow26Props',
    'mobileTableSingleRow27Props',
    'mobileTableSingleRow28Props',
    'mobileTableSingleRow29Props',
    'mobileTableSingleRow210Props',
    'property1activeProps',
    'property1regular2Props',
    'property1regular22Props',
    'property1regular23Props',
    'property2regular3Props',
    'property2regular32Props',
    'property2regular33Props',
    'property1regular3Props',
    'stateregular3Props',
    'frame66Props',
    'desktopListGroupProps',
    'frame662Props',
    'desktopListGroup2Props',
    'frame663Props',
    'desktopListGroup2Props2',
    'stateregular4Props',
    'property2regularProps',
    'property2regular2Props',
    'group6618Props',
    'group66182Props',
    'roadmapPhase1',
    'roadmapPhase2',
    'roadmapPhase3',
    'roadmapPhase4',
    'roadmapPhase5',
    'roadmapPhase6',
    'desktopListGroup22Props',
    'mobileCardsWhiteProps',
    'stateregularProps',
    'mobileMenuProps1',
    'mobileMenuProps2',
    'mobileMenuProps3',
    'mobileMenuProps4'
  ],
  data: function () {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu: function (open) {
      this.menuOpen = open;
    },
    alert: function (message) {
      window.alert(message);
    }
  }
};

</script>

<style>
.mobile-content .page-bg {
  height: 9000px;
}

.mobile-menu {
  transition: all 0.4s ease;
  position: fixed;
  top: 0;
  bottom: 0;
  left: -100vw;
  width: 100%;
}

.mobile-menu.open {
  left: 0;
}

.mobile-menu .discord-cta:hover {
  width: 5.2rem;
  height: 4.2rem;
  background-color: var(--black-2);
}

.margin-nav-link {
  margin-top: 5vh
}


.delorean-hug-mobile {
  position: absolute;
  top: 8rem;
  left: 0%;
  width: 90%;
}

.mesas-2-mobile {
  position: absolute;
  top: 120px;
  left: 0;
  mix-blend-mode: darken;
  width: 128%;
  z-index: 2;
}

.mesas-1-mobile {
  position: absolute;
  top: 900px;
  left: 0;
  width: 100%;
}
@media (min-width: 768px) {
  .mesas-1-mobile {
    top: 1100px;
  }
}
@media (min-width: 640px) {
  .mesas-1-mobile {
    top: 1000px;
  }
}
.mesas-5-mobile {
  position: absolute;
  top: 4330px;
  left: 0;
  width: 100%;
}
.bike-gang-mobile {
  position: absolute;
  top: 5050px;
  left: 10%;
  width: 90%;
}

.mesas-3-mobile {
  position: absolute;
  top: 3800px;
  left: 0;
  width: 100%;
}
.sun-spot-wide-mobile {
  position: absolute;
  top: 3470px;
  left: -180%;
  width: 300%;
}
@media (min-width: 768px) {
  .mesas-3-mobile {
    top: 3950px;
  }
  .sun-spot-wide-mobile {
    top: 3800px;
  }
}
@media (min-width: 640px) {
  .sun-spot-wide-mobile {
    top: 3500px;
    left: -125%;
  }
}
.mesas-4-mobile-2 {
  position: absolute;
  top: 2300px;
  left: 0;
  width: 100%;
  z-index: 2;
}
@media (min-width: 768px) {
  .mesas-4-mobile-2 {
    top: 2350px;
  }
}

.sun-spot-1-mobile {
  position: absolute;
  top: -100vw;
  left: -150%;
  width: 300%;
  z-index: 1;
}

.sun-spot-1-mobile-2 {
  position: absolute;
  top: 1100px;
  left: -120%;
  width: 300%;
  z-index: 1;
}

.group-93-1.mobile {
  position: absolute;
  top: 2800px;
  left: 10%;
  width: 600px;
}
@media (min-width: 640px) {
  .group-93-1.mobile {
    top: 2700px;
    left: 0;
  }
}
@media (min-width: 768px) {
  .group-93-1.mobile {
    top: 3000px;
  }
}

.btn-lite-paper {
  width: 23rem;
}

</style>
