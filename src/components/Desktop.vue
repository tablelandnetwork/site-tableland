<template>
  <div class="container-center-horizontal">
    <div class="concept-hierarchy-and-content-iteration screen">
      <div class="overlap-group1-3">
        <div class="rectangle-31">
          <page-background />
        </div>

        <desktop-navbar
          :property2regularProps="desktopNavbarProps.property2regularProps"
          :property2regular2Props="desktopNavbarProps.property2regular2Props"
          :property2regular3Props="desktopNavbarProps.property2regular3Props"
          :property1regular3Props="desktopNavbarProps.property1regular3Props"
        />



        <div class="mesas-set-1">
          <div class="mesas-set-1-parallax">
            <div class="mesas-4">
              <mesas-4 />
            </div>
            <div class="mesas-3">
              <mesas-3 />
            </div>
          </div>
        </div>

        <div class="mesas-1">
          <mesas-1 />
        </div>
        <div class="mesas-2">
          <mesas-2 />
        </div>

        <div class="bike-gang">
          <bike-gang />
        </div>

        <div class="ellipse-157-2">
          <yellow-blur-tall />
        </div>

        <div class="ellipse-125-1">
          <yellow-blur-wide />
        </div>

        <div class="ellipse-165">
          <yellow-blur-wide />
        </div>


        <div class="frame-51-1">
          <div class="frame-52-1">
            <property1regular6
              :videoIntroduction="property1regularProps.videoIntroduction"
              :property1iconsPlayProps="property1regularProps.property1iconsPlayProps"
            />
            <div class="build-d-apps-and-nft-1 orbitron-black-black-70px">{{ buildDappsAndNft }}</div>
            <div class="tableland-is-a-netwo poppins-normal-black-20px">{{ tablelandIsANetwo }}</div>
          </div>
          <button-black :button-text="stateregular2Props.primaryButton" :has-arrow="true" @click="goto('#explore');" />
        </div>

        <div class="ellipse-166">
          <yellow-blur-1 />
        </div>

        <div class="vector-15">
          <mesas-4 />
        </div>

        <div class="ellipse-154-1">
          <yellow-blur-1 />
        </div>

        <div class="ellipse-128">
          <yellow-blur-1 />
        </div>
        <img class="untitled-1-1-1" src="img/delorean.png" />

        <div class="welcome-to-tableland-1 scroll-container">
          <div class="scroll-text orbitron-black-white-110px">{{ welcomeToTableland }}</div>
        </div>

        <div class="how-it-works-how-it-works scroll-container">
          <div class="scroll-text orbitron-black-white-110px">
            {{ howItWorksHowItWorks }}
          </div>
        </div>


        <div class="ellipse-155">
          <yellow-blur-1 />
        </div>

        <img
          class="arrow-fat-line-down"
          src="../../img/arrowfatlinedown@2x.svg"
        />
        <img
          class="vector-16"
          src="../../img/vector-5@1x.svg"
        />
        <img
          class="vector-17"
          src="../../img/vector-6@1x.svg"
        />
        <img
          class="vector-18"
          src="../../img/vector-7@1x.svg"
        />

        <div class="ellipse-156">
          <yellow-blur-1 />
        </div>

        <div class="frame-7">
          <div class="any-suggestions-1 orbitron-black-black-70px">Any suggestions?</div>
          <button-black button-text="EXPLORE THE POSSIBILITIES" :has-arrow="true" />
        </div>

        <img class="untitled-3-3-1" src="img/delorean-2.png" />
        <img class="untitled-4-1-1" src="img/delorean-3.png" />

        <div class="scroll-container be-ready-for-the-future-2">
          <h1 class="scroll-text orbitron-black-white-110px">{{ beReadyForTheFuture }}</h1>
        </div>

        <div class="desktop-cards-story-image-container">
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

        <stateactive />
        <div class="road-map-connector-1">
          <road-map-connector :ratio=".6" />
        </div>
        <stateregular42
          :testnetPhase1="stateregular4Props.testnetPhase1"
          :number="stateregular4Props.number"
          :rectangle55="stateregular4Props.rectangle55"
          :roadmapNumberProps="stateregular4Props.roadmapNumberProps"
          :desktopListGroupProps="stateregular4Props.desktopListGroupProps"
        />
        <div class="road-map-connector-2">
          <road-map-connector-reverse :ratio="2" />
        </div>
        <stateregular5
          :rectangle55="stateregular5Props.rectangle55"
          :roadmapNumberProps="stateregular5Props.roadmapNumberProps"
          :frame66Props="stateregular5Props.frame66Props"
          :desktopListGroup2Props="stateregular5Props.desktopListGroup2Props"
        />
        <div class="road-map-connector-3">
          <road-map-connector :ratio="1.3" />
        </div>
        <stateregular6
          :roadmapNumberProps="stateregular6Props.roadmapNumberProps"
          :infoBlockProps="stateregular6Props.infoBlockProps"
        />
        <div class="road-map-connector-4">
          <road-map-connector-reverse :ratio="1.9" />
        </div>
        <stateregular6
          :className="stateregular62Props.className"
          :roadmapNumberProps="stateregular62Props.roadmapNumberProps"
          :infoBlockProps="stateregular62Props.infoBlockProps"
        />
        <div class="road-map-connector-5">
          <road-map-connector :ratio="1.3" />
        </div>
        <stateregular7
          :testnetPhase1="stateregular7Props.testnetPhase1"
          :x2022="stateregular7Props.x2022"
          :rectangle55="stateregular7Props.rectangle55"
          :roadmapNumberProps="stateregular7Props.roadmapNumberProps"
          :desktopListGroup2Props="stateregular7Props.desktopListGroup2Props"
        />
        <div class="road-map-connector-6">
          <road-map-connector-reverse :ratio="1.7" />
        </div>
        <div class="road-map-car">
          <road-map-car />
        </div>
        <div class=showcase-bg-desktop></div>
        <div class="scroll-container showcase-showcase-desktop">
          <div class="scroll-text orbitron-black-white-110px">{{ showcaseShowcase }}</div>
        </div>
        <div class="showcase-cards-desktop">
          <desktop-cards-story-showcase
            card-title="Showcase 1 Example"
            card-content="Example project description that describes the project in this description."
            card-text-link="TEXT LINK"
          />
          <desktop-cards-story-showcase
            card-title="Showcase 1 Example"
            card-content="Example project description that describes the project in this description."
            card-text-link="TEXT LINK"
          />
          <desktop-cards-story-showcase
            card-title="Showcase 1 Example"
            card-content="Example project description that describes the project in this description."
            card-text-link="TEXT LINK"
          />
          <desktop-cards-story-showcase
            card-title="Showcase 1 Example"
            card-content="Example project description that describes the project in this description."
            card-text-link="TEXT LINK"
          />
          <desktop-cards-story-showcase
            card-title="Showcase 1 Example"
            card-content="Example project description that describes the project in this description."
            card-text-link="TEXT LINK"
          />
          <desktop-cards-story-showcase
            card-title="Showcase 1 Example"
            card-content="Example project description that describes the project in this description."
            card-text-link="TEXT LINK"
          />
        </div>

        <div class="showcase-cta">
          <h2 class="orbitron-black-seashell-45px">{{ whatWillYouBuild }}</h2>
          <div class="showcase-cta-button">
            <button-cta :button-text="stateregular4Props2.primaryButton" :has-arrow="true" size="sm" />
          </div>
        </div>

        <img class="untitled-8-1" :src="untitled81" />

        <img
          class="vector-19"
          src="../../img/vector-8@1x.svg"
        />
        <div class="the-possibilities-are-endless-1 orbitron-black-black-45px">{{ thePossibilitiesAreEndless }}</div>
        <div class="frame-55">
          <div class=scroll-container-right>
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

        <div class="in-tableland-we-speak-sql-1">
          <div class="orbitron-black-black-45px">{{ inTablelandWeSpeakSql }}</div>
          <div class="button-right">
            <button-regular :button-text="stateregular8Props.secondoryButton" :has-arrow="true"/>
          </div>
        </div>

        <div class="use-familiar-sql-tab orbitron-black-black-45px">{{ useFamiliarSqlTab }}</div>

        <div class="scroll-container try-it-try-it-try-it-1">
          <div class="scroll-text orbitron-black-white-110px">{{ tryItTryItTryIt }}</div>
        </div>
        
        
        <div class="group-6621">
          <div class="get-a-feel-for-how-e-1 orbitron-black-black-45px">{{ getAFeelForHowE }}</div>
          <div class="flex-row">
            <desktop-tab-group
              :tabsData="[
                {
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
                  tabText: desktopTabGroupProps.property1TabButtonProps.text,
                  sqlText: []
                }, {
                  tabText: desktopTabGroupProps.property1TabButton2Props.text,
                  sqlText: []
                }, {
                  tabText: desktopTabGroupProps.property1TabButton3Props.text,
                  sqlText: []
                }
              ]"
            />
          </div>
        </div>

        <div class="frame-72-4">
          <div class="group-104">
            <div class="join-the-community">{{ joinTheCommunity }}</div>
            <div class="whether-youre-a-dev-1 poppins-normal-white-20px">{{ whetherYouReADev }}</div>
          </div>
          <button-black :buttonText="stateregular3Props.secondoryButton" :has-arrow="true" />
        </div>

        <div class="group-6622">
          <div class="frame-62">
            <div class="frame-63-1">
              <div class="user-owned-token-net-1 orbitron-black-black-45px">{{ userOwnedTokenNet }}</div>
              <div class="tableland-exists-to-1">{{ tablelandExistsTo }}</div>
              <p class="tableland-extends-to poppins-normal-black-16px" v-html="tablelandExtendsTo"></p>
            </div>
            <button-regular :button-text="stateregularProps.joinUsOnDiscord" :has-arrow="true" />
          </div>
          <div class="group-93-1">
            <div class="overlap-group-4">
              <img class="untitled-7-1-1" :src="untitled71" /><img
                class="vector-73-1"
                src="../../img/vector-73@2x.svg"
              />
            </div>
          </div>
        </div>








      </div>
      <DiscordCtaDesktop />

      <desktop-footer
        :property2regularProps="property2regularProps"
        :property2regular2Props="property2regular2Props"
        :property2regular3Props="property2regular3Props"
      />

    </div>
  </div>
