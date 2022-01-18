<template>
  <div class="desktop-content">

    <DiscordCtaDesktop />

    <div class="background-layer parallax">

      <desktop-navbar
        :property2regular-props="desktopNavbarProps.property2regularProps"
        :property2regular2-props="desktopNavbarProps.property2regular2Props"
        :property2regular3-props="desktopNavbarProps.property2regular3Props"
        :property1regular3-props="desktopNavbarProps.property1regular3Props"
      />

      <div class="parallax__group">
        <div class="parallax__layer--base z-50">

          <div class="section section-1">
            <div class="content flex flex-col flex-start relative">
              <div class="frame-1 z-10">
                <div class="">
                  <property1regular6
                    :video-introduction="property1regularProps.videoIntroduction"
                    :property1icons-play-props="property1regularProps.property1iconsPlayProps"
                  />
                  <div class="build-d-apps-and-nft-1 orbitron-black-black-70px">{{ buildDappsAndNft }}</div>
                  <div class="tableland-is-a-netwo poppins-normal-black-20px">{{ tablelandIsANetwo }}</div>
                  <button-black :button-text="stateregular2Props.primaryButton" :has-arrow="true" @click="goto('#explore');" />
                </div>
                <div class="text-center mt-20 w-full z-10">
                  <arrow-down class="inline" />
                </div>
              </div>
              <div class="sun-spot-2 z-0">
                <yellow-blur-wide />
              </div>

            </div>

            <div class="content">
              <div class="welcome-to-tableland-1 my-20 scroll-container">
                <div class="scroll-text orbitron-black-white-110px">{{ welcomeToTableland }}</div>
              </div>

              <div class="w-1/2 orbitron-black-black-45px">{{ useFamiliarSqlTab }}</div>

              <div class="pt-60 orbitron-black-black-45px">{{ thePossibilitiesAreEndless }}</div>
              <div class="frame-55">
                <div class="scroll-container-right">
                  <div class="scroll-text flex flex-row">

                    <!-- need enough sets of duplicate cards for the side scroll to work -->
                    <desktop-cards-straight
                      :title-text="desktopCardsStraightProps.frame29Props.extendExistingNfts"
                      :description-text="desktopCardsStraightProps.frame29Props.attachInAppOrGam"
                      code-link="#"
                    />
                    <desktop-cards-straight
                      :title-text="desktopCardsStraight2Props.frame29Props.extendExistingNfts"
                      :description-text="desktopCardsStraight2Props.frame29Props.attachInAppOrGam"
                      code-link="#"
                    />
                    <desktop-cards-straight
                      :title-text="desktopCardsStraight2Props2.extendExistingNfts"
                      :description-text="desktopCardsStraight2Props2.attachInAppOrGam"
                      code-link="#"
                    />
                    <desktop-cards-straight
                      :title-text="desktopCardsStraight3Props.frame29Props.extendExistingNfts"
                      :description-text="desktopCardsStraight3Props.frame29Props.attachInAppOrGam"
                      code-link="#"
                    />
                    <desktop-cards-straight
                      :title-text="desktopCardsStraight4Props.frame29Props.extendExistingNfts"
                      :description-text="desktopCardsStraight4Props.frame29Props.attachInAppOrGam"
                      code-link="#"
                    />

                    <!-- second set -->
                    <desktop-cards-straight
                      :title-text="desktopCardsStraightProps.frame29Props.extendExistingNfts"
                      :description-text="desktopCardsStraightProps.frame29Props.attachInAppOrGam"
                      code-link="#"
                    />
                    <desktop-cards-straight
                      :title-text="desktopCardsStraight2Props.frame29Props.extendExistingNfts"
                      :description-text="desktopCardsStraight2Props.frame29Props.attachInAppOrGam"
                      code-link="#"
                    />
                    <desktop-cards-straight
                      :title-text="desktopCardsStraight2Props2.extendExistingNfts"
                      :description-text="desktopCardsStraight2Props2.attachInAppOrGam"
                      code-link="#"
                    />
                    <desktop-cards-straight
                      :title-text="desktopCardsStraight3Props.frame29Props.extendExistingNfts"
                      :description-text="desktopCardsStraight3Props.frame29Props.attachInAppOrGam"
                      code-link="#"
                    />
                    <desktop-cards-straight
                      :title-text="desktopCardsStraight4Props.frame29Props.extendExistingNfts"
                      :description-text="desktopCardsStraight4Props.frame29Props.attachInAppOrGam"
                      code-link="#"
                    />

                    <!-- third set -->
                    <desktop-cards-straight
                      :title-text="desktopCardsStraightProps.frame29Props.extendExistingNfts"
                      :description-text="desktopCardsStraightProps.frame29Props.attachInAppOrGam"
                      code-link="#"
                    />
                    <desktop-cards-straight
                      :title-text="desktopCardsStraight2Props.frame29Props.extendExistingNfts"
                      :description-text="desktopCardsStraight2Props.frame29Props.attachInAppOrGam"
                      code-link="#"
                    />
                    <desktop-cards-straight
                      :title-text="desktopCardsStraight2Props2.extendExistingNfts"
                      :description-text="desktopCardsStraight2Props2.attachInAppOrGam"
                      code-link="#"
                    />
                    <desktop-cards-straight
                      :title-text="desktopCardsStraight3Props.frame29Props.extendExistingNfts"
                      :description-text="desktopCardsStraight3Props.frame29Props.attachInAppOrGam"
                      code-link="#"
                    />
                    <desktop-cards-straight
                      :title-text="desktopCardsStraight4Props.frame29Props.extendExistingNfts"
                      :description-text="desktopCardsStraight4Props.frame29Props.attachInAppOrGam"
                      code-link="#"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="content">
              <div class="how-it-works-how-it-works scroll-container my-20">
                <div class="scroll-text orbitron-black-white-110px">
                  {{ howItWorksHowItWorks }}
                </div>
              </div>

              <div class="in-tableland-we-speak-sql-1 flex justify-between">
                <div class="orbitron-black-black-45px pt-2">{{ inTablelandWeSpeakSql }}</div>
                <div class="button-right">
                  <button-regular :button-text="stateregular8Props.secondoryButton" :has-arrow="true" />
                </div>
              </div>


              <div class="mt-32 flex justify-between gap-4">
                <desktop-cards-story-image
                  :card-title="desktopCardsStoryImage1Props.cardTitle"
                  :card-content="desktopCardsStoryImage1Props.cardContent"
                  pad-top="md"
                />
                <desktop-cards-story-image
                  :card-title="desktopCardsStoryImage2Props.cardTitle"
                  :card-content="desktopCardsStoryImage2Props.cardContent"
                  pad-top="lg"
                />
                <desktop-cards-story-image
                  :card-title="desktopCardsStoryImage3Props.cardTitle"
                  :card-content="desktopCardsStoryImage3Props.cardContent"
                  pad-top=""
                />
                <desktop-cards-story-image
                  :card-title="desktopCardsStoryImage4Props.cardTitle"
                  :card-content="desktopCardsStoryImage4Props.cardContent"
                  pad-top="md"
                />
              </div>
            </div>

            <div class="content">

              <div class="scroll-container try-it-try-it-try-it-1 mt-96 whitespace-nowrap">
                <div class="scroll-text orbitron-black-white-110px">{{ tryItTryItTryIt }}</div>
              </div>

              <div class="">
                <div class="get-a-feel-for-how-e-1 mt-20 orbitron-black-black-45px">{{ getAFeelForHowE }}</div>
                <div class="mt-20 w-full">
                  <desktop-tab-group
                    :tabs-data="[
                      {
                        id: 0,
                        tabText: desktopTabGroupProps.property1TabButtonActiveProps.text,
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
                          desktopTableSingleRowProps.x1,
                          desktopTableSingleRowProps.x7725742,
                          desktopTableSingleRowProps.x1983746,
                          desktopTableSingleRowProps.x17625367
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
                        tabText: desktopTabGroupProps.property1TabButtonProps.text,
                        sqlText: []
                      }, {
                        id: 2,
                        tabText: desktopTabGroupProps.property1TabButton2Props.text,
                        sqlText: []
                      }, {
                        id: 3,
                        tabText: desktopTabGroupProps.property1TabButton3Props.text,
                        sqlText: []
                      }
                    ]"
                  />
                </div>
              </div>

            </div>

            <div class="content">

              <div class="grid grid-cols-2 gap-4 mt-40">
                <div>&nbsp;</div>
                <div class="frame-72-4 flex flex-col items-start rounded-3xl p-8">
                  <div class="group-104">
                    <div class="join-the-community">{{ joinTheCommunity }}</div>
                    <div class="whether-youre-a-dev-1 poppins-normal-white-20px">{{ whetherYouReADev }}</div>
                  </div>
                  <button-black :button-text="stateregular3Props.secondoryButton" :has-arrow="true" />
                </div>
              </div>

            </div>

            <div class="content">
              <div class="flex items-center mt-96 z-10">
                <div class="flex items-start self-end flex-col relative z-10">
                  <div class="flex items-start flex-col mb-10">
                    <div class="user-owned-token-net-1 orbitron-black-black-45px">{{ userOwnedTokenNet }}</div>
                    <div class="tableland-exists-to-1">{{ tablelandExistsTo }}</div>
                    <p class="tableland-extends-to poppins-normal-black-16px">
                      {{ tablelandExtendsTo }}
                      <br><br>
                      {{ builtOnSql }}
                    </p>
                  </div>
                  <button-regular :button-text="stateregularProps.joinUsOnDiscord" :has-arrow="true" />
                </div>
                <div class="group-93-1">
                  <div class="overlap-group-4">
                    <img class="untitled-7-1-1" src="~/assets/img/untitled-7-1@1x.png">
                  </div>
                </div>
              </div>

              <div class="sun-spot-6 z-0">
                <yellow-blur-wide />
              </div>

            </div>

            <div class="content">
              <div class="scroll-container be-ready-for-the-future-2 whitespace-nowrap mt-40">
                <h1 class="scroll-text orbitron-black-white-110px">{{ beReadyForTheFuture }}</h1>
              </div>

              <roadmap
                class="mt-60"
                :stateregular4-props="stateregular4Props"
                :stateregular5-props="stateregular5Props"
                :stateregular6-props="stateregular6Props"
                :stateregular62-props="stateregular62Props"
                :stateregular7-props="stateregular7Props"
              />

            </div>

            <div class="content">
              <div class="flex flex-col items-center mb-40">
                <div class="any-suggestions-1 orbitron-black-black-70px">Any suggestions?</div>
                <button-black button-text="EXPLORE THE POSSIBILITIES" :has-arrow="true" />
              </div>
            </div>

            <showcase
              :untitled81="untitled81"
              :what-will-you-build="whatWillYouBuild"
              :stateregular4-props2="stateregular4Props2"
              :showcase-showcase="showcaseShowcase"
            />

            <desktop-footer
              :property2regular-props="property2regularProps"
              :property2regular2-props="property2regular2Props"
              :property2regular3-props="property2regular3Props"
            />
          </div>
        </div><!-- end base -->

        <div class="parallax__layer parallax__layer--back">

          <img class="delorean" src="img/delorean.png">

          <div class="sun-spot-1">
            <yellow-blur-tall />
          </div>

          <div class="bike-gang">
            <img src="~/static/img/bike-gang@2x.png">
          </div>

          <div class="mesas-4-fore-3">
            <mesas-4 />
          </div>

        </div><!-- end fore -->

        <div class="parallax__layer parallax__layer--back-2">
          <div class="mesas-3">
            <mesas3-solid />
          </div>

          <div class="sun-spot-3">
            <yellow-blur-1 />
          </div>

          <div class="sun-spot-4">
            <yellow-blur-1 />
          </div>

          <div class="sun-spot-5">
            <yellow-blur-1 />
          </div>

          <div class="mesas-4-fore">
            <mesas-4 />
          </div>

          <div class="mesas-5-fore-2">
            <mesas-5 />
          </div>

          <div class="mesas-6-fore-1">
            <mesas-6 />
          </div>

          <div class="sun-spot-7">
            <yellow-blur-sharp />
          </div>
        </div>

        <div class="parallax__layer parallax__layer--back-3">

          <div class="mesas-5">
            <mesas-5 />
          </div>

          <div class="mesas-4-fore-4">
            <mesas-4 />
          </div>

        </div>

        <div class="parallax__layer parallax__layer--back-4">

          <page-background />

          <div class="mesas-4">
            <mesas-4 />
          </div>

        </div>

      </div><!-- end group -->

    </div>
  </div>
