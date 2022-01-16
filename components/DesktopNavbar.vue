<template>
  <div class="desktop-navbar">
    <img
      class="logo-black-1"
      src="img/logo---black@2x.svg"
    >
    <div class="frame-49">
      <div class="flex">
        <nav-link
          :navigation-text="property2regularProps.navigationLink"
          navigation-link="https://textile.notion.site/Our-mission-is-to-accelerate-the-exchange-of-information-across-society-f49e389e12e14473a3475e755a8d9cd6"
          :class-name="property2regularProps.className"
        />
        <nav-link
          :navigation-text="property2regular2Props.navigationLink"
          navigation-link="https://boards.greenhouse.io/textileio"
          :class-name="property2regular2Props.className"
        />
        <nav-link
          :navigation-text="property2regular3Props.navigationLink"
          navigation-link="https://docs.textile.io/"
          :class-name="property2regular3Props.className"
        />
        <button-regular
          :button-text="property1regular3Props.navigationCta"
          size="sm"
          @click="connect"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from './NavLink';
import ButtonRegular from './ButtonRegular';
export default {
  name: 'DesktopNavbar',
  components: {
    NavLink: NavLink,
    ButtonRegular: ButtonRegular
  },
  props: ['property2regularProps', 'property2regular2Props', 'property2regular3Props', 'property1regular3Props'],
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

  position: absolute;
  right: 0;
  left:  0;
  top: 14px;

  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
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
