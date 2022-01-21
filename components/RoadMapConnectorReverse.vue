<template>
  <svg width="100%" :viewBox="'0 0 100 ' + (ratio ? ratio * 100 : 100)" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path :d="path" stroke="black" stroke-width="1" />
  </svg>
</template>

<script>
export default {
  props: ['ratio'],
  computed: {
    path: function () {
      return `M1 1 v${this.getY(60) / 4} a20,20 90,0,0 20,20 h58 a20,20 90,0,1 20,20 v${this.getY(60) / 4}`;
    }
  },
  methods: {
    getY: function (normVal) {
      return normVal * (this.ratio || 1);
    }
  }
};
</script>
