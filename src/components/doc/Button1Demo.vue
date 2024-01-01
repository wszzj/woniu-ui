<template>
  <Button>实线按钮</Button>
  <Button theme="dashed">虚线按钮</Button>
  <span><Button theme="text">文字</Button></span>
  <span><Button theme="link">链接</Button></span>
</template>
<script setup lang="ts">
import Button from "@/lib/Button.vue";
</script>
<style lang="scss" scoped>
Button {
  margin-right: 16px;
}
span {
  margin: 0 8px;
}
</style>
