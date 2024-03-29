import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("views/home/Home"),
    // redirect:'/home',
    meta: {
      title: "神楽花菜OFFICIAL",
    },
  },
  {
    path: "/login",
    component: () => import("views/admin/Login"),
    meta: {
      title: "神楽花菜OFFICIAL|登陆",
    },
  },
  {
    path: "/register",
    component: () => import("views/admin/Register"),
    meta: {
      title: "神楽花菜OFFICIAL|注册",
    },
  },
  {
    path: "/admin",
    component: () => import("views/admin/Admin"),
    redirect: "/admin/pannel",
    children: [
      {
        path: "/admin/pannel",
        component: () => import("views/admin/Pannel"),
        meta: {
          title: "神楽花菜OFFICIAL|仪表盘",
        },
      },
      {
        path: "/admin/add-blog",
        component: () => import("views/admin/BlogPost"),
        meta: {
          title: "神楽花菜OFFICIAL|新增文章",
        },
      },
      {
        path: "/admin/add-blog/:id",
        component: () => import("views/admin/BlogPost"),
        meta: {
          title: "神楽花菜OFFICIAL|更新文章",
        },
      },
      {
        path: "/admin/manage-blog",
        component: () => import("views/admin/BlogCtrlDetail"),
        meta: {
          title: "神楽花菜OFFICIAL|文章管理",
        },
      },
      {
        path: "/admin/manage-comment",
        component: () => import("views/admin/CommentVerify"),
        meta: {
          title: "神楽花菜OFFICIAL|评论管理",
        },
      },
      {
        path: "/admin/manage-link",
        component: () => import("views/admin/AddLink"),
        meta: {
          title: "神楽花菜OFFICIAL|友链管理",
        },
      },
      {
        path: "/admin/image-resources",
        component: () => import("views/admin/ImageResources"),
        meta: {
          title: "神楽花菜OFFICIAL|仪表盘",
        },
      },
      {
        path: "/admin/server-monitor",
        component: () => import("views/admin/ServerMonitor"),
        meta: {
          title: "神楽花菜OFFICIAL|服务器监控",
        },
      },
    ],
  },

  {
    path: "/admin/new",
    component: () => import("views/admin/BlogPost"),
    meta: {
      title: "神楽花菜OFFICIAL|新增文章",
    },
  },
  //更新
  {
    path: "/admin/new/:id",
    component: () => import("views/admin/BlogPost"),
    meta: {
      title: "神楽花菜OFFICIAL|更新文章",
    },
  },
  {
    path: "/admin/detail",
    component: () => import("views/admin/BlogCtrlDetail"),
    meta: {
      title: "神楽花菜OFFICIAL|文章详情",
    },
  },
  {
    path: "/admin/comment",
    component: () => import("views/admin/CommentVerify"),
  },
  {
    path: "/admin/addlink",
    component: () => import("views/admin/AddLink"),
  },
  {
    path: "/detail/:id",
    component: () => import("views/blogs/BlogDetail"),
  },

  {
    path: "/list/小伙伴",
    redirect: "/friends",
  },
  {
    path: "/list/关于",
    redirect: "/about",
  },
  {
    path: "/list/追番",
    redirect: "/bangumi",
  },
  {
    path: "/list/说说",
    meta: {
      title: "神楽花菜OFFICIAL|说说",
    },
    component: () => import("views/artitalk/ArtitalkPage"),
  },
  {
    path: "/bangumi",
    component: () => import("views/bangumi/Bangumi"),
    meta: {
      title: "神楽花菜OFFICIAL|追番",
    },
  },
  {
    path: "/list/:tag",
    component: () => import("views/blogs/List"),
    meta: {
      title: "神楽花菜OFFICIAL",
    },
  },
  {
    path: "/friends",
    component: () => import("views/friends/Friends"),
    meta: {
      title: "神楽花菜OFFICIAL|小伙伴",
    },
  },

  {
    path: "/about",
    component: () => import("views/about/About"),
    meta: {
      title: "神楽花菜OFFICIAL|(=・ω・=)",
    },
  },
];

document.title = "神楽花菜OFFICIAL";

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

router.beforeEach((to, from, next) => {
  setTimeout(() => {
    document.title = to.meta.title;
  }, 50);
  next();
});

export default router;
