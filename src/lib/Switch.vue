<template>
  <button @click="toggle" :class="{ checked }"><span></span></button>
</template>

<script setup lang="ts">
import { ref } from "vue";
const checked = ref(false);
const toggle = () => {
  checked.value = !checked.value;
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
  background-color: lightgrey;
  position: relative;
}
span {
  width: $sh;
  height: $sh;
  border-radius: $sh / 2;
  position: absolute;
  left: 2px;
  top: 2px;
  background-color: white;
  transition: left 250ms;
}
button.checked {
  background-color: blue;
}
button.checked > span {
  left: calc(100% - #{$sh} - 2px);
}
</style>
