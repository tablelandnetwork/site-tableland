<template>
  <div class="mobile-content block lg:hidden flex flex-col overflow-hidden w-full">

    <div v-show="menuOpen" class="mobile-menu bg-gray-100 z-10">
      <button class="w-20 h-20 float-right relative focus:outline-none" @click="toggleMenu(false)">
        <div class="block w-5 absolute left-6 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            class="block absolute h-0.5 w-7 text-black bg-current transform transition duration-500 ease-in-out rotate-45"
          ></span>
          <span
            class="block absolute h-0.5 w-7 text-black bg-current transform transition duration-500 ease-in-out -rotate-45"
          ></span>
        </div>
      </button>
      <nav-link :navigation-text="mobileMenuProps1.navigationLink" />
      <nav-link
        :navigation-text="mobileMenuProps2.navigationLink"
        :class-name="mobileMenuProps2.className"
      />
      <nav-link
        :navigation-text="mobileMenuProps3.navigationLink"
        :class-name="mobileMenuProps3.className"
      />
      <button-regular :button-text="mobileMenuProps4.navigationCta" />
      <div class="discord-cta">
        <img
          class="vector-10"
          src="/img/vector-10@2x.svg"
        />
      </div>
    </div>

    <div class="background-layer parallax">
      <div class="parallax__group">
        <div class="parallax__layer--base z-50">
          <mobile-navbar
            :open="menuOpen"
            @menu-open="toggleMenu"
          />
        </div>

        <div class="parallax__layer parallax__layer--back-4">

          <page-background />

          <div class="mesas-4">
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
    'whowItWorksHowItWorksAnd',
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
    'mobileCardsStoryImageProps',
    'mobileCardsStoryImage2Props',
    'mobileCardsStoryImage3Props',
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
    'roadmapNumberProps',
    'roadmapNumber2Props',
    'roadmapNumber3Props',
    'roadmapNumber4Props',
    'roadmapNumber5Props',
    'roadmapNumber6Props',
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
    }
  }
};

</script>

<style>
.mobile-content {

}

.mobile-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 80%;
}

.ellipse-157 {
  height: 1142px;
  left: 31px;
  position: absolute;
  top: 0;
  width: 1142px;
}

.ellipse-157-1 {
  height: 995px;
  left: 0;
  position: absolute;
  top: 721px;
  width: 995px;
}

.vector {
  height: 264px;
  left: 480px;
  mix-blend-mode: darken;
  position: absolute;
  top: 333px;
  width: 475px;
}

.frame-51 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 515px;
  min-height: 400px;
  padding: 20.5px 0;
  position: absolute;
  top: 703px;
  width: 350px;
}

.group-113 {
  align-items: center;
  display: flex;
  height: 44px;
  min-width: 323px;
  position: relative;
}

.video-introduction {
  letter-spacing: 2.1px;
  line-height: 19.6px;
  margin-left: 20px;
  min-height: 24px;
  width: 259px;
}

.frame-52 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  min-height: 285px;
  position: relative;
  width: 350px;
}

.build-d-apps-and-nft {
  letter-spacing: 0;
  line-height: 43.2px;
  min-height: 129px;
  width: 350px;
}

.a-new-generation-of {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 20px;
  min-height: 72px;
  text-shadow: 0px 0px 24px #ffffffcc;
  width: 350px;
}

.frame-53 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 515px;
  min-height: 266px;
  position: absolute;
  top: 1348px;
  width: 350px;
}

.why,
.chain-expansion {
  letter-spacing: 0;
  line-height: 33.6px;
  min-height: 34px;
  white-space: nowrap;
}

.building-apps-in-the {
  color: var(--black);
  font-family: var(--font-family-poppins);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 33px;
  margin-top: 30px;
  min-height: 202px;
  width: 350px;
}

.overlap-group1 {
  align-items: center;
  background-image: url(/img/backgrounds@2x.svg);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  left: 495px;
  min-height: 101px;
  padding: 0.5px 0;
  position: absolute;
  top: 274px;
  width: 390px;
}

