<template>
  <div class="wo-dialog-overlay"></div>
  <div class="wo-dialog-wrapper">
    <header>
      <span class="title">标题</span>
      <span class="close">x</span>
    </header>
    <main>内容</main>
    <footer>
      <Button>确认</Button>
      <Button>取消</Button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import Button from "./Button.vue";
</script>

<style lang="scss"></style>
