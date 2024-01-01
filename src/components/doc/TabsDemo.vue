<template>
  <h1>Tabs组件示例</h1>
  <Demo title="常规用法">
    <template #exampleCode>
      <Tabs1Demo />
    </template>
    <template #exampleMd>
      <Tabs1Md />
    </template>
  </Demo>
  <Demo title="支持disabled">
    <template #exampleCode>
      <Tabs2Demo />
    </template>
    <template #exampleMd>
      <Tabs2Md />
    </template>
  </Demo>
  <p>
    返回首个组件：<a href="#/doc/switch">
      <Button theme="link">Switch组件</Button></a
    >
  </p>
</template>

<script lang="ts" setup>
import Tabs1Demo from "./Tabs1Demo.vue";
import Tabs1Md from "@/markdowns/tabs1.demo.md";
import Tabs2Demo from "./Tabs2Demo.vue";
import Tabs2Md from "@/markdowns/tabs2.demo.md";
</script>
