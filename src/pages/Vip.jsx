import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//component
import TitleBar from '../components/TitleBar'
//assets
import myFunc01 from '../assets/images/vip/up_level.png'
import myFunc02 from '../assets/images/vip/red_letter.png'
import myFunc03 from '../assets/images/vip/withdraw_count.png'
import myFunc04 from '../assets/images/vip/quota.png'
import vipGoldBg from '../assets/images/vip/vip_point.png'
//api
import { fetchApi } from '../api'

const useStyles = makeStyles((theme) => ({
  // 返水與比例
  outerWrap: {
    position: 'relative',
    minHeight: '100vh',
    paddingTop: '44px',
    background: '#FFF',
  },
  tabs: {
    display: 'flex',
    marginBottom: '10px',
    background: '#FFF',
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.08)',
    '& > button': {
      position: 'relative',
      width: '50%',
      background: 'none',
      border: 'none',
      fontSize: '14px',
      lineHeight: '44px',
      '&::after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        bottom: 0,
        display: 'block',
        width: '80px',
        height: '1px',
        marginLeft: '-40px',
        background: 'none',
      },
    },
    '& > button.active': {
      color: '#2472ff',
      '&::after': {
        background: '#2472ff',
      },
    },
  },
  innerWrap: {
    padding: '10px',
  },
  slider: {
    padding: '20px 0',
    background: '#f8f8f8',
  },
  sliderItem: {
    padding: '0 10px',
    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
    },
  },
  sliderInfo: {
    marginTop: '30px',
    padding: '0 10px',
    '& p': {
      marginTop: '10px',
      fontSize: '12px',
      textAlign: 'center',
    },
  },
  progressBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    '& span': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '12px',
      '& img': {
        display: 'block',
        width: '18px',
        height: 'auto',
        marginRight: '3px',
      },
    },
  },
  barWrap: {
    position: 'relative',
    width: '220px',
    height: '8px',
    margin: ' 0 10px',
    background: '#9b9b9b',
    borderRadius: '5px',
    overflow: 'hidden',
  },
  bar: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    margin: 0,
    padding: 0,
    background: '#2472ff',
    border: 'none',
  },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    fontSize: '16px',
    '&::before': {
      content: '""',
      display: 'block',
      width: '3px',
      height: '16px',
      marginRight: '15px',
      background: '#b2987a',
    },
  },
  myFunc: {
    marginBottom: '20px',
    '& .wrap': {
      display: 'flex',
      flexWrap: 'wrap',
      '& dl': {
        display: 'flex',
        alignItems: 'center',
        width: '48%',
        margin: '1%',
        padding: '15px 8px',
        background: '#f6f6fb',
        borderRadius: '8px',
        '& dt': {
          marginRight: '8px',
          '& img': {
            width: '32px',
            height: 'auto',
          },
        },
        '& dd': {
          '& p': {
            marginBottom: '2px',
            fontSize: '12px',
            '& b': {
              fontSize: '16px',
            },
          },
          '& span': {
            fontSize: '12px',
            color: '#4a4a4a',
          },
        },
      },
    },
  },
  vipDiscount: {
    '& .wrap': {
      display: 'flex',
      flexWrap: 'wrap',
      '& dl': {
        width: '33.33%',
        margin: '20px 0',
        textAlign: 'center',
        '& dt': {
          marginBottom: '6px',
          fontSize: '20px',
          color: '#b2987a',
          fontWeight: 'bold',
        },
        '& dd': {
          fontSize: '12px',
        },
      },
    },
  },
  vipReturnList: {
    display: 'flex',
    marginBottom: '20px',
    fontSize: '12px',
    lineHeight: '32px',
    textAlign: 'center',
    '& ul': {
      width: '100%',
      '& li': {
        padding: '0 10px',
        whiteSpace: 'nowrap',
      },
      '& li:nth-child(odd)': {
        background: '#e1e5ed',
      },
      '& li:nth-child(even)': {
        background: '#FFF',
      },
      '& li.gold': {
        color: '#b2987a',
      },
      '&.head li': {
        display: 'flex',
        alignItems: 'center',
        color: '#FFF',
        '& img': {
          display: 'block',
          width: '12px',
          height: 'auto',
          marginRight: '5px',
        },
      },
      '&.head li:nth-child(odd)': {
        background: '#545d70',
      },
      '&.head li:nth-child(even)': {
        background: '#646e82',
      },
      '&.head li.goldbg': {
        background: '#b2987a',
      },
      '&.head li.current': {
        position: 'relative',
        background: '#c2a788',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: '100%',
          top: '-5px',
          width: '3px',
          height: '41px',
          background: `url(${vipGoldBg}) right center no-repeat`,
          backgroundSize: 'auto 100%'
        },
        '& span': {
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }
      }
    },
  },
  editor: {
    paddingBottom: '30px',
    '& h2': {
      marginBottom: '10px',
      fontSize: '14px',
      color: '#ae9a7d'
    },
    '& p': {
      marginBottom: '20px',
      fontSize: '14px',
      color: '#000',
      lineHeight: 1.5,
      '& span': {
        fontSize: '12px',
        color: '#9b9b9b'
      }
    },
    '& em': {
      display: 'block',
      fontSize: '14px',
      color: '#9d9d9d',
      textAlign: 'center'
    }
  }
}))

