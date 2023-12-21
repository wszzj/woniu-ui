<template>
  <Switch :value="bool" @update:value="bool = $event" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Switch from "@/lib/Switch.vue";
const bool = ref(false);
</script>

<style></style>
