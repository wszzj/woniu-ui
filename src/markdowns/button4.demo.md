```
<template>
  <div>
    <Button>实线按钮</Button>
    <Button disabled>实线按钮</Button>
  </div>
  <div>
    <Button theme="dashed">虚线按钮</Button>
    <Button theme="dashed" disabled>虚线按钮</Button>
  </div>
  <div>
    <Button theme="text">文字</Button>
    <Button theme="text" disabled>文字</Button>
  </div>
  <div>
    <Button theme="link">链接</Button>
    <Button theme="link" disabled>链接</Button>
  </div>
  <div>
    <Button level="primary">主要按钮</Button>
    <Button level="primary" disabled>主要按钮</Button>
  </div>
  <div>
    <Button level="danger">危险按钮</Button>
    <Button level="danger" disabled>危险按钮</Button>
  </div>
  <div>
    <Button theme="text" level="danger">危险文字</Button>
    <Button theme="text" level="danger" disabled>危险文字</Button>
  </div>
  <div>
    <Button theme="link" level="danger">危险链接</Button>
    <Button theme="link" level="danger" disabled>危险链接</Button>
  </div>
</template>
<script setup lang="ts">
import { Button } from "woniu-ui-1";
import "woniu-ui-1/dist/style.css"
</script>
```