</template>

<script>

export default {
  props: [
    'beReadyForTheFuture',
    'howItWorksHowItWorks',
    'inTablelandWeSpeakSql',
    'builtOnSql',
    'untitled81',
    'untitled51',
    'untitled11',
    'welcomeToTableland',
    'screenshot20211206At12041',
    'untitled32',
    'untitled33',
    'untitled41',
    'userOwnedTokenNet',
    'tablelandExistsTo',
    'tablelandExtendsTo',
    'untitled71',
    'buildDappsAndNft',
    'tablelandIsANetwo',
    'joinTheCommunity',
    'whetherYouReADev',
    'thePossibilitiesAreEndless',
    'useFamiliarSqlTab',
    'tryItTryItTryIt',
    'getAFeelForHowE',
    'spanText',
    'spanText2',
    'spanText3',
    'spanText4',
    'spanText5',
    'spanText6',
    'stateregularProps',
    'property1regularProps',
    'stateregular2Props',
    'desktopCardsStoryImage1Props',
    'desktopCardsStoryImage2Props',
    'desktopCardsStoryImage3Props',
    'desktopCardsStoryImage4Props',
    'stateregular3Props',
    'stateregular4Props',
    'stateregular4Props2',
    'stateregular5Props',
    'stateregular6Props',
    'stateregular62Props',
    'stateregular7Props',
    'desktopCardsStraightProps',
    'desktopCardsStraight2Props',
    'desktopCardsStraight2Props2',
    'desktopCardsStraight3Props',
    'desktopCardsStraight4Props',
    'desktopTabGroupProps',
    'desktopTableSingleRowProps',
    'desktopTableSingleRow2Props',
    'desktopTableSingleRow22Props',
    'desktopTableSingleRow23Props',
    'desktopTableSingleRow24Props',
    'desktopTableSingleRow25Props',
    'desktopTableSingleRow26Props',
    'desktopTableSingleRow27Props',
    'desktopTableSingleRow28Props',
    'desktopTableSingleRow29Props',
    'desktopTableSingleRow3Props',
    'stateregular8Props',
    'desktopNavbarProps',
    'showcaseShowcase',
    'whatWillYouBuild',
    'property2regularProps',
    'property2regular2Props',
    'property2regular3Props'
  ],
  methods: {
    goto: function (url) {
      window.location.assign(url);
    }
  }
};
</script>

