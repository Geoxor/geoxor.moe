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
    path: "/biography",
    name: "biography",
    component: () => import("./views/Biography.vue"),
    meta: {
      title: "Geoxor | Biography",
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
