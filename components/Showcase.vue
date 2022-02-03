<template>
  <div class="relative">
    <div class="showcase-bg-desktop">&nbsp;</div>
    <div class="scroll-container showcase-showcase-desktop pt-20 pb-20">
      <div class="scroll-text orbitron-black-white-110px">{{ showcaseShowcase }}</div>
    </div>
    <div class="showcase-cards-desktop">
      <desktop-cards-story-showcase
        card-title="Key-Value Store"
        card-content="Use Tableland as a simple and fast key value store."
        card-text-link="Explore"
      />
      <desktop-cards-story-showcase
        card-title="TODO dApp"
        card-content="A tutorial to build a simple TODO dApp and get familiar with Tableland."
        card-link="https://bafzbeief5apdktj25lyoobv6kcity4icgoya5etklxxixkaugcmttetafm.textile.space/"
        card-text-link="Explore"
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

    <img class="text-center w-full mt-40" :src="untitled81">
  </div>
</template>

<script>

export default {
  props: ['untitled81', 'whatWillYouBuild', 'stateregular4Props2', 'showcaseShowcase']
};

</script>

<style>

.showcase-bg-desktop {
  z-index: -1;
  border-radius: 2rem 2rem 0 0;
  background-color: #000;
  position: absolute;
  left: 0;
  width: 100%;
  top: 0px;
  height: 1300px;
}

.showcase-showcase-desktop {
  -webkit-text-stroke: 2px var(--white);
  color: rgba(0, 0, 0, 0);
  white-space: nowrap;
}

.showcase-cards-desktop {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
}

.showcase-cta {
  text-align: center;
  width: 100%;
}

.showcase-cta-button {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.untitled-8-1 {
  text-align: center;
  width: 100%;
}

</style>