<style>
.desktop-content {
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;

  align-items: flex-start;
  background-color: var(--seashell);
}


.section .content {
  margin-top: 0;
  margin-bottom: 2rem;
  margin-left: 10%;
  margin-right: 10%;
}


.section-1 {
  position: absolute;
  top: 300px;
  width: 100%;
}

.content__section-1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
}

.content__section-1 .frame-1 .button-black {
  width: 400px;
}


.use-familiar-sql-tab {
  letter-spacing: 0;
  line-height: 54px;
}

.the-possibilities-are-endless-1 {
  letter-spacing: 0;
  line-height: 54px;
}

.mesas-5 {
  position: absolute;
  top: 1000px;
  width: 100%;
}

.mesas-4 {
  position: absolute;
  top: 150px;
  left: 0;
  mix-blend-mode: darken;
  width: 100%;
}

.mesas-3 {
  position: absolute;
  top: 300px;
  width: 100%;
}

.mesas-4-fore {
  position: absolute;
  top: 3350px;
  left: 0;
  mix-blend-mode: darken;
  width: 120%;
}

.bike-gang {
  object-fit: cover;
  position: absolute;
  top: 4850px;
}

.mesas-5-fore-2 {
  position: absolute;
  top: 6010px;
  mix-blend-mode: darken;
  width: 130%;
}