const Vip = () => {
  const classes = useStyles()
  const memberInfo = useSelector((state) => state.memberInfo)
  const [vipType, setVipType] = useState(0)
  const [vipSlider, setVipSlider] = useState([])
  const [percent, setPercent] = useState(0)
  const [vipReturn, setVipReturn] = useState([])
  const [vipRule, setVipRule] = useState('')

  //頁籤元件
  const tabComponent = () => {
    //切換
    const handleTab = (type) => () => setVipType(type)

    return (
      <div className={classes.tabs}>
        {['特權', '詳情'].map((item, idx) => {
          return (
            <button onClick={handleTab(idx)} className={idx === vipType ? 'active' : null} key={idx}>
              {item}
            </button>
          )
        })}
      </div>
    )
  }

  //輪播元件
  const vipSliderComponent = () => {
    
    return (
      <div className={classes.slider}>
        <Slider
          arrows={false}
          dots={false}
          autoplay={false}
          infinite={false}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          centerMode={true}
          centerPadding={'45px'}
        >
          {vipSlider.map((item, idx) => {
            return (
              <div className={classes.sliderItem} key={idx}>
                <img src={item.imgUrl} alt={item.title} />
              </div>
            )
          })}
        </Slider>
        <div className={classes.sliderInfo}>
          <div className={classes.progressBar}>
            <span>
              <img
                src={require(`../assets/images/vip/vip-${memberInfo.currentVip}.png`)}
                alt={`vip${memberInfo.currentVip}`}
              />
              VIP{memberInfo.currentVip}
            </span>
            <div className={classes.barWrap}>
              <hr className={classes.bar} style={{ width: `${percent}%` }} />
            </div>
            <span>
              <img
                src={require(`../assets/images/vip/vip-${memberInfo.nextVip}.png`)}
                alt={`vip${memberInfo.nextVip}`}
              />
              VIP{memberInfo.nextVip}
            </span>
          </div>
          <p>您已完成{memberInfo.promotion}流水（每日16点更新）</p>
        </div>
      </div>
    )
  }

  //我的功能
  const myFuncComponent = () => {
    return (
      <div className={classes.myFunc}>
        <div className={classes.sectionTitle}>我的功能</div>
        <div className='wrap'>
          <dl>
            <dt>
              <img src={myFunc01} alt='升级礼金' />
            </dt>
            <dd>
              <p>
                <b>18888</b>元
              </p>
              <span>升级礼金</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src={myFunc02} alt='每月红包' />
            </dt>
            <dd>
              <p>
                <b>18888</b>元
              </p>
              <span>每月红包</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src={myFunc03} alt='提款次数提升' />
            </dt>
            <dd>
              <p>
                <b>20</b>次
              </p>
              <span>提款次数提升</span>
            </dd>
          </dl>
          <dl>
            <dt>
              <img src={myFunc04} alt='提款额度提升' />
            </dt>
            <dd>
              <p>
                <b>30萬</b>/日
              </p>
              <span>提款额度提升</span>
            </dd>
          </dl>
        </div>
      </div>
    )
  }

  //VIP優惠
  const vipDiscountComponent = () => {
    return (
      <div className={classes.vipDiscount}>
        <div className={classes.sectionTitle}>VIP优惠</div>
        <div className='wrap'>
          <dl>
            <dt>100</dt>
            <dd>最低转帐</dd>
          </dl>
          <dl>
            <dt>指定场馆</dt>
            <dd>游戏场馆</dd>
          </dl>
          <dl>
            <dt>60%</dt>
            <dd>红利比例</dd>
          </dl>
          <dl>
            <dt>18888</dt>
            <dd>最高奖金</dd>
          </dl>
          <dl>
            <dt>一周一次</dt>
            <dd>次数限制</dd>
          </dl>
          <dl>
            <dt>12倍</dt>
            <dd>流水倍数</dd>
          </dl>
        </div>
      </div>
    )
  }

  //VIP詳情
  const vipReturnComponent = () => {
    return (
      <>
        <div className={classes.sectionTitle} style={{ paddingTop: '10px', paddingLeft: '10px' }}>
          返水與比例
        </div>
        <div className={classes.vipReturnList}>
          <ul className='head'>
            <li className='goldbg'>VIP等級</li>
            {['V0', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10'].map((item, idx) => {
              if (memberInfo.currentVip === idx) {
                return (
                  <li className='current' key={idx}>
                    <span>
                      <img src={require(`../assets/images/vip/vip-${idx}.png`)} alt={`vip-${idx}`} />
                      {item}
                    </span>
                  </li>
                )
              } else {
                return (
                  <li key={idx}>
                    <img src={require(`../assets/images/vip/vip-${idx}.png`)} alt={`vip-${idx}`} />
                    {item}
                  </li>
                )
              }
              
            })}
          </ul>
          {vipReturn.map((item, idx) => {
            const title = ['体育', '电竞', '篮球', '真人', '棋牌', '电子']
            return (
              <ul key={idx}>
                <li>{title[idx]}</li>
                <li className={item.V0.point ? 'gold' : null}>{item.V0.rate}</li>
                <li className={item.V1.point ? 'gold' : null}>{item.V1.rate}</li>
                <li className={item.V2.point ? 'gold' : null}>{item.V2.rate}</li>
                <li className={item.V3.point ? 'gold' : null}>{item.V3.rate}</li>
                <li className={item.V4.point ? 'gold' : null}>{item.V4.rate}</li>
                <li className={item.V5.point ? 'gold' : null}>{item.V5.rate}</li>
                <li className={item.V6.point ? 'gold' : null}>{item.V6.rate}</li>
                <li className={item.V7.point ? 'gold' : null}>{item.V7.rate}</li>
                <li className={item.V8.point ? 'gold' : null}>{item.V8.rate}</li>
                <li className={item.V9.point ? 'gold' : null}>{item.V9.rate}</li>
                <li className={item.V10.point ? 'gold' : null}>{item.V10.rate}</li>
              </ul>
            )
          })}
        </div>
      </>
    )
  }

  //條款內容
  const vipRuleComponent = () => {
    return (
      <>
        <div className={classes.sectionTitle} style={{marginBottom: '20px'}}>條款與規則</div>
        <div className={classes.editor} dangerouslySetInnerHTML={{__html: vipRule}}></div>
      </>
    )
  }

  useEffect(() => {
    fetchApi.vip().then((res) => {
      const { slider, returnList, vipRule } = res.data.data
      setVipSlider(slider)
      //計算百分比
      const { promotion, recharge, needPromotion, needRecharge } = memberInfo
      console.log(memberInfo.promotion)
      const num = ((needPromotion + needRecharge) - (promotion + recharge)) / 100
      setPercent(num)
      const returnData = Object.values(returnList)
      setVipReturn(returnData)
      setVipRule(vipRule)
    })
  }, [memberInfo])

  return (
    <>
      <TitleBar noShadow>VIP</TitleBar>
      <div className={classes.outerWrap}>
        {tabComponent()}
        {vipType === 0 ? (
          <>
            {vipSliderComponent()}
            <div className={classes.innerWrap}>
              {myFuncComponent()}
              {vipDiscountComponent()}
            </div>
          </>
        ) : (
          <>
            {vipReturnComponent()}
            <div className={classes.innerWrap}>{vipRuleComponent()}</div>
          </>
        )}
      </div>
    </>
  )
}

export default Vip
