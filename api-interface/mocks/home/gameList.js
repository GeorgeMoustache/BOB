/**
 * 首頁 - 遊戲列表
 *
 * @url home/gameList
 *
 */

module.exports = ({ method, query, body }) => {
  return {
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
          wap: 'string, // wap 連結',
          app: 'string, // app 下載連結',
        },
        {
          id: 145,
          name: 'IM体育',
          title: '体育赛事',
          order: 2,
          count: 624,
          wap: 'string, // wap 連結',
          app: 'string, // app 下載連結',
        },
        {
          id: 145,
          name: '沙巴体育',
          title: '体育赛事',
          order: 3,
          count: 470,
          wap: 'string, // wap 連結',
          app: 'string, // app 下載連結',
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
          wap: 'string, // wap 連結',
          app: 'string, // app 下載連結',
        },
        {
          id: 145,
          name: 'EBET真人',
          title: '真人娱乐',
          order: 2,
          count: 22,
          wap: 'string, // wap 連結',
          app: 'string, // app 下載連結',
        },
        {
          id: 145,
          name: 'GD真人',
          title: '真人娱乐',
          order: 3,
          count: 10,
          wap: 'string, // wap 連結',
          app: 'string, // app 下載連結',
        },
        {
          id: 145,
          name: 'GD真人',
          title: '真人娱乐',
          order: 3,
          count: 10,
          wap: 'string, // wap 連結',
          app: 'string, // app 下載連結',
        },
        {
          id: 145,
          name: 'GD真人',
          title: '真人娱乐',
          order: 3,
          count: 10,
          wap: 'string, // wap 連結',
          app: 'string, // app 下載連結',
        },
        {
          id: 145,
          name: 'GD真人',
          title: '真人娱乐',
          order: 3,
          count: 10,
          wap: 'string, // wap 連結',
          app: 'string, // app 下載連結',
        },
        {
          id: 145,
          name: 'GD真人',
          title: '真人娱乐',
          order: 3,
          count: 10,
          wap: 'string, // wap 連結',
          app: 'string, // app 下載連結',
        },
      ],
    },
    ESport: {
      title: '电子竞技',
      subTitle: '电竞',
      enTitle: 'ELECTRONIC SPORTS',
      order: 3,
      item: [],
    },
    Cardgame: {
      title: '棋牌游戏',
      subTitle: '棋牌',
      enTitle: 'BOARD GAMES',
      order: 4,
      item: [],
    },
    Lottory: {
      title: '彩票游戏',
      subTitle: '彩票',
      enTitle: 'LOTTERY GAME',
      order: 5,
      item: [],
    },
    EGame: {
      title: '电子游艺',
      subTitle: '电游',
      enTitle: 'SLOT MACHINES',
      order: 6,
      item: [],
    },
    Custom: {
      title: '自选',
      subTitle: '自选',
      enTitle: 'COLLECTION',
      order: 7,
      item: [],
    },
  }
}
