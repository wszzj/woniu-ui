<template>
  <template v-if="visible">
    <div class="wo-dialog-overlay" @click="OnClickOverlay"></div>
    <div class="wo-dialog-wrapper">
      <div class="wo-dialog">
        <header class="wo-header">
          <slot name="title"></slot>
          <span class="wo-close" @click="close">X</span>
        </header>
        <main>
          <slot name="content"></slot>
        </main>
        <footer class="wo-footer">
          <Button @click="cancel">取消</Button>
          <Button level="primary" @click="confirm">确认</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import Button from "@/lib/Button.vue";
export interface Props {
  visible?: boolean;
  closeOnClickOverlay?: boolean;
  cancel?: Function;
  confirm?: Function;
}
const props = withDefaults(defineProps<Props>(), {
  visible: false,
  closeOnClickOverlay: true,
});

const emit = defineEmits<{
  (e: "update:visible", value: boolean): void;
  (e: "cancel"): void;
  (e: "confirm", value: boolean): void;
}>();
const close = () => {
  emit("update:visible", false);
};
const OnClickOverlay = () => {
  if (props.closeOnClickOverlay) {
    close();
  }
};
const cancel = () => {
  if (props.cancel?.() !== false) {
    close();
  }
};
const confirm = () => {
  if (props.confirm?.() !== false) {
    close();
  }
};
</script>

<style lang="scss">
.wo-dialog-overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  overflow: auto;
  outline: 0;
  z-index: 10;
}
.wo-dialog-wrapper {
  position: relative;
  z-index: 15;
  background-color: #fff;
  position: fixed;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 20px;
  > .wo-dialog {
    padding: 12px;
    > .wo-header {
      display: flex;
      justify-content: space-between;
      > .wo-title {
        font-size: 20px;
        font-weight: 600;
        padding-bottom: 12px;
      }
      > .wo-close {
        cursor: pointer;
      }
    }
    > .wo-footer {
      text-align: end;
      padding-top: 12px;
      > .wo-button {
        margin-left: 12px;
      }
    }
  }
}
</style>
