import './public-path'
import Vue from 'vue'
import App from './App.vue'
import { loadRoutes } from './utils/routerUtil'
import { initRouter } from './router'
import store from './store'
import '@/mock'
import './registAntd' // 按需引入Antd组件

Vue.config.productionTip = false

const asyncRouter = process.env.VUE_APP_ASYNC_ROUTER === 'true'

let router = null
let vueInstance = null

function render (props = {}) {
  const { container, asyncRouterConfig } = props
  console.log('turing-micro asyncRouterConfig', asyncRouterConfig)
  router = initRouter(asyncRouter)
  console.log('turing-micro路由', router)
  loadRoutes(router, asyncRouterConfig, asyncRouter)
  vueInstance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  // loadRoutes()
  console.log('[vue] vue app bootstraped')
}
export async function mount (props) {
  console.log('[vue] props from main framework', props)
  props.onGlobalStateChange(state => {
    console.log('props.onGlobalStateChange', state)
  })
  // 测试微应用更新主应用全局状态
  // props.setGlobalState({ testAttr: 'testAttr' })
  render(props)
}
export async function unmount () {
  vueInstance.$destroy()
  vueInstance.$el.innerHTML = ''
  vueInstance = null
  router = null
}
