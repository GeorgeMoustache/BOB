/**
 * 贊助專題
 *
 * @url sponsor
 *
 */

module.exports = ({ method, query, body }) => {
  return {
    data: [
      {
        title: '那不勒斯',
        link_url: '/app/sponsor/3',
        cover_img_day: 'https://static.xaqlt.com/imgs/banner/fcc3b5955fce3b251c70a50794a54eef3fa11fe8.png',
        cover_img_night: 'https://static.xaqlt.com/imgs/banner/61178a61423e8e96855dd3ba7b49d16d7267c077.png',
        keyword: 'NBLS',
        start_at: '2019-12-10 00:00:00',
        end_at: '2022-12-10 23:59:59',
        sort: 1
      },
      {
        title: '多特蒙德',
        link_url: '/app/sponsor/0',
        cover_img_day: 'https://static.xaqlt.com/imgs/banner/a5ef54895749313d431a4bc7a1c5349fc0910780.png',
        cover_img_night: 'https://static.xaqlt.com/imgs/banner/e14faa8c15d6f4e8b05d6b003821cdea2e87096a.png',
        keyword: 'DTMD',
        start_at: '2019-10-01 00:00:00',
        end_at: '2022-10-01 23:59:59',
        sort: 2
      },
      {
        title: '因扎吉',
        link_url: '/app/sponsor/1',
        cover_img_day: 'https://static.xaqlt.com/imgs/banner/b69197cb5ce7851ece01b05c0613c506ed77efe6.png',
        cover_img_night: 'https://static.xaqlt.com/imgs/banner/d2631f591086f91acaf0d6ef744aa491725ef198.png',
        keyword: 'YZJ',
        start_at: '2019-10-01 00:00:00',
        end_at: '2022-10-01 23:59:59',
        sort: 3
      },
      {
        title: '法甲里昂',
        link_url: '/app/sponsor/2',
        cover_img_day: 'https://static.xaqlt.com/imgs/banner/0e07783e782837ab3965579f9d7966f546781ab9.png',
        cover_img_night: 'https://static.xaqlt.com/imgs/banner/bbd58b3aafefb5963dcfd937fb4a23c2931f51bc.png',
        keyword: 'FJLA',
        start_at: '2019-10-01 00:00:00',
        end_at: '2022-10-01 23:59:59',
        sort: 4
      }
    ],
    message: '成功',
    status_code: 6000
  }
}