<template>
  <div>dialog示例</div>
  <h1>示例1</h1>
  <Button level="primary" @click="toggle">打开对话框</Button>
  <Dialog v-model:visible="visible" :closeOnClickOverlay="false"></Dialog>
</template>

<script setup lang="ts">
import Dialog from "@/lib/Dialog.vue";
import Button from "@/lib/Button.vue";
import { ref } from "vue";
const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};
</script>

<style></style>
