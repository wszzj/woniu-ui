<template>
  <header class="topNav">
    <SwitchIconComponent class="svg-icon" @click="toggleAside" />
    <router-link to="/" class="logo">LOGO</router-link>
    <ol>
      <li>菜单1</li>
      <li>菜单2</li>
      <li>Github</li>
    </ol>
  </header>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import SwitchIconComponent from "../assets/icons/switchIcon.svg?component";
const toggleAside = inject<() => void>("toggleAside");
</script>

<style lang="scss" scoped>
.topNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  font-size: 16px;
  background-color: pink;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  height: 50px;
  .icon {
    display: none;
  }
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > ol {
    display: flex;
    align-items: center;

    > li {
      padding-left: 9px;
    }
  }
  @media (max-width: 500px) {
    > ol {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .icon {
      display: inline-block;
      color: #e3e3e3;
    }
  }
}
</style>
