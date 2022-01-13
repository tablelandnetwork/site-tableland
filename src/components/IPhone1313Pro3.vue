<template>
  <div class="container-center-horizontal">
    <div class="iphone-13-13-pro-3 screen">
      <div class="group-6612">
        <div class="overlap-group1-2">
          <div class="status-bari-phone-12-pro-1">
            <div class="time-1 valign-text-middle sfprotext-normal-black-15-7px">{{ time }}</div>
            <img
              class="cellular-1"
              src="/img/cellular@2x.svg"
            />
            <img
              class="wifi-1"
              src="/img/wifi-1@2x.svg"
            />
            <div class="batteryi-phone-12-pro-1">
              <div class="overlap-group-2">
                <div class="capacity-1"></div>
              </div>
              <img
                class="cap-1"
                src="/img/cap-1@2x.svg"
              />
            </div>
          </div>
          <div class="search-form-1">
            <img
              class="a-a-1"
              src="/img/aa@2x.svg"
            />
            <div class="domain-2">
              <div class="text-2 valign-text-middle sfcompactdisplay-regular-normal-black-14px">{{ text2 }}</div>
              <div class="domain-3 valign-text-middle sfprotext-regular-normal-black-16px">{{ domain }}</div>
            </div>
            <img
              class="reload-1"
              src="/img/reload@2x.svg"
            />
          </div>
        </div>
      </div>
      <nav-link :navigationText="property2regular3Props.navigationLink" />
      <nav-link
        :navigationText="property2regular32Props.navigationLink"
        :className="property2regular32Props.className"
      />
      <nav-link
        :navigationText="property2regular33Props.navigationLink"
        :className="property2regular33Props.className"
      />
      <button-regular :buttonText="property1regular3Props.navigationCta" />
      <div class="discord-cta">
        <img
          class="vector-10"
          src="/img/vector-10@2x.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from "./NavLink";
import ButtonRegular from "./ButtonRegular";
export default {
  name: "IPhone1313Pro3",
  components: {
    NavLink,
    ButtonRegular,
  },
  props: [
    "time",
    "text2",
    "domain",
    "property2regular3Props",
    "property2regular32Props",
    "property2regular33Props",
    "property1regular3Props",
  ],
};
</script>

<style>
.iphone-13-13-pro-3 {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 844px;
  position: relative;
  width: 390px;
}

.group-6612 {
  align-items: flex-start;
  display: flex;
  height: 100px;
  min-width: 390px;
}

.overlap-group1-2 {
  align-items: center;
  background-image: url(/img/backgrounds-1@2x.svg);
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  margin-top: -0.5px;
  min-height: 101px;
  padding: 0.5px 0;
  width: 390px;
}

.status-bari-phone-12-pro-1 {
  align-items: center;
  display: flex;
  height: 48px;
  justify-content: flex-end;
  min-width: 390px;
  padding: 14.1px 18.3px;
}

.time-1 {
  align-self: flex-end;
  height: 19px;
  letter-spacing: -0.28px;
  min-width: 33px;
  text-align: center;
}

.cellular-1 {
  height: 13px;
  margin-left: 234px;
  margin-top: 2.4px;
  width: 18px;
}

.wifi-1 {
  height: 14px;
  margin-left: 4px;
  margin-top: 1.71px;
  width: 18px;
}

.batteryi-phone-12-pro-1 {
  align-items: flex-start;
  display: flex;
  height: 12px;
  margin-left: 5px;
  margin-top: 0.87px;
  min-width: 25px;
}

.overlap-group-2 {
  align-items: flex-start;
  background-image: url(/img/border-1@2x.svg);
  background-size: 100% 100%;
  display: flex;
  height: 13px;
  margin-left: -1px;
  margin-top: -0.5px;
  min-width: 24px;
  padding: 2.5px 2.7px;
}

.capacity-1 {
  background-color: var(--black);
  border-radius: 1.33px;
  height: 8px;
  width: 19px;
}

.cap-1 {
  align-self: center;
  height: 5px;
  margin-bottom: 0;
  width: 2px;
}

.search-form-1 {
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

.a-a-1 {
  height: 13px;
  margin-top: 0.89px;
  width: 19px;
}

.domain-2 {
  align-items: center;
  display: flex;
  margin-bottom: 0.11px;
  margin-left: 105px;
  width: 102px;
}

.text-2 {
  height: 17px;
  letter-spacing: 0;
  min-width: 15px;
}

.domain-3 {
  height: 19px;
  letter-spacing: -0.45px;
  margin-left: 4px;
  min-width: 83px;
}

.reload-1 {
  align-self: flex-end;
  height: 19px;
  margin-left: 110px;
  width: 16px;
}

.discord-cta {
  align-items: center;
  background-color: var(--black);
  border-radius: 20px;
  display: flex;
  height: 71px;
  margin-right: 8px;
  margin-top: 80px;
  min-width: 80px;
  padding: 0 20px;
}

.vector-10 {
  height: 31px;
  width: 40px;
}
</style>
