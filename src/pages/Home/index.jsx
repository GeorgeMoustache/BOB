import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
//component
import SliderComponent from './Slider'
import MarqueeComponent from './Marquee'
import LoginComponent from './Login'
import QuickLinksComponent from './QuickLinks'
import GameComponent from './Game'
import AlertDialog from '../../components/AlertDialog'
//api
import { fetchApi } from '../../api'
//action
import login from '../../actions/login'

const useStyles = makeStyles((theme) => ({
  sliderWrap: {
    position: 'relative',
    '& *': {
      lineHeight: 0
    },
    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  }
}))

const Home = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const memberInfo = useSelector((state) => state.memberInfo)
  const [sliderList, setSliderList] = useState([])
  const [marqueeContent, setMarqueeContent] = useState()
  const [loginStatus, setLoginStatus] = useState()
  const [gameList, setGameList] = useState([])
  const [dialogEnabled, setDialogEnabled] = useState(false)

  //彈窗開啟事件
  const openDialog = () => setDialogEnabled(true)

  //彈窗確認事件
  const handleConfirm = () => {
    history.push({ pathname: '/entry', query: 1 })
    setDialogEnabled(false)
  }

  //彈窗取消事件
  const handleCancel = () => setDialogEnabled(false)

  useEffect(() => {
    //取得大圖輪播
    fetchApi.homeSlider().then((data) => {
      setSliderList(data.data.data.list)
    })

    //取得跑馬燈內容
    fetchApi.homeMarquee().then((data) => {
      setMarqueeContent(data.data.data.list)
    })
    
    //取得遊戲列表
    fetchApi.homeGameList().then((data) => {
      const gameData = Object.values(data.data.data)
      setGameList(gameData)
    })
  }, [])

  //判斷登入狀態
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const memberInfo = JSON.parse(localStorage.getItem('memberInfo'))
      dispatch(login(memberInfo))
      setLoginStatus(true)
    } else {
      setLoginStatus(false)
    }
  }, [dispatch])

  return (
    <React.Fragment>
      <div className={classes.sliderWrap}>
        <SliderComponent sliderList={sliderList} />
        <MarqueeComponent marqueeContent={marqueeContent} />
      </div>
      <LoginComponent loginStatus={loginStatus} memberInfo={memberInfo} />
      <QuickLinksComponent loginStatus={loginStatus} openDialog={openDialog} />
      <GameComponent gameList={gameList} loginStatus={loginStatus} openDialog={openDialog} />
      <AlertDialog
        dialogOpen={dialogEnabled}
        title={'溫馨提醒'}
        content={'請先登入會員'}
        textYes={'註冊'}
        textNo={'關閉'}
        onYes={handleConfirm}
        onNo={handleCancel}
      />
    </React.Fragment>
  )
}

export default Home