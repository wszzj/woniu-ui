<template>
  <h1>Switch组件示例</h1>
  <div class="demo">
    <h2>常规用法</h2>
    <div class="demo-component">
      <Switch v-model:value="bool" />
    </div>
    <div class="demo-action">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
    </div>
  </div>
  <div class="demo">
    <h2>支持disable</h2>
    <div class="demo-component">
      <Switch v-model:value="bool" disable />
    </div>
    <div class="demo-action">
      <Button>查看代码</Button>
    </div>
    <div class="demo-code">
      <pre>&lt;Switch v-model:value="bool" disable /&gt;</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Switch from "@/lib/Switch.vue";
import Button from "@/lib/Button.vue";

const bool = ref(false);
</script>

<style lang="scss" scoped>
.demo {
  border: 1px solid #d9d9d9;
  padding: 12px;
  margin: 24px 0;

  display: flex;
  flex-direction: column;
  align-content: center;
  > h2 {
    padding: 6px 0;
    border-bottom: 1px solid #d9d9d9;
  }
  &-component {
    padding: 12px 0;
  }

  &-action {
    padding: 12px 0 18px 0;
  }
}
</style>
