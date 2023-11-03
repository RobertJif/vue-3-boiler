import HomeView from "./../views/HomeView.vue";
import { loadRemoteModule } from "@softarc/native-federation";
import { defineAsyncComponent } from "vue";
import {
  createRouter,
  createWebHistory,
  type RouteComponent,
} from "vue-router";
const amRoutes = loadRemoteModule("am-ui", "./am-ui-app/routes");

const AMAppComponent: RouteComponent = defineAsyncComponent(() =>
  loadRemoteModule("am-ui", "./am-ui-app")
);
const SHEAppComponent: RouteComponent = defineAsyncComponent(() =>
  loadRemoteModule("she-ui", "./she-ui-app")
);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/am",
      name: "am",
      component: AMAppComponent,
      children: await amRoutes,
    },
    {
      path: "/she",
      name: "she",
      component: SHEAppComponent,
    },
  ],
});

export default router;
