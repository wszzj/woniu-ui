<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";
const asideVisible = ref(false);
provide("asideVisible", asideVisible);
</script>
<style lang="scss">
@import "./style.scss";
body {
  font-family: $font-hei;
}
</style>
