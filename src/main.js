import { createApp } from 'vue';
import App from './App.vue';
import router from './routes'; 
import i18n from './i18n';

const app = createApp(App);

app.use(router); 
app.mount('#app'); 
app.use(i18n);