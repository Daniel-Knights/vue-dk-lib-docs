import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import DKToast from 'vue-dk-toast';
import * as DKLib from 'vuelity';

const app = createApp(App);

// Register components
Object.keys(DKLib).forEach(el => {
    app.component(el, DKLib[el]);
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