.mesas-4-fore-3 {
  position: absolute;
  top: 5500px;
  mix-blend-mode: darken;
  width: 100%;
}

.mesas-4-fore-4 {
  position: absolute;
  left: 0;
  top: 5300px;
  mix-blend-mode: darken;
  width: 200%;
}

.mesas-6-fore-1 {
  position: absolute;
  left: 0;
  top: 7000px;
  mix-blend-mode: darken;
  width: 100%;
}

.delorean {
  position: absolute;
  top: 400px;
  left: 50%;
  width: 50%;
}
.sun-spot-1 {
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  z-index: -1;
}

.sun-spot-1 svg {
  width: 100%;
}

.sun-spot-2 {
  position: absolute;
  top: -800px;
  left: -500px;
  width: 1000px;
}
.sun-spot-2 svg {
  width: 100%;
}

.sun-spot-7 {
  position: absolute;
  top: 7500px;
  left: -70%;
  width: 180%;
}
.sun-spot-7 svg {
  width: 100%;
}


.frame-51-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 10%;
  min-height: 530px;
  position: absolute;
  top: 341px;
  width: 50%;
}
.frame-52-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 426px;
  position: relative;
  width: 693px;
  margin-bottom: 40px;
}




  .parallax {
    height: 600px; /* fallback for older browsers */
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-perspective: 300px;
    perspective: 300px;
  }

  .parallax__group {
    position: relative;
    height: 600px; /* fallback for older browsers */
    height: 100vh;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

  .parallax__layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .parallax__layer--base {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 3;
    width: 100%;
  }

  .parallax__layer--fore {
    -webkit-transform: translateZ(90px) scale(.7);
    transform: translateZ(90px) scale(.7);
    z-index: 2;
  }

  .parallax__layer--fore-2 {
    -webkit-transform: translateZ(45px) scale(.85);
    transform: translateZ(45px) scale(.85);
    z-index: 2;
  }

  .parallax__layer--fore-3 {
    -webkit-transform: translateZ(10px) scale(.95);
    transform: translateZ(10px) scale(.95);
    z-index: 2;
  }


  .parallax__layer--back {
    -webkit-transform: translateZ(-10px) scale(1.05);
    transform: translateZ(-10px) scale(1.05);
    z-index: 2;
  }

  .parallax__layer--back-2 {
    -webkit-transform: translateZ(-45px) scale(1.15);
    transform: translateZ(-45px) scale(1.15);
    z-index: 2;
  }

  .parallax__layer--back-3 {
    -webkit-transform: translateZ(-90px) scale(1.3);
    transform: translateZ(-90px) scale(1.3);
    z-index: 2;
  }

  .parallax__layer--back-4 {
    -webkit-transform: translateZ(-300px) scale(2);
    transform: translateZ(-300px) scale(2);
    z-index: 6;
  }

  .parallax__layer--deep {
    -webkit-transform: translateZ(-600px) scale(3);
    transform: translateZ(-600px) scale(3);
    z-index: 7;
  }



















.mesas-1 {
  position: absolute;
  top: 8984px;
  width: 100%;
}

.mesas-2 {
  position: absolute;
  top: 5546px;
  width: 100%;
}

.sun-spot-3 {
  left: 0;
  position: absolute;
  top: 2300px;
  width: 100%;
}

.sun-spot-4 {
  left: 20%;
  position: absolute;
  top: 3450px;
  width: 70%;
}

.sun-spot-5 {
  position: absolute;
  left: 40%;
  top: 4250px;
  width: 100%;
}

.sun-spot-6 {
  position: absolute;
  left: -20%;
  top: 4900px;
  width: 60%;
}
.sun-spot-6 svg {
  width: 100%;
}


.mesas-6 {
  mix-blend-mode: darken;
  position: absolute;
  top: 3000px;
  width: 100%;
  transform-origin: 0 0;
  transform: translateZ(3px);
}

.ellipse-165 {
  left: 50%;
  position: absolute;
  top: 4300px;
  width: 100%;
}

.in-tableland-we-speak-sql-1 {
  letter-spacing: 0;
  line-height: 54px;
  white-space: nowrap;
}

.ellipse-154-1 {
  left: -16%;
  position: absolute;
  top: 5300px;
  width: 65%;
}

.arrow-fat-line-down {
  height: 32px;
  left: 49%;
  position: absolute;
  top: 933px;
  width: 32px;
}

.vector-16 {
  position: absolute;
  top: 6457px;
  width: 100%;
}

.vector-17 {
  left: 0;
  position: absolute;
  top: 8824px;
  width: 136%;;
}

.vector-18 {
  left: -70%;
  mix-blend-mode: darken;
  position: absolute;
  top: 7714px;
  width: 170%;
}

.ellipse-156 {
  left: 30%;
  position: absolute;
  top: 6300px;
  width: 80%;
}

.overlap-group-3 {
  height: 362px;
  left: 1725px;
  position: absolute;
  top: 9062px;
  width: 431px;
}

.vector-66-1 {
  height: 170px;
  left: 0;
  position: absolute;
  top: 164px;
  width: 431px;
}

.screenshot-2021-12-06-at-1204-1-1 {
  height: 362px;
  left: 36px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 361px;
}

.vector-68-1 {
  height: 58px;
  left: 390px;
  position: absolute;
  top: 69px;
  width: 26px;
}

.vector-69-1 {
  height: 43px;
  left: 390px;
  position: absolute;
  top: 214px;
  width: 18px;
}

.vector-70-1 {
  height: 33px;
  left: 390px;
  position: absolute;
  top: 283px;
  width: 18px;
}

.vector-67-1 {
  height: 60px;
  left: 390px;
  position: absolute;
  top: 68px;
  width: 27px;
}

.vector-71-1 {
  height: 46px;
  left: 389px;
  position: absolute;
  top: 212px;
  width: 20px;
}

.vector-72-1 {
  height: 34px;
  left: 388px;
  position: absolute;
  top: 282px;
  width: 21px;
}

.untitled-3-2 {
  left: 10%;
  position: absolute;
  top: 8300px;
  width: 35%;
}

.frame-62 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 582px;
  position: relative;
  width: 590px;
}


