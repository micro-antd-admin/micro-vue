// 用户异步路由的映射表，根据动态路由配置匹配路由映射表解析动态路由
const view = {
  blank: () => import('@/layouts/BlankLayout.vue'),
  test: () => import('@/views/Test.vue'),
  microHome: () => import('@/views/Home.vue'),
  microAbout: () => import('@/views/About.vue')
}

// 路由组件注册
const routerMap = {
  // TODO: 根据需求添加403和404路由映射表
  // exp403: {
  //   authority: '*',
  //   name: 'exp403',
  //   path: '403',
  //   component: () => import('@/views/exception/403')
  // },
  // exp404: {
  //   name: 'exp404',
  //   path: '404',
  //   component: () => import('@/views/exception/404')
  // },
  parent: {
    component: view.blank
  },
  test: {
    component: view.test,
    path: 'test'
  },
  home: {
    path: 'home',
    name: 'home',
    component: view.microHome
  },
  about: {
    path: 'about',
    name: 'about',
    component: view.microAbout
  }
  // TODO: 可根据需求添加跟多路由映射表
}

export default routerMap
