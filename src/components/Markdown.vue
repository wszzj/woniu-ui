<template>
  <component :is="content" />
</template>

<script setup lang="ts">
import { shallowRef } from "vue";

const props = defineProps<{
  path: string;
}>();
const content = shallowRef<string | null>(null);
import(props.path).then((result) => {
  content.value = result.default;
});
</script>
