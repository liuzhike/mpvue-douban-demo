import requset from './request'

async function requestGet (url, params, isWithCredentials = false) {
  console.log('url__' + url)
  console.log('params__' + params)
  let res = await requset.request(url, params, {
    method: 'get',
    withCredentials: isWithCredentials
  })
  return res.data
}

async function requestPost (url, params, isWithCredentials = false) {
  let res = await requset.request(url, params, {
    method: 'post',
    withCredentials: isWithCredentials
  })
  return res.data
}

class Api {
  constructor () {
    Object.assign(this, ...Array.from(arguments))
  }
}

export default new Api(requestGet)
