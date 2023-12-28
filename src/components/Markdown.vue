<template>
  <component :is="in" />
</template>

<script setup lang="ts">
import intro from "../markdowns/Intro.md";
import { shallowRef } from "vue";

const props = defineProps<{
  path: string;
}>();
const content = shallowRef<string | null>(null);
import(props.path).then((result) => {
  content.value = result.default;
});
</script>
