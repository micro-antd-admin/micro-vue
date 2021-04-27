import { PHONE_LIST, PHONE_DETAILS } from '@/services/api'
import { request, METHOD } from '@/utils/request'

/**
 * 获取手机产品列表
 * @returns 手机列表
 */
export async function getPhoneList () {
  return request(PHONE_LIST, METHOD.GET)
}

/**
 * 获取手机产品详情
 * @param {*} id 手机id
 * @returns 手机详细信息
 */
export async function getPhoneDetails (id) {
  return request(PHONE_DETAILS, METHOD.GET, { id })
}

export default { getPhoneList, getPhoneDetails }