.user-owned-token-net-1 {
  letter-spacing: 0;
  line-height: 54px;
  min-height: 162px;
  width: 590px;
}

.tableland-exists-to-1 {
  color: var(--black);
  font-family: var(--font-family-poppins);
  font-size: var(--font-size-l);
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 30px;
  margin-top: 20px;
  min-height: 60px;
  width: 588px;
}

.tableland-extends-to {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 20px;
  min-height: 216px;
  text-shadow: 0px 0px 24px #ffffffcc;
  width: 588px;
}

.group-93-1 {
  align-items: flex-start;
  display: flex;
  height: 568px;
  justify-content: flex-end;
  margin-bottom: 4.03px;
  margin-left: 66px;
  min-width: 550px;
  transform: rotate(7.56deg);
}

.overlap-group-4 {
  height: 686px;
  margin-top: -45.43px;
  position: relative;
  width: 692px;
}

.untitled-7-1-1 {
  height: 610px;
  left: 37px;
  object-fit: cover;
  position: absolute;
  top: 38px;
  transform: rotate(-7.56deg);
  width: 617px;
}

.vector-73-1 {
  height: 52px;
  left: 274px;
  position: absolute;
  top: 45px;
  transform: rotate(-7.56deg);
  width: 246px;
}

.build-d-apps-and-nft-1 {
  letter-spacing: 0;
  line-height: 84px;
  margin-top: 20px;
  min-height: 252px;
  width: 693px;
}

