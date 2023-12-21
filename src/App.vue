<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";
const width = document.documentElement.clientWidth;
const asideVisible = ref(width > 500 ? true : false);
provide("asideVisible", asideVisible);
</script>
<style lang="scss">
@import "./style.scss";
body {
  font-family: $font-hei;
}
</style>
