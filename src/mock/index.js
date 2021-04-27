import Mock from 'mockjs'
import '@/mock/api/shoes/list'
import '@/mock/api/shoes/details'
import '@/mock/api/phone/list'
import '@/mock/api/phone/details'

// 设置全局延时
Mock.setup({
  timeout: '500-1000'
})
