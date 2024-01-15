<template>
  <h1>Button组件示例</h1>
  <Demo title="基本类型">
    <template #exampleCode>
      <Button1Demo />
    </template>
    <template #exampleMd>
      <Button1Md />
    </template>
  </Demo>
  <Demo title="基础功能">
    <template #exampleCode>
      <Button2Demo />
    </template>
    <template #exampleMd>
      <Button2Md />
    </template>
  </Demo>
  <Demo title="支持大小调节">
    <template #exampleCode>
      <Button3Demo />
    </template>

    <template #exampleMd>
      <Button3Md />
    </template>
  </Demo>
  <Demo title="支持disabled">
    <template #exampleCode>
      <Button4Demo />
    </template>
    <template #exampleMd>
      <Button4Md />
    </template>
  </Demo>
  <Demo title="加载中状态">
    <template #exampleCode>
      <Button5Demo />
    </template>
    <template #exampleMd>
      <Button5Md />
    </template>
  </Demo>
  <p>
    下一节：<a href="#/doc/dialog"> <Button theme="link">Dialog组件</Button></a>
  </p>
</template>

<script setup lang="ts">
import Button1Demo from "./Button1Demo.vue";
import Button1Md from "@/markdowns/button1.demo.md";
import Button2Demo from "./Button2Demo.vue";
import Button2Md from "@/markdowns/button2.demo.md";
import Button3Demo from "./Button3Demo.vue";
import Button3Md from "@/markdowns/button3.demo.md";
import Button4Demo from "./Button4Demo.vue";
import Button4Md from "@/markdowns/button4.demo.md";
import Button5Demo from "./Button5Demo.vue";
import Button5Md from "@/markdowns/button5.demo.md";
</script>
<style lang="scss" scoped>
@media (prefers-color-scheme: dark) {
  .wo-button {
    background-color: #0e1117;
  }
}
</style>
