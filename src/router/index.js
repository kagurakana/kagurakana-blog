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
    path:'/admin/new',
    component:()=>import('views/admin/BlogPost')
  },
  {
    path:'/admin/detail',
    component:()=>import('views/admin/BlogCtrlDetail')
  },
  {
    path:'/admin/comment',
    component:()=>import('views/admin/CommentVerify')
  },
  {
    path:'/list/朋友',
    redirect:'/friends'
  },
  {
    path:'/friends',
    component:()=>import('views/friends/Friends')
  },

  {
    path:'/list/关于',
    redirect:'/about'
  },
  {
    path:'/about',
    component:()=>import('views/about/About')
  },
  {
    path:'/list/:tag',
    component:()=>import('views/blogs/List')
  },
  
  {
    path:'/detail/:id',
    component:()=>import('views/blogs/BlogDetail')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
