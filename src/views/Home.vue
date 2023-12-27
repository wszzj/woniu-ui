<template>
  <div class="main">
    <top-nav :switchIconVisible="switchIconVisible" />
    <div class="banner">
      <h1>蜗牛UI</h1>
      <h3>一个轻量化的UI组件库</h3>
      <div class="link">
        <router-link to="/doc/get-start">
          <Button level="primary">开始使用</Button>
        </router-link>
        <router-link to="/doc/intro">
          <Button>介绍</Button>
        </router-link>
      </div>
    </div>
    <div class="feature">
      <ul>
        <li>
          <VueLogoComponent />
          <h3>基于 Vue 3</h3>
          <p>使用了Composition API</p>
        </li>
        <li>
          <TypescriptLogoComponent />
          <h3>基于 TypeScript</h3>
          <p>源代码使用 TypeScript 书写</p>
        </li>
        <li>
          <ReadLogoComponent />
          <h3>代码易读</h3>
          <p>每个组件代码简洁易懂</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TopNav from "@/components/TopNav.vue";
import { ref } from "vue";
import Button from "../lib/Button.vue";
import VueLogoComponent from "../assets/logos/vue.svg?component";
import TypescriptLogoComponent from "../assets/logos/typescript.svg?component";
import ReadLogoComponent from "../assets/logos/read.svg?component";

const switchIconVisible = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.main {
  > .banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h1 {
      padding: 100px 0 25px 0;
      font-weight: 600;
    }
    > h3 {
      font-size: 16px;
    }
    > .link {
      padding: 16px;
      > a {
        margin: 12px;
      }
    }
  }

  > .feature {
    > ul {
      display: flex;
      flex-wrap: wrap;
      margin: 32px;
      padding: 0 16px;
      > li {
        width: 100%;
        display: grid;
        margin: 12px 0;
        grid-template-areas:
          "logo title"
          "logo text";
        grid-template-columns: 100px auto;
        grid-template-rows: 1fr auto;
        > h3 {
          grid-area: title;
          font-size: 28px;
        }
        > p {
          grid-area: text;
          font-size: 18px;
        }
        > .icon {
          grid-area: logo;
          width: 4em;
          height: 4em;
        }
      }
    }
  }
  > footer {
    > .cp {
      text-align: center;
    }
  }
}
</style>