</template>

<script>

import BikeGang from "./BikeGang";
import ButtonBlack from "./ButtonBlack";
import ButtonCta from "./ButtonCta";
import ButtonRegular from "./ButtonRegular";
import DesktopCardsStoryImage from "./DesktopCardsStoryImage";
import DesktopCardsStoryShowcase from "./DesktopCardsStoryShowcase";
import DesktopTabGroup from "./DesktopTabGroup";
import Mesas1 from "./Mesas1";
import Mesas2 from "./Mesas2";
import Mesas3 from "./Mesas3";
import Mesas4 from "./Mesas4";
import PageBackground from "./PageBackground";
import RoadMapCar from "./RoadMapCar";
import RoadMapConnector from "./RoadMapConnector";
import RoadMapConnectorReverse from "./RoadMapConnectorReverse";
import YellowBlur1 from './YellowBlur1';
import YellowBlurTall from './YellowBlurTall';
import YellowBlurWide from './YellowBlurWide';

import Stateregular14 from "./Stateregular14";
import Property1regular6 from "./Property1regular6";
import Stateregular32 from "./Stateregular32";
import Stateactive from "./Stateactive";
import Stateregular42 from "./Stateregular42";
import Stateregular4 from "./Stateregular4";
import Stateregular5 from "./Stateregular5";
import Stateregular6 from "./Stateregular6";
import Stateregular7 from "./Stateregular7";
import DesktopCardsStraight from "./DesktopCardsStraight";
import DesktopCardsStraight2 from "./DesktopCardsStraight2";

