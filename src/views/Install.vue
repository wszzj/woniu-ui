<template>
  <article class="markdown-body">
    <h1>安装</h1>
    <p>打开终端运行以下命令</p>
    <pre
      v-highlight
      class="language-bash"
    ><code>npm install woniu-ui</code></pre>
    <p>或者</p>
    <pre
      v-highlight
      class="language-bash"
    ><code>yarn install woniu-ui</code></pre>
  </article>
  <p>下一节：<a class="link" href="#/doc/get-start">开始使用</a></p>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
p:last-child {
  padding-top: 12px;
  font-size: 16px;
}
a {
  text-decoration: underline;
}
a:focus,
a:hover {
  color: #8be4d4;
}
.language-bash {
  font-size: 16px;
}
</style>
