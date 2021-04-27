import Mock from 'mockjs'
import shoesData from '../../data/shoes.json'

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/shoes/list`, 'get', () => {
  const result = {}
  result.code = 0
  result.data = shoesData.map(item => ({ id: item.id, name: item.name, price: item.price }))
  return result
})
