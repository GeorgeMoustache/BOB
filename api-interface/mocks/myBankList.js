/**
 * 我的銀行列表
 *
 * @url myBankList
 */

module.exports = (req) => {
  return {
    code: 0,
    message: "成功",
    data: {
      bankList: [
        {
          bankName: '工商银行',
          bankCode: 'ICBC',
          icon: '/static/images/bankList/bank-01.png'
        },
        {
          bankName: '招商银行',
          bankCode: 'CMB',
          icon: '/static/images/bankList/bank-02.png'
        }
      ]
    }
  }
}
