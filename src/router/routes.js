import { Platform } from 'quasar'

const verificaAutenticacao = (to, from, next) => {
  if(from.path == '/app' && to.path == '/' && localStorage.getItem('token') && Platform.is.cordova) {
    navigator.app.exitApp();
  }

  if(localStorage.getItem('token') && to.path != '/app') {
    next('/app');
  }

  next();
}

const routes = [
  {
    path: '/',
    component: () => import('layouts/LayoutAuth.vue'),
    children: [
      {
        path: '/',
        component: () => import('pages/auth/Login.vue'),
        beforeEnter: verificaAutenticacao
      },
      { path: '/registro', component: () => import('pages/auth/Registro.vue') }
    ],
  },
  {
    path: '/app',
    component: () => import('layouts/LayoutPadrao.vue')
  }
]

if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
