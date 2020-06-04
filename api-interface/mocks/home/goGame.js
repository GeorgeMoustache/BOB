/**
 * 首頁 - 前往遊戲
 *
 * @url home/goGame
 */

module.exports = (req) => {
  return {
    code: 0,
    message: "成功",
    data: {
      url: 'https://www.google.com'
    }
  }
}
