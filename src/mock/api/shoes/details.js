import Mock from 'mockjs'
import { parseUrlParams } from '@/utils/request'
import '@/mock/extend'

// Mock随机取数
const shoes = Mock.mock({
  data: '@SHOES'
})

Mock.mock(RegExp(`${process.env.VUE_APP_API_BASE_URL}/shoes/details.*`), 'get', ({ url }) => {
  const params = parseUrlParams(decodeURI(url))
  console.log('get params', params)
  const result = {}
  result.code = 0
  // Mock随机取数
  result.data = shoes.data
  return result
})
