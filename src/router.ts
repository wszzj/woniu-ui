import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";

import ButtonDemo from "./components/doc/ButtonDemo.vue";
import SwitchDemo from "./components/doc/SwitchDemo.vue";
import DialogDemo from "./components/doc/DialogDemo.vue";
import TabsDemo from "./components/doc/TabsDemo.vue";
import NotFound from "./views/NotFound.vue";
import { h } from "vue";
import Markdown from "./components/Markdown.vue";
const md = (fileName: string) =>
  h(Markdown, {
    path: `../markdowns/${fileName}.md`,
    key: fileName,
  });
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
          component: md("intro"),
        },
        {
          path: "install",
          component: md("install"),
        },
        {
          path: "get-start",
          component: md("getStart"),
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
    {
      path: "/:pathMatch(.*)*",
      component: NotFound,
    },
  ],
});
