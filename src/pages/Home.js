import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { USER_LOGIN, USER_LOGOUT } from '../action/actionType'
import { makeStyles } from '@material-ui/core/styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
//component
import AlertDialog from '../components/AlertDialog'
//api
import { fetchApi } from '../api'
//assets
import marqueeIcon from '../assets/images/home/bulletin.svg'
import homeLoginIcon from '../assets/images/home/home_login_icon.png'
import level from '../assets/images/home/level.png'
import quickLinkIcon1 from '../assets/images/home/deposit.png'
import quickLinkIcon2 from '../assets/images/home/withdraw.png'
import quickLinkIcon4 from '../assets/images/home/vip.png'
import gameTabRepeat from '../assets/images/home/game_category_repeat.png'
import gameTabBg from '../assets/images/home/game_category_bg.png'
import gameListBg from '../assets/images/home/card_sports_bob.png'

const useStyles = makeStyles((theme) => ({
  sliderWrap: {
    position: 'relative',
    '& *': {
      lineHeight: 0,
    },
    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto',
    },
  },
  marquee: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '5px',
    background: 'rgba(0, 0, 0, .5)',
    borderRadius: '10px 10px 0 0',
    fontSize: '12px',
    color: '#FFF',
    '&::before': {
      content: '""',
      flexShrink: 0,
      display: 'block',
      width: '52px',
      height: '19px',
      background: `url(${marqueeIcon})`,
      backgroundSize: '100% auto',
    },
  },
  marqueeContent: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    animation: '$marqueeAnimate 50s linear infinite ',
  },
  '@keyframes marqueeAnimate': {
    from: {
      textIndent: '27.5em',
    },
    to: {
      textIndent: '-105em',
    },
  },
  loginWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `0 ${theme.typography.pxToRem(20)}`,
    background: theme.palette.common.white,
    borderBottom: `${theme.typography.pxToRem(1)} dashed #f1f1f1`,
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.common.black,
  },
  loginButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: `${theme.typography.pxToRem(10)} 0`,
    background: 'none',
    border: 'none',
    color: theme.palette.common.black,
    textDecoration: 'none',
    '& img': {
      width: theme.typography.pxToRem(15),
      height: 'auto',
      marginLeft: theme.typography.pxToRem(14),
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    padding: `${theme.typography.pxToRem(15)} 0`,
    '& img': {
      marginLeft: theme.typography.pxToRem(2),
    },
  },
  money: {
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.primary.main,
  },
  quickLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    '& button': {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'none',
      border: 'none',
      '& img': {
        display: 'block',
        width: '24px',
        height: 'auto',
        marginRight: '5px',
      },
    },
  },
  listContainer: {
    position: 'relative',
    height: 'calc(100vh - 300px)',
    marginTop: '-50px',
    padding: '50px 0',
    overflow: 'auto',
  },
  gameTab: {
    position: 'relative',
    display: 'flex',
    zIndex: 1,
    '& > button': {
      flexGrow: 1,
      width: '50px',
      height: '56px',
      background: `url(${gameTabRepeat}) center bottom repeat-x`,
      border: 'none',
      color: '#000',
      '& span': {
        display: 'block',
        transition: 'all .3s',
      },
      '& .cht': {
        fontSize: '12px',
        transform: 'translateY(-5px)',
      },
      '& .eng': {
        display: 'none',
        whiteSpace: 'nowrap',
        transform: 'scale(.4, .4)',
      },
    },
    '& > button.active': {
      position: 'relative',
      flexGrow: 0,
      width: '135px',
      height: '50px',
      background: `url(${gameTabBg}) center top no-repeat`,
      backgroundSize: '100% auto',
      color: '#FFF',
      '&::after': {
        content: '""',
        position: 'absolute',
        right: 0,
        top: 0,
        display: 'block',
        width: '1px',
        height: '39px',
        background: '#FFF',
      },
      '& .cht': {
        marginBottom: '0',
        transform: 'translateY(0)',
      },
      '& .eng': {
        display: 'block',
      },
    },
  },
  gameList: {
    padding: '0 10px',
  },
  gameListRow: {
    position: 'relative',
    marginBottom: '10px',
    paddingBottom: '28.5%',
    background: `url(${gameListBg}) center top no-repeat`,
    backgroundSize: '100% auto',
    '&.active': {
      animation: '$gameListItemAnimate 1s',
    },
  },
  '@keyframes gameListItemAnimate': {
    '0%': {
      transform: 'scale(1, 1)',
    },
    '30%': {
      transform: 'scale(1.25, .75)',
    },
    '40%': {
      transform: 'scale(.75, 1.25)',
    },
    '50%': {
      transform: 'scale(1.15, .85)',
    },
    '65%': {
      transform: 'scale(.95, 1.05)',
    },
    '75%': {
      transform: 'scale(1.05, .95)',
    },
    '100%': {
      transform: 'scale(1, 1)',
    },
  },
  gameName: {
    position: 'absolute',
    left: '50%',
    top: '10%',
    fontSize: '5vw',
    color: '#FFF',
    pointerEvents: 'none'
  },
  gameTitle: {
    position: 'absolute',
    left: '50%',
    top: '40%',
    fontSize: '3vw',
    pointerEvents: 'none'
  },
  gameCount: {
    paddingRight: '5px',
    fontSize: '5vw',
    color: '#FFF',
  },
}))

