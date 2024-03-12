import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import 'primeicons/primeicons.css'

import './assets/main.css'

import Home from './Views/Home.vue'
import Projects from './Views/Projects.vue'
import Articles from './Views/Articles.vue'
import Perfil from './Views/Perfil.vue'
import Hobby from './Views/Hobby.vue'
import NotFound from './Views/NotFound.vue'

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
    },
    {
      path: "/:notFound",
      component: NotFound
    },
    {
      path: "/hobby",
      component: Hobby
    }
  ]
})

createApp(App)
  .use(router)
  .mount('#app')