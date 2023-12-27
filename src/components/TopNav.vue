<template>
  <header class="topNav">
    <SwitchIconComponent class="svg-icon cut" @click="toggleAside" />
    <router-link to="/" class="logoWrapper">
      <SnailLogoComponent class="svg-icon logo" />
      <h1 class="name">蜗牛UI</h1>
    </router-link>

    <ol>
      <li><router-link to="/doc/intro">介绍</router-link></li>
      <li><router-link to="/doc/use">使用</router-link></li>
      <li>
        <a href="https://wszzj.github.io/woniu-ui/">
          <GithubIconComponent class="svg-icon github" />
        </a>
      </li>
    </ol>
  </header>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import SnailLogoComponent from "../assets/logos/snail.svg";
import SwitchIconComponent from "../assets/icons/switchIcon.svg?component";
import GithubIconComponent from "../assets/icons/github.svg?component";

import { toggleAsideKey } from "../keys";
const toggleAside = inject(toggleAsideKey);
</script>

<style lang="scss" scoped>
.topNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  font-size: 16px;
  box-shadow: 0 1px fade-out($color: #000000, $amount: 0.95);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  height: 50px;
  .cut {
    display: none;
  }
  > .logoWrapper {
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    > .logo {
      width: 48px;
      height: 48px;
    }
    > .name {
      font-size: 18px;
      text-wrap: nowrap;
      padding-left: 6px;
    }
  }
  > ol {
    display: flex;
    justify-content: center;
    align-items: center;

    > li {
      padding-left: 24px;
      &:hover,
      &:focus {
        color: #8be4d4;
      }
      .github {
        width: 2em;
        height: 2em;
        padding: 2px;
        border-radius: 2px;
        &:hover,
        &:focus {
          background-color: #f0f0f0;
        }
      }
    }
  }
  @media (max-width: 500px) {
    > ol {
      display: none;
    }
    > .logoWrapper {
      margin: 0 auto;
    }
    > .cut {
      display: inline-block;
      color: #e3e3e3;
    }
  }
}
</style>
