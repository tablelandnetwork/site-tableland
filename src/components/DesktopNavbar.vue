<template>
  <div class="desktop-navbar">
    <img
      class="logo-black-1"
      src="../../img/logo---black@2x.svg"
    />
    <div class="frame-49">
      <div>
        <property2regular3
          :navigationLink="property2regularProps.navigationLink"
          :className="property2regularProps.className"
        />
      </div>
      <div class="flex">
        <property2regular3
          :navigationLink="property2regular2Props.navigationLink"
          :className="property2regular2Props.className"
        />
        <property2regular3
          :navigationLink="property2regular3Props.navigationLink"
          :className="property2regular3Props.className"
        />
        <property1regular32
          :navigationCta="property1regular3Props.navigationCta"
          :className="property1regular3Props.className"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Property2regular3 from "./Property2regular3";
import Property1regular32 from "./Property1regular32";
export default {
  name: "DesktopNavbar",
  components: {
    Property2regular3,
    Property1regular32,
  },
  props: ["property2regularProps", "property2regular2Props", "property2regular3Props", "property1regular3Props"],
};
</script>

<style>
.desktop-navbar {
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
  width: 100%;
  position: relative;
}
</style>
