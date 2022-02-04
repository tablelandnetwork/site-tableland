<template>

  <div class="relative roadmap-container">
    <img class="delorean-2" src="img/delorean-2.png">
    <img class="delorean-3" src="img/delorean-3.png">

    <div class="desktop-roadmap-block">
      <roadmap-number3 number="Q1" class-name="fill-right" />
      <div class="info-block">

        <div class="bg-var-black p-4 w-full rounded-tr-xl">
          <h4 class="orbitron-black-seashell-45px bg-var-black whitespace-nowrap">Testnet Phase 1</h4>
          <p class="orbitron-orange-25px bg-var-black">2022</p>

          <desktop-list-item3
            :ethereum-table-and-p="stateregular4Props.desktopListGroupProps.desktopListItemProps.ethereumTableAndP"
            :text-white="true"
          />
          <desktop-list-item3
            :ethereum-table-and-p="stateregular4Props.desktopListGroupProps.desktopListItem2Props.ethereumTableAndP"
            :text-white="true"
          />
          <desktop-list-item3
            :ethereum-table-and-p="stateregular4Props.desktopListGroupProps.desktopListItem3Props.ethereumTableAndP"
            :text-white="true"
          />
        </div>
        <img src="~/assets/img/wedge-rounded.png" width="100%">
      </div>
    </div>

    <div class="road-map-connector-1">
      <road-map-connector :ratio=".6" />
    </div>

    <div class="desktop-roadmap-block-1">
      <roadmap-number3 :number="stateregular4Props.roadmapNumberProps.price" />
      <div class="info-block-1">
        <div class="frame-64-2">
          <div class="frame-66-3">
            <div class="testnet-phase-1 orbitron-black-black-45px">{{ stateregular4Props.testnetPhase1 }}</div>
            <div class="number-3 orbitron-black-black-25px">{{ stateregular4Props.number }}</div>
          </div>
          <div>
            <desktop-list-item3
              ethereum-table-and-p="Ethereum table and payment channel support"
            />
            <desktop-list-item3
              ethereum-table-and-p="Token-gated developer access"
            />
            <desktop-list-item3
              ethereum-table-and-p="Tableland community NFT drop"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="road-map-connector-2">
      <road-map-connector-reverse :ratio="2" />
    </div>

    <div class="desktop-roadmap-block-2">
      <roadmap-number3 :number="stateregular5Props.roadmapNumberProps.price" :class-name="stateregular5Props.roadmapNumberProps.className" />
      <div class="info-block-2">
        <div class="frame-64-3">
          <frame663 :testnet-phase1="stateregular5Props.frame66Props.testnetPhase1" :number="stateregular5Props.frame66Props.number" />
          <desktop-list-group22
            :desktop-list-item-props="stateregular5Props.desktopListGroup2Props.desktopListItemProps"
            :desktop-list-item2-props="stateregular5Props.desktopListGroup2Props.desktopListItem2Props"
          />
        </div>
        <img class="rectangle-55-4" :src="stateregular5Props.rectangle55">
      </div>
    </div>

    <div class="road-map-connector-3">
      <road-map-connector :ratio="1.3" />
    </div>

    <div class="desktop-roadmap-block-3">
      <roadmap-number3 :number="stateregular6Props.roadmapNumberProps.price" :class-name="stateregular6Props.roadmapNumberProps.className" />
      <info-block
        :frame66-props="stateregular6Props.infoBlockProps.frame66Props"
        :desktop-list-group3-props="stateregular6Props.infoBlockProps.desktopListGroup3Props"
      />
    </div>

    <div class="road-map-connector-4">
      <road-map-connector-reverse :ratio="1.9" />
    </div>

    <div class="desktop-roadmap-block-4">
      <roadmap-number3 :number="stateregular62Props.roadmapNumberProps.price" :class-name="stateregular62Props.roadmapNumberProps.className" />
      <info-block
        :frame66-props="stateregular62Props.infoBlockProps.frame66Props"
        :desktop-list-group3-props="stateregular62Props.infoBlockProps.desktopListGroup3Props"
      />
    </div>

    <div class="road-map-connector-5">
      <road-map-connector :ratio="1.3" />
    </div>

    <div class="desktop-roadmap-block-5">
      <roadmap-number3
        :number="stateregular7Props.roadmapNumberProps.price"
        :class-name="stateregular7Props.roadmapNumberProps.className"
      />
      <div class="info-block-4">
        <div class="frame-64-5">
          <div class="frame-66-5">
            <div class="testnet-phase-1-2 orbitron-black-black-45px">{{ stateregular7Props.testnetPhase1 }}</div>
            <div class="x2022-1 orbitron-black-black-25px">{{ stateregular7Props.x2022 }}</div>
          </div>
          <desktop-list-group22
            :class-name="stateregular7Props.desktopListGroup2Props.className"
            :desktop-list-item-props="stateregular7Props.desktopListGroup2Props.desktopListItemProps"
            :desktop-list-item2-props="stateregular7Props.desktopListGroup2Props.desktopListItem2Props"
          />
        </div>
        <img class="rectangle-55-6" :src="stateregular7Props.rectangle55">
      </div>
    </div>

    <div class="road-map-connector-6">
      <road-map-connector-reverse :ratio="2" />
    </div>
    <div class="road-map-car">
      <road-map-car />
    </div>
  </div>

