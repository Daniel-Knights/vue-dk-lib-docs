import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import DKToast from 'vue-dk-toast';
import * as Vuelity from 'vuelity';

import global from './global';

const app = createApp(App);

app.config.globalProperties.$global = global;

// Register components
Object.keys(Vuelity).forEach(el => {
    app.component(el, Vuelity[el]);
});
Vuelity.vtTabber();

app.use(router);
app.use(DKToast, {
    duration: 3000,
    styles: {
        color: global.$darkGrey,
        letterSpacing: '1px',
    },
});
app.mount('#app');

export default app.config.globalProperties;
