<template>
  <div class="flex-row">
    <div class="desktop-tab-group border-2px-black">
      <div v-for="(tab, i) in tabsData" class="overlap-group-5">
        <div v-if="activeTab === i" class="desktop-tab-link">
          <div class="text valign-text-middle poppins-semi-bold-seashell-14px">{{ tab.tabText }}</div>
        </div>

        <div v-if="activeTab !== i" class="desktop-tab-link-1" @click="setTab(i)">
          <div class="text-3 valign-text-middle poppins-semi-bold-black-14px">{{ tab.tabText }}</div>
        </div>
      </div>
    </div>
    <div class="frame-75 border-2px-black">
      <div class="frame-45-1">
        <p v-for="text in tabsData[activeTab].sqlText" class="select-from-axie_i-1 firacode-normal-white-16px">
          <span :class="text.className" class="span-1">{{ text.text }}</span>
        </p>
      </div>
      <div class="frame-17-1">
        <desktop-table-row
          :isHeader="true"
          :row="tabsData[activeTab].columns"
        />

        <div v-for="row in tabsData[activeTab].rows">
          <desktop-table-row
            :row="row"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import DesktopTableRow from "./DesktopTableRow";
export default {
  name: "DesktopTabGroup",
  components: {
    DesktopTableRow
  },
  props: [
    "tabsData"
  ],
  data: function () {
    return {
      activeTab: 0
    };
  },
  methods: {
    setTab: function (i) {
      this.activeTab = i;
    }
  }
};
</script>

<style>
.desktop-tab-group {
  align-items: flex-start;
  flex-direction: column;
  border-radius: 20px;
  display: flex;
  overflow: hidden;
  width: 285px;
}

.overlap-group-5 {
  height: 60px;
  position: relative;
  width: 285px;
  border-bottom: 2px solid black;
}

.overlap-group-5:last-child {
  height: 60px;
  position: relative;
  width: 285px;
  border-bottom: none;
}

.line-2-1 {
  height: 2px;
  left: 0;
  position: absolute;
  top: 59px;
  width: 285px;
}

.line-3 {
  height: 2px;
  left: 0;
  position: absolute;
  top: 119px;
  width: 285px;
}

.line-4-1 {
  height: 2px;
  left: 0;
  position: absolute;
  top: 179px;
  width: 285px;
}


.desktop-tab-link-1 {
  align-items: center;
  display: flex;
  height: 60px;
  min-width: 285px;
  padding: 0 30px;
  cursor: pointer;
}

.text-3 {
  height: 20px;
  letter-spacing: 2.1px;
  line-height: 19.6px;
  min-width: 203px;
  text-align: center;
  white-space: nowrap;
}

.desktop-tab-link-1.desktop-tab-link-2 {
  top: 120px;
}

.desktop-tab-link-1.desktop-tab-link-2 .text-3 {
  min-width: 181px;
}

.desktop-tab-link-1.desktop-tab-link-3 {
  top: 180px;
}

.desktop-tab-link-1.desktop-tab-link-3 .text-3 {
  min-width: 94px;
}

.desktop-tab-link {
  align-items: center;
  background-color: var(--black);
  display: flex;
  height: 60px;
  left: 0;
  min-width: 285px;
  padding: 0 30px;
  position: absolute;
  top: 0;
}

.text {
  height: 20px;
  letter-spacing: 2.1px;
  line-height: 19.6px;
  min-width: 192px;
  text-align: center;
  white-space: nowrap;
}


.select-from-axie_i-1 {
  letter-spacing: 0.3px;
  min-height: 42px;
  margin-top: 1rem;
  margin-right: 1rem;
}

</style>
