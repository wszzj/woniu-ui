```
<template>
  <Button level="primary" @click="toggle">打开对话框</Button>
  <Dialog
    v-model:visible="visible"
    :closeOnClickOverlay="false"
    :cancel="cancel"
    :confirm="confirm"
  >
    <template #title>
      <div class="wo-title">标题</div>
    </template>
    <template #content>
      <p>内容。。。。。。。</p>
      <p>内容。。。。。。。</p>
      <p>内容。。。。。。。</p>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import Button from "@/lib/Button.vue";
import Dialog from "@/lib/Dialog.vue";
import { ref } from "vue";
const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};
const cancel = () => {
  //返回值 true 或 false 判断对话框是否关闭
  return true;
};
const confirm = () => {
  //返回值 true 或 false 判断对话框是否关闭
  return true;
};
</script>
```