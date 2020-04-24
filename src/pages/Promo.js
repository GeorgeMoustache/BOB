import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
//api
import { fetchApi } from '../api'
//component
import MainContainer from '../components/Layout/MainContainer'
import TitleBar from '../components/TitleBar'
//UI
import Grid from '@material-ui/core/Grid'
//assets
import promoBg from '../assets/images/promo/bg.png'
import promoLabel from '../assets/images/promo/label.png'

const useStyles = makeStyles(theme => ({
  card: {
    position: 'relative',
    padding: '11% 6% 7% 6%',
    background: `url(${promoBg})`,
    backgroundSize: '100% 100%',
    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto',
      borderRadius: '5px'
    }
  },
  date: {
    position: 'absolute',
    left: '5%',
    top: '6%',
    fontSize: '3vw'
  },
  more: {
    position: 'absolute',
    right: '7%',
    top: '10%',
    fontSize: '3vw',
    color: '#26c2c1'
  },
  label: {
    position: 'absolute',
    left: '8%',
    top: '16%',
    padding: '2% 2% 2% 2%',
    background: `url(${promoLabel})`,
    backgroundSize: '100% auto',
    fontSize: '3vw',
    color: '#FFF'
  }
}))

const Promo = ()=> {
  const classes = useStyles()
  const [list, setList] = useState([])
  useEffect(()=>{
    fetchApi.promotion().then(data => {
      const list = data.data.events
      setList(list)
    })
  },[])
  return (
    <MainContainer>
      <TitleBar disableBack>優惠活動</TitleBar>
      {
        list.map((item) => {
          return (
            <Grid container alignItems="flex-start" className={classes.card} key={item.id}>
              <time className={classes.date}>{item.beginTime}至{item.endTime}</time>
              <span className={classes.more}>查看詳情</span>
              <div className={classes.label}>最新活動</div>
              <img src={item.advertiseImage} alt={item.actTitle} />
            </Grid>
          )
        })
      }
      
    </MainContainer>
  )
}

export default Promo