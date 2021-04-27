import Mock from 'mockjs'
import { parseUrlParams } from '@/utils/request'
import phoneData from '../../data/phone.json'
import '@/mock/extend'

// Mock随机取数
// const phone = Mock.mock({
//   data: '@PHONE'
// })

Mock.mock(RegExp(`${process.env.VUE_APP_API_BASE_URL}/phone/details` + '.*'), 'get', ({ url }) => {
  const params = parseUrlParams(decodeURI(url))
  const result = {}
  result.code = 0
  const id = parseInt(params.id)
  result.data = phoneData.find(item => item.id === id)

  // Mock随机取数
  // result.data = phone.data
  return result
})
