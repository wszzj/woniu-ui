import { createApp, h } from "vue";
import Dialog from "./Dialog.vue";
interface Options {
  title: string;
  content: string;
  cancel: Function;
  confirm: Function;
  closeOnClickOverlay: boolean;
}
export const openDialog = (options: Options) => {
  const { title, content, cancel, confirm, closeOnClickOverlay } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            if (newVisible === false) {
              app.unmount();
              div.remove();
            }
          },
          cancel,
          confirm,
          closeOnClickOverlay,
        },
        {
          title: () => h("div", { className: "wo-title" }, title),
          content: () => [h("p", content), h("p", content), h("p", content)],
        }
      );
    },
  });
  app.mount(div);
};
