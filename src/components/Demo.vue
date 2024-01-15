<template>
  <div class="demo">
    <h2>{{ title }}</h2>
    <div class="demo-component">
      <slot name="exampleCode"></slot>
    </div>
    <div class="demo-action">
      <Button @click="toggleCode">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre v-highlight><slot name="exampleMd"></slot></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const codeVisible = ref<boolean>(false);
const toggleCode = () => {
  codeVisible.value = !codeVisible.value;
};
const props = defineProps<{
  title: string;
}>();
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
    padding: 12px 0;
  }
}
:slotted(.markdown-body) {
  font-size: 19px;
}
@media (prefers-color-scheme: dark) {
  .demo {
    background: #eee;
    color: #000;
  }
}
</style>
