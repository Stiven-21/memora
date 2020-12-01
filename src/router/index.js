import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Categorias from '../views/Categorias.vue'
import Cuadriculas from '../views/Cuadriculas.vue'
import Juego from '../views/Juego.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Categorias',
    name: 'Categoria',
    component: Categorias
  },
  {
    path: '/Cuadriculas',
    name: 'Cuadriculas',
    component: Cuadriculas
  },
  {
    path: '/Juego',
    name: 'Juego',
    component: Juego
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
