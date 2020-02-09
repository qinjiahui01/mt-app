import axios from 'axios'
axios.defaults.baseURL = 'http://open.duyiedu.com'
axios.interceptors.request.use(function (config) {
  config.params = {
    appkey: '1520352431_1569245706552',
    ...config.params
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default axios
