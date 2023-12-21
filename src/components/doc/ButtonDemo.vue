<template>
  <Button @click="onClick" size="small">按钮</Button>
</template>

<script setup lang="ts">
import Button from "@/lib/Button.vue";

const onClick = () => {
  console.log("hi");
};
</script>

<style lang="scss" scoped></style>
