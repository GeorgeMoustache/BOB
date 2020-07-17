import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
//UI
import Grid from '@material-ui/core/Grid'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
//component
import TitleBar from '../components/TitleBar'
//api
import { fetchApi } from '../api'

const useStyles = makeStyles(theme => ({
  outer: {
    padding: '55px 10px 0 10px'
  },
  container: {
    position: 'relative',
    marginBottom: '10px',
    padding: '16px',
    background: '#FFF'
  },
  date: {
    marginBottom: '16px',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#2472ff'
  },
  content: {
    position: 'relative',
    paddingRight: '26px',
    fontSize: '14px',
    color: '#000',
    lineHeight: '20px',
    wordBreak: 'break-all'
  },
  hidden: {
    height: '40px',
    overflow: 'hidden'
  },
  dot: {
    position: 'absolute',
    right: '30px',
    bottom: 0,
    display: 'block',
    width: '28px',
    padding: 0,
    background: '#FFF',
    border: 'none',
    fontSize: '14px',
    color: '#000',
  },
  toggle: {
    position: 'absolute',
    right: '16px',
    bottom: '15px',
    padding: 0,
    background: 'none',
    border: 'none',
    fontSize: '16px',
    color: '#CCC',
    transform: 'rotate(90deg)',
    '&:focus': {
      outline: 'none'
    },
    '&.active': {
      right: '12px',
      transform: 'rotate(-90deg)'
    }
  }
}))

const Announcement = ()=> {
  const classes = useStyles()
  const [list, setList] = useState([])

  //內容元件
  const contentComponent = (text, toggle, idx) => {
    
    //計算長度
    const lenCal = (str) => {
      //eslint-disable-next-line
      return str.replace(/[^\x00-\xff]/g, "xx").length
    }

    //收合動作
    const handleToggle = (idx) => (event) => {
      const jsonList = JSON.stringify(list)
      const newList = JSON.parse(jsonList)

      newList.forEach((item, nIdx) => {
        if (idx === nIdx) {
          item.toggle = !item.toggle
        }
      })
      
      setList(newList)
    }

    if (lenCal(text) <= 80) {
      return (
        <Grid item className={classes.content}>{text}</Grid>
      )
    } else {
      return (
        <>
          <Grid item className={`${classes.content} ${!toggle ? classes.hidden : ''}`}>
            {text}
            {!toggle ? (<span className={classes.dot}>...</span>) : null}
          </Grid>
          <button onClick={handleToggle(idx)} className={`${classes.toggle} ${toggle ? 'active' : ''}`}>
            <ArrowForwardIosIcon fontSize='inherit' />
          </button>
        </>
      )
    }
  }

  useEffect(()=>{
    fetchApi.homeMarquee().then(res => {
      const list = res.data.data.list
      list.forEach((item) => item.toggle = false)
      setList(list)
    })
  }, [])

  return (
    <>
      <TitleBar>系统公告</TitleBar>
      <div className={classes.outer}>
        <Grid container direction='column'>
          {
            list.map((item, idx) => {
              return (
                <Grid item container direction='column' key={idx} className={classes.container}>
                  <Grid item className={classes.date}>{item.date}</Grid>
                  {contentComponent(item.content, item.toggle, idx)}
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    </>
  )
}

export default Announcement