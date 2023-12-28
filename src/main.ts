import { createApp } from "vue";
import "./lib/wo.scss";
import "./style.scss";
import "highlight.js/styles/atom-one-light.css";
import hljs from "highlight.js/lib/core";
import App from "./App.vue";
import { router } from "./router";
import Footer from "./components/Footer.vue";
import Markdown from "./components/Markdown.vue";
import "github-markdown-css";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
const app = createApp(App);
app.directive("highlight", function (el) {
  let highlight = el.querySelectorAll("pre code");
  highlight.forEach((block: any) => {
    hljs.highlightElement(block);
  });
});

app.use(router);
app.use(hljsVuePlugin);
app.component("Footer", Footer);
app.component("Markdown", Markdown);

app.mount("#app");
