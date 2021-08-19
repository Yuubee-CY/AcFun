import { createRouter, createWebHistory } from 'vue-router'

// const xxx = () => import('')   懒加载文件
const Login = () => import('../views/Login')
const Index = () => import('../views/Index')

const routes = [
  {
    path: '/',
    redirect: 'index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path:'/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
