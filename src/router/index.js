import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/contactenos",
    name: "contactenos",
    component: ()=> import("../views/Contactenos.vue")
  },
  {
    path: "/heroes",
    name: "herores",
    component: ()=> import("../views/ListaHeroes.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
