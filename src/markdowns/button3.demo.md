```
<template>
  <div>
    <Button size="small">实线按钮</Button>
    <Button>实线按钮</Button>
    <Button size="big">实线按钮</Button>
  </div>
  <div>
    <Button theme="dashed" size="small">虚线按钮</Button>
    <Button theme="dashed">虚线按钮</Button>
    <Button theme="dashed" size="big">虚线按钮</Button>
  </div>
  <div>
    <Button level="primary" size="small">主要按钮</Button>
    <Button level="primary">主要按钮</Button>
    <Button level="primary" size="big">主要按钮</Button>
  </div>
  <div>
    <Button level="danger" size="small">危险按钮</Button>
    <Button level="danger">危险按钮</Button>
    <Button level="danger" size="big">危险按钮</Button>
  </div>
</template>
<script setup lang="ts">
import { Button } from "woniu-ui-1";
import "woniu-ui-1/dist/style.css"
</script>
```