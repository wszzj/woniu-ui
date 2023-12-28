import { createApp } from "vue";
import "./lib/wo.scss";
import "./style.scss";
import App from "./App.vue";
import { router } from "./router";
import Footer from "./components/Footer.vue";
import Markdown from "./components/Markdown.vue";

import "github-markdown-css";
const app = createApp(App);
app.use(router);
app.component("Footer", Footer);
app.component("Markdown", Markdown);
app.mount("#app");
