import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import('views/home/Home')
  },

  {
    path:'/前端',
    component:()=>import('views/blogs/List')
  },
  {
    path:'/前端/:tag',
    component:()=>import('views/blogs/List')
  },

  {
    path:'/后端',
    component:()=>import('views/blogs/List')
  },
  {
    path:'/后端/:tag',
    component:()=>import('views/blogs/List')
  },

  {
    path:'/杂物',
    component:()=>import('views/blogs/List')
  },
  {
    path:'/杂物/:tag',
    component:()=>import('views/blogs/List')
  },

  // {
  //   path:'/朋友',
  //   component:()=>import('views/blogs/List')
  // },

  // {
  //   path:'/关于',
  //   component:()=>import('views/blogs/List')
  // },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
