import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home.vue';

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/play',
    name: 'Play',
    component: () => import(/* webpackChunkName: "play" */ '../views/play.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
