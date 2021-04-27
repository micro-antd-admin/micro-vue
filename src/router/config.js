import vHome from '../views/Home.vue'
import vAbout from '../views/About.vue'
import lBlankLayout from '../layouts/BlankLayout.vue'

// 非异步加载路由配置（一般可以用于微应用独立运行模式，微应用集成模式由于需要权限统一管理都是异步加载路由，异步路由配置查看当前目录的 ./async/目录）
const options = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MicroApp',
      component: lBlankLayout,
      children: [
        {
          path: 'home',
          name: 'HomePage',
          component: vHome
        },
        {
          path: 'about',
          name: 'AboutPage',
          component: vAbout
        }
      ]
    }
  ]
}

export default options
