import { createApp } from "vue";
import "./lib/wo.scss";
import "./style.scss";

import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js/lib/core";
import App from "./App.vue";
import { router } from "./router";
import Footer from "./components/Footer.vue";
import "github-markdown-css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import Demo from "./components/Demo.vue";
import Button from "./lib/Button.vue";
const app = createApp(App);
app.directive("highlight", function (el) {
  let highlight = el.querySelectorAll("pre code");
  highlight.forEach((block: any) => {
    hljs.highlightElement(block);
  });
});

app.use(router);
app.use(hljsVuePlugin);
app
  .component("Footer", Footer)
  .component("Demo", Demo)
  .component("Button", Button);

app.mount("#app");
