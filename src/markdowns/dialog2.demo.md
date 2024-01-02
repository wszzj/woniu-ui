```
<template>
  <Button level="primary" @click="showDialog">打开对话框</Button>
  <Dialog />
</template>
<script setup lang="ts">
import { Button , Dialog , openDialog } from "woniu-ui-1";
import "woniu-ui-1/dist/style.css"
const showDialog = () => {
  openDialog({
    title: "标题",
    content: "内容。。。。。。。",
    cancel: () => {
      //返回值 true 或 false 判断对话框是否关闭
      return true;
    },
    confirm: () => {
      //返回值 true 或 false 判断对话框是否关闭
      return true;
    },
    //true 或 false 判断点击阴影区域是否关闭对话框
    closeOnClickOverlay: true,
  });
};
</script>
```