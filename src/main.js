import { createApp } from 'vue';
import App from './App.vue';
import router from './routes'; 
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);

app.use(router); 
app.mount('#app'); 
app.component('apexchart', VueApexCharts);