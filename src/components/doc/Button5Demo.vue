<template>
  <Button level="primary" loading>加载中</Button>
  <Button loading>加载中</Button>
  <Button level="danger" loading>加载中</Button>
</template>
<script setup lang="ts">
import Button from "@/lib/Button.vue";
</script>
<style lang="scss" scoped>
Button {
  margin-right: 16px;
}
@media (max-width: 600px) {
  Button {
    margin-bottom: 8px;
  }
}
</style>
