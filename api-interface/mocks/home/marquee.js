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
        '为电竞而生，BOB倾情打造并自主开发的电竞APP现已正式上线，请您前往【PC端】-【手机APP】下载进行体验，BOB邀您“竞”无止境！',
        '为电竞而生，BOB倾情打造并自主开发的电竞APP现已正式上线，请您前往【PC端】-【手机APP】下载进行体验，BOB邀您“竞”无止境！',
        '为电竞而生，BOB倾情打造并自主开发的电竞APP现已正式上线，请您前往【PC端】-【手机APP】下载进行体验，BOB邀您“竞”无止境！',
      ]
    }
  }
}
