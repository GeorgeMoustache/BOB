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
      login: true
    }
  }
}
