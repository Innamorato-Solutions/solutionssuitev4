import { createRouter, createWebHistory } from "vue-router";
import { RouteRecordRaw, Router } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import('../views/main/Home.vue'),
  },
  {
    path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
    name: "PageNotFound",
    component: () => import('../views/main/PageNotFound.vue'),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/main/Login.vue'),
  },
  {
    path: "/bexio",
    name: "bexio",
    redirect: '/bexio/sso',
    component: () => import('../views/sdss/bexio/Bexio.vue'),
    children: [
      {
        path: "/bexio/sso",
        name: "SSO",
        component: () => import('../views/sdss/bexio/SSO.vue'),
        meta: { transition: 'slide-right' },
      },
      {
        path: "/bexio/solutionssuite",
        name: "SolutionsSuite",
        component: () => import('../views/sdss/bexio/SolutionsSuite.vue'),
        meta: { transition: 'fade' },
      },
    ],
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else return { left: 0, top: 0 };
  }
});

export default router