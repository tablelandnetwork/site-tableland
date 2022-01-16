<template>
  <Desktop v-bind="conceptHierarchyAndContentIterationData" />
</template>

<script>

import { conceptHierarchyAndContentIterationData } from '@/data';

export default {
  data: function () {
    return {
      conceptHierarchyAndContentIterationData: conceptHierarchyAndContentIterationData
    };
  }
};

</script>
