<template>
  <div class="grid grid-cols-1 lg:grid-cols-4 tables-tab-group">
    <!-- tabs -->
    <div v-if="ethAddress">
      <div class="rounded-2xl border-2px-black overflow-hidden">
        <div v-for="(tab, i) in tabsData" :key="tab.id">
          <div
            :class="{
              'bg-var-black poppins-semi-bold-seashell-14px': activeTab === i,
              'lg:px-16 cursor-pointer poppins-semi-bold-black-14px': activeTab !== i,
              'border-b-2 border-black border-solid': activeTab !== i && i < (tabsData.length)
            }"
            class="items-center p-4"
            @click="setTab(i)"
          >
            {{ tab.tabText }}
          </div>
        </div>

        <div>
          <div
            :class="{
              'bg-var-black poppins-semi-bold-seashell-14px': activeTab === tabsData.length,
              'lg:px-16 cursor-pointer poppins-semi-bold-black-14px': activeTab !== tabsData.length
            }"
            class="items-center p-4"
            @click="setTab(tabsData.length)"
          >
            PSQL Playground
          </div>
        </div>
      </div>
    </div>

    <!-- connect first -->
    <div v-if="!ethAddress" class="lg:col-span-4 flex flex-col items-start mt-4 lg:mt-0 lg:ml-4 rounded-2xl border-2px-black bg-var-black overflow-hidden">
      <!-- sql -->
      <div class="flex items-center py-4 h-8"></div>
      <!-- table -->
      <div class="flex items-center justify-center px-8 py-10 bg-white w-full h-full">
        <p class="poppins-normal-black-20px mr-4">Connect to Tableland to start exploring</p>
        <button-black
          button-text="Connect"
          size="sm"
          :has-arrow="true"
          @click="connect"
        />
      </div>
    </div>

    <!-- content -->
    <div v-if="ethAddress && tabsData[activeTab]" class="lg:col-span-3 flex items-start flex-col mt-4 lg:mt-0 lg:ml-4 rounded-2xl border-2px-black bg-var-black overflow-hidden">
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

    <div
      v-if="ethAddress && activeTab === tabsData.length"
      class="lg:col-span-3 flex items-start flex-col mt-4 lg:mt-0 lg:ml-4 rounded-2xl border-2px-black bg-var-black overflow-hidden"
    >
      <div class="flex">
        <div class="p-4 poppins-normal-14px text-gray-200 underline">
          Your Tables
        </div>
      </div>
      <!-- select table -->
      <div class="py-4 px-10 w-full relative">
        <div
          v-if="tableIndex >= 1"
          class="flex justify-center absolute left-2 top-1/2 -mt-2 text-gray-400 cursor-pointer font-black"
          @click="incTableIndex(-1)"
        >
          &lt;
        </div>
        <div
          v-if="tableIndex < allTablesLength"
          class="flex justify-center absolute right-2 top-1/2 -mt-2 text-gray-400 cursor-pointer font-black"
          @click="incTableIndex(1)"
        >
          &gt;
        </div>
        <div class="flex items-center overflow-hidden">
          <div
            v-for="table in allTables"
            :key="table.uuid"
            class="cursor-pointer px-8 py-2 rounded-3xl border border-gray-700 border-solid firacode-normal-16px text-green-500"
            :class="{
              'bg-gray-600': table.uuid === currentTableId
            }"
            @click="selectTable(table)"
          >
            {{ table.uuid }}
          </div>
        </div>
      </div>
      <!-- sql command -->
      <div class="flex items-center p-4 w-full">
        <form class="w-full" @submit.prevent="runCommand">
          <textarea
            v-model="playgroundSql"
            rows="4"
            class="bg-gray-500 focus:bg-gray-500 w-full firacode-normal-16px text-green-500 caret-green-500 mb-4"
            placeholder="SELECT * FROM todos LIMIT 10;"
          ></textarea>
          <button-black button-text="RUN" @click.prevent="runCommand"></button-black>
        </form>
      </div>
      <!-- query response -->
      <div class="px-8 py-10 bg-white w-full">
        <h3 v-if="playgroundResponse.error || playgroundResponse.result" class="orbitron-black-black-28px-2">Response:</h3>
        <pre
          v-if="playgroundResponse.error || playgroundResponse.result"
          class="bg-gray-600 firacode-normal-seashell-16px"
        >{{ JSON.stringify(playgroundResponse, null, 4) }}</pre>
      </div>
    </div>

  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  props: [
    'tabsData'
  ],
  data: function () {
    return {
      activeTab: 0,
      playgroundSql: '',
      tableIndex: 0
    };
  },
  computed: {
    ...mapState({
      ethAddress: state => state.ethAddress,
      playgroundResponse: state => state.playgroundResponse,
      allTables: function (state) {
        return state.allTables.slice(this.tableIndex);
      },
      allTablesLength: state => state.allTables.length,
      currentTableId: state => state.currentTableId
    })
  },
  methods: {
    setTab: function (i) {
      this.activeTab = i;
    },
    selectTable: function (table) {
      this.$store.commit('set', { key: 'currentTableId', value: table.uuid });
    },
    runCommand: async function () {
      await this.$store.dispatch('runSql', this.playgroundSql);
    },
    incTableIndex: function (inc) {
      this.tableIndex += inc;
    },
    connect: async function () {
      try {
        await this.$store.dispatch('connect');
      } catch (err) {
        console.log('error connecting to tableland');
        console.log(err);
        return;
      }

      console.log('connected');
    }
  }
};
</script>
