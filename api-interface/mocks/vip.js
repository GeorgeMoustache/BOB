/**
 * VIP詳情
 *
 * @url vip
 */

module.exports = (req) => {
  return {
    code: 0,
    message: "成功",
    data: {
      slider: [{
          title: 'vip0',
          imgUrl: '/static/images/vip/card_vip0.png'
        },
        {
          title: 'vip1',
          imgUrl: '/static/images/vip/card_vip1.png'
        },
        {
          title: 'vip2',
          imgUrl: '/static/images/vip/card_vip2.png'
        },
        {
          title: 'vip3',
          imgUrl: '/static/images/vip/card_vip3.png'
        },
        {
          title: 'vip4',
          imgUrl: '/static/images/vip/card_vip4.png'
        },
        {
          title: 'vip5',
          imgUrl: '/static/images/vip/card_vip5.png'
        },
        {
          title: 'vip6',
          imgUrl: '/static/images/vip/card_vip6.png'
        },
        {
          title: 'vip7',
          imgUrl: '/static/images/vip/card_vip7.png'
        },
        {
          title: 'vip8',
          imgUrl: '/static/images/vip/card_vip8.png'
        },
        {
          title: 'vip9',
          imgUrl: '/static/images/vip/card_vip9.png'
        },
        {
          title: 'vip10',
          imgUrl: '/static/images/vip/card_vip10.png'
        }
      ],
      returnList: {
        sport: {
          V0: {
            rate: '0.38',
            point: true
          },
          V1: {
            rate: '0.38',
            point: false
          },
          V2: {
            rate: '0.38',
            point: false
          },
          V3: {
            rate: '0.40',
            point: false
          },
          V4: {
            rate: '0.45',
            point: false
          },
          V5: {
            rate: '0.45',
            point: false
          },
          V6: {
            rate: '0.50',
            point: false
          },
          V7: {
            rate: '0.60',
            point: false
          },
          V8: {
            rate: '0.70',
            point: false
          },
          V9: {
            rate: '0.80',
            point: false
          },
          V10: {
            rate: '1.00',
            point: false
          }
        },
        eSport: {
          V0: {
            rate: '0.38',
            point: false
          },
          V1: {
            rate: '0.38',
            point: false
          },
          V2: {
            rate: '0.38',
            point: false
          },
          V3: {
            rate: '0.40',
            point: false
          },
          V4: {
            rate: '0.45',
            point: false
          },
          V5: {
            rate: '0.45',
            point: false
          },
          V6: {
            rate: '0.50',
            point: false
          },
          V7: {
            rate: '0.60',
            point: false
          },
          V8: {
            rate: '0.70',
            point: false
          },
          V9: {
            rate: '0.80',
            point: false
          },
          V10: {
            rate: '1.00',
            point: false
          }
        },
        basketball: {
          V0: {
            rate: '0.51',
            point: false
          },
          V1: {
            rate: '0.61',
            point: false
          },
          V2: {
            rate: '0.61',
            point: false
          },
          V3: {
            rate: '0.63',
            point: false
          },
          V4: {
            rate: '0.68',
            point: false
          },
          V5: {
            rate: '0.73',
            point: false
          },
          V6: {
            rate: '0.78',
            point: false
          },
          V7: {
            rate: '0.88',
            point: false
          },
          V8: {
            rate: '0.98',
            point: false
          },
          V9: {
            rate: '1.08',
            point: false
          },
          V10: {
            rate: '1.18',
            point: false
          }
        },
        casino: {
          V0: {
            rate: '0.40',
            point: false
          },
          V1: {
            rate: '0.50',
            point: false
          },
          V2: {
            rate: '0.50',
            point: false
          },
          V3: {
            rate: '0.55',
            point: false
          },
          V4: {
            rate: '0.60',
            point: false
          },
          V5: {
            rate: '0.65',
            point: false
          },
          V6: {
            rate: '0.70',
            point: false
          },
          V7: {
            rate: '0.75',
            point: false
          },
          V8: {
            rate: '0.80',
            point: false
          },
          V9: {
            rate: '0.85',
            point: false
          },
          V10: {
            rate: '1.00',
            point: false
          }
        },
        cardgame: {
          V0: {
            rate: '0.06',
            point: false
          },
          V1: {
            rate: '0.60',
            point: false
          },
          V2: {
            rate: '0.75',
            point: false
          },
          V3: {
            rate: '0.80',
            point: false
          },
          V4: {
            rate: '0.85',
            point: false
          },
          V5: {
            rate: '0.90',
            point: false
          },
          V6: {
            rate: '0.95',
            point: false
          },
          V7: {
            rate: '1.00',
            point: false
          },
          V8: {
            rate: '1.05',
            point: false
          },
          V9: {
            rate: '1.10',
            point: false
          },
          V10: {
            rate: '1.20',
            point: false
          }
        },
        eGame: {
          V0: {
            rate: '0.08',
            point: false
          },
          V1: {
            rate: '0.90',
            point: false
          },
          V2: {
            rate: '0.90',
            point: false
          },
          V3: {
            rate: '0.95',
            point: false
          },
          V4: {
            rate: '0.95',
            point: false
          },
          V5: {
            rate: '1.00',
            point: false
          },
          V6: {
            rate: '1.00',
            point: false
          },
          V7: {
            rate: '1.10',
            point: false
          },
          V8: {
            rate: '1.10',
            point: false
          },
          V9: {
            rate: '1.20',
            point: false
          },
          V10: {
            rate: '1.20',
            point: false
          }
        }
      },
      vipRule: '<h2>- VIP多端共享原则</h2><p>在BOB综合、BOB体育、BOB棋牌进行打码都会被计算成VIP的晋级策略；打造全平台终端共享VIP的极致体验。</p><h2>- 晋级奖励</h2><p>晋级优惠可在VIP页面自助领取，此优惠不与平台其他优惠共享，仅与返水优惠共享。</p><p><span>（该优惠活动成功申请后不能取消，如解除账户限制，需完成活动申请后的指定流水要求或申请该活动的指定账户金额低于5元时，请从主账户转入任意金额至锁定账户，再从锁定账户转出金额，系统识别后即可解除限制，只可申请符合当前等级的晋级优惠）</span></p><h2>- 保级策略</h2><p>会员在达到某VIP等级后，90天内投注需要完成保级要求。如果在此期间完成晋升，保级要求从新按照当前等级计算。</p><h2>- 降级惩罚</h2><p>如果会员在一个季度（90天计算）内没有完成相应的保级要求流水，系统会自动降级一个等级，相应的返水及其它优惠也会随之调整至降级后的等级。</p><h2>- 实物名品</h2><p>达到相应等级的VIP会员可联系在线客服进行申请，礼品不能折算为现金，每个级别的名贵礼品每位会员仅能获得1次。BOB娱乐对名贵礼品拥有最终解释权。</p><p><span>(名贵礼品仅针对VIP6/VIP7/VIP8/VIP9/VIP10会员)</span></p><h2>- 升级礼金</h2><p>升级礼金在会员达到该会员级别后系统自动派发，每个级别的升级礼金每位会员仅能获得1次。</p><p><span>（升级礼金1倍流水即可提款）</span></p><h2>- 每月红包</h2><p>会员在上个月有过至少1次成功存款或者有过1次有效投注（两者需满足其一），即可在每月1号获得上个月相应等级的每月红包彩金。</p><p><span>(每月红包彩金1倍流水即可提款）</span></p><h2>- 天天返水</h2><p>每天返水在15:00~15:30期间发放完毕。</p><em>BOB保留对活动的修改，停止及最终解释权</em>'
    }
  }
}