<template>
  <button @click="toggle" :class="{ checked: value }"><span></span></button>
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

<style lang="scss" scoped>
$bh: 22px;
$sh: $bh - 4px;
button {
  width: $bh * 2;
  height: $bh;
  border: none;
  border-radius: $bh / 2;
  background-color: #bfbfbf;
  position: relative;
  cursor: pointer;
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
  &.checked {
    background-color: #5993f9;
  }
  &.checked > span {
    left: calc(100% - #{$sh} - 2px);
  }
  &:active {
    > span {
      width: calc(#{$sh} + 4px);
    }
  }
  &.checked:active {
    > span {
      width: calc(#{$sh} + 4px);
      margin-left: -4px;
    }
  }
}
</style>
