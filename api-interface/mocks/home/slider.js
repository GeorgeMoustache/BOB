/**
 * 首頁 - 大圖輪播
 *
 * @url home/slider
 */

module.exports = (req) => {
  return {
    code: 0,
    message: "成功",
    data: {
      list: [
        {
          id: 1,
          title: '意甲，那不勒斯',
          imgUrl: 'https://i.imgur.com/YRZWT51.png',
          linkUrl: '#', 
        },
        {
          id: 2,
          title: '多特蒙德',
          imgUrl: 'https://i.imgur.com/eCJIZYA.png',
          linkUrl: '#', 
        },
        {
          id: 3,
          title: '法甲里昂',
          imgUrl: 'https://i.imgur.com/3xlYYYF.png',
          linkUrl: '#', 
        },
      ]
    }
  }
}