.tableland-is-a-netwo {
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  min-height: 90px;
  text-shadow: 0px 0px 24px #ffffffcc;
  max-width: 70%;
}

.frame-72-4 {
  background-color: var(--black);
}

.group-104 {
  align-items: flex-start;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  min-height: 188px;
  width: 100%;
  margin-bottom: 40px;
}

.join-the-community {
  color: var(--seashell);
  font-family: var(--font-family-orbitron);
  font-size: 3vw;
  font-style: normal;
  font-weight: 800;

  letter-spacing: 0;
  line-height: 54px;
  min-height: 54px;
  white-space: nowrap;
}

.whether-youre-a-dev-1 {
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 14px;
  min-height: 120px;
  width: 100%;
}

.get-a-feel-for-how-e-1 {
  letter-spacing: 0;
  line-height: 54px;
}

.span-1 {
  letter-spacing: 0.05px;
}

.any-suggestions-1 {
  letter-spacing: 0;
  line-height: 84px;
  min-height: 84px;
  min-width: 697px;
  margin-bottom: 40px;
  text-align: center;
  white-space: nowrap;
}





















/*
  These cards are supposed to move sideways across the screen into and outof view
  Not sure if back and forth was the idea, or looping?
 */
.frame-55 {
  width: 100%;
}

