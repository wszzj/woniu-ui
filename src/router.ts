import { createWebHashHistory, createRouter } from "vue-router";
import HomeVue from "./views/Home.vue";
import DocVue from "./views/Doc.vue";
import Button from "./components/doc/Button.vue";
import Switch from "./components/doc/Switch.vue";
import Dialog from "./components/doc/Dialog.vue";
import Tabs from "./components/doc/Tabs.vue";
import Introduction from "./components/doc/Introduction.vue";
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: HomeVue },
    {
      path: "/doc",
      component: DocVue,
      children: [
        {
          path: "",
          component: Introduction,
        },
        {
          path: "switch",
          component: Switch,
        },
        {
          path: "button",
          component: Button,
        },
        {
          path: "dialog",
          component: Dialog,
        },
        {
          path: "tabs",
          component: Tabs,
        },
      ],
    },
  ],
});
