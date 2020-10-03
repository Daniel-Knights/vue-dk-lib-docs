import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import DKToast from 'vue-dk-toast';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(DKToast);
app.mount('#app');

export default app;
