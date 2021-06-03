import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/privado",
    name: "LayoutPri",
    component: () =>
      import(/* webpackChunkName: "about" */ "../layout/privado.vue"),
    children: [
      {
        path: "dashboard",
        name: "DashboardPri",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/DashboardPri.vue"),
      },
      {
        path: "/privado/transferir",
        name: "CrearTransf",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Transferir.vue"),
      },
      {
        path: "/privado/transferencias",
        name: "CartolaTransf",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Transferencias.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
