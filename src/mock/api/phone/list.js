import Mock from 'mockjs'
import phoneData from '../../data/phone.json'

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/phone/list`, 'get', () => {
  const result = {}
  result.code = 0
  result.data = phoneData.map(item => ({ id: item.id, name: item.name, price: item.price }))
  return result
})
