import { createWebHashHistory, createRouter } from "vue-router";
import HomeVue from "./views/Home.vue";
import DocVue from "./views/Doc.vue";
import ButtonDemo from "./components/doc/ButtonDemo.vue";
import SwitchDemo from "./components/doc/SwitchDemo.vue";
import DialogDemo from "./components/doc/DialogDemo.vue";
import TabsDemo from "./components/doc/TabsDemo.vue";
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
          component: SwitchDemo,
        },
        {
          path: "button",
          component: ButtonDemo,
        },
        {
          path: "dialog",
          component: DialogDemo,
        },
        {
          path: "tabs",
          component: TabsDemo,
        },
      ],
    },
  ],
});
