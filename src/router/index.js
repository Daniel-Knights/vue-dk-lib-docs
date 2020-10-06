import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/docs',
        name: 'Docs',
        component: () => import('@/views/Docs'),
        children: [
            {
                path: 'dk-button',
                name: 'DKButton',
                component: () => import('@/examples/Button'),
            },
            {
                path: 'dk-hoverbox',
                name: 'DKHoverbox',
                component: () => import('@/examples/Hoverbox'),
            },
            {
                path: 'dk-navbar',
                name: 'DKNavbar',
                component: () => import('@/examples/Navbar'),
            },
            {
                path: 'dk-pagination',
                name: 'DKPagination',
                component: () => import('@/examples/Pagination'),
            },
            {
                path: 'dk-popup',
                name: 'DKPopup',
                component: () => import('@/examples/Popup'),
            },
            {
                path: 'dk-tooltip',
                name: 'DKTooltip',
                component: () => import('@/examples/Tooltip'),
            },
            {
                path: 'dk-toggle',
                name: 'DKToggle',
                component: () => import('@/examples/Toggle'),
            },
            {
                path: 'dk-searchbar',
                name: 'DKSearchbar',
                component: () => import('@/examples/Searchbar'),
            },
            {
                path: 'dk-video',
                name: 'DKVideo',
                component: () => import('@/examples/Video'),
            },
        ],
    },
    { path: '/:pathMatch(.*)', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
