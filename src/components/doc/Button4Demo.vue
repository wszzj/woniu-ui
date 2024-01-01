<template>
  <div>
    <Button>实线按钮</Button>
    <Button disabled>实线按钮</Button>
  </div>
  <div>
    <Button theme="dashed">虚线按钮</Button>
    <Button theme="dashed" disabled>虚线按钮</Button>
  </div>
  <div class="notButton">
    <span><Button theme="text">文字</Button></span>
    <span><Button theme="text" disabled>文字</Button></span>
  </div>
  <div class="notButton">
    <span><Button theme="link">链接</Button></span>
    <span><Button theme="link" disabled>链接</Button></span>
  </div>
  <div>
    <Button level="primary">主要按钮</Button>
    <Button level="primary" disabled>主要按钮</Button>
  </div>
  <div>
    <Button level="danger">危险按钮</Button>
    <Button level="danger" disabled>危险按钮</Button>
  </div>
  <div class="notButton">
    <span><Button theme="text" level="danger">危险文字</Button></span>
    <span><Button theme="text" level="danger" disabled>危险文字</Button></span>
  </div>
  <div class="notButton">
    <span><Button theme="link" level="danger">危险链接</Button></span>
    <span><Button theme="link" level="danger" disabled>危险链接</Button></span>
  </div>
</template>
<script setup lang="ts">
import Button from "@/lib/Button.vue";
</script>
<style lang="scss" scoped>
Button {
  margin-right: 16px;
  margin-bottom: 8px;
}
.notButton {
  margin-bottom: 8px;
  > span {
    margin-right: 16px;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
