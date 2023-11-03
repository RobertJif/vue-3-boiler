import type { RouteRecordRaw } from "vue-router";
import AppVue from "./../App.vue";
import AnotherViews from "./../views/AnotherViews.vue";
import HomeView from "./../views/HomeViews.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "am",
    component: AppVue,
  },
  {
    path: "/home",
    name: "am - home",
    component: HomeView,
  },
  {
    path: "/another",
    name: "am - another",
    component: AnotherViews,
  },
];

export default routes;
