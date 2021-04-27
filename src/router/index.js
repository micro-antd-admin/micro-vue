import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const initRouter = (isAsync) => {
  const options = isAsync ? require('./async/config.async').default : require('./config').default
  // formatRoutes(options.routes)
  if (window.__POWERED_BY_QIANKUN__) {
    // 主应用集成模式下，设置微应用路由前缀
    options.base = `/${process.env.VUE_APP_ROUTER_BASE}/`
  }
  return new Router(options)
}

export { initRouter }
