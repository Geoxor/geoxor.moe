import { createApp } from "vue";
import app from "./app.vue";
import router from "~/router";
import "virtual:windi.css";

createApp(app).use(router).mount("#app");
