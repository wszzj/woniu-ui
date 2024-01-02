```
<template>
  <Switch v-model:value="bool" disabled />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { Switch } from "woniu-ui-1";
import "woniu-ui-1/dist/style.css"
const bool = ref(false);
</script>
```