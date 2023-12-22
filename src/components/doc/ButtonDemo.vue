<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <Button theme="primary">主要按钮</Button>
  <Button>默认按钮</Button>
  <Button theme="dashed">虚线按钮</Button>
  <Button theme="text">文字按钮</Button>
  <Button theme="link">链接按钮</Button>
  <h1>示例2</h1>
  <Button size="small">小按钮</Button>
  <Button>默认按钮</Button>
  <Button size="big">大按钮</Button>
</template>

<script setup lang="ts">
import Button from "@/lib/Button.vue";
</script>

<style lang="scss" scoped></style>
