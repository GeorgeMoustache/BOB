/**
 * 首頁 - 遊戲列表
 *
 * @url home/gameList
 *
 */

module.exports = ({ method, query, body }) => {
  return {
    code: 0,
    message: "成功",
    data: {
      Sport: {
        title: '体育赛事',
        subTitle: '体育',
        enTitle: 'SPORTS EVENTS',
        order: 1,
        item: [
          {
            id: 145,
            name: 'BOB体育',
            title: '体育赛事',
            order: 1,
            count: 663,
            imgUrl: '/static/images/games/sport/sport_bob.png',
            maintain: true
          },
          {
            id: 145,
            name: 'IM体育',
            title: '体育赛事',
            order: 2,
            count: 624,
            imgUrl: '/static/images/games/sport/sport_im.png',
            maintain: false
          },
          {
            id: 145,
            name: '沙巴体育',
            title: '体育赛事',
            order: 3,
            count: 470,
            imgUrl: '/static/images/games/sport/sport_asba.png',
            maintain: false
          },
        ],
      },
      Casino: {
        title: '真人娱乐',
        subTitle: '真人',
        enTitle: 'LIVE CASINO',
        order: 2,
        item: [
          {
            id: 145,
            name: 'AG真人',
            title: '真人娱乐',
            order: 1,
            count: 50,
            imgUrl: '/static/images/games/live/live_ag.png',
            maintain: false
          },
          {
            id: 145,
            name: 'EBET真人',
            title: '真人娱乐',
            order: 2,
            count: 22,
            imgUrl: '/static/images/games/live/live_ebet.png',
            maintain: false
          },
          {
            id: 145,
            name: 'GD真人',
            title: '真人娱乐',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/live/live_gd.png',
            maintain: false
          },
          {
            id: 145,
            name: 'BOB真人',
            title: '真人娱乐',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/live/live_bob.png',
            maintain: false
          },
          {
            id: 145,
            name: 'BG真人',
            title: '真人娱乐',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/live/live_bg.png',
            maintain: false
          },
        ],
      },
      ESport: {
        title: '电子竞技',
        subTitle: '电竞',
        enTitle: 'ELECTRONIC SPORTS',
        order: 3,
        item: [
          {
            id: 145,
            name: 'ag电竞',
            title: '电竞',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/slotgame/slotgame_ag.png',
            maintain: false
          },
          {
            id: 145,
            name: 'mg电竞',
            title: '电竞',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/slotgame/slotgame_mg.png',
            maintain: false
          },
          {
            id: 145,
            name: 'pg电竞',
            title: '电竞',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/slotgame/slotgame_pg.png',
            maintain: false
          },
          {
            id: 145,
            name: 'pp电竞',
            title: '电竞',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/slotgame/slotgame_pp.png',
            maintain: false
          },
          {
            id: 145,
            name: 'pt电竞',
            title: '电竞',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/slotgame/slotgame_pt.png',
            maintain: false
          },
        ],
      },
      Cardgame: {
        title: '棋牌游戏',
        subTitle: '棋牌',
        enTitle: 'BOARD GAMES',
        order: 4,
        item: [
          {
            id: 145,
            name: 'bob棋牌',
            title: '棋牌游戏',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/pocker/pocker_bob.png',
            maintain: false
          },
          {
            id: 145,
            name: 'gd棋牌',
            title: '棋牌游戏',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/pocker/pocker_gd.png',
            maintain: false
          },
          {
            id: 145,
            name: 'sy棋牌',
            title: '棋牌游戏',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/pocker/pocker_sy.png',
            maintain: false
          },
          {
            id: 145,
            name: 'tm棋牌',
            title: '棋牌游戏',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/pocker/pocker_tm.png',
            maintain: false
          },
        ],
      },
      Lottory: {
        title: '彩票游戏',
        subTitle: '彩票',
        enTitle: 'LOTTERY GAME',
        order: 5,
        item: [
          {
            id: 145,
            name: 'bob彩票',
            title: '彩票游戏',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/lottery/lottery_bob.png',
            maintain: false
          },
          {
            id: 145,
            name: 'sg彩票',
            title: '彩票游戏',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/lottery/lottery_sg.png',
            maintain: false
          },
          {
            id: 145,
            name: 'tcg彩票',
            title: '彩票游戏',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/lottery/lottery_tcg.png',
            maintain: false
          },
          {
            id: 145,
            name: 'vr彩票',
            title: '彩票游戏',
            order: 3,
            count: 10,
            imgUrl: '/static/images/games/lottery/lottery_vr.png',
            maintain: false
          },
        ],
      },
      EGame: {
        title: '电子游艺',
        subTitle: '电游',
        enTitle: 'SLOT MACHINES',
        order: 6,
        item: [],
      },
    }
  }
}
