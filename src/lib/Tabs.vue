<template>
  <div>
    <div v-for="(t, i) in titles" :key="i">{{ t }}</div>
    <component v-for="(el, i) in defaults" :is="el" :key="i" />
  </div>
</template>

<script setup lang="ts">
import Tab from "@/lib/Tab.vue";
import { VNode } from "vue";

const slots = defineSlots<{
  default(): any;
}>();
const defaults = slots.default();
defaults.forEach((element: VNode) => {
  if (element.type !== Tab) {
    throw new Error("Tabs 子标签必须是 Tab");
  }
});
const titles = defaults.map((element: VNode) => {
  if (element.props) {
    return element.props.title;
  }
});
</script>

<style lang="scss"></style>