.status-bari-phone-12-pro {
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: flex-end;
  min-width: 390px;
  padding: 14.1px 18.3px;
}

.time {
  align-self: flex-end;
  height: 19px;
  letter-spacing: -0.28px;
  min-width: 33px;
  text-align: center;
}

.cellular {
  height: 13px;
  margin-left: 234px;
  margin-top: 2.4px;
  width: 18px;
}

.wifi {
  height: 14px;
  margin-left: 4px;
  margin-top: 1.71px;
  width: 18px;
}

.batteryi-phone-12-pro {
  align-items: flex-start;
  display: flex;
  height: 12px;
  margin-left: 5px;
  margin-top: 0.87px;
  min-width: 25px;
}

.overlap-group {
  align-items: flex-start;
  background-image: url(/img/border@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 13px;
  margin-left: -1px;
  margin-top: -0.5px;
  min-width: 24px;
  padding: 2.5px 2.7px;
}

.capacity {
  background-color: var(--black);
  border-radius: 1.33px;
  height: 8px;
  width: 19px;
}

.cap {
  align-self: center;
  height: 5px;
  margin-bottom: 0;
  width: 2px;
}

.search-form {
  align-items: center;
  background-color: var(--black-3);
  border-radius: 10px;
  display: flex;
  height: 37px;
  justify-content: flex-end;
  margin-right: 0;
  margin-top: 4px;
  min-width: 370px;
  padding: 8.6px 8.1px;
}

.a-a {
  height: 13px;
  margin-top: 0.89px;
  width: 19px;
}

.domain {
  align-items: center;
  display: flex;
  margin-bottom: 0.11px;
  margin-left: 105px;
  width: 102px;
}

.text-1 {
  height: 17px;
  letter-spacing: 0;
  min-width: 15px;
}

.domain-1 {
  height: 19px;
  letter-spacing: -0.45px;
  margin-left: 4px;
  min-width: 83px;
}

.reload {
  align-self: flex-end;
  height: 19px;
  margin-left: 110px;
  width: 16px;
}

.vector-1 {
  height: 376px;
  left: 378px;
  mix-blend-mode: darken;
  position: absolute;
  top: 436px;
  width: 680px;
}

.vector-2 {
  height: 356px;
  left: 495px;
  position: absolute;
  top: 1620px;
  width: 402px;
}

.the-possibilities-are-endless {
  left: 515px;
  letter-spacing: 0;
  line-height: 33.6px;
  position: absolute;
  top: 1814px;
  width: 350px;
}

.untitled-1-1 {
  height: 241px;
  left: 480px;
  object-fit: cover;
  position: absolute;
  top: 450px;
  width: 325px;
}

.welcome-to-tableland {
  -webkit-text-stroke: 1px var(--black);
  left: 406px;
  letter-spacing: 2.75px;
  line-height: 55px;
  position: absolute;
  text-align: center;
  top: 1232px;
  white-space: nowrap;
  width: 2028px;
}

.frame-6618 {
  align-items: flex-start;
  display: flex;
  height: 458px;
  left: 516px;
  min-width: 1445px;
  position: absolute;
  top: 1921px;
}

.whow-it-works-how-it-works-and {
  -webkit-text-stroke: 1px var(--black);
  letter-spacing: 2.75px;
  line-height: 55px;
  margin-right: -1116px;
  margin-top: 173px;
  min-height: 55px;
  min-width: 1528px;
  text-align: center;
  white-space: nowrap;
}

.in-tableland-we-speak-sql {
  align-self: center;
  letter-spacing: 0;
  line-height: 33.6px;
  margin-top: 61px;
  min-height: 67px;
  width: 350px;
}

.overlap-group9 {
  height: 1762px;
  margin-right: -1100px;
  margin-top: 40px;
  position: relative;
  width: 1896px;
}

.vector-3 {
  height: 238px;
  left: 1079px;
  position: absolute;
  top: 785px;
  width: 817px;
}

.ellipse-158 {
  height: 1161px;
  left: 0;
  position: absolute;
  top: 316px;
  width: 1161px;
}

.vector-4 {
  height: 217px;
  left: 248px;
  position: absolute;
  top: 631px;
  width: 746px;
}

.frame-63 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 426px;
  min-height: 613px;
  position: absolute;
  top: 1149px;
  width: 350px;
}

