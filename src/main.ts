import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";
import HomeVue from "./views/Home.vue";
import DocVue from "./views/Doc.vue";
import ButtonVue from "./components/Button.vue";
import SwitchVue from "./components/Switch.vue";
import DialogVue from "./components/Dialog.vue";
import TabVue from "./components/Tab.vue";
const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: HomeVue },
    {
      path: "/doc",
      component: DocVue,
      // children: [
      //   {
      //     path: "switch",
      //     component: SwitchVue,
      //   },
      //   {
      //     path: "button",
      //     component: ButtonVue,
      //   },
      //   {
      //     path: "dialog",
      //     component: DialogVue,
      //   },
      //   {
      //     path: "tab",
      //     component: TabVue,
      //   },
      // ],
    },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
