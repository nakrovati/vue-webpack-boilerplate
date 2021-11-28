import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index.js";

import "../src/styles/_main.scss";

createApp(App).use(store).use(router).mount("#app");
