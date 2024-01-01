<template>
  <Button level="primary">主要按钮</Button>
  <Button>普通按钮</Button>
  <Button level="danger">危险按钮</Button>
</template>
<script setup lang="ts">
import Button from "@/lib/Button.vue";
</script>
<style lang="scss" scoped>
Button {
  margin-right: 16px;
}
</style>
