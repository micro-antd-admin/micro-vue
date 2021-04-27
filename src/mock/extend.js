import phoneData from './data/phone.json'
import shoesData from './data/shoes.json'
import Mock from 'mockjs'
const Random = Mock.Random

// 数组中随机取数
Random.extend({
  shoes () {
    return this.pick(shoesData)
  },
  phone () {
    return this.pick(phoneData)
  }
})
