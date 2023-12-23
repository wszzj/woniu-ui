<template>
  <div>Switch示例</div>
  <h1>示例1</h1>
  <Switch v-model:value="bool" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Switch from "@/lib/Switch.vue";
const bool = ref(false);
</script>

<style></style>
