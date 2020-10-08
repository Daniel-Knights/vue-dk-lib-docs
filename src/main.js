import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import DKToast from 'vue-dk-toast';
import * as Vuelity from 'vuelity';

const app = createApp(App);

// Register components
Object.keys(Vuelity).forEach(el => {
    app.component(el, Vuelity[el]);
});

app.use(store);
app.use(router);
app.use(DKToast, {
    duration: 3000,
    styles: {
        color: getComputedStyle(document.documentElement).getPropertyValue('--dark-grey'),
        letterSpacing: '1px',
    },
});
app.mount('#app');

export default app.config.globalProperties;
