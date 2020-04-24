import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
//api
import { fetchApi } from '../api'
//assets
import carousel1 from '../assets/images/home/carousel_1.jpg'
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
  memberWrap: {},
  listContainer: {
    height: 'calc(100vh - 260px)',
    overflow: 'auto'
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
  const [gameList, setGameList] = useState([])
  const myRef = useRef(null)

  const handleScroll = (e) => {
    console.log(e.target.scrollTop)
    console.log(myRef)
  }

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

  //遊戲頁籤元件
  const gameTabComponent = () => {
    return (
      <div>
        {gameList.map((item, idx) => {
          return (
            <a href='/' key={idx}>
              {item[1].subTitle}
            </a>
          )
        })}
      </div>
    )
  }

  //遊戲列表元件
  const gameListComponent = () => {
    return (
      <div onScroll={handleScroll} className={classes.listContainer}>
        {gameList.map((item, idx) => {
          return (
            <div ref={`${myRef}idx`} className={classes.gameList} key={idx}>
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
        })}
      </div>
    )
  }

  useEffect(() => {
    fetchApi.homeGameList().then((data) => {
      console.log(Object.entries(data.data))
      const gameData = Object.entries(data.data)
      setGameList(gameData)
    })
  }, [])

  return (
    <React.Fragment>
      <div className={classes.sliderWrap}>
        {sliderComponent()}
        {marqueeComponent()}
      </div>
      <div className={classes.memberWrap}>
        {gameTabComponent()}
        {gameListComponent()}
      </div>
    </React.Fragment>
  )
}

export default Home
