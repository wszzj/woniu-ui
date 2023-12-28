<template>
  <component :is="content" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  path: string;
}>();
const content = ref<string | null>(null);
import(props.path).then((result) => {
  content.value = result.default;
});
</script>
