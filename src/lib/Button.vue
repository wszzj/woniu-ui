<template>
  <div>
    <button v-bind="$attrs"><slot></slot></button>
  </div>
</template>

<script lang="ts" setup>
import { useAttrs } from "vue";

defineOptions({
  inheritAttrs: false,
});
const attrs = useAttrs();
console.log(attrs);

const emit = defineEmits();
</script>

<style lang="scss" scoped></style>
