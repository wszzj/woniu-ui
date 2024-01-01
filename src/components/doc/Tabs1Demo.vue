<template>
  <Tabs v-model:selected="title">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>
<script setup lang="ts">
import Tabs from "@/lib/Tabs.vue";
import Tab from "@/lib/Tab.vue";
import { ref } from "vue";
const title = ref("导航1");
</script>
