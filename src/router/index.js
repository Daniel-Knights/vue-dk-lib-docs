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
                path: 'vt-button',
                name: 'VTButton',
                component: () => import('@/examples/Button'),
            },
            {
                path: 'vt-hoverbox',
                name: 'VTHoverbox',
                component: () => import('@/examples/Hoverbox'),
            },
            {
                path: 'vt-navbar',
                name: 'VTNavbar',
                component: () => import('@/examples/Navbar'),
            },
            {
                path: 'vt-pagination',
                name: 'VTPagination',
                component: () => import('@/examples/Pagination'),
            },
            {
                path: 'vt-popup',
                name: 'VTPopup',
                component: () => import('@/examples/Popup'),
            },
            {
                path: 'vt-tooltip',
                name: 'VTTooltip',
                component: () => import('@/examples/Tooltip'),
            },
            {
                path: 'vt-toggle',
                name: 'VTToggle',
                component: () => import('@/examples/Toggle'),
            },
            {
                path: 'vt-searchbar',
                name: 'VTSearchbar',
                component: () => import('@/examples/Searchbar'),
            },
            {
                path: 'vt-video',
                name: 'VTVideo',
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
