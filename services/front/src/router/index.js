import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import store from '../store'

// import Home from '@/views/Home.vue'
// import Login from '@/views/Login.vue'
// import Register from '@/views/Register.vue'
// import Dashboard from '@/views/Dashboard.vue'
// import Profile from '@/views/Profile'
// import Note from '@/views/Note'
// import EditNote from '@/views/EditNote'

Vue.use(VueRouter);

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/register',
//     name: 'Register',
//     component: Register
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: Login,
//   },
//   {
//     path: '/dashboard',
//     name: 'Dashboard',
//     component: Dashboard,
//     meta: {requiresAuth: true},
//   },
//   {
//     path: '/profile',
//     name: 'Profile',
//     component: Profile,
//     meta: {requiresAuth: true},
//   },
//   {
//     path: '/note/:id',
//     name: 'Note',
//     component: Note,
//     meta: {requiresAuth: true},
//     props: true,
//   },
//   {
//     path: '/note/:id',
//     name: 'EditNote',
//     component: EditNote,
//     meta: {requiresAuth: true},
//     props: true,
//   }
// ]

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: "main"},
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: "empty"},
    component: () => import("../views/Login.vue")
  },
  {
    path: '/register',
    name: 'Register',
    meta: {layout: "empty"},
    component: () => import("../views/Register.vue")
  },
  // {
  //   path: '/categories',
  //   name: 'Categories',
  //   meta: {layout: "main"},
  //   component: () => import("../views/Categories.vue")
  // },
  // {
  //   path: '/history',
  //   name: 'History',
  //   meta: {layout: "main"},
  //   component: () => import("../views/History.vue")
  // },
  // {
  //   path: '/planning',
  //   name: 'Planning',
  //   meta: {layout: "main"},
  //   component: () => import("../views/Planning.vue")
  // },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: "main"},
    component: () => import("../views/Profile.vue")
  },
  // {
  //   path: '/record',
  //   name: 'Record',
  //   meta: {layout: "main"},
  //   component: () => import("../views/Record.vue")
  // },
  // {
  //   path: '/detail_record',
  //   name: 'DetailRecord',
  //   meta: {layout: "main"},
  //   component: () => import("../views/DetailRecord.vue")
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// Navigation Guard чтобы предотвратить несанкционированный доступ
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router
