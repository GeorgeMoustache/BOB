/**
 * 首頁 - 跑馬燈
 *
 * @url home/marquee
 */

module.exports = (req) => {
  return {
    code: 0,
    message: "成功",
    data: {
      list: [
        {
          date: '2020-01-03',
          title: '为电竞而生',
          content: '为电竞而生，BOB倾情打造并自主开发的电竞APP现已正式上线，请您前往【PC端】-【手机APP】下载进行体验，BOB邀您“竞”无止境！'
        },
        {
          date: '2020-06-15',
          title: '为电竞而生',
          content: '为电竞而生，BOB倾情打造并自主开发的电竞APP现已正式上线，请您前往【PC端】'
        },
        {
          date: '2020-07-17',
          title: '为电竞而生',
          content: '为电竞而生，BOB倾情打造并自主开发的电竞APP现已正式上线'
        }
      ]
    }
  }
}
