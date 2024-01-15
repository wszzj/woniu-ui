<template>
  <footer>
    <hr />
    Made with ❤ by Zzj
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
footer {
  width: 100%;
  flex-shrink: 0;
  text-align: center;
  line-height: 48px;
  font-size: 14px;
  height: 48px;
  background-color: #f1f3fa;
  overflow: hidden;
}
@media (prefers-color-scheme: dark) {
  footer {
    color: #fff;
    background-color: #0e1117;
  }
  hr {
    filter: invert(100%);
  }
}
</style>
