<template>
  <h1>Switch组件示例</h1>
  <Demo title="基本用法">
    <template #exampleCode>
      <Switch1Demo />
    </template>
    <template #exampleMd>
      <Switch1Md />
    </template>
  </Demo>
  <Demo title="支持disabled">
    <template #exampleCode>
      <Switch2Demo />
    </template>
    <template #exampleMd>
      <Switch2Md />
    </template>
  </Demo>
  <p>
    下一节：<a href="#/doc/button"> <Button theme="link">Button组件</Button></a>
  </p>
</template>

<script setup lang="ts">
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Switch1Md from "@/markdowns/switch1.demo.md";
import Switch2Md from "@/markdowns/switch2.demo.md";
import { ref } from "vue";
const codeVisible = ref<boolean>(false);
const toggleCode = () => {
  codeVisible.value = !codeVisible.value;
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: underline;
}
a:focus,
a:hover {
  color: #8be4d4;
}
@media (prefers-color-scheme: dark) {
  .wo-button {
    background-color: #0e1117;
  }
}
</style>
