import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import 'primeicons/primeicons.css'

import './assets/main.css'

import Home from './Views/Home.vue'
import Projects from './Views/Projects.vue'
import Articles from './Views/Articles.vue'
import Perfil from './Views/Perfil.vue'

const router = createRouter({ 
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: "/projects",
      component: Projects
    },
    {
      path: "/articles",
      component: Articles
    },
    {
      path: "/user",
      component: Perfil
    }
  ]
})

createApp(App)
  .use(router)
  .mount('#app')