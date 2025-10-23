//Isto serve para dar setup no router para navegação funcionar

import { createApp } from "vue";
import App from './App.vue'
import router from "./router"; //importa o router
import './assets/main.css';//importa o main.css

createApp(App).use(router).mount('#app') //usa o router
