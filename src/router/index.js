import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MovieView from '../views/MovieView.vue'
import SerieView from '../views/SerieView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie/:movie',
    name: 'movie',
    component: MovieView
  },
  {
    path: '/serie/:movie',
    name: 'serie',
    component: SerieView
  },
  {
    path: '/genre/:genre',
    name: 'genre',
    component: HomeView
  },
  {
    path: '/language/:language',
    name: 'language',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
