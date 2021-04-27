import routerMap from './router.map'
import { parseRoutes } from '@/utils/routerUtil'

// 异步路由配置，默认配置（正常集成到主应用是使用主应用通过props传入进来的 asyncRouterConfig 来合并默认配置）
const routesConfig = [
  // TODO: 根据需求添加403和404路由配置
  // {
  //   router: 'exp404',
  //   path: '*',
  //   name: '404'
  // },
  // {
  //   router: 'exp403',
  //   path: '/403',
  //   name: '403'
  // }
  {
    router: 'parent',
    name: 'MicroApp',
    path: '/',
    children: [
      {
        router: 'microHome',
        name: 'HomePage',
        path: 'home'
      },
      {
        router: 'microAbout',
        name: 'AboutPage',
        path: 'about'
      }
    ]
  }
]

const options = {
  mode: 'history',
  routes: parseRoutes(routesConfig, routerMap)
}

export default options
