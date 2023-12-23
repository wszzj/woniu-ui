<template>
  <div class="wo-tabs">
    <div class="wo-tabs-nav" ref="container">
      <div
        v-for="(t, i) in titles"
        :key="i"
        class="wo-tabs-item"
        :class="{ selected: selected === t }"
        @click="select(t)"
        :ref="
          (el) => {
            if (t === selected) selectedEl = el;
          }
        "
      >
        {{ t }}
      </div>
      <div class="wo-tabs-underline" ref="underline"></div>
    </div>
    <div class="wo-tabs-content">
      <component :is="current" :key="selected" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Tab from "@/lib/Tab.vue";
import { VNode, computed, ref, watchEffect } from "vue";
const underline = ref<HTMLDivElement>();
const container = ref<HTMLDivElement>();
const selectedEl = ref<HTMLDivElement>();

const props = defineProps<{
  selected: string;
}>();
const emit = defineEmits<{
  (e: "update:selected", title: string): void;
}>();
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
const current = computed(() => {
  return defaults.filter((element: VNode) => {
    if (element.props) {
      return element.props.title === props.selected;
    }
  })[0];
});
const select = (title: string) => {
  emit("update:selected", title);
};
watchEffect(() => {
  if (selectedEl.value && underline.value && container.value) {
    const { width, left: left1 } = selectedEl.value.getBoundingClientRect();
    underline.value.style.width = width + "px";
    const { left: left2 } = container.value.getBoundingClientRect();
    const left = left1 - left2;
    underline.value.style.left = left + "px";
  }
});
</script>

<style lang="scss">
.wo-tabs {
  > .wo-tabs-nav {
    display: flex;
    position: relative;
    padding-bottom: 8px;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 300px;
      background-color: #d9d9d9;
      z-index: 1;
    }
    > .wo-tabs-item {
      margin-right: 16px;
      position: relative;
      cursor: pointer;
      &.selected {
        color: #3a74f9;
      }
    }
    > .wo-tabs-underline {
      position: absolute;
      bottom: -1px;
      left: 0;
      height: 3px;
      width: 50px;
      background-color: #3a74f9;
      z-index: 2;
      transition: all 250ms;
    }
  }
  > .wo-tabs-content {
    padding: 8px 0;
  }
}
</style>
