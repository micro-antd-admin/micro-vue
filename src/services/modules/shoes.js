import { SHOES_LIST, SHOES_DETAILS } from '@/services/api'
import { request, METHOD } from '@/utils/request'

/**
 * 获取鞋子列表
 * @returns 鞋子列表
 */
export async function getShoesList () {
  return request(SHOES_LIST, METHOD.GET)
}

/**
 * 获取鞋子详情
 * @param {*} id 鞋子id
 * @returns 鞋子详细信息
 */
export async function getShoesDetails (id) {
  return request(SHOES_DETAILS, METHOD.GET, { id })
}

export default { getShoesList, getShoesDetails }