.frame-6620 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 529px;
  width: 350px;
}

.user-owned-token-net {
  letter-spacing: 0;
  line-height: 33.6px;
  min-height: 105px;
  width: 350px;
}

.tableland-exists-to {
  letter-spacing: 1px;
  line-height: 24px;
  margin-top: 20px;
  min-height: 72px;
  width: 350px;
}

.ethereum-and-other-n {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 20px;
  min-height: 312px;
  text-shadow: 0px 0px 24px #ffffffcc;
  width: 350px;
}

.group-93 {
  align-items: flex-start;
  display: flex;
  height: 324px;
  justify-content: flex-end;
  left: 447px;
  min-width: 314px;
  position: absolute;
  top: 765px;
  transform: rotate(7.46deg);
}

.overlap-group-1 {
  height: 390px;
  margin-top: -25.49px;
  position: relative;
  width: 394px;
}

.untitled-7-1 {
  height: 348px;
  left: 21px;
  object-fit: cover;
  position: absolute;
  top: 21px;
  transform: rotate(-7.46deg);
  width: 352px;
}

.vector-73 {
  height: 30px;
  left: 156px;
  position: absolute;
  top: 25px;
  transform: rotate(-7.46deg);
  width: 141px;
}

.frame-6619 {
  align-items: flex-start;
  display: flex;
  height: 640px;
  left: 426px;
  min-width: 1153px;
  position: absolute;
  top: 0;
}

.overlap-group10 {
  height: 1657px;
  margin-right: -840px;
  margin-top: 111px;
  position: relative;
  width: 1534px;
}

.ellipse-159 {
  height: 1161px;
  left: 4px;
  position: absolute;
  top: 105px;
  width: 1161px;
}

