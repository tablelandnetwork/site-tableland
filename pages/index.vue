<template>
  <div>
    <Desktop v-bind="conceptHierarchyAndContentIterationData" />
    <Mobile v-bind="iPhone1313Pro2Data" />
  </div>
</template>

<script>

import { conceptHierarchyAndContentIterationData, iPhone1313Pro2Data } from '@/data';

export default {
  data: function () {
    return {
      conceptHierarchyAndContentIterationData: conceptHierarchyAndContentIterationData,
      iPhone1313Pro2Data: iPhone1313Pro2Data
    };
  }
};

</script>
