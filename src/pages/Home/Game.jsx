import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
//assets
import gameTabRepeat from '../../assets/images/home/game_category_repeat.png'
import gameTabBg from '../../assets/images/home/game_category_bg.png'
import maintain from '../../assets/images/home/maintain.svg'
//api
import { fetchApi } from '../../api'
//action
import loading from '../../actions/loading'
import toastMsg from '../../actions/toastMsg'

const useStyles = makeStyles((theme) => ({
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
  listContainer: {
    position: 'relative',
    height: 'calc(100vh - 300px)',
    marginTop: '-50px',
    padding: '50px 0',
    overflow: 'auto',
  },
  gameList: {
    padding: '0 10px',
  },
  gameListRow: {
    position: 'relative',
    marginBottom: '10px',
    paddingBottom: '28.4%',
    backgroundRepeat: 'no-repeat',
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
    left: '48%',
    top: '15%',
    fontSize: '18px',
    color: '#FFF',
    pointerEvents: 'none',
  },
  gameTitle: {
    position: 'absolute',
    left: '48%',
    top: '40%',
    fontSize: '12px',
    pointerEvents: 'none',
  },
  gameCount: {
    paddingRight: '5px',
    fontSize: '15px',
    color: '#FFF',
  },
  gameMaintain: {
    position: 'absolute',
    right: '-2px',
    top: '-2px',
  }
}))

const GameComponent = props => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { gameList, loginStatus, openDialog } = props
  const [activeTab, setActiveTab] = useState(0)
  const [domGroup, setDomGroup] = useState([])

  //遊戲頁籤元件
  const tabComponent = () => {
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
                <span className='cht'> {activeTab === idx ? curItem.title : curItem.subTitle} </span>
                <span className='eng'> {curItem.enTitle} </span>
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
  const listComponent = () => {
    return (
      <div id='box' onScroll={handleScroll} className={classes.listContainer}>
        {gameList.map((item, idx) => {
          const curItem = item
          if (curItem.item.length) {
            return (
              <div className={`${classes.gameList} classRow`} key={idx}>
                {curItem.item.map((childItem, childIdx) => {
                  return (
                    <div
                      onClick={(evt) => goGame(childItem.maintain, evt)}
                      style={{
                        backgroundImage: `url(${childItem.imgUrl})`,
                      }}
                      key={childIdx}
                      className={classes.gameListRow}
                    >
                      <div className={classes.gameName}> {childItem.name} </div>
                      <div className={classes.gameTitle}>
                        <span className={classes.gameCount}> {childItem.count} </span> {childItem.title}
                      </div>
                      {childItem.maintain ? (
                        <img src={maintain} alt='遊戲維修中' className={classes.gameMaintain} />
                      ) : null}
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
    const box = document.getElementById('box')
    box.scrollTo({
      top: domGroup[idx].offsetTop - 40,
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
      if (boxTop >= item.offsetTop - 40) {
        if (boxTop + boxHeight === boxScrollHeight) {
          setActiveTab(domList.length - 1)
        } else {
          setActiveTab(idx)
        }
      }
    })
  }

  //點擊遊戲彈窗
  const goGame = (maintain, evt) => {
    //動畫
    const target = evt.target.classList
    target.add('active')
    setTimeout(() => {
      target.remove('active')
    }, 1000)
    
    //判斷登入狀態處理
    if (!loginStatus) {
      openDialog()
    } else {
      if (maintain) {
        dispatch(toastMsg('error', '遊戲維護中'))
      } else {
        dispatch(loading())
        fetchApi.homeGoGame().then((data) => {
          dispatch(loading())
          const { url } = data.data.data
          window.open(url)
        })
      }
    }
  }

  useEffect(()=> {
    //取得遊戲列表分類 dom 供捲動特效使用
    const domGroup = document.getElementsByClassName('classRow')
    setDomGroup(domGroup)
  },[])

  return (
    <>
      {tabComponent()}
      {listComponent()}
    </>
  )
}

export default GameComponent
