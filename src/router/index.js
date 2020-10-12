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
                path: 'vt-burger',
                name: 'VTBurger',
                component: () => import('@/examples/Burger'),
            },
            {
                path: 'vt-hoverbox',
                name: 'VTHoverbox',
                component: () => import('@/examples/Hoverbox'),
            },
            {
                path: 'vt-loading',
                name: 'VTLoading',
                component: () => import('@/examples/Loading'),
            },
            {
                path: 'vt-modal',
                name: 'VTModal',
                component: () => import('@/examples/Modal'),
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
                path: 'vt-scrolltop',
                name: 'VTScrolltop',
                component: () => import('@/examples/Scrolltop'),
            },
            {
                path: 'vt-searchbar',
                name: 'VTSearchbar',
                component: () => import('@/examples/Searchbar'),
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
                path: 'vt-video',
                name: 'VTVideo',
                component: () => import('@/examples/Video'),
            },
            {
                path: 'vt-tabber',
                name: 'vtTabber',
                component: () => import('@/examples/Tabber'),
            },
        ],
    },
    { path: '/:pathMatch(.*)', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(to => {
    // Update title
    document.title = to.name + ' | Vuelity';
});

export default router;
