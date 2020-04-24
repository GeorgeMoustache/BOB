/**
 * 優惠活動
 *
 * @url promotion
 *
 */

module.exports = ({ method, query, body }) => {
  return {
    events: [
      {
        id: 0,
        advertiseImage: 'https://avatar.xaqlt.com/file1/23,ee08bfa8fae6',
        advertiseImageLink: '#',
        name: 'yy-jokei',
        actTitle: '棋牌每日全额包赔，投注再加奖',
        actIntro: '',
        status: 0,
        beginTime: '2020-04-08 00:00:00',
        endTime: '2020-04-30 23:59:59',
        validity: '',
        remark: ''
      },
      {
        id: 1,
        advertiseImage: 'https://avatar.eosyg.com/file1/23,e82c2f1ebe2b',
        advertiseImageLink: '',
        name: '',
        actTitle: '每日集卡赢彩金，免费红包抢开心',
        actIntro: 'yy-jokei',
        status: 1,
        beginTime: '020-04-01 00:00:00',
        endTime: '2020-04-30 23:59:59',
        validity: '',
        remark: ''
      },
      {
        id: 2,
        advertiseImage: 'https://avatar.xaqlt.com/file1/23,e0d7bc1d758d',
        advertiseImageLink: '',
        name: 'yy-jokei',
        actTitle: '真人投注送彩金',
        actIntro: '',
        status: 2,
        beginTime: '2020-03-23 00:00:00',
        endTime: '2020-04-30 23:59:59',
        validity: '',
        remark: ''
      }
    ],
    eventNumber: 3
  }
};
