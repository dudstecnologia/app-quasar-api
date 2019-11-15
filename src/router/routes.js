
const routes = [
  {
    path: '/',
    redirect: '/login',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '/login', component: () => import('pages/auth/Login.vue') },
      { path: '/registro', component: () => import('pages/auth/Registro.vue') }
    ],
  },
  {
    path: '/app',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/app', component: () => import('pages/Index.vue') }
    ]
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
