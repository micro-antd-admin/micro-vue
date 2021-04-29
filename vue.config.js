const { name } = require('./package')
const host = process.env.HOST
const port = process.env.PORT

module.exports = {
  // publicPath: process.env.VUE_APP_PUBLIC_PATH,
  // outputDir: 'dist/turing-micro',
  devServer: {
    host,
    port,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            /* less 变量覆盖，用于自定义 ant design 主题 */
            'border-radius-base': '4px'
          }
        },
        javascriptEnabled: true
      }
    }
  }
}
