import { Platform } from 'quasar'

const verificaAutenticacao = (to, from, next) => {
  if(from.path == '/contatos' && to.path == '/' && localStorage.getItem('token') && Platform.is.cordova) {
    navigator.app.exitApp();
  }

  if(localStorage.getItem('token') && to.path == '/') {
    next('/contatos');
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
    path: '/contatos',
    component: () => import('layouts/LayoutPadrao.vue'),
    children: [
      {
        path: '/contatos',
        component: () => import('pages/Contatos.vue'),
        beforeEnter: verificaAutenticacao
      },
      {
        path: '/cadastro',
        component: () => import('pages/Cadastro.vue'),
        beforeEnter: verificaAutenticacao
      },
      {
        path: '/perfil',
        component: () => import('pages/Perfil.vue'),
        beforeEnter: verificaAutenticacao
      }
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
