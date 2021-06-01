import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LayoutPub",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    children: [
      {
        path: "/publico",
        name: "DashboardPub",
        component: () =>
          import(
            /* webpackChunkName: "DashboardPub" */ "../views/DashboardPub.vue"
          ),
      },
    ],
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
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
