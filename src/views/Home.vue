<template>
  <div class="main">
    <top-nav :switchIconVisible="switchIconVisible" />
    <div class="banner">
      <div class="leftCircle"></div>
      <div class="rightCircle"></div>
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
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import TopNav from "@/components/TopNav.vue";
import { ref } from "vue";
import VueLogoComponent from "../assets/logos/vue.svg?component";
import TypescriptLogoComponent from "../assets/logos/typescript.svg?component";
import ReadLogoComponent from "../assets/logos/read.svg?component";

const switchIconVisible = ref<boolean>(false);
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .banner {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    overflow: hidden;
    box-shadow: 0 1px fade-out($color: #000000, $amount: 0.95);
    > .leftCircle {
      position: absolute;
      top: 20px;
      left: -46px;
      width: 150px;
      height: 150px;
      background: rgb(139, 228, 208);
      background: linear-gradient(
        90deg,
        rgba(139, 228, 208, 1) 0%,
        rgba(255, 255, 255, 1) 100%
      );
      border-radius: 80% 15%;
    }
    > .rightCircle {
      position: absolute;
      bottom: -20px;
      right: -56px;
      width: 150px;
      height: 150px;
      background: rgb(139, 228, 208);
      background: linear-gradient(
        90deg,
        rgba(139, 228, 208, 1) 0%,
        rgba(255, 255, 255, 1) 100%
      );
      border-radius: 80% 15%;
    }

    @media (max-width: 500px) {
    }
    > h1 {
      font-size: 48px;
      padding: 120px 0 25px 0;
      font-weight: 600;
    }
    > h3 {
      font-size: 18px;
    }
    > .link {
      padding: 32px;
      > a {
        margin: 12px;
        &:first-child {
          > Button {
            background-color: #3246a0;
          }
        }
      }
    }
  }

  > .feature {
    margin: 24px;
    padding: 0 16px;
    flex-grow: 1;
    > ul {
      display: flex;
      flex-wrap: wrap;

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
    @media (min-width: 800px) {
      > ul {
        > li {
          width: 50%;
        }
      }
    }
    @media (min-width: 1200px) {
      > ul {
        > li {
          width: 33.3333%;
        }
      }
    }
  }
}
</style>
