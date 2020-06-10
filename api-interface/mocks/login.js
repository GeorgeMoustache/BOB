/**
 * 會員登入
 *
 * @url login
 */

module.exports = (req) => {
  return {
    code: 0,
    message: "成功",
    data: {
      login: true,
      token: 'shuYang',
      memberInfo: {
        username: 'George',
        avatar: '/static/images/member/avatar.png',
        wallet: 100.52,
        currentVip: 0,
        nextVip: 1,
        needPromotion: 4000,
        needRecharge: 1000
      }
    }
  }
}
