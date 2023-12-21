<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";
import { router } from "./router";
const width = document.documentElement.clientWidth;
const asideVisible = ref(width > 500 ? true : false);
provide("asideVisible", asideVisible);
router.afterEach(() => {
  if (width <= 500) {
    asideVisible.value = false;
  }
});
</script>

<style lang="scss">
@import "./style.scss";

body {
  font-family: $font-hei;
}
</style>
