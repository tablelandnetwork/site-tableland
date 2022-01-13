<template>
  <div class="desktop-cards-straight">
    <div class="frame-72-5">
      <div class="desktop-cards-straight-text-container">
        <img
          class="arrow-fat-lines-up-2"
          src="../../img/arrowfatlinesup@2x.svg"
        />
        <div class="extend-existing-nf-ts-2 orbitron-black-seashell-25px">{{ titleText }}</div>
        <p class="attach-in-app-or-gam poppins-normal-white-16px">{{ descriptionText }}</p>
      </div>

      <property1regular22 :code-link="codeLink" />
    </div>
  </div>
</template>

<script>
import Property1regular22 from "./Property1regular22";
export default {
  name: "DesktopCardsStraight",
  components: {
    Property1regular22,
  },
  props: ["titleText", "descriptionText", "codeLink"],
};
</script>

<style>
.desktop-cards-straight {
  align-items: flex-start;
  border-radius: 30px;
  display: flex;
  height: 517px;
  min-width: 285px;
  margin: 2rem;
}

.frame-72-5 {
  align-items: flex-start;
  background-color: var(--black);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  min-height: 445px;
  padding: 40px 0;
  position: relative;
  width: 285px;
  height: 100%;
}

.desktop-cards-straight.desktop-cards-straight-1 {
  align-self: flex-end;
  height: 516px;
  margin-bottom: -71px;
  margin-left: 20px;
}

.desktop-cards-straight.desktop-cards-straight-1 .frame-72-5 {
  min-height: 516px;
}

.desktop-cards-straight.desktop-cards-straight-2 {
  height: 405px;
  margin-left: 20px;
}

.desktop-cards-straight.desktop-cards-straight-2 .frame-72-5 {
  min-height: 405px;
}

.desktop-cards-straight.desktop-cards-straight-3 {
  height: 348px;
  margin-left: 20px;
}

.desktop-cards-straight.desktop-cards-straight-3 .frame-72-5 {
  min-height: 348px;
}


.desktop-cards-straight-text-container {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
  min-height: 387px;
  width: 225px;
}

.arrow-fat-lines-up-2 {
  height: 46px;
  width: 46px;
}

.extend-existing-nf-ts-2 {
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 20px;
  min-height: 60px;
  width: 225px;
}

.attach-in-app-or-gam {
  letter-spacing: 0;
  line-height: 24px;
  margin-top: 20px;
  min-height: 168px;
  width: 225px;
}

.desktop-cards-straight-text-container.frame-29-5 {
  min-height: 386px;
}

.desktop-cards-straight-text-container.frame-29-5 .attach-in-app-or-gam {
  min-height: 240px;
}

.desktop-cards-straight-text-container.frame-29-6 {
  min-height: 266px;
}

.desktop-cards-straight-text-container.frame-29-6 .attach-in-app-or-gam {
  min-height: 120px;
}

.desktop-cards-straight-text-container.frame-29-7 {
  min-height: 218px;
}

.desktop-cards-straight-text-container.frame-29-7 .attach-in-app-or-gam {
  min-height: 72px;
}
</style>
