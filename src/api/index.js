import axios from 'axios'
import url from './urlConfig'

const api = axios.create({
  header: 'content-Type: application/json',
  token: 'abc'
})

export const fetchApi = {
  // 用戶登入
  login() {
    return api.get(url.login)
  },
  // 用戶登入
  verify() {
    return api.get(url.verify)
  },
  // 首頁大圖輪播
  homeSlider() {
    return api.get(url.homeSlider)
  },
  // 首頁跑馬燈
  homeMarquee() {
    return api.get(url.homeMarquee)
  },
  // 首頁遊戲列表
  homeGameList() {
    return api.get(url.homeGameList)
  },
  // 首頁前往第三方遊戲
  homeGoGame() {
    return api.get(url.homeGoGame)
  },
  // 優惠活動
  promotion() {
    return api.get(url.promotion)
  },
  // 聯繫客服
  problem() {
    return api.get(url.problem)
  },
  // 贊助專題
  sponsor() {
    return api.get(url.sponsor)
  }
}