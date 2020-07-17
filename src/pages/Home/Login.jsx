import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../router/routeLink'
import { makeStyles } from '@material-ui/core'
//assets
import homeLoginIcon from '../../assets/images/home/home_login_icon.png'
import level from '../../assets/images/home/level-0.png'

const useStyles = makeStyles(theme => ({
  loginWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    background: '#FFF',
    borderBottom: '1px dashed #f1f1f1',
    fontSize: '12px',
  },
  loginButton: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 0',
    background: 'none',
    border: 'none',
    color: '#000',
    textDecoration: 'none',
    '& img': {
      width: '15px',
      height: 'auto',
      marginLeft: '5px',
    },
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 0',
    '& img': {
      maxWidth: '35px',
      marginLeft: '2px',
    },
  },
  money: {
    fontSize: '20px',
    color: '#3e74fa',
  }
}))

const LoginComponent = props => {
  const classes = useStyles()
  const { loginStatus, memberInfo } = props

  //用戶登入前元件
  const beforeLoginComponent = () => {
    return (
      <div className={classes.loginWrap}>
        <span className={classes.loginMsg}> 歡迎您， 親愛的用戶 </span>
        <Link to={routes.ENTRY} className={classes.loginButton}>
          請先登入 <img src={homeLoginIcon} alt='arrow' />
        </Link>
      </div>
    )
  }

  //用戶登入後元件
  const loginComponent = () => {
    return (
      <div className={classes.loginWrap}>
        <div className={classes.userName}>
          {memberInfo.username} <img src={level} alt='level' />
        </div>
        <div>
          中心錢包：¥ <span className={classes.money}> {memberInfo.wallet.toFixed(2)} </span>
        </div>
      </div>
    )
  }

  return (
    <>
      {loginStatus ? loginComponent() : beforeLoginComponent()}
    </>
  )
}

export default LoginComponent