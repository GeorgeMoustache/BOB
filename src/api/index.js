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
  // 取得驗證碼
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
  },
  // VIP詳情
  vip() {
    return api.get(url.vip)
  },
  // 支付列表
  payList() {
    return api.get(url.payList)
  },
  // 銀行列表
  bankList() {
    return api.get(url.bankList)
  },
  // 存款
  deposit(params) {
    return api.post(url.deposit, params)
  },
  // 錢包列表
  moneyList() {
    return api.get(url.moneyList)
  },
  // 我的銀行列表
  myBankList() {
    return api.get(url.myBankList)
  },
  // 取款
  withdraw() {
    return api.get(url.withdraw)
  },
  // 投注記錄
  betRecord(params) {
    return api.post(url.betRecord, params)
  },
  // 交易記錄
  transactionRecord(params) {
    return api.post(url.transactionRecord, params)
  },
  // 意見反饋
  feedback(params) {
    return api.post(url.feedback, params)
  },
  // 獲取邀請碼
  invite() {
    return api.get(url.invite)
  },
  // 銀行卡列表
  bankCardList() {
    return api.get(url.bankCardList)
  },
  // 銀行卡列表
  addBankcard(params) {
    return api.post(url.addBankcard, params)
  },
}