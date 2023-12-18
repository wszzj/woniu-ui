<template>
  <div>
    <top-nav />
    <aside>
      <h3>组件列表</h3>
      <ul>
        <li><router-link to="/doc/switch">Switch组件 </router-link></li>
        <li><router-link to="/doc/button">Button组件 </router-link></li>
        <li><router-link to="/doc/dialog">Dialog组件 </router-link></li>
        <li><router-link to="/doc/tab">Tab组件 </router-link></li>
      </ul>
    </aside>
    <main>
      <div>主要内容</div>
    </main>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  components: { TopNav },
};
</script>

<style lang="scss" scoped>
aside {
  background-color: green;
  width: 150px;
  padding: 16px;
  > h3 {
    margin-bottom: 4px;
  }
  > ul {
    > li {
      padding: 4px 0;
    }
  }
}
</style>
