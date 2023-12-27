import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import Intro from "./views/Intro.vue";
import GetStart from "./views/GetStart.vue";
import ButtonDemo from "./components/doc/ButtonDemo.vue";
import SwitchDemo from "./components/doc/SwitchDemo.vue";
import DialogDemo from "./components/doc/DialogDemo.vue";
import TabsDemo from "./components/doc/TabsDemo.vue";
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "",
          redirect: "/doc/intro",
        },
        {
          path: "intro",
          component: Intro,
        },
        {
          path: "get-start",
          component: GetStart,
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
