import { Platform } from 'quasar'

 /*(to, from, next) => {

          if(from.path == '/app' && to.path == '/' && localStorage.getItem('token') && Platform.is.cordova) {
            navigator.app.exitApp();
          }

          if(localStorage.getItem('token')) {
            next('/app');
          }

          next();
        }*/
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
    component: () => import('layouts/Auth.vue'),
    children: [
      {
        path: '/',
        component: () => import('pages/auth/Login.vue'),
        beforeEnter: verificaAutenticacao
      },
      { path: '/registro', component: () => import('pages/auth/Registro.vue') }
    ],
  },
  // {
  //   path: '/',
  //   component: () => import('layouts/MyLayout.vue'),
  //   children: [
  //     {
  //       path: '/',
  //       component: () => import('pages/Index.vue'),
  //       beforeEnter: (to, from, next) => {

  //         if(to.path == '/' && from.path == '/login'
  //           && !localStorage.getItem('user-token') && Platform.is.cordova) {

  //             navigator.app.exitApp();
  //             console.log('Não tem token');
  //         }

  //         next();
  //       }
  //     }
  //   ],
  // },
  // {
  //   path: '/login',
  //   component: () => import('layouts/Auth.vue'),
  //   children: [
  //     {
  //       path: '/login',
  //       component: () => import('pages/auth/Login.vue')/*,
  //       beforeEnter: (to, from, next) => {
  //         console.log("TO", to);
  //         console.log("FROM", from);
  //         console.log("NEXT", next);
  //         if(from.path == '/') {
  //           console.log('Vai voltar para o início');
  //         }

  //         next();
  //       }*/
  //     },
  //     { path: '/registro', component: () => import('pages/auth/Registro.vue') }
  //   ],
  // },
  {
    path: '/app',
    component: () => import('layouts/LayoutPadrao.vue'),
    children: [
      { path: '/app', component: () => import('pages/Index.vue'), beforeEnter: verificaAutenticacao }
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
