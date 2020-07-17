import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../router/routeLink'
import { makeStyles } from '@material-ui/core'
//components
import TitleBar from '../components/TitleBar'
//assets
import icon from '../assets/images/common/add-bankcard.png'
import arrow from '../assets/images/common/arrow-right.svg'

const useStyles = makeStyles(theme => ({
  container: {
    padding: '55px 15px 0 15px',
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
    }
  }
}))

const Setting = () => {
  const classes = useStyles()
  return (
    <>
      <TitleBar>个人设置</TitleBar>
      <div className={classes.container}>
        <Link to={routes.BANKCARD_LIST}>银行卡管理</Link>
      </div>
    </>
  )
}

export default Setting