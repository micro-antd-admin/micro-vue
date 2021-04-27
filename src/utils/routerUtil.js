import Router from 'vue-router'
import routerMap from '@/router/async/router.map'
import basicOptions from '@/router/async/config.async'

/**
 * 根据 路由配置 和 路由组件注册 解析路由
 * @param routesConfig 路由配置
 * @param routerMap 本地路由组件注册配置
 */
function parseRoutes (routesConfig, routerMap) {
  const routes = []
  routesConfig.forEach(item => {
    // 获取注册在 routerMap 中的 router，初始化 routeCfg
    let router; let routeCfg = {}
    if (typeof item === 'string') {
      router = routerMap[item]
      routeCfg = { path: (router && router.path) || item, router: item }
    } else if (typeof item === 'object') {
      router = routerMap[item.router]
      routeCfg = item
    }
    if (!router) {
      console.warn(`can't find register for router ${routeCfg.router}, please register it in advance.`)
      router = typeof item === 'string' ? { path: item, name: item } : item
    }
    // 从 router 和 routeCfg 解析路由
    const route = {
      path: routeCfg.path || router.path || routeCfg.router,
      name: routeCfg.name || router.name,
      component: router.component,
      redirect: routeCfg.redirect || router.redirect,
      meta: {
        authority: routeCfg.authority || router.authority || routeCfg.meta?.authority || router.meta?.authority || '*',
        icon: routeCfg.icon || router.icon || routeCfg.meta?.icon || router.meta?.icon,
        page: routeCfg.page || router.page || routeCfg.meta?.page || router.meta?.page,
        link: routeCfg.link || router.link || routeCfg.meta?.link || router.meta?.link
      }
    }
    if (routeCfg.invisible || router.invisible) {
      route.meta.invisible = true
    }
    if (routeCfg.children && routeCfg.children.length > 0) {
      route.children = parseRoutes(routeCfg.children, routerMap)
    }
    routes.push(route)
  })
  return routes
}

/**
 * 加载路由
 * @param routesConfig {RouteConfig[]} 路由配置
 */

/**
 * 加载异步路由
 * @param {*} router
 * @param {*} routesConfig
 * @param {*} asyncRoutes
 */
function loadRoutes (router, routesConfig, asyncRoutes = false) {
  if (asyncRoutes) {
    if (routesConfig && routesConfig.length > 0) {
      const routes = parseRoutes(routesConfig, routerMap)
      const finalRoutes = mergeRoutes(basicOptions.routes, routes)
      formatRoutes(finalRoutes)
      router.options = { ...router.options, routes: finalRoutes }
      router.matcher = new Router({ ...router.options, routes: [] }).matcher
      // formatRoutes(finalRoutes)
      router.addRoutes(finalRoutes)
    }
  }
}

/**
* 合并路由
* @param target {Route[]}
* @param source {Route[]}
* @returns {Route[]}
*/
function mergeRoutes (target, source) {
  const routesMap = {}
  target.forEach(item => {
    routesMap[item.path] = item
  })
  source.forEach(item => {
    routesMap[item.path] = item
  })
  return Object.values(routesMap)
}

/**
 * 格式化路由
 * @param routes 路由配置
 */
function formatRoutes (routes) {
  routes.forEach(route => {
    const { path } = route
    if (!path.startsWith('/') && path !== '*') {
      route.path = '/' + path
    }
  })
}

export { parseRoutes, loadRoutes }
