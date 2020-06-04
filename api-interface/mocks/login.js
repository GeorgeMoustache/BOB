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
        wallet: 100.52,
        currentVip: 0,
        nextVip: 1,
      }
    }
  }
}
