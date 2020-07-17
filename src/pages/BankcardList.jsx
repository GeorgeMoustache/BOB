import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../router/routeLink'
import { makeStyles } from '@material-ui/core'
//components
import TitleBar from '../components/TitleBar'
//assets
import icon from '../assets/images/common/add-bankcard.png'
import arrow from '../assets/images/common/arrow-right.svg'
//api
import { fetchApi } from '../api'

const useStyles = makeStyles(theme => ({
  container: {
    padding: '55px 15px 0 15px',
    '& dl': {
      marginBottom: '10px',
      padding: '12px 17px',
      backgroundPosition: 'rigth bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto',
      borderRadius: '8px',
      color: '#FFF',
      '& dt': {
        display: 'flex',
        marginBottom: '10px',
        alignItems: 'center',
        fontSize: '14px',
        '& img': {
          display: 'block',
          width: '22px',
          height: 'auto',
          marginRight: '10px'
        }
      },
      '& dd': {
        fontSize: '16px',
        letterSpacing: '1px'
      }
    },
    '& a': {
      display: 'flex',
      alignItems: 'center',
      padding: '18px',
      background: `url(${arrow}) 95% center no-repeat #FFF`,
      borderRadius: '8px',
      boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.08)',
      fontSize: '16px',
      color: '#000',
      fontWeight: 'bold',
      '&::before': {
        content: '""',
        display: 'block',
        width: '30px',
        height: '32px',
        marginRight: '18px',
        background: `url(${icon}) center center no-repeat`,
        backgroundSize: '100% auto'
      }
    },
    '& .note': {
      marginTop: '10px',
      fontSize: '12px',
      color: '#9b9b9b',
      textAlign: 'center',
      '& span': {
        color: '#65c4bf'
      }
    }
  }
}))

const BankcardList = () => {
  const classes = useStyles()
  const [list, setList] = useState([])

  useEffect(()=> {
    fetchApi.bankCardList().then(res => {
      const list = res.data.data.cardList
      setList(list)
    })
  },[])

  return (
    <>
      <TitleBar>银行卡管理</TitleBar>
      <div className={classes.container}>
        {
          list.map((item, idx) => {
            const bg = {
              backgroundImage: `url(${item.bankStyle})`
            }
            return (
              <dl key={idx} style={bg}>
                <dt>
                  <img src={item.icon} alt={item.bankName} />
                  {item.bankName}
                </dt>
                <dd>{item.cardNo}</dd>
              </dl>
            )
          })
        }
        <Link to={routes.ADD_BANKCARD}>添加银行卡</Link>
        <div className='note'>如需删除银行卡，请联系<span>在线客服</span></div>
      </div>
    </>
  )
}

export default BankcardList