import Stateregular8 from "./Stateregular8";
import DesktopNavbar from "./DesktopNavbar";
import DesktopFooter from "./DesktopFooter";
import DiscordCtaDesktop from "./DiscordCtaDesktop";


export default {
  name: "ConceptHierarchyAndContentIteration",
  components: {
    BikeGang,
    ButtonBlack,
    ButtonCta,
    ButtonRegular,
    DesktopCardsStoryImage,
    DesktopCardsStoryShowcase,
    DesktopNavbar,
    DesktopFooter,
    DiscordCtaDesktop,
    DesktopTabGroup,
    Mesas1,
    Mesas2,
    Mesas3,
    Mesas4,
    PageBackground,
    RoadMapCar,
    RoadMapConnector,
    RoadMapConnectorReverse,
    YellowBlur1,
    YellowBlurTall,
    YellowBlurWide,

    Stateregular14,
    Property1regular6,
    Stateregular32,
    Stateactive,
    Stateregular42,
    Stateregular4,
    Stateregular5,
    Stateregular6,
    Stateregular7,
    DesktopCardsStraight,
    DesktopCardsStraight2,
    Stateregular8
  },
  props: [
    "beReadyForTheFuture",
    "howItWorksHowItWorks",
    "inTablelandWeSpeakSql",
    "untitled81",
    "untitled51",
    "untitled11",
    "welcomeToTableland",
    "screenshot20211206At12041",
    "untitled32",
    "untitled33",
    "untitled41",
    "userOwnedTokenNet",
    "tablelandExistsTo",
    "tablelandExtendsTo",
    "untitled71",
    "buildDappsAndNft",
    "tablelandIsANetwo",
    "joinTheCommunity",
    "whetherYouReADev",
    "thePossibilitiesAreEndless",
    "useFamiliarSqlTab",
    "tryItTryItTryIt",
    "getAFeelForHowE",
    "spanText",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "stateregularProps",
    "property1regularProps",
    "stateregular2Props",
    "desktopCardsStoryImage1Props",
    "desktopCardsStoryImage2Props",
    "desktopCardsStoryImage3Props",
    "desktopCardsStoryImage4Props",
    "stateregular3Props",
    "stateregular4Props",
    "stateregular4Props2",
    "stateregular5Props",
    "stateregular6Props",
    "stateregular62Props",
    "stateregular7Props",
    "desktopCardsStraightProps",
    "desktopCardsStraight2Props",
    "desktopCardsStraight2Props2",
    "desktopCardsStraight3Props",
    "desktopCardsStraight4Props",
    "desktopTabGroupProps",
    "desktopTableSingleRowProps",
    "desktopTableSingleRow2Props",
    "desktopTableSingleRow22Props",
    "desktopTableSingleRow23Props",
    "desktopTableSingleRow24Props",
    "desktopTableSingleRow25Props",
    "desktopTableSingleRow26Props",
    "desktopTableSingleRow27Props",
    "desktopTableSingleRow28Props",
    "desktopTableSingleRow29Props",
    "desktopTableSingleRow3Props",
    "stateregular8Props",
    "desktopNavbarProps",
    "showcaseShowcase",
    "whatWillYouBuild",
    "property2regularProps",
    "property2regular2Props",
    "property2regular3Props"
  ],
  methods: {
    goto: function (url) {
      window.location.assign(url);
    }
  }
};
</script>

