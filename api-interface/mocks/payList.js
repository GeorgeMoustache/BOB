/**
 * 支付類別
 *
 * @url payList
 */

module.exports = (req) => {
  return {
    code: 0,
    message: "成功",
    data: {
      payList: [
        {
          id: 1,
          icon: '/static/images/payList/bank-01.png',
          title: '银行卡转帐',
          type: 0,
        },
        {
          id: 2,
          icon: '/static/images/payList/bank-02.png',
          title: '支付宝扫码',
          type: 0,
        },
        {
          id: 3,
          icon: '/static/images/payList/bank-03.png',
          title: '支付宝APP',
          type: 0,
        },
        {
          id: 4,
          icon: '/static/images/payList/bank-03.png',
          title: '支付H5',
          type: 0,
        },
        {
          id: 5,
          icon: '/static/images/payList/bank-04.png',
          title: '微信APP',
          type: 0,
        },
        {
          id: 6,
          icon: '/static/images/payList/bank-05.png',
          title: '京东扫码',
          type: 0,
        },
        {
          id: 7,
          icon: '/static/images/payList/bank-06.png',
          title: '微信扫码',
          type: 0,
        },
        {
          id: 8,
          icon: '/static/images/payList/bank-07.png',
          title: 'QQ扫码',
          type: 0,
        },
        {
          id: 9,
          icon: '/static/images/payList/bank-08.png',
          title: 'QQAPP',
          type: 0,
        },
        {
          id: 10,
          icon: '/static/images/payList/bank-09.png',
          title: '银连扫码',
          type: 0,
        },
        {
          id: 11,
          icon: '/static/images/payList/bank-10.png',
          title: '在线网银',
          type: 0,
        },
        {
          id: 12,
          icon: '/static/images/payList/bank-11.png',
          title: '快捷支付',
          type: 0,
        },
        {
          id: 13,
          icon: '/static/images/payList/bank-12.png',
          title: '京东APP',
          type: 0,
        },
      ]
    }
  }
}
