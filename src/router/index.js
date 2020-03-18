import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home',
    meta:{
      title:'神楽花菜OFFICIAL'
    }
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
  //更新
  {
    path:'/admin/new/:id',
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
    path:'/admin/addlink',
    component:()=>import('views/admin/AddLink')
  },
  {
    path:'/detail/:id',
    component:()=>import('views/blogs/BlogDetail')
  },

  {
    path:'/list/朋友',
    redirect:'/friends'
  },
  {
    path:'/list/关于',
    redirect:'/about'
  },
  {
    path:'/list/:tag',
    component:()=>import('views/blogs/List')
  },
  {
    path:'/friends',
    component:()=>import('views/friends/Friends')
  },

 
  {
    path:'/about',
    component:()=>import('views/about/About')
  },
 
  


]

document.title = "神楽花菜OFFICIAL";

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
