<template>
  <Switch v-model:value="bool" class="theme" @click="toggleTheme" />
</template>
<script setup lang="ts">
import { ref, inject } from "vue";
import Switch from "@/lib/Switch.vue";
import { toggleThemeKey } from "../keys";
const bool = ref(false);
const toggleTheme = inject(toggleThemeKey);
</script>
<style lang="scss" scoped></style>
