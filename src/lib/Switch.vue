<template>
  <button
    :class="{ 'wo-checked': value }"
    class="wo-switch"
    :disabled="disabled"
    @click="toggle"
  >
    <span></span>
  </button>
</template>

<script setup lang="ts">
export interface Props {
  value: boolean;
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  value: false,
  disabled: false,
});
const emit = defineEmits<{
  (e: "update:value", value: boolean): void;
}>();
const toggle = () => {
  if (!props.disabled) {
    emit("update:value", !props.value);
  }
};
</script>

<style lang="scss">
$bh: 22px;
$sh: $bh - 4px;
.wo-switch {
  width: calc($bh * 2);
  height: $bh;
  border: none;
  border-radius: calc($bh / 2);
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
    border-radius: calc($sh / 2);
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
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.65;
    > span {
      width: $sh;
    }
  }
}
</style>
