<template>
  <button :class="classes" class="wo-button" :disabled="disabled">
    <span class="wo-loading-circle" v-if="loading"></span>
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed } from "vue";

export interface Props {
  theme?: string;
  level?: string;
  size?: string;
  disabled?: boolean;
  loading?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  theme: "default",
  level: "default",
  size: "normal",
  disabled: false,
  loading: false,
});
const classes = computed(() => {
  return {
    [`wo-theme-${props.theme}`]: props.theme,
    [`wo-level-${props.level}`]: props.level,
    [`wo-size-${props.size}`]: props.size,
    "wo-loading": props.loading,
  };
});
</script>

<style lang="scss">
$blue: #3a74f9;
.wo-button {
  padding: 6px 16px;
  border-radius: 6px;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  box-shadow: 0 0 1px fade-out(#000000, 0.9);
  cursor: pointer;
  &:hover,
  &:focus {
    color: #4096ff;
    border-color: #4096ff;
    outline: none;
  }
  &.wo-theme-dashed {
    border: 1px dashed #d9d9d9;
    &:focus,
    &:hover {
      border-color: #4096ff;
    }
  }
  &.wo-theme-text {
    border: none;
    color: #000;
    box-shadow: none;
    margin: 0;
    padding: 0;
    &:focus,
    &:hover {
      background-color: #f0f0f0;
    }
    &:active {
      background-color: darken(#f0f0f0, 5%);
    }
  }
  &.wo-theme-link {
    border: none;
    color: #4096ff;
    box-shadow: none;
    margin: 0;
    padding: 0;
    &:focus,
    &:hover {
      color: lighten(#4096ff, 10%);
    }
  }
  &.wo-level-primary {
    background-color: $blue;
    color: #fff;
    &:hover,
    &:focus {
      background-color: lighten($blue, 5%);
    }
  }
  &.wo-level-danger {
    color: #e9564d;
    border-color: #e9564d;
    &:focus,
    &:hover {
      color: lighten(#e9564d, 10%);
    }
  }
  &.wo-size-small {
    font-size: 12px;
  }
  &.wo-size-big {
    font-size: 24px;
  }
  &[disabled] {
    cursor: not-allowed;
    background-color: #f5f5f5;
    color: #b8b8b8;
    border-color: #d9d9d9;
    &:hover,
    &:focus {
      border-color: #d9d9d9;
      background-color: #f5f5f5;
      outline: none;
      color: #b8b8b8;
    }
    &.wo-theme-text,
    &.wo-theme-link {
      background-color: #fff;
      &:hover,
      &:focus {
        border-color: #d9d9d9;
        background-color: #fff;
        outline: none;
      }
    }
  }
  &.wo-loading {
    cursor: default;
    > .wo-loading-circle {
      width: 14px;
      height: 14px;
      border: 2px solid;
      border-top-color: transparent;
      border-radius: 7px;
      margin-right: 5px;
      animation: spin infinite 1s linear;
    }
  }
}
@keyframes spin {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
