/**
 * 銀行卡列表
 *
 * @url bankCardList
 */

module.exports = (req) => {
  return {
    code: 0,
    message: "成功",
    data: {
      cardList: [
        {
          icon: '/static/images/bankList/bank-01.png',
          bankName: '工商银行',
          cardNo: '**** **** **** 6578',
          bankStyle: '/static/images/bankcard/blue.png'
        },
        {
          icon: '/static/images/bankList/bank-02.png',
          bankName: '招商银行',
          cardNo: '**** **** **** 6578',
          bankStyle: '/static/images/bankcard/green.png'
        },
        {
          icon: '/static/images/bankList/bank-03.png',
          bankName: '农业银行',
          cardNo: '**** **** **** 6578',
          bankStyle: '/static/images/bankcard/orange.png'
        },
      ]
    }
  }
}
