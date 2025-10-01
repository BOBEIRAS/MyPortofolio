import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Projects from "../components/Projects.vue"
import Skills from "../components/Skills.vue"
import Contact from "../components/Contact.vue"

const routes =[
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
    history: createWebHistory(), // Usar o histórico do navegador
    routes
})

export default router