.frame-55.scroll-container-right {
  width: 1260px;
}

.frame-55 .scroll-text {
  width: 1747px;
}

/* These are for words that constantly move left to right in a loop */

.be-ready-for-the-future-2 {
  -webkit-text-stroke: 2px var(--black);
  color: rgba(0, 0, 0, 0);
  letter-spacing: 5.5px;
  line-height: 110px;
}

.be-ready-for-the-future-2 {
  width: 2000px;
}

.be-ready-for-the-future-2 .scroll-text {
  width: 4272px;
}



.showcase-showcase-desktop.scroll-container {
  width: 2000px;
}

.showcase-showcase-desktop .scroll-text {
  width: 3751px;
}

.try-it-try-it-try-it-1 {
  -webkit-text-stroke: 2px var(--black);
  color: rgba(0, 0, 0, 0);
  letter-spacing: 5.5px;
  line-height: 110px;
  min-height: 110px;
}

.try-it-try-it-try-it-1.scroll-container {
  width: 2400px;
}

.try-it-try-it-try-it-1 .scroll-text {
  width: 4450px;
}


.welcome-to-tableland-1 {
  -webkit-text-stroke: 2px var(--black);
  color:  rgba(0,0,0,0);
  letter-spacing: 5.5px;
  line-height: 110px;
}

.welcome-to-tableland-1.scroll-container {
  width: 2600px;
}

.welcome-to-tableland-1 .scroll-text {
  width: 4030px;
}


.how-it-works-how-it-works {
  -webkit-text-stroke: 2px var(--black);
  color:  rgba(0,0,0,0);
  letter-spacing: 5.5px;
  line-height: 110px;
  white-space: nowrap;
  width: 2591px;
}

.how-it-works-how-it-works.scroll-container {
  width: 2600px;
}

.how-it-works-how-it-works .scroll-text {
  width: 3700px;
}

.scroll-container {
  text-align: center;
  white-space: nowrap;
}

.scroll-container .scroll-text {
  /* animation properties */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);

  -moz-animation: scroll-right 85s linear infinite;
  -webkit-animation: scroll-right 85s linear infinite;
  animation: scroll-right 85s linear infinite;
}

.scroll-container-right .scroll-text {
  /* animation properties */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);

  -moz-animation: scroll-left 65s linear infinite;
  -webkit-animation: scroll-left 65s linear infinite;
  animation: scroll-left 65s linear infinite;
}

/* for Firefox */
@-moz-keyframes scroll-right {
  from { -moz-transform: translateX(-100%); }
  to { -moz-transform: translateX(0%); }
}

/* for Chrome */
@-webkit-keyframes scroll-right {
  from { -webkit-transform: translateX(-100%); }
  to { -webkit-transform: translateX(0%); }
}

@keyframes scroll-right {
  from {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  to {
    -moz-transform: translateX(0%);
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}


/* for Firefox */
@-moz-keyframes scroll-left {
  from { -moz-transform: translateX(0%); }
  to { -moz-transform: translateX(-100%); }
}

/* for Chrome */
@-webkit-keyframes scroll-left {
  from { -webkit-transform: translateX(0%); }
  to { -webkit-transform: translateX(-100%); }
}

@keyframes scroll-left {
  from {
    -moz-transform: translateX(0%);
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}


</style>