</template>

<script>

export default {
  props: [
    'stateregular4Props',
    'stateregular5Props',
    'stateregular6Props',
    'stateregular62Props',
    'stateregular7Props'
  ]
};

</script>

<style>
.roadmap-container {
  height: 2300px;
}

.desktop-roadmap-block {
  align-items: flex-start;
  display: flex;
  left: 30.3vw;
  margin-left: -30px;
  position: absolute;
  top: 0px;
}

.delorean-2 {
  left: 6%;
  position: absolute;
  top: -55px;
  width: 279px;
}

.road-map-connector-1 {
  position: absolute;
  left: 10.3vw;
  width: 25.5vw;
  top: 129px;
}

.desktop-roadmap-block-1 {
  align-items: flex-start;
  display: flex;
  left: 10.5vw;
  margin-left: -67px;
  position: absolute;
  top: calc((23vw * 0.6) + (134px * 1))
}

.delorean-3 {
  left: calc(69% + 10vw);
  position: absolute;
  top: 209px;
  width: 35%;
}

.road-map-connector-2 {
  position: absolute;
  left: 10.3vw;
  width: 25.5vw;
  top: calc((33vw * 0.6) + (134px * 1));
}

.desktop-roadmap-block-2 {
  align-items: flex-start;
  display: flex;
  height: 279px;
  margin-left: -67px;
  left: 35.5vw;
  width: 45vw;
  position: absolute;
  top: calc((72vw * 0.6) + (134px * 1));
}

.road-map-connector-3 {
  position: absolute;
  left: 10.3vw;
  width: 25.5vw;
  top: calc((63vw * 0.6) + (134px * 2));
}

.desktop-roadmap-block-3 {
  align-items: flex-start;
  display: flex;
  left: 10.5vw;
  margin-left: -67px;
  position: absolute;
  top: calc((92vw * 0.6) + (134px * 2));
}

.road-map-connector-4 {
  position: absolute;
  left: 10.3vw;
  width: 25.5vw;
  top: calc((85vw * 0.6) + (134px * 3));
}

.desktop-roadmap-block-4 {
  align-items: flex-start;
  display: flex;
  left: 35.5vw;
  margin-left: -67px;
  position: absolute;
  top: calc((116vw * 0.6) + (134px * 3));
}

.road-map-connector-5 {
  position: absolute;
  left: 10.3vw;
  width: 25.5vw;
  top: calc((108vw * 0.6) + (134px * 4));
}

.desktop-roadmap-block-5 {
  align-items: flex-start;
  display: flex;
  left: 10.5vw;
  margin-left: -67px;
  position: absolute;
  top: calc((132vw * 0.6) + (134px * 4));
}

.road-map-connector-6 {
  position: absolute;
  left: 10.3vw;
  width: 25.5vw;
  top: calc((131vw * 0.6) + (134px * 5));
}

.road-map-car {
  position: absolute;
  left: calc(35vw - 220px);
  text-align: center;
  top: calc((170vw * 0.6) + (134px * 5));
}

.roadmap-number-6 {
  height: 134px;
  width: 134px;
}

.info-block {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.info-block-1 {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.info-block-2 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 279px;
  width: 484px;
}

.info-block-4 {
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 279px;
  width: 699px;
}















.frame-64-5 {
  align-items: center;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  min-height: 214px;
  position: relative;
  width: 699px;
}

.frame-66-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  min-height: 89px;
  width: 639px;
}

.testnet-phase-1-2 {
  letter-spacing: 0;
  line-height: 54px;
  min-height: 54px;
  white-space: nowrap;
}

.x2022-1 {
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 5px;
  min-height: 30px;
  white-space: nowrap;
}

.rectangle-55-6 {
  height: 1px;
  margin-top: 32px;
  width: 1px;
}
.frame-64-3 {
  align-items: center;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  min-height: 214px;
  position: relative;
  width: 484px;
}

.rectangle-55-4 {
  height: 1px;
  margin-top: 32px;
  width: 1px;
}

.frame-64-2 {
  align-items: center;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.frame-66-3 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  min-height: 89px;
  width: 467px;
}

.testnet-phase-1 {
  letter-spacing: 0;
  line-height: 54px;
  min-height: 54px;
  white-space: nowrap;
}

.number-3 {
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 5px;
  min-height: 30px;
  white-space: nowrap;
}

.rectangle-55-3 {
  height: 1px;
  margin-top: 32px;
  width: 1px;
}

</style>
