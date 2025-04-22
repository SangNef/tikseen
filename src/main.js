import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import './style.css';
import './styles/theme.css';

const app = createApp(App);

app.use(router);
app.mount('#app');
