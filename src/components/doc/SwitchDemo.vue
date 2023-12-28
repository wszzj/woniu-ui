<template>
  <h1>Switch组件示例</h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Switch1Demo />
    </div>
    <div class="demo-action">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre v-highlight><Switch1Md /></pre>
    </div>
  </div>
  <div class="demo">
    <h2>支持disable</h2>
    <div class="demo-component">
      <Switch2Demo />
    </div>
    <div class="demo-action">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre v-highlight><Switch2Md /></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/lib/Button.vue";
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Switch1Md from "@/markdowns/switch1.demo.md";
import Switch2Md from "@/markdowns/switch2.demo.md";
</script>

<style lang="scss" scoped>
.demo {
  border: 1px solid #d9d9d9;
  padding: 12px;
  margin: 24px 0;

  display: flex;
  flex-direction: column;
  align-content: center;
  > h2 {
    padding: 6px 0;
    border-bottom: 1px solid #d9d9d9;
  }
  &-component {
    padding: 12px 0;
  }

  &-action {
    padding: 12px 0 18px 0;
  }
}
.markdown-body {
  font-size: 24px;
}
</style>
