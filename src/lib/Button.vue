<template>
  <button :class="{ [`wo-theme-${theme}`]: theme }" class="wo-button">
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

<style lang="scss">
$blue: #3a74f9;
.wo-button {
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
  box-shadow: 0 0 1px fade-out($color: #000000, $amount: 0.9);
  cursor: pointer;
  &:hover,
  &:focus {
    color: #4096ff;
    border-color: #4096ff;
    outline: none;
  }
}
</style>
