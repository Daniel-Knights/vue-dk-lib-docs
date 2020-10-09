import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import DKToast from 'vue-dk-toast';
import * as Vuelity from 'vuelity';

const app = createApp(App);
const root = getComputedStyle(document.documentElement);

app.config.globalProperties.$primary = root.getPropertyValue('--primary');
app.config.globalProperties.$white = root.getPropertyValue('--white');
app.config.globalProperties.$black = root.getPropertyValue('--black');
app.config.globalProperties.$darkGrey = root.getPropertyValue('--dark-grey');

// Register components
Object.keys(Vuelity).forEach(el => {
    app.component(el, Vuelity[el]);
});

app.use(router);
app.use(DKToast, {
    duration: 3000,
    styles: {
        color: root.getPropertyValue('--dark-grey'),
        letterSpacing: '1px',
    },
});
app.mount('#app');

// Build hook:
// curl -X POST -d {} https://api.netlify.com/build_hooks/5f7f53f2eb69e520bd0d3aea

export default app.config.globalProperties;
