<template>
  <header class="topNav">
    <div class="icon" @click="toggleAside">LOGO</div>
    <ol>
      <li>菜单1</li>
      <li>菜单2</li>
      <li>Github</li>
    </ol>
  </header>
</template>

<script lang="ts">
import { Ref, inject } from "vue";

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      if (asideVisible) {
        asideVisible.value = !asideVisible.value;
      }
    };
    return { toggleAside };
  },
};
</script>

<style lang="scss" scoped>
.topNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  font-size: 16px;
  background-color: pink;
  > .icon {
  }
  > ol {
    display: flex;
    align-items: center;

    > li {
      padding-left: 9px;
    }
  }
}
</style>
