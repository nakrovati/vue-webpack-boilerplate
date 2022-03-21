import { createRouter, createWebHistory } from "vue-router";
import Home from "Views/Home.vue";

const About = () => import(/* webpackChunkName: "about" */ "Views/About.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
