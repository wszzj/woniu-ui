<template>
  <div disabled>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  disabled?: boolean;
}>();
</script>
