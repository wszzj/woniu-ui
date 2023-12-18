import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";
import Zzj from "./components/Zzj.vue";
import Zzj2 from "./components/Zzj2.vue";
const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Zzj },
    { path: "/xxx", component: Zzj2 },
  ],
});
const app = createApp(App);
app.use(router);
app.mount("#app");
