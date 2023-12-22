<template>
  <button @click="toggle" :class="{ 'wo-checked': value }" class="wo-switch">
    <span></span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: boolean;
}>();
const emit = defineEmits(["update:value"]);
const toggle = () => {
  emit("update:value", !props.value);
};
</script>

<style lang="scss">
$bh: 22px;
$sh: $bh - 4px;
.wo-switch {
  width: $bh * 2;
  height: $bh;
  border: none;
  border-radius: $bh / 2;
  background-color: #bfbfbf;
  position: relative;
  cursor: pointer;
  &:focus,
  &.wo-checked:focus {
    outline: none;
  }
  > span {
    width: $sh;
    height: $sh;
    border-radius: $sh / 2;
    position: absolute;
    left: 2px;
    top: 2px;
    background-color: white;
    transition: all 250ms;
  }
  &.wo-checked {
    background-color: #5993f9;
  }
  &.wo-checked > span {
    left: calc(100% - #{$sh} - 2px);
  }
  &:active {
    > span {
      width: calc(#{$sh} + 4px);
    }
  }
  &.wo-checked:active {
    > span {
      width: calc(#{$sh} + 4px);
      margin-left: -4px;
    }
  }
}
</style>
