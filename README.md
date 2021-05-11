# turing-micro

demo相关博客文章：[微前端qiankun+AntDesign组件库实现业务模块彻底解耦](https://www.patpat.site/%E5%BC%80%E5%8F%91/%E5%89%8D%E7%AB%AF/%E5%BE%AE%E5%89%8D%E7%AB%AFqiankun-AntDesign%E7%BB%84%E4%BB%B6%E5%BA%93%E5%AE%9E%E7%8E%B0%E4%B8%9A%E5%8A%A1%E6%A8%A1%E5%BD%BB%E5%BA%95%E8%A7%A3%E8%80%A6.html)
## Project setup
```
npm install
```
### 本地开发有两种模式
脱离微前端主项目独立运行模式
```
npm run dev:standalone
```

集成到微前端主项目联调模式运行
```
npm run dev
```

### 部署打包区分环境
打包测试环境
```
npm run build:sandbox
```

打包生产环境
```
npm run build:prod
```

### 模板项目已经集成了网络请求模块
想了解如何使用网络请求模块并使用[Mock](https://github.com/nuysoft/Mock/wiki)模拟数据，请查看模板项目关于页面 http://127.0.0.1:8080/about 的例子

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
