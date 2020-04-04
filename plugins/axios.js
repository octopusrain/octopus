// API请求公参
const publicParams = {
  clientType: 'pc',
  versionName: '',
  imei: '',
  net: ''
}

export default function({ $axios }) {
  console.log('$axios', $axios)
  $axios.defaults.timeout = 20000 // 超时时间20s
  // 设置全局的请求次数，请求的间隙
  $axios.defaults.retry = 3
  $axios.defaults.retryDelay = 2000
  // 增加请求同一参数
  $axios.onRequest(config => {
    // config.headers.contentType = 'application/json'

    // data for request methods 'PUT', 'POST', and 'PATCH'
    if (config.data) {
      config.data = Object.assign({}, publicParams, config.data)
    }
    // params are the URL parameters to be sent with the request
    if (config.params) {
      config.params = Object.assign({}, publicParams, config.params)
    }
  })
  // 封装响应体
  $axios.onResponse(res => {
    return res.data
  })
}
