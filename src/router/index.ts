import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LayOut from '../layout/main.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LayOut,
    redirect: '/Home',
    children: [
      {
        path: 'Home',
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "Home" */ '@/views/Home/index.vue'),
        meta: { title: '首页', icon: 'Home', siderbar: true }
      }
    ]
  },
  {
    path: '/JobDetail', // 匹配参数
    component: LayOut,
    children: [
      {
        path: '',
        name: 'JobDetail',
        component: () =>
          import(
            /* webpackChunkName: "JobDetail" */ '@/views/JobDetail/index.vue'
          ),
        meta: { title: '职位', icon: 'Jobdetail', siderbar: true }
      }
    ]
  },
  {
    path: '/Campus',
    component: LayOut,
    children: [
      {
        path: '',
        name: 'Campus',
        component: () =>
          import(
            /* webpackChunkName: "Campus" */ '@/views/Campus/index.vue'
          ),
        meta: { title: '校园', icon: 'Campus' }
      }
    ]
  },
  {
    path: '/Oversea',
    component: LayOut,
    children: [
      {
        path: '',
        name: 'Oversea',
        component: () =>
          import(
            /* webpackChunkName: "Oversea" */ '@/views/Oversea/index.vue'
          ),
        meta: { title: '海归', icon: 'Oversea' }
      }
    ]
  },
  {
    path: '/Firm',
    component: LayOut,
    children: [
      {
        path: '',
        name: 'Firm',
        component: () =>
          import(
            /* webpackChunkName: "Firm" */ '@/views/Firm/index.vue'
          ),
        meta: { title: '公司', icon: 'Firm' }
      }
    ]
  },
  {
    path: '/MyAPP',
    component: LayOut,
    children: [
      {
        path: '',
        name: 'MyAPP',
        component: () =>
          import(
            /* webpackChunkName: "MyAPP" */ '@/views/MyAPP/index.vue'
          ),
        meta: { title: 'APP', icon: 'APP' }
      }
    ]
  },
  {
    path: '/Information',
    component: LayOut,
    children: [
      {
        path: '',
        name: 'Information',
        component: () =>
          import(
            /* webpackChunkName: "Information" */ '@/views/Information/index.vue'
          ),
        meta: { title: '资讯', icon: 'Information' }
      }
    ]
  },
  {
    path: '/Youle',
    component: LayOut,
    children: [
      {
        path: '',
        name: 'Youle',
        component: () =>
          import(
            /* webpackChunkName: "Campus" */ '@/views/Youle/index.vue'
          ),
        meta: { title: '有了', icon: 'Youle' }
      }
    ]
  },
  {
    path: '/Encyclopedia',
    component: LayOut,
    children: [
      {
        path: '',
        name: 'Encyclopedia',
        component: () =>
          import(
            /* webpackChunkName: "Campus" */ '@/views/Encyclopedia/index.vue'
          ),
        meta: { title: '百科', icon: 'Encyclopedia' }
      }
    ]
  },
  {
    path: '/Resume', // nlp_resume_upload
    name: 'Resume',
    component: () => import(/* webpackChunkName: "Resume" */ '@/views/Resume/index.vue'),
    meta: { title: '', hidden: true }
  },
  {
    path: '/Block', // header-Login
    name: 'Block',
    component: () => import(/* webpackChunkName: "Block" */ '@/views/Block/index.vue'),
    meta: { title: '', hidden: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
  }
})

router.beforeEach((to, from) => {
  // console.log(to, from)
})

export default router
