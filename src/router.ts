import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Homepage.vue"),
    meta: {
      title: "Geoxor | Home",
    },
  },
  {
    path: "/downloads/:category?",
    name: "downloads",
    component: () => import("./views/Downloads.vue"),
    meta: {
      title: "Geoxor | Downloads",
    },
  },
];
