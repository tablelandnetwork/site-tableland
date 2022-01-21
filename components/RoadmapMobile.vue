<template>

  <div class="relative roadmap-container-mobile">
    <img class="roadmap-delorean-2-mobile" src="img/delorean-2.png">
    <img class="absolute w-2/3 xs:w-1/2 left-1/4 top-96 xs:top-44 sm:left-3/4 sm:w-1/4 sm:top-32" src="img/delorean-3.png">

    <div class="flex justify-end">
      <div class="">

        <div class="p-3 sm:p-4 rounded-tr-xl">
          <h4 class="orbitron-black-black-45px sm:whitespace-nowrap">{{ phase1.title }}</h4>
          <p class="orbitron-black-black-25px">{{ phase1.subTitle }}</p>

          <roadmap-list-item
            :text-content="phase1.listItem1"
          />
          <roadmap-list-item
            :text-content="phase1.listItem2"
          />
          <roadmap-list-item
            :text-content="phase1.listItem3"
          />
        </div>
      </div>

      <roadmap-number3 :number="phase1.quarter" />
    </div>

    <div class="connector-1 hidden xs:block -mt-44 sm:-mt-32 sm:-mb-40 mx-8 sm:mx-16">
      <roadmap-connector-mobile :short="true" />
    </div>
    <div class="block xs:hidden -mt-60 -mb-20 mx-8">
      <roadmap-connector-mobile :short="false" />
    </div>

    <div class="flex">
      <roadmap-number3 :number="phase2.quarter" />
      <div class="">

        <div class="p-3 sm:p-4 rounded-tr-xl">
          <h4 class="orbitron-black-black-45px sm:whitespace-nowrap">{{ phase2.title }}</h4>
          <p class="orbitron-black-black-25px">{{ phase2.subTitle }}</p>

          <roadmap-list-item
            :text-content="phase2.listItem1"
          />
          <roadmap-list-item
            :text-content="phase2.listItem2"
          />
          <roadmap-list-item
            :text-content="phase2.listItem3"
          />
        </div>
      </div>
    </div>

    <div class="hidden xs:block -mt-44 sm:-mt-40 sm:-mb-32 mx-8 sm:mx-16">
      <roadmap-connector-reverse-mobile :short="true" />
    </div>
    <div class="block xs:hidden -mt-80 -mb-40 mx-8 sm:mx-16">
      <roadmap-connector-reverse-mobile :short="false" />
    </div>

    <div class="flex justify-end">
      <div class="">
        <div class="p-3 sm:p-4 rounded-tr-xl">
          <h4 class="orbitron-black-black-45px sm:whitespace-nowrap">{{ phase3.title }}</h4>
          <p class="orbitron-black-black-25px">{{ phase3.subTitle }}</p>

          <roadmap-list-item
            :text-content="phase3.listItem1"
          />
          <roadmap-list-item
            :text-content="phase3.listItem2"
          />
        </div>
      </div>

      <roadmap-number3 :number="phase3.quarter" />
    </div>

    <div class="hidden xs:block -mt-32 -mb-32 mx-8 sm:mx-16">
      <roadmap-connector-mobile :short="true" />
    </div>
    <div class="block xs:hidden -mt-60 -mb-48 mx-8 sm:mx-16">
      <roadmap-connector-mobile :short="false" />
    </div>

    <div class="flex">
      <roadmap-number3 :number="phase4.quarter" />
      <div class="">
        <div class="p-4 rounded-tr-xl">
          <h4 class="orbitron-black-black-45px sm:whitespace-nowrap">{{ phase4.title }}</h4>
          <p class="orbitron-black-black-25px">{{ phase4.subTitle }}</p>

          <roadmap-list-item
            :text-content="phase4.listItem1"
          />
        </div>
      </div>
    </div>

    <div class="block xs:-mt-32 xs:-mb-32 mx-8 sm:mx-16">
      <roadmap-connector-reverse-mobile :short="true" />
    </div>

    <div class="flex justify-end">
      <div class="">
        <div class="p-4 rounded-tr-xl">
          <h4 class="orbitron-black-black-45px sm:whitespace-nowrap">{{ phase5.title }}</h4>
          <p class="orbitron-black-black-25px">{{ phase5.subTitle }}</p>

          <roadmap-list-item
            :text-content="phase5.listItem1"
          />
        </div>
      </div>

      <roadmap-number3 :number="phase5.quarter" />
    </div>

    <div class="hidden xs:block -mt-32 -mb-32 mx-8 sm:mx-16">
      <roadmap-connector-mobile :short="true" />
    </div>
    <div class="block xs:hidden -mt-60 -mb-60 mx-8">
      <roadmap-connector-mobile :short="false" />
    </div>

    <div class="flex">
      <roadmap-number3 :number="phase6.quarter" />
      <div class="">

        <div class="p-4 rounded-tr-xl">
          <h4 class="orbitron-black-black-45px sm:whitespace-nowrap">{{ phase6.title }}</h4>
          <p class="orbitron-black-black-25px">{{ phase6.subTitle }}</p>

          <roadmap-list-item
            :text-content="phase6.listItem1"
          />
          <roadmap-list-item
            :text-content="phase6.listItem2"
          />
        </div>

      </div>
    </div>

    <div class="hidden xs:block -mt-40 sm:-mt-20 -mb-8 mx-8 sm:mx-16">
      <roadmap-connector-reverse-mobile :short="true" />
    </div>
    <div class="block xs:hidden -mt-60 -mb-8 mx-8 sm:mx-16">
      <roadmap-connector-reverse-mobile :short="false" />
    </div>
    <div class="roadmap-car-mobile float-right">
      <road-map-car />
    </div>
  </div>

</template>

<script>

export default {
  props: [
    'phase1',
    'phase2',
    'phase3',
    'phase4',
    'phase5',
    'phase6'
  ]
};

</script>

<style>

.roadmap-container-mobile .connector-1 {
  margin-top: -10.3rem;
}

.roadmap-delorean-2-mobile {
  left: 6%;
  position: absolute;
  top: -155px;
  width: 279px;
}

.roadmap-delorean-3-mobile {
  position: absolute;
  left: 25%;
  width: 55%;
}

</style>
