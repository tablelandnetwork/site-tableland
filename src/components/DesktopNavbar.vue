<template>
  <div class="desktop-navbar">
    <img
      class="logo-black-1"
      src="../../img/logo---black@2x.svg"
    />
    <div class="frame-49">
      <div class="flex">
        <nav-link
          :navigationText="property2regularProps.navigationLink"
          navigationLink="https://textile.notion.site/Our-mission-is-to-accelerate-the-exchange-of-information-across-society-f49e389e12e14473a3475e755a8d9cd6"
          :className="property2regularProps.className"
        />
        <nav-link
          :navigationText="property2regular2Props.navigationLink"
          navigationLink="https://boards.greenhouse.io/textileio"
          :className="property2regular2Props.className"
        />
        <nav-link
          :navigationText="property2regular3Props.navigationLink"
          navigationLink="https://docs.textile.io/"
          :className="property2regular3Props.className"
        />
        <button-regular
          @click="connect"
          :button-text="property1regular3Props.navigationCta"
          size="sm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from "./NavLink";
import ButtonRegular from "./ButtonRegular";
export default {
  name: "DesktopNavbar",
  components: {
    NavLink,
    ButtonRegular,
  },
  props: ["property2regularProps", "property2regular2Props", "property2regular3Props", "property1regular3Props"],
  methods: {
    connect: function () {
      alert('TODO: clicked connect to tableland');
    }
  }
};
</script>

<style>
.desktop-navbar {
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  display: flex;
  height: 84px;
  right: 0;
  left:  0;
  padding: 0 119.9px;
  position: absolute;
  top: 14px;
  width: 100%;
}

.logo-black-1 {
  height: 18px;
  width: 167px;
}

.frame-49 {
  justify-content: space-between;
  display: flex;
  height: 44px;
  position: relative;
}
</style>
