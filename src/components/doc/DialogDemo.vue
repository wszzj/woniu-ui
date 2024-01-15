<template>
  <h1>Dialog组件示例</h1>
  <Demo title="常规用法">
    <template #exampleCode>
      <Dialog1Demo />
    </template>
    <template #exampleMd>
      <Dialog1Md />
    </template>
  </Demo>
  <Demo title="简洁用法">
    <template #exampleCode>
      <Dialog2Demo />
    </template>
    <template #exampleMd>
      <Dialog2Md />
    </template>
  </Demo>
  <p>
    下一节：<a href="#/doc/tabs"> <Button theme="link">Tabs组件</Button></a>
  </p>
</template>

<script setup lang="ts">
import Dialog1Demo from "./Dialog1Demo.vue";
import Dialog1Md from "@/markdowns/dialog1.demo.md";
import Dialog2Demo from "./Dialog2Demo.vue";
import Dialog2Md from "@/markdowns/dialog2.demo.md";
</script>
<style lang="scss" scoped>
@media (prefers-color-scheme: dark) {
  .wo-button {
    background-color: #0e1117;
  }
}
</style>
