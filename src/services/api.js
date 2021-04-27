// 跨域代理前缀
// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
const BASE_URL = process.env.VUE_APP_API_BASE_URL
module.exports = {
  SHOES_LIST: `${BASE_URL}/shoes/list`,
  SHOES_DETAILS: `${BASE_URL}/shoes/details`,
  PHONE_LIST: `${BASE_URL}/phone/list`,
  PHONE_DETAILS: `${BASE_URL}/phone/details`
}
