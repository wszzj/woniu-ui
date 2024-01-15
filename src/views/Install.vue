<template>
  <article class="markdown-body">
    <h1>安装</h1>
    <p>打开终端运行以下命令</p>
    <pre
      v-highlight
      class="language-bash"
    ><code>npm install woniu-ui-1</code></pre>
    <p>或者</p>
    <pre
      v-highlight
      class="language-bash"
    ><code>yarn install woniu-ui-1</code></pre>
    <p>最新版本号：0.0.4</p>
  </article>

  <p>
    下一节：<a class="link" href="#/doc/get-start">
      <Button theme="link">开始使用</Button>
    </a>
  </p>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.language-bash {
  font-size: 16px;
}
@media (prefers-color-scheme: dark) {
  .wo-button {
    background-color: #0e1117;
  }
  .language-bash {
    color: #fff;
  }
}
</style>
