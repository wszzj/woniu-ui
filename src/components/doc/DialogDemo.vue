<template>
  <div>dialog示例</div>
  <h1>示例1</h1>
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
  <h1>示例2</h1>
  <Button level="primary" @click="showDialog">打开对话框</Button>
  <Dialog></Dialog>
</template>

<script setup lang="ts">
import Dialog from "@/lib/Dialog.vue";
import Button from "@/lib/Button.vue";
import { openDialog } from "@/lib/openDialog";

import { ref } from "vue";
const visible = ref(false);

const toggle = () => {
  visible.value = !visible.value;
};
const cancel = () => {
  return true;
};
const confirm = () => {
  return true;
};
const showDialog = () => {
  openDialog({
    title: "标题",
    content: "内容。。。。。。。",
    cancel: () => {
      return true;
    },
    confirm: () => {
      return true;
    },
    closeOnClickOverlay: false,
  });
};
</script>

<style></style>
