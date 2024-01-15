<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";
import { router } from "./router";
import {
  asideVisibleKey,
  toggleAsideKey,
  themeKey,
  toggleThemeKey,
} from "./keys";
const width = document.documentElement.clientWidth;
const app = document.querySelector("#app");
const asideVisible = ref(width > 500 ? true : false);
const theme = ref("light");
const toggleTheme = () => {
  if (theme.value === "light") {
    theme.value = "dark";

    app?.classList.add("dark");
  } else {
    theme.value = "light";
    app?.classList.remove("dark");
  }
};
const toggleAside = () => {
  if (asideVisible) {
    asideVisible.value = !asideVisible.value;
  }
};
provide(asideVisibleKey, asideVisible);
provide(toggleAsideKey, toggleAside);
provide(themeKey, theme);
provide(toggleThemeKey, toggleTheme);
router.afterEach(() => {
  if (width <= 500) {
    asideVisible.value = false;
  }
});
</script>

<style lang="scss">
#app {
  font-family: AliPuHui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
}

body {
  background-color: #fff;
  font-size: 16px;
}
@media screen and (prefers-color-scheme: dark) {
  body {
    color: #fff;
    background-color: #0e1117;
  }
}
</style>
