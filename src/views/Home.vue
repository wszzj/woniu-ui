<template>
  <div>
    <top-nav />
    <main>
      <h1>蜗牛UI</h1>
      <h2>一个轻量化的UI组件库</h2>
      <div class="link">
        <router-link to="/doc">快速上手</router-link>
        <router-link to="/doc">安装</router-link>
      </div>
      <div class="content">内容</div>
    </main>
    <footer>
      <div class="cp">copyright notice</div>
    </footer>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  components: { TopNav },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: green;
  > h1 {
    padding-top: 48px;
  }
  > h2 {
    padding-top: 24px;
  }
  > .link {
    padding: 16px;
    > a {
      margin: 12px;
    }
  }
  > .content {
  }
}
footer {
  > .cp {
    text-align: center;
  }
}
</style>
