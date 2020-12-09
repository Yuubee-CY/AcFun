import { createRouter, createWebHistory } from 'vue-router'

// const xxx = () => import('')   懒加载文件

const routes = [
  {
    path:'',
    redirect:''
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
