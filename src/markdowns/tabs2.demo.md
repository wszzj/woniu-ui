```
<template>
  <Tabs v-model:selected="title">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2" disabled>内容2</Tab>
    <Tab title="导航3">内容3</Tab>
    <Tab title="导航4">内容4</Tab>
  </Tabs>
</template>
<script setup lang="ts">
import { Tabs , Tab } from "woniu-ui-1";
import "woniu-ui-1/dist/style.css"
import { ref } from "vue";
const title = ref("导航1");
</script>
```