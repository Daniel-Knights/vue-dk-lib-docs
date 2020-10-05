import { createRouter, createWebHistory } from 'vue-router';
import Examples from '../views/Examples.vue';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/examples',
        name: 'Examples',
        component: Examples,
    },
    {
        path: '/api',
        name: 'API',
        component: () => import(/* webpackChunkName: "api" */ '../views/API.vue'),
    },
    { path: '/:pathMatch(.*)', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
