/**
 * 贊助專題
 *
 * @url sponsor
 *
 */

module.exports = ({ method, query, body }) => {
  return {
    code: 0,
    message: "成功",
    data: {
      list: [
        {
          id: 1,
          title: '那不勒斯',
          imgUrl: 'https://static.xaqlt.com/imgs/banner/fcc3b5955fce3b251c70a50794a54eef3fa11fe8.png',
          linkUrl: '/app/sponsor/1',
        },
        {
          id: 2,
          title: '多特蒙德',
          imgUrl: 'https://static.xaqlt.com/imgs/banner/a5ef54895749313d431a4bc7a1c5349fc0910780.png',
          linkUrl: '/app/sponsor/2',
        },
        {
          id: 3,
          title: '因扎吉',
          imgUrl: 'https://static.xaqlt.com/imgs/banner/b69197cb5ce7851ece01b05c0613c506ed77efe6.png',
          linkUrl: '/app/sponsor/3',
        },
        {
          id: 4,
          title: '法甲里昂',
          imgUrl: 'https://static.xaqlt.com/imgs/banner/0e07783e782837ab3965579f9d7966f546781ab9.png',
          linkUrl: '/app/sponsor/4',
        },
      ],
    }
  }
}