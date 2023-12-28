```
<template>
  <Switch v-model:value="bool" disabled />
</template>
<script setup lang="ts">
import { ref } from "vue";
import Switch from "@/lib/Switch.vue";
const bool = ref(false);
</script>
```