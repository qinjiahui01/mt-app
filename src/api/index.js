import axios from '@/axios.js'
const api = {
  getSearchHotWords (params) {
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  getResultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getHotCity () {
    return axios.get('/api/meituan/city/hot.json')
  },
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  },
  getRecentCity () {
    return axios.get('/api/meituan/city/recents.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  getClssify () {
    return axios.get('/api/meituan/list/classify.json')
  },
  getAreaList () {
    return axios.get('/api/meituan/list/areaList.json')
  },
  getRecommend () {
    return axios.get('/api/meituan/list/recommend.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  }
}
export default api
