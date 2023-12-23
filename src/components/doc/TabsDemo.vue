<template>
  <div>Tabs示例</div>
  <h1>示例1</h1>
  <Tabs v-model:selected="title">
    <Tab title="导航1112">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts" setup>
import Tabs from "@/lib/Tabs.vue";
import Tab from "@/lib/Tab.vue";
import { ref } from "vue";
const title = ref("导航1112");
</script>

<style lang="scss" scoped></style>
