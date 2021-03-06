import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Akimusic from "../views/Akimusic";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Akimusic",
    component: Akimusic,
    meta: {
      title: "Akimusic"
    }
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