const Home = () => {
  const classes = useStyles()
  const [sliderList, setSliderList] = useState([])
  const [marqueeContent, setMarqueeContent] = useState('我是跑馬燈')
  const isLogin = useSelector((state) => state.loginStatus)
  const dispatch = useDispatch()
  const [loginStatus, setLoginStatus] = useState()
  const [memberInfo, setMemberInfo] = useState({
    username: '',
    money: 0,
  })
  const [activeTab, setActiveTab] = useState(0)
  const [gameList, setGameList] = useState([])
  const [domGroup, setDomGroup] = useState([])
  const [dialogEnabled, setDialogEnabled] = useState(false)

  //輪播元件
  const sliderComponent = () => {
    return (
      <Slider
        arrows={false}
        dots={false}
        autoplay={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {sliderList.map((item, idx) => {
          return (
            <a href={item.linkUrl} key={idx}>
              <img src={item.imgUrl} alt={item.title} />
            </a>
          )
        })}
      </Slider>
    )
  }

  //跑馬燈元件
  const marqueeComponent = () => {
    return (
      <div className={classes.marquee}>
        <div className={classes.marqueeContent}>{marqueeContent}</div>
      </div>
    )
  }

  //用戶登入前元件
  const beforeLoginComponent = () => {
    return (
      <div className={classes.loginWrap}>
        <span className={classes.loginMsg}>歡迎您，親愛的用戶</span>
        <button onClick={handleLogin} className={classes.loginButton}>
          請先登入
          <img src={homeLoginIcon} alt='arrow' />
        </button>
      </div>
    )
  }

  //用戶登入後元件
  const loginComponent = () => {
    return (
      <div className={classes.loginWrap}>
        <div onClick={handleLogout} className={classes.userName}>
          {memberInfo.username}
          <img src={level} alt='level' />
        </div>
        <div>
          中心錢包：¥<span className={classes.money}>{memberInfo.money.toFixed(2)}</span>
        </div>
      </div>
    )
  }

  //快捷按鈕
  const quickLinksComponent = () => {
    return (
      <div className={classes.quickLinks}>
        <button>
          <img src={quickLinkIcon1} alt='存款' />
          存款
        </button>
        <button>
          <img src={quickLinkIcon2} alt='取款' />
          取款
        </button>
        <button>
          <img src={quickLinkIcon4} alt='VIP詳情' />
          VIP詳情
        </button>
      </div>
    )
  }

  //遊戲頁籤元件
  const gameTabComponent = () => {
    return (
      <div className={classes.gameTab}>
        {gameList.map((item, idx) => {
          const curItem = item
          if (curItem.item.length) {
            return (
              <button
                onClick={() => handleTabClick(idx)}
                className={`tabs ${activeTab === idx ? 'active' : ''}`}
                key={idx}
              >
                <span className='cht'>{activeTab === idx ? curItem.title : curItem.subTitle}</span>
                <span className='eng'>{curItem.enTitle}</span>
              </button>
            )
          } else {
            return null
          }
        })}
      </div>
    )
  }

  //遊戲列表元件
  const gameListComponent = () => {
    return (
      <div id='box' onScroll={handleScroll} className={classes.listContainer}>
        {gameList.map((item, idx) => {
          const curItem = item
          if (curItem.item.length) {
            return (
              <div className={`${classes.gameList} classRow`} key={idx}>
                {curItem.item.map((childItem, childIdx) => {
                  return (
                    <div onClick={goGame} className={classes.gameListRow} key={childIdx}>
                      <div className={classes.gameName}>{childItem.name}</div>
                      <div className={classes.gameTitle}>
                        <span className={classes.gameCount}>{childItem.count}</span>
                        {childItem.title}
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          } else {
            return null
          }
        })}
      </div>
    )
  }

  //登入事件
  const handleLogin = () => {
    fetchApi.login().then((data) => {
      dispatch({ type: USER_LOGIN })
      setLoginStatus(true)
    })
  }

  //登出事件
  const handleLogout = () => {
    dispatch({ type: USER_LOGOUT })
    setLoginStatus(false)
  }

  //tab點擊事件
  const handleTabClick = (idx) => {
    const box = document.getElementById('box')
    box.scrollTo({
      top: domGroup[idx].offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }

  //捲動事件
  const handleScroll = (e) => {
    const box = e.target
    const boxTop = box.scrollTop
    const boxScrollHeight = box.scrollHeight
    const boxHeight = box.offsetHeight
    const domList = Array.from(domGroup)

    domList.forEach((item, idx) => {
      if (boxTop >= item.offsetTop) {
        if (boxTop + boxHeight === boxScrollHeight) {
          setActiveTab(domList.length - 1)
        } else {
          setActiveTab(idx)
        }
      }
    })
  }

  //點擊遊戲彈窗
  const goGame = (e) => {
    gameAnimate(e)
  }

  //遊戲動畫事件
  const gameAnimate = (e) => {
    const target = e.target.classList
    target.add('active')
    setTimeout(() => {
      target.remove('active')
    }, 1000)
  }

  //彈窗確認事件
  const handleConfirm = () => setDialogEnabled(false)

  //彈窗取消事件
  const handleCancel = () => setDialogEnabled(false)

  useEffect(() => {
    //取得大圖輪播
    fetchApi.homeSlider().then((data) => {
      setSliderList(data.data.data.list)
    })

    //取得跑馬燈內容
    fetchApi.homeMarquee().then((data) => {
      setMarqueeContent(data.data.data.content)
    })

    //會員資料
    setMemberInfo({
      username: 'George',
      money: 100.03,
    })

    //取得遊戲列表
    fetchApi.homeGameList().then((data) => {
      const gameData = Object.values(data.data.data)
      setGameList(gameData)
    })

    //取得遊戲列表分類 dom 供捲動特效使用
    const domGroup = document.getElementsByClassName('classRow')
    setDomGroup(domGroup)
  }, [])

  useEffect(() => {
    isLogin ? setLoginStatus(true) : setLoginStatus(false)
  }, [isLogin])

  return (
    <React.Fragment>
      <div className={classes.sliderWrap}>
        {sliderComponent()}
        {marqueeComponent()}
      </div>
      {loginStatus ? loginComponent() : beforeLoginComponent()}
      {quickLinksComponent()}
      {gameTabComponent()}
      {gameListComponent()}
      <AlertDialog
        dialogOpen={dialogEnabled}
        title={'溫馨提醒'}
        content={'警告訊息彈窗測試'}
        textYes={'確定'}
        textNo={'取消'}
        onYes={handleConfirm}
        onNo={handleCancel}
      />
    </React.Fragment>
  )
}

export default Home
