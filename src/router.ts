import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("~/views/homepage.vue"),
    meta: {
      title: "Geoxor | Home",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
