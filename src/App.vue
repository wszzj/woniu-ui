<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";
import { router } from "./router";
import { asideVisibleKey, toggleAsideKey } from "./keys";
const width = document.documentElement.clientWidth;
const asideVisible = ref(width > 500 ? true : false);
const toggleAside = () => {
  if (asideVisible) {
    asideVisible.value = !asideVisible.value;
  }
};
provide(asideVisibleKey, asideVisible);
provide(toggleAsideKey, toggleAside);
router.afterEach(() => {
  if (width <= 500) {
    asideVisible.value = false;
  }
});
</script>

<style lang="scss">
#app {
  font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica,
    "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB",
    "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN",
    "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti",
    SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
  $font-kai: Baskerville, Georgia, "Liberation Serif", "Kaiti SC", STKaiti,
    "AR PL UKai CN", "AR PL UKai HK", "AR PL UKai TW", "AR PL UKai TW MBE",
    "AR PL KaitiM GB", KaiTi, KaiTi_GB2312, DFKai-SB, "TW\-Kai", serif;
  $font-song: Georgia, "Nimbus Roman No9 L", "Songti SC", "Noto Serif CJK SC",
    "Source Han Serif SC", "Source Han Serif CN", STSong, "AR PL New Sung",
    "AR PL SungtiL GB", NSimSun, SimSun, "TW\-Sung", "WenQuanYi Bitmap Song",
    "AR PL UMing CN", "AR PL UMing HK", "AR PL UMing TW", "AR PL UMing TW MBE",
    PMingLiU, MingLiU, serif;
}
</style>
