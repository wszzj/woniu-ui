<template>
  <article class="markdown-body">
    <h1>开始使用</h1>
    <p>请先安装本组件库</p>
    <p>然后在你的代码中写入下面的代码</p>
    <pre
      v-highlight
      class="language-javascript"
    ><code>import {Button,Tabs, Tab, Switch, Dialog, openDialog} from "woniu-ui-1"
import "woniu-ui-1/dist/style.css"//css文件也可以在main.ts中全局引入</code></pre>
    <h2>Vue单文件组件(TS+setup)</h2>
    <p>代码示例</p>
    <pre v-highlight class="language-html"><code>&lt;template&gt;
  &lt;div&gt;
    &lt;Button&gt;按钮&lt;/Button&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script lang="ts" setup&gt;
import { Button } from "woniu-ui-1";
import 'woniu-ui-1/dist/style.css';
&lt;/script&gt;</code></pre>
  </article>
  <p>
    下一节：<a class="link" href="#/doc/switch">
      <Button theme="link">Switch组件</Button>
    </a>
  </p>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.language-html {
  font-size: 16px;
}
.language-javascript {
  font-size: 16px;
}
p:last-child {
  padding-top: 12px;
  font-size: 16px;
}
@media (prefers-color-scheme: dark) {
  .wo-button {
    background-color: #0e1117;
  }
}
</style>
