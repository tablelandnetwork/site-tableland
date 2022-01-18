<template>
  <div class="grid grid-cols-4 tables-tab-group">
    <!-- tabs -->
    <div>
      <div class="rounded-2xl border-2px-black overflow-hidden">
        <div v-for="(tab, i) in tabsData" :key="tab.id">
          <div
            :class="{
              'bg-var-black poppins-semi-bold-seashell-14px': activeTab === i,
              'px-16 cursor-pointer poppins-semi-bold-black-14px': activeTab !== i,
              'border-b-2 border-black border-solid': activeTab !== i && i < (tabsData.length - 1)
            }"
            class="items-center p-4"
            @click="setTab(i)"
          >
            {{ tab.tabText }}
          </div>
        </div>
      </div>
    </div>

    <!-- content -->
    <div class="col-span-3 flex items-start flex-col ml-4 rounded-2xl border-2px-black bg-var-black overflow-hidden">
      <!-- sql -->
      <div class="flex items-center py-4">
        <p v-for="text in tabsData[activeTab].sqlText" :key="text.text" class="firacode-normal-white-16px px-4">
          <span :class="text.className" class="span-1">{{ text.text }}</span>
        </p>
      </div>
      <!-- table -->
      <div class="px-8 py-10 bg-white w-full">
        <table class="table-auto w-full p-4">
          <thead>
            <tr class="border-b-2 border-black border-solid">
              <th
                v-for="cell in tabsData[activeTab].columns"
                :key="cell"
                class="firacode-medium-black-16px text-left py-4"
              >
                {{ cell }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in tabsData[activeTab].rows" :key="row[0]" class="border-b border-black border-solid">
              <td
                v-for="cell in row"
                :key="cell"
                class="firacode-normal-black-16px py-4"
              >
                {{ cell }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: [
    'tabsData'
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
