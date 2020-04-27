import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
//api
import { fetchApi } from '../api'
//assets
import carousel1 from '../assets/images/home/carousel_1.jpg'
import homeLoginIcon  from '../assets/images/home/home_login_icon.png'
import quickLinkIcon1 from '../assets/images/home/deposit.png'
import quickLinkIcon2 from '../assets/images/home/withdraw.png'
import quickLinkIcon3 from '../assets/images/home/transfer.png'
import quickLinkIcon4 from '../assets/images/home/vip.png'
import gameTabBg from '../assets/images/home/geme_category_bg.png'
import gameListBg from '../assets/images/home/card_sports_bob.png'

const useStyles = makeStyles((theme) => ({
  sliderWrap: {
    position: 'relative',
  },
  slider: {
    '& img': {
      dispaly: 'block',
      width: '100%',
      height: 'auto',
    },
  },
  marquee: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    padding: '5px 5px 5px 50px',
    background: 'rgba(0, 0, 0, .5)',
    borderRadius: '10px 10px 0 0',
    fontSize: '12px',
    color: '#FFF',
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
  memberWrap: {
    
  },
  loginWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    borderBottom: '1px dashed #f1f1f1',
    fontSize: '12px',
    color: '#000'
  },
  loginButton: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    '& img': {
      width: '24px',
      height: 'auto'
    }
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
        marginRight: '5px'
      }
    }
  },
  listContainer: {
    position: 'relative',
    height: 'calc(100vh - 260px)',
    overflow: 'auto'
  },
  gameTab: {
    display: 'flex',
    marginBottom: '10px',
    background: '#FFF',
    whiteSpace: 'nowrap',
    '& > button': {
      width: '50px',
      height: '35px',
      background: 'none',
      border: 'none',
      color: '#000',
      '& span': {
        display: 'block',
        transition: 'all .3s',
      },
      '& .cht': {
        fontSize: '12px',
        transform: 'translateY(5px)'
      },
      '& .eng': {
        display: 'none',
        transform: 'scale(.4, .4)'
      }
    },
    '& > button.active': {
      width: '130px',
      height: '50px',
      background: `url(${gameTabBg}) center top no-repeat`,
      backgroundSize: '100% auto',
      color: '#FFF',
      '& .cht': {
        marginBottom: '0',
        transform: 'translateY(0)'
      },
      '& .eng': { 
        display: 'block'
      }
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
  },
  gameName: {
    position: 'absolute',
    left: '50%',
    top: '10%',
    fontSize: '5vw',
    color: '#FFF',
  },
  gameTitle: {
    position: 'absolute',
    left: '50%',
    top: '40%',
    fontSize: '3vw'
  },
  gameCount: {
    paddingRight: '5px',
    fontSize: '5vw',
    color: '#FFF'
  },
  gameLink: {
    position: 'absolute',
    right: '3.5%',
    width: '17%',
    paddingBottom: '5.5%',
    background: 'rgba(255, 255, 255, .5)',
    borderRadius: '10px',
  },
  wapLink: {
    top: '18%',
  },
  appLink: {
    top: '63%',
  },
}))

const Home = () => {
  const classes = useStyles()
  const [marqueeContent, setMarqueeContent] = useState('我是跑馬燈')
  const [activeTab, setActiveTab] = useState(0)
  const [gameList, setGameList] = useState([])
  const [domGroup, setDomGroup] = useState([])

  //輪播元件
  const sliderComponent = () => {
    return (
      <div className={classes.slider}>
        <img src={carousel1} alt='' />
      </div>
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

  //用戶登入
  const loginComponent = () => {
    return (
      <div className={classes.loginWrap}>
        <span className={classes.loginMsg}>歡迎您，親愛的用戶</span>
        <button className={classes.loginButton}>
          請先登入
          <img src={homeLoginIcon} alt='arrow' />
        </button>
      </div>
    )
  }

  //快捷按鈕
  const quickLinksComponent = () => {
    return (
      <div className={classes.quickLinks}>
        <button>
          <img src={quickLinkIcon1} alt='存款'/>
          存款
        </button>
        <button>
          <img src={quickLinkIcon2} alt='取款'/>
          取款
        </button>
        <button>
          <img src={quickLinkIcon3} alt='轉帳'/>
          轉帳
        </button>
        <button>
          <img src={quickLinkIcon4} alt='VIP詳情'/>
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
          const curItem = item[1]
          if(curItem.item.length) {
            return (
              <button onClick={()=> handleTabClick(idx)} className={`tabs ${activeTab === idx ? 'active' : ''}`} key={idx}>
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
          if (item[1].item.length) {
            return (
              <div className={`${classes.gameList} classRow`} key={idx}>
                {item[1].item.map((childItem, childIdx) => {
                  return (
                    <div className={classes.gameListRow} key={childIdx}>
                      <div className={classes.gameName}>{childItem.name}</div>
                      <div className={classes.gameTitle}>
                        <span className={classes.gameCount}>{childItem.count}</span>
                        {childItem.title}
                      </div>
                      <div className={`${classes.gameLink} ${classes.wapLink}`}></div>
                      <div className={`${classes.gameLink} ${classes.appLink}`}></div>
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

  //tab點擊事件
  const handleTabClick = (idx) => {
    let box = document.getElementById('box');
    box.scrollTo({
      top: domGroup[idx].offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

  //捲動事件
  const handleScroll = (e) => {
    const boxTop = e.target.scrollTop;
    const domList = Array.from(domGroup)
    domList.forEach((item, idx) => {
      if (boxTop >= item.offsetTop) {
        setActiveTab(idx)
      }
    })
  }

  useEffect(() => {
    //拉取跑馬燈內容
    fetchApi.homeMarquee().then(data => {
      setMarqueeContent(data.data.data)
    })
    //拉取遊戲列表
    fetchApi.homeGameList().then(data => {
      const gameData = Object.entries(data.data)
      setGameList(gameData)
    })

    //取得遊戲列表分類 dom 供捲動特效使用
    const domGroup = document.getElementsByClassName('classRow')
    setDomGroup(domGroup)
  }, [])

  return (
    <React.Fragment>
      <div className={classes.sliderWrap}>
        {sliderComponent()}
        {marqueeComponent()}
      </div>
      <div className={classes.memberWrap}>
        {loginComponent()}
        {quickLinksComponent()}
        {gameTabComponent()}
        {gameListComponent()}
      </div>
    </React.Fragment>
  )
}

export default Home
