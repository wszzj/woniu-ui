<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <Button>实线按钮</Button>
  <Button theme="dashed">虚线按钮</Button>
  <Button theme="text">文字</Button>
  <Button theme="link">链接</Button>
  <h1>示例2</h1>
  <div>
    <Button level="primary">主要按钮</Button>
    <Button>次要按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <Button size="small">实线按钮</Button>
    <Button>实线按钮</Button>
    <Button size="big">实线按钮</Button>
  </div>
  <div>
    <Button theme="dashed" size="small">虚线按钮</Button>
    <Button theme="dashed">虚线按钮</Button>
    <Button theme="dashed" size="big">虚线按钮</Button>
  </div>
  <div>
    <Button theme="text" size="small">文字</Button>
    <Button theme="text">文字</Button>
    <Button theme="text" size="big">文字</Button>
  </div>
  <div>
    <Button theme="link" size="small">链接</Button>
    <Button theme="link">链接</Button>
    <Button theme="link" size="big">链接</Button>
  </div>
  <div>
    <Button level="primary" size="small">主要按钮</Button>
    <Button level="primary">主要按钮</Button>
    <Button level="primary" size="big">主要按钮</Button>
  </div>
  <div>
    <Button level="danger" size="small">危险按钮</Button>
    <Button level="danger">危险按钮</Button>
    <Button level="danger" size="big">危险按钮</Button>
  </div>
  <div>
    <Button theme="text" level="danger" size="small">危险文字</Button>
    <Button theme="text" level="danger">危险文字</Button>
    <Button theme="text" level="danger" size="big">危险文字</Button>
  </div>
  <div>
    <Button theme="link" level="danger" size="small">危险链接</Button>
    <Button theme="link" level="danger">危险链接</Button>
    <Button theme="link" level="danger" size="big">危险链接</Button>
  </div>
  <h1>示例4</h1>
  <div>
    <Button>实线按钮</Button>
    <Button disabled>实线按钮</Button>
  </div>
  <div>
    <Button theme="dashed">虚线按钮</Button>
    <Button theme="dashed" disabled>虚线按钮</Button>
  </div>
  <div>
    <Button theme="text">文字</Button>
    <Button theme="text" disabled>文字</Button>
  </div>
  <div>
    <Button theme="link">链接</Button>
    <Button theme="link" disabled>链接</Button>
  </div>
  <div>
    <Button level="primary">主要按钮</Button>
    <Button level="primary" disabled>主要按钮</Button>
  </div>
  <div>
    <Button level="danger">危险按钮</Button>
    <Button level="danger" disabled>危险按钮</Button>
  </div>
  <div>
    <Button theme="text" level="danger">危险文字</Button>
    <Button theme="text" level="danger" disabled>危险文字</Button>
  </div>
  <div>
    <Button theme="link" level="danger">危险链接</Button>
    <Button theme="link" level="danger" disabled>危险链接</Button>
  </div>
  <h1>示例5</h1>
  <Button level="primary" loading>加载中</Button>
  <Button loading>加载中</Button>
  <Button level="danger" loading>加载中</Button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
