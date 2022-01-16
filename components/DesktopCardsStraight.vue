<template>
  <div class="desktop-cards-straight">
    <div class="frame-72-5">
      <div class="desktop-cards-straight-text-container">
        <img
          class="arrow-fat-lines-up-2"
          src="img/arrowfatlinesup@2x.svg"
        >
        <div class="extend-existing-nf-ts-2 orbitron-black-seashell-25px">{{ titleText }}</div>
        <p class="attach-in-app-or-gam poppins-normal-white-16px">{{ descriptionText }}</p>
      </div>

      <property1regular22 :code-link="codeLink" />
    </div>
  </div>
</template>

<script>
import Property1regular22 from './Property1regular22';
export default {
  name: 'DesktopCardsStraight',
  components: {
    Property1regular22: Property1regular22
  },
  props: ['titleText', 'descriptionText', 'codeLink']
};
</script>

<style>
.desktop-cards-straight {
  align-items: flex-start;
  border-radius: 30px;
  display: flex;
  min-width: 285px;
  margin: 2rem;
}

.frame-72-5 {
  align-items: flex-start;
  background-color: var(--black);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  position: relative;
  width: 285px;
}


.desktop-cards-straight-text-container {
  align-items: flex-start;
  align-self: center;
  display: flex;
  flex-direction: column;
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
  width: 225px;
}


</style>
