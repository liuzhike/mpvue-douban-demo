/**
 * http请求拦截器
 */
const Fly = require('flyio/dist/npm/wx')

const ajaxUrl = ''

let fly = new Fly()
let loginFly = new Fly()
// 定义公共headers
const headers = {
  contentType: 'application/json'
}
Object.assign(fly.config, {
  headers: headers,
  baseURL: ajaxUrl,
  timeout: 10000,
  withCredentials: true
})
loginFly.config = fly.config
// session失效后本地重新登录
const login = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      success: res => {
        let loginParams = {}
        loginFly.post('/api/locallogin/url', loginParams).then(d => {
          if (d.headers && typeof d.headers['set-cookie'] !== 'undefined') {
            // 更新session
            wx.setStorageSync('sessionid', d.headers['set-cookie'])
          }
          resolve()
        }).catch(error => {
          console.log(error)
          reject(res.data)
        })
      },
      fail: res => {
        console.error(res.errMsg)
      },
      complete: res => {}
    })
  })
}
// 请求拦截器
fly.interceptors.request.use(request => {
  wx.showLoading({
    title: '加载中' // 数据请求前loading
  })
  if (wx.getStorageSync('sessionid')) {
    request.headers.cookie = wx.getStorageSync('sessionid')
  }
  return request
})
// 响应拦截器
fly.interceptors.response.use(
  response => {
    wx.hideLoading()
    // session已经失效，需要重新登录小程序
    if (response.data.errCode === 100009) {
      // log('session失效，根据之前存储在本地的用户信息重新请求session...')
      // 锁定响应拦截器
      fly.lock()
      return login().then(() => {
        fly.unlock()
        // log(`重新请求：path:${response.request.url}，baseURL:${response.request.baseURL}`)
        return fly.request(response.request)
      }).catch(err => {
        console.log(err)
      })
    } else {
      return response.data.data
    }
  },
  err => {
    wx.hideLoading()
    console.log('error-interceptor', err)
    if (err.status) {
      wx.showToast({
        title: '出现未知错误',
        icon: 'none',
        duration: 3000
      })
    }
  }
)

export default fly