.overlap-group1-1 {
  align-items: flex-end;
  background-image: url(/img/ellipse-154-1@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 886px;
  justify-content: flex-end;
  left: 18px;
  min-width: 886px;
  padding: 192.6px 215.7px;
  position: absolute;
  top: 964px;
}

.untitled-5-1 {
  height: 352px;
  width: 356px;
}

.vector-5 {
  height: 216px;
  left: 0;
  mix-blend-mode: darken;
  position: absolute;
  top: 0;
  width: 999px;
}

.try-it-try-it-try-it {
  -webkit-text-stroke: 1px var(--black);
  left: 323px;
  letter-spacing: 2.75px;
  line-height: 55px;
  position: absolute;
  top: 96px;
  white-space: nowrap;
  width: 1211px;
}

.get-a-feel-for-how-e {
  color: var(--black);
  font-family: var(--font-family-orbitron);
  font-size: var(--font-size-l);
  font-weight: 900;
  left: 324px;
  letter-spacing: 0;
  line-height: 21.6px;
  position: absolute;
  top: 220px;
  width: 350px;
}

.frame-46 {
  align-items: flex-start;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 560px;
  left: 324px;
  overflow: hidden;
  position: absolute;
  top: 533px;
  width: 346px;
}

.frame-45 {
  align-items: center;
  background-color: var(--black);
  display: flex;
  height: 112px;
  min-width: 346px;
  padding: 0 20px;
}

.select-from-axie_i {
  letter-spacing: 0;
  line-height: 24px;
  min-height: 72px;
  width: 280px;
}

.frame-17 {
  align-items: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  min-height: 457px;
  padding: 10px 0;
  position: relative;
  width: 346px;
}

.vector-6 {
  height: 271px;
  left: 33px;
  position: absolute;
  top: 1214px;
  width: 979px;
}

.tab-navmobile {
  align-items: flex-start;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 176px;
  left: 324px;
  overflow: hidden;
  position: absolute;
  top: 317px;
  width: 350px;
}

.overlap-group5 {
  height: 45px;
  margin-top: -1px;
  position: relative;
  width: 350px;
}

.line-2 {
  height: 2px;
  left: 0;
  position: absolute;
  top: 0;
  width: 350px;
}

.overlap-group6 {
  height: 132px;
  position: relative;
  width: 350px;
}

.line {
  height: 2px;
  left: 0;
  position: absolute;
  top: 43px;
  width: 350px;
}

.line-4 {
  height: 2px;
  left: 0;
  position: absolute;
  top: 87px;
  width: 350px;
}

.frame-72 {
  align-items: center;
  align-self: center;
  background-color: var(--black);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  margin-left: 1px;
  margin-top: 41px;
  min-height: 528px;
  padding: 38px 0;
  position: relative;
  width: 351px;
}

.meet-the-worldwide-community {
  letter-spacing: 0;
  line-height: 33.6px;
  margin-top: 2px;
  min-height: 103px;
  width: 291px;
}

.whether-youre-a-dev {
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 20px;
  min-height: 243px;
  width: 291px;
}

.overlap-group8 {
  height: 5091px;
  margin-right: -762px;
  margin-top: 23px;
  position: relative;
  width: 1599px;
}

.ellipse-160 {
  height: 1050px;
  left: 0;
  position: absolute;
  top: 476px;
  width: 1050px;
}

.vector-7 {
  height: 238px;
  left: 214px;
  position: absolute;
  top: 1528px;
  width: 863px;
}

.ellipse-161 {
  height: 1050px;
  left: 0;
  position: absolute;
  top: 2280px;
  width: 1050px;
}

.be-ready-for-the-future {
  -webkit-text-stroke: 1px var(--black);
  left: 388px;
  letter-spacing: 2.75px;
  line-height: 55px;
  position: absolute;
  top: 179px;
  white-space: nowrap;
  width: 1211px;
}

.vector-8 {
  height: 414px;
  left: 405px;
  position: absolute;
  top: 284px;
  width: 475px;
}

.be-ready-for-the-future-1 {
  -webkit-text-stroke: 1px var(--seashell);
  left: 388px;
  letter-spacing: 2.75px;
  line-height: 55px;
  position: absolute;
  top: 3939px;
  white-space: nowrap;
  width: 1211px;
}

.ellipse-154 {
  height: 903px;
  left: 268px;
  position: absolute;
  top: 0;
  width: 903px;
}

.vector-9 {
  height: 210px;
  left: 382px;
  position: absolute;
  top: 799px;
  width: 758px;
}

.frame-64 {
  align-items: flex-start;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  left: 540px;
  min-height: 243px;
  position: absolute;
  top: 1183px;
  width: 277px;
}

.frame-65 {
  align-items: flex-start;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  left: 467px;
  min-height: 181px;
  position: absolute;
  top: 1633px;
  width: 350px;
}

.frame-311 {
  align-items: flex-start;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  left: 467px;
  min-height: 256px;
  position: absolute;
  top: 535px;
  width: 277px;
}

.ellipse-125 {
  height: 1167px;
  left: 49px;
  position: absolute;
  top: 3040px;
  width: 1167px;
}

.overlap-group2 {
  height: 234px;
  left: 511px;
  position: absolute;
  top: 3277px;
  width: 278px;
}

.vector-66 {
  height: 111px;
  left: 0;
  position: absolute;
  top: 105px;
  width: 278px;
}

.screenshot-2021-12-06-at-1204-1 {
  height: 234px;
  left: 23px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 233px;
}

.vector-68 {
  height: 38px;
  left: 251px;
  position: absolute;
  top: 44px;
  width: 17px;
}

.vector-69 {
  height: 29px;
  left: 251px;
  position: absolute;
  top: 137px;
  width: 12px;
}

.vector-70 {
  height: 22px;
  left: 251px;
  position: absolute;
  top: 182px;
  width: 12px;
}

.vector-67 {
  height: 40px;
  left: 251px;
  position: absolute;
  top: 43px;
  width: 18px;
}

.vector-71 {
  height: 31px;
  left: 250px;
  position: absolute;
  top: 136px;
  width: 14px;
}

.vector-72 {
  height: 23px;
  left: 250px;
  position: absolute;
  top: 181px;
  width: 14px;
}

.any-suggestions {
  left: 467px;
  letter-spacing: 0;
  line-height: 43.2px;
  position: absolute;
  text-align: center;
  top: 3565px;
  width: 350px;
}

.rectangle-143 {
  height: 1232px;
  left: 447px;
  position: absolute;
  top: 3859px;
  width: 390px;
}

.showcase-showcase {
  -webkit-text-stroke: 2px var(--seashell);
  left: 378px;
  letter-spacing: 2.75px;
  line-height: 55px;
  position: absolute;
  top: 3957px;
  white-space: nowrap;
}

.frame-69 {
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 467px;
  min-height: 118px;
  position: absolute;
  top: 4548px;
  width: 352px;
}

.what-will-you-build {
  letter-spacing: 0;
  line-height: 33.6px;
  min-height: 34px;
  min-width: 315px;
  text-align: center;
  white-space: nowrap;
}

.group-6617 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  left: 214px;
  min-height: 287px;
  position: absolute;
  top: 4774px;
  width: 674px;
}

