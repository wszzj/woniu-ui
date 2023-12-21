<template>
  <div class="docWrapper">
    <top-nav class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h3>组件列表</h3>
        <ul>
          <li><router-link to="/doc/switch">Switch组件 </router-link></li>
          <li><router-link to="/doc/button">Button组件 </router-link></li>
          <li><router-link to="/doc/dialog">Dialog组件 </router-link></li>
          <li><router-link to="/doc/tabs">Tabs组件 </router-link></li>
        </ul>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import TopNav from "@/components/TopNav.vue";
import { asideVisibleKey } from "../keys";
const asideVisible = inject(asideVisibleKey);
</script>

<style lang="scss" scoped>
.docWrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
      padding-top: 50px;
    }
  }

  > .content {
    display: flex;
    flex-direction: row;
    > aside {
      flex-shrink: 0;
    }
    > main {
      flex-grow: 1;
      padding: 16px;
      overflow: auto;
    }
  }
}
aside {
  background-color: green;
  width: 150px;
  padding: 16px;
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 70px;
  height: 100%;
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
