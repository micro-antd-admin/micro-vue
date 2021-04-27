# turing-micro

## 具体详细微应用集成指南查看confluence文档
[微应用接入指南](http://confluence.interfocus.org/pages/viewpage.action?pageId=45875424)

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
