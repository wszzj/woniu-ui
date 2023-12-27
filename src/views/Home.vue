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

<script lang="ts" setup>
import TopNav from "@/components/TopNav.vue";
</script>

<style lang="scss" scoped>
main {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 64px;
  align-items: center;
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
