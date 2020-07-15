/**
 * 獲取邀請碼
 *
 * @url invite
 */

module.exports = (req) => {
  return {
    code: 0,
    message: "成功",
    data: {
      recommendCode: 'ABCDE'
    }
  }
}
