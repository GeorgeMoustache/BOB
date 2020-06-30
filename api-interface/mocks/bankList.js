/**
 * 銀行列表
 *
 * @url bankList
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
        },
        {
          bankName: '农业银行',
          bankCode: 'ABC',
          icon: '/static/images/bankList/bank-03.png'
        },
        {
          bankName: '建设银行',
          bankCode: 'CCB',
          icon: '/static/images/bankList/bank-04.png'
        },
        {
          bankName: '南京银行',
          bankCode: 'NJCB',
          icon: '/static/images/bankList/bank-05.png'
        },
        {
          bankName: '交通银行',
          bankCode: 'BOCO',
          icon: '/static/images/bankList/bank-06.png'
        },
        {
          bankName: '兴业银行',
          bankCode: 'CIB',
          icon: '/static/images/bankList/bank-07.png'
        },
        {
          bankName: '中国民生银行',
          bankCode: 'CMBC',
          icon: '/static/images/bankList/bank-08.png'
        },
        {
          bankName: '光大银行',
          bankCode: 'CEB',
          icon: '/static/images/bankList/bank-09.png'
        },
        {
          bankName: '中国银行',
          bankCode: 'BOC',
          icon: '/static/images/bankList/bank-10.png'
        },
        {
          bankName: '平安银行',
          bankCode: 'PINGAN',
          icon: '/static/images/bankList/bank-11.png'
        },
        {
          bankName: '中信银行',
          bankCode: 'ECITIC',
          icon: '/static/images/bankList/bank-12.png'
        },
        {
          bankName: '广发银行',
          bankCode: 'CGB',
          icon: '/static/images/bankList/bank-13.png'
        },
        {
          bankName: '上海浦东发展银行',
          bankCode: 'SPDB',
          icon: '/static/images/bankList/bank-14.png'
        },
        {
          bankName: '中国邮政储蓄银行',
          bankCode: 'PSBC',
          icon: '/static/images/bankList/bank-15.png'
        },
        {
          bankName: '华夏银行',
          bankCode: 'HXB',
          icon: '/static/images/bankList/bank-16.png'
        },
        {
          bankName: '上海银行',
          bankCode: 'SHB',
          icon: '/static/images/bankList/bank-17.png'
        },
        {
          bankName: '东亚银行',
          bankCode: 'HKBEA',
          icon: '/static/images/bankList/bank-18.png'
        },
        {
          bankName: '北京银行',
          bankCode: 'BCCB',
          icon: '/static/images/bankList/bank-19.png'
        }
      ]
    }
  }
}
