<template>
  <h1>Button组件示例</h1>
  <Demo title="基本用法">
    <template #exampleCode>
      <Button1Demo />
    </template>
    <template #exampleMd>
      <Button1Md />
    </template>
  </Demo>
</template>

<script setup lang="ts">
import Button1Demo from "./Button1Demo.vue";
</script>
