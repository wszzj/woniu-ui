<template>
  <button :class="{ [`theme-${props.theme}`]: props.theme }" class="wo-button">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
export interface Props {
  theme: string;
}
const props = withDefaults(defineProps<Props>(), {
  theme: "default",
});
</script>

<style lang="scss" scoped>
$blue: #3a74f9;
$lightBlue: #5993f9;
.wo-button {
  box-sizing: border-box;
  font-size: 14px;
  padding: 8px 15px;
  border-radius: 6px;
  margin-right: 16px;
  margin-top: 16px;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  box-shadow: 0 1px 0 fade-out($color: #000000, $amount: 0.9);
  cursor: pointer;
  &:hover,
  &:focus {
    color: #4096ff;
    border-color: #4096ff;
  }
}
</style>
