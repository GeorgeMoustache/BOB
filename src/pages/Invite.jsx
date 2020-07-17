import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import * as routes from '../router/routeLink'
//components
import TitleBar from '../components/TitleBar/'
//assets
import imgTop from '../assets/images/invite/bg-top.png'
import imgBottom from '../assets/images/invite/bg-bottom.png'
//utils
import copy from '../utils/copy'
//action
import toastMsg from '../actions/toastMsg'
//api
import { fetchApi } from '../api'

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    paddingTop: '44px',
    background: '#f1f4f5',
    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto'
    }
  },
  inputWrap: {
    display: 'flex',
    margin: '0 16px',
    padding: '5px',
    border: '1px solid #c5c5c5',
    '& input': {
      flexGrow: 1,
      height: '30px',
      border: 'none',
      color: '#084968'
    },
    '& button': {
      width: '80px',
      background: '#3e74fa',
      border: 'none',
      fontSize: '12px',
      color: '#FFF',
      lineHeight: '30px',
      '&:focus': {
        outline: 'none'
      }
    }
  }
}))

const Invite = props => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [url, setUrl] = useState('')

  //一鍵複製
  const handleCopy = (text) => () => {
    copy(text)
      .then(() => {
        dispatch(toastMsg('success', '复制成功'))
      })
      .catch(() => {
        dispatch(toastMsg('success', '复制失败'))
      })
  }

  useEffect(()=>{
    fetchApi.invite().then(res => {
      const recommendCode = res.data.data.recommendCode
      const host = window.location.hostname
      const port = window.location.port
      const urlValue = `https://${host}:${port}/#${routes.ENTRY}?recommendCode=${recommendCode}`
      setUrl(urlValue)
    }).catch(err => {
      if (process.env.NODE_ENV === 'development') console.error(err)
    })
  },[])

  return (
    <>
      <TitleBar>邀请与奖励</TitleBar>
      <div className={classes.container}>
        <img src={imgTop} alt='top' />
        <div className={classes.inputWrap}>
          <input type='text' value={url} disabled />
          <button onClick={handleCopy(url)}>复制</button>
        </div>
        <img src={imgBottom} alt='bottom' />
      </div>
    </>
  );
}

export default Invite