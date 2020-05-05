/**
 * 優惠活動
 *
 * @url promotion
 *
 */

module.exports = ({ method, query, body }) => {
  return {
    code: 0,
    message: "成功",
    data: {
      list: [
        {
          id: 0,
          title: '棋牌每日全额包赔，投注再加奖',
          imgUrl: 'https://avatar.xaqlt.com/file1/23,ee08bfa8fae6',
          linkUrl: '#',
          status: 0, // 0=未開始,1=進行中,2=已過期,3=已下架,4=不可申請
          beginTime: '2020-04-08',
          endTime: '2020-04-30',
        },
        {
          id: 1,
          title: '每日集卡赢彩金，免费红包抢开心',
          imgUrl: 'https://avatar.xaqlt.com/file1/23,71866375fe95',
          linkUrl: '#',
          status: 0,
          beginTime: '2020-04-08',
          endTime: '2020-04-30',
        },
        {
          id: 2,
          title: '真人投注送彩金',
          imgUrl: 'https://avatar.xaqlt.com/file1/23,e0d7bc1d758d',
          linkUrl: '#',
          status: 0,
          beginTime: '2020-04-08',
          endTime: '2020-04-30',
        },
      ]
    }
  }
};