.untitled-8-1-mobile {
  height: 161px;
  mix-blend-mode: hard-light;
  width: 674px;
}

.desktop-button-nav-link-container {
  align-items: flex-start;
  display: flex;
  height: 44px;
  margin-right: 71px;
  margin-top: 34px;
  min-width: 350px;
  position: relative;
}

.logo-black {
  align-self: center;
  height: 18px;
  margin-left: 182.71px;
  margin-top: 30px;
  width: 167px;
}

.untitled-4-1 {
  height: 253px;
  left: 564px;
  position: absolute;
  top: 892px;
  width: 197px;
}

.untitled-3-3 {
  height: 143px;
  left: 515px;
  position: absolute;
  top: 327px;
  width: 260px;
}

.untitled-3-4 {
  height: 235px;
  left: 439px;
  position: absolute;
  top: 2245px;
  width: 371px;
}

.group-6614 {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  left: 467px;
  min-height: 2774px;
  position: absolute;
  top: 535px;
  transform: rotate(180deg);
  width: 352px;
}

.overlap-group4 {
  height: 1954px;
  margin-right: -40px;
  position: relative;
  width: 352px;
}

.group-6613 {
  height: 624px;
  left: 28px;
  position: absolute;
  top: 34px;
  transform: rotate(-180deg);
  width: 296px;
}

.vector-89 {
  height: 267px;
  left: 28px;
  position: absolute;
  top: 642px;
  transform: rotate(-180deg);
  width: 2px;
}

.vector-78 {
  height: 97px;
  left: 29px;
  position: absolute;
  top: 891px;
  transform: rotate(-180deg);
  width: 196px;
}

.vector-92 {
  height: 121px;
  left: 224px;
  position: absolute;
  top: 987px;
  transform: rotate(-180deg);
  width: 99px;
}

.vector-90 {
  height: 289px;
  left: 28px;
  position: absolute;
  top: 1155px;
  transform: rotate(-180deg);
  width: 295px;
}

.vector-91 {
  height: 488px;
  left: 28px;
  position: absolute;
  top: 1466px;
  transform: rotate(-180deg);
  width: 295px;
}

.overlap-group3 {
  height: 820px;
  margin-right: -40px;
  position: relative;
  width: 350px;
}

.vector-93 {
  height: 369px;
  left: 26px;
  position: absolute;
  top: 22px;
  transform: rotate(-180deg);
  width: 295px;
}

.vector-94 {
  height: 418px;
  left: 28px;
  position: absolute;
  top: 402px;
  transform: rotate(-180deg);
  width: 302px;
}

.group-6620 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  left: 551px;
  min-height: 204px;
  position: absolute;
  top: 2838px;
  width: 266px;
}

.frame-66 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  min-height: 73px;
  width: 266px;
}

.number {
  letter-spacing: 0;
  line-height: 33.6px;
  margin-top: 5px;
  min-height: 34px;
  white-space: nowrap;
}
</style>
