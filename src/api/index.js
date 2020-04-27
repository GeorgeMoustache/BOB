import axios from 'axios'
import url from './urlConfig'

const api = axios.create({
  header: 'content-Type: application/json'
})

export const fetchApi = {
  // 首頁跑馬燈
  homeMarquee() {
    return api.get(url.homeMarquee)
  },
  // 首頁遊戲列表
  homeGameList() {
    return api.get(url.homeGameList)
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