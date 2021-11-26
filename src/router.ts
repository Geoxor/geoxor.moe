import { createRouter, createWebHistory, RouteLocationNormalizedLoaded, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("~/views/Homepage.vue"),
    meta: {
      title: "Geoxor | Home",
    },
  },
  {
    path: "/downloads/:category?",
    name: "downloads",
    component: () => import("~/views/Downloads.vue"),
    meta: {
      title: "Geoxor | Downloads",
    },
  },
  {
    path: "/minecraft",
    name: "minecraft",
    component: () => import("~/views/Minecraft.vue"),
    meta: {
      title: "Geoxor | Minecraft Server",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Redirect if the user somehow entered /downloads with no category selected /downloads/:song
  if (to.name === "downloads" && !to.params.category) return next({ name: to.name, params: { category: "song" } });
  return next();
});

export default router;