<style>
.concept-hierarchy-and-content-iteration {
  align-items: flex-start;
  background-color: var(--seashell);
  display: flex;
  height: 11500px;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.overlap-group1-3 {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
}

.mesas-set-1 {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mesas-set-1-parallax {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  perspective: 10px;
  perspective-origin: 0 0;
}

.mesas-4 {
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: darken;
  width: 100%;
  height: 100%;
  transform: translateZ(0px);
  height: 600px;
}

.mesas-3 {
  width: 100%;
  height: 100%;
  transform-origin: 0 0;
  transform: translateZ(3px);
  height: 600px;
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

.rectangle-31 {
  position: absolute;
  top: 0;
  width: 100%;
}

.ellipse-166 {
  left: 15%;
  position: absolute;
  top: 2800px;
  width: 70%;
}

.vector-15 {
  mix-blend-mode: darken;
  position: absolute;
  top: 3750px;
  width: 100%;
}

.ellipse-157-2 {
  left: -30%;
  position: absolute;
  top: 31px;
}

.ellipse-125-1 {
  left: 0;
  position: absolute;
  top: 8818px;
  width: 100%;
}

.ellipse-165 {
  left: 50%;
  position: absolute;
  top: 4300px;
  width: 100%;
}

.in-tableland-we-speak-sql-1 {
  left: 10%;
  width: 80%;
  letter-spacing: 0;
  line-height: 54px;
  position: absolute;
  top: 2816px;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
}

.desktop-cards-story-image-container {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  position: absolute;
  top: 2928px;
  left: 10%;
  width: 80%;
}

.ellipse-154-1 {
  left: -16%;
  position: absolute;
  top: 5300px;
  width: 65%;
}

.bike-gang {
  height: 642px;
  left: 10%;
  object-fit: cover;
  position: absolute;
  top: 4920px;
  width: 651px;
}

.ellipse-128 {
  height: 1135px;
  left: 1833px;
  position: absolute;
  top: 0;
  width: 1135px;
}

.untitled-1-1-1 {
  left: 49%;
  object-fit: cover;
  position: absolute;
  top: 300px;
  width: 39%;
}

.ellipse-155 {
  left: 10%;
  position: absolute;
  top: 3606px;
  width: 100%;
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

.untitled-3-3-1 {
  left: 15%;
  position: absolute;
  top: 6644px;
  width: 279px;
}

.untitled-4-1-1 {
  height: 488px;
  left: 65%;
  position: absolute;
  top: 6945px;
  width: 378px;
}

.group-6622 {
  align-items: center;
  display: flex;
  height: 640px;
  left: 10%;
  min-width: 1241px;
  position: absolute;
  top: 5659px;
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

.frame-63-1 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 478px;
  width: 590px;
  margin-bottom: 40px;
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
  min-height: 90px;
  text-shadow: 0px 0px 24px #ffffffcc;
  width: 567px;
}

.frame-72-4 {
  align-items: flex-start;
  background-color: var(--black);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  left: 55%;
  min-height: 372px;
  padding: 40px 26px;
  position: absolute;
  top: 5007px;
  width: 40%;
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

.vector-19 {
  position: absolute;
  top: 1261px;
  width: 100%;
}

.the-possibilities-are-endless-1 {
  left: 10%;
  letter-spacing: 0;
  line-height: 54px;
  position: absolute;
  top: 1796px;
  white-space: nowrap;
}

.use-familiar-sql-tab {
  left: 10%;
  letter-spacing: 0;
  line-height: 54px;
  position: absolute;
  top: 1268px;
  width: 47%;
}

.group-6621 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 10%;
  min-height: 926px;
  position: absolute;
  top: 4100px;
  width: 2213px;
}

.get-a-feel-for-how-e-1 {
  letter-spacing: 0;
  line-height: 54px;
  min-height: 108px;
  width: 956px;
}

.road-map-connector-1 {
  position: absolute;
  left: 24.7%;
  width: 31%;
  top: 6800px;
}

.road-map-connector-2 {
  position: absolute;
  left: 24.7%;
  width: 25.5%;
  top: 7162px;
}

.road-map-connector-3 {
  position: absolute;
  left: 24.7%;
  width: 25.5%;
  top: 7626px;
}

.road-map-connector-4 {
  position: absolute;
  left: 24.7%;
  width: 25.5%;
  top: 8017px;
}

.road-map-connector-5 {
  position: absolute;
  left: 24.7%;
  width: 25.5%;
  top: 8476px;
}

.road-map-connector-6 {
  position: absolute;
  left: 24.7%;
  width: 25.5%;
  top: 8879px;
}

.road-map-car {
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  top: 9188px;
}

.flex-row {
  align-items: flex-start;
  display: flex;
  margin-top: 67px;
  min-width: 1200px;
  position: relative;
}

.frame-75 {
  align-items: flex-start;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 566px;
  margin-left: 20px;
  overflow: hidden;
  width: 895px;
}

.frame-45-1 {
  align-items: center;
  background-color: var(--black);
  display: flex;
  height: 122px;
  min-width: 895px;
  padding: 0 40px;
}

.span-1 {
  letter-spacing: 0.05px;
}

.frame-17-1 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  min-height: 444px;
  padding: 30px 0;
  position: relative;
  width: 895px;
}

.showcase-bg-desktop {
  border-radius: 2rem 2rem 0 0;
  background-color: #000;
  position: absolute;
  left: 0;
  width: 100%;
  top: 10100px;
  height: 1600px;
}

.showcase-cards-desktop {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  position: absolute;
  left: -19%;
  width: 140%;
  top: 10450px;
}

.showcase-cta {
  position: absolute;
  text-align: center;
  left: 0;
  width: 100%;
  top: 10975px;
}

.showcase-cta-button {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.untitled-8-1 {
  position: absolute;
  text-align: center;
  left: 0;
  width: 100%;
  top: 11176px;
}
.frame-7 {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  min-height: 189px;
  position: absolute;
  top: 9710px;
  width: 100%;
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
  height: 445px;
  width: 100%;
  position: absolute;
  top: 1890px;
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
  position: absolute;
  top: 6400px;
  white-space: nowrap;
}

.be-ready-for-the-future-2 {
  width: 2000px;
}

.be-ready-for-the-future-2 .scroll-text {
  width: 4272px;
}


.showcase-showcase-desktop {
  -webkit-text-stroke: 2px var(--white);
  color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 10225px;
  left:  0;
  white-space: nowrap;
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
  margin-left: -2px;
  margin-top: -2px;
  left: -10%;
  position: absolute;
  top: 3950px;
  min-height: 110px;
  white-space: nowrap;
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
  left: 0;
  letter-spacing: 5.5px;
  line-height: 110px;
  position: absolute;
  text-align: center;
  top: 1056px;
  white-space: nowrap;
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
  left: -10%;
  letter-spacing: 5.5px;
  line-height: 110px;
  position: absolute;
  top: 2564px;
  white-space: nowrap;
  width: 2591px;
}

.how-it-works-how-it-works.scroll-container {
  width: 2600px;
}

.how-it-works-how-it-works .scroll-text {
  width: 3700px;
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
