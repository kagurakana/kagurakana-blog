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
    path:'/login',
    component:()=>import('views/admin/Login')
  },
  {
    path:'/register',
    component:()=>import('views/admin/Register')
  },
  {
    path:'/admin/blogpost',
    component:()=>import('views/admin/BlogPost')
  },
  {
    path:'/list/朋友',
    redirect:'/home'
    // component:()=>import('views/blogs/List')
  },

  {
    path:'/list/关于',
    redirect:'/home'
    // component:()=>import('views/blogs/List')
  },
  
  {
    path:'/list/:tag',
    component:()=>import('views/blogs/List')
  },
  
  {
    path:'/detail/:id',
    component:()=>import('views/blogs/BlogDetail')
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
