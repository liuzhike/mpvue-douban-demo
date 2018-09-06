import requset from './request'
const baseUrl = 'https://api.douban.com/v2/movie/'

// export const top250Api = baseUrl + 'top250' // top 250
// export const nowPlayingApi = baseUrl + 'nowplaying' // 正在热映
// export const comingApi = baseUrl + 'coming' // 即将上映
// export const weeklyApi = baseUrl + 'weekly' // 本周口碑榜
// export const usBoxApi = baseUrl + 'us_box' // 北美票房榜
// export const newMoviesApi = baseUrl + 'new_movies' // 新片榜

export default {
  /**
   * top 250
   * @param data
   * @returns {*}
   */
  getTop250 (data) {
    return requset.request(baseUrl + 'top250', data, {
      method: 'get'
    })
  },
  /**
   * 正在热映
   * @param data
   * @returns {*}
   */
  getNowPlaying (data) {
    return requset.request(baseUrl + 'nowplaying', data, {
      method: 'get'
    })
  },
  /**
   * 即将上映
   * @param data
   * @returns {*}
   */
  getComing (data) {
    return requset.request(baseUrl + 'coming', data, {
      method: 'get'
    })
  },
  /**
   * 本周口碑榜
   * @param data
   * @returns {*}
   */
  getWeekly (data) {
    return requset.request(baseUrl + 'weekly', data, {
      method: 'get'
    })
  },
  /**
   * 北美票房榜
   * @param data
   * @returns {*}
   */
  getUsBox (data) {
    return requset.request(baseUrl + 'us_box', data, {
      method: 'get'
    })
  },
  /**
   * 新片榜
   * @param data
   * @returns {*}
   */
  getNewMovies (data) {
    return requset.request(baseUrl + 'new_movies', data, {
      method: 'get'
    })
  }
}
