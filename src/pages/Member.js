import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import * as routes from '../router/routeLink'
//UI
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
//component
import AlertDialog from '../components/AlertDialog'
//assets
import messageIcon from '../assets/images/member/message.png'
import avatarImg from '../assets/images/member/avatar_default.png'
import regButtonIcon from '../assets/images/member/reg_button.png'
import regButtonArrow from '../assets/images/member/reg_button_arrow.png'
import walletWithdraw from '../assets/images/member/withdraw.png'
import walletDeposit from '../assets/images/member/deposit.png'
import walletVip from '../assets/images/member/vip-detail.png'
import ad01 from '../assets/images/member/ad01.png'
import ad02 from '../assets/images/member/ad02.png'
import ad03 from '../assets/images/member/ad03.png'
import myFuncIcon01 from '../assets/images/member/myfunc-1.png'
import myFuncIcon02 from '../assets/images/member/myfunc-2.png'
import myFuncIcon03 from '../assets/images/member/myfunc-3.png'
import myFuncIcon04 from '../assets/images/member/myfunc-4.png'
import myFuncIcon05 from '../assets/images/member/myfunc-5.png'
import myFuncIcon06 from '../assets/images/member/myfunc-6.png'
import myFuncIcon07 from '../assets/images/member/myfunc-7.png'
import myFuncIcon08 from '../assets/images/member/myfunc-8.png'
import myFuncIcon09 from '../assets/images/member/myfunc-9.png'
import myFuncIcon10 from '../assets/images/member/myfunc-10.png'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    padding: '40px 0 150px 0',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      display: 'block',
      width: '100%',
      height: '194px',
      background: 'linear-gradient(to right, #71b1ec, #486cd2)',
    },
  },
  wrapper: {
    position: 'relative',
    padding: '0 15px',
  },
  msgWrapper: {
    marginBottom: '14px',
    textAlign: 'right',
  },
  msgIcon: {
    display: 'inline-block',
    width: '18px',
    minWidth: 'auto',
    height: '18px',
    padding: 0,
    borderRadius: 0,
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  avatarPhoto: {
    flexShrink: 0,
    width: '64px',
    height: '64px',
    marginRight: '10px',
    border: `2px solid ${theme.palette.primary.contrastText}`,
    borderRadius: '50%',
    overflow: 'hidden',
    '& img': {
      display: 'block',
      width: '100%',
      height: 'auto',
    },
  },
  avatarInfo: {
    fontSize: '12px',
    color: 'rgba(255, 255, 255, 0.6)',
    '& li': {
      margin: '5px 0'
    }
  },
  infoId: {
    display: 'flex',
    '& img': {
      display: 'block',
      width: '32px',
      height: 'auto',
      marginLeft: '5px',
    }
  },
  progressBar: {
    position: 'relative',
    display: 'inline-block',
    width: '153px',
    height: '7px',
    marginRight: '5px',
    background: '#d8d8d8',
    borderRadius: '3.5px',
    overflow: 'hidden',
    '& hr': {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '30%',
      height: '100%',
      margin: 0,
      background: '#486cd2',
      border: 'none',
    },
  },
  colorWhite: {
    color: theme.palette.primary.contrastText,
  },
  regButton: {
    position: 'absolute',
    right: 0,
    top: '90px',
    width: '155px',
    padding: '8px 25px 8px 43px',
    background: 'linear-gradient(to right, #f9f9f9, #FFF)',
    borderRadius: '20px 0 0 20px',
    boxShadow: `-3px 0 3px rgba(31, 32, 33, .2)`,
    lineHeight: 1,
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '5px',
      top: '6px',
      display: 'block',
      width: '33px',
      height: '33px',
      background: `url(${regButtonIcon}) center center no-repeat`,
      backgroundSize: '100% auto',
    },
  },
  regTitle: {
    paddingRight: '20px',
    background: `url(${regButtonArrow}) right center no-repeat`,
    backgroundSize: '22px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  regDesc: {
    fontSize: '12px',
    transformOrigin: 'left top',
    transform: 'scale(.8, .8)',
  },
  walletWrapper: {
    marginBottom: '10px',
    padding: '20px 0',
    background: theme.palette.primary.contrastText,
    borderRadius: '13px',
  },
  walletMoney: {
    margin: '0 15px 22px',
    paddingBottom: '15px',
    borderBottom: '1px dashed #d8d8d8',
  },
  walletMoneyLabel: {
    marginBottom: '5px',
    fontSize: '12px',
  },
  walletMoneyNumber: {
    fontSize: '20px',
  },
  walletLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px',
    fontSize: '14px',
    color: theme.palette.common.black,
    '& a': {
      display: 'inline-flex',
      alignItems: 'center'
    },
    '& img': {
      display: 'block',
      width: '24px',
      height: 'auto',
      marginRight: '5px',
    },
  },
  adWrapper: {
    display: 'flex',
    marginBottom: '10px',
    overflow: 'auto',
    '& img': {
      width: 'calc((100vw - 35px) / 2)',
      marginRight: '15px',
      borderRadius: '8px',
    },
  },
  linkWrapper: {
    marginBottom: '10px',
    background: theme.palette.primary.contrastText,
    borderRadius: '8px',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.08)',
  },
  linkTitle: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.08)',
    '&::before': {
      content: '""',
      display: 'block',
      width: '3px',
      height: '13px',
      background: theme.palette.primary.main,
      margin: 0,
      marginRight: '15px',
      border: 'none',
    },
  },
  linkGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '16px 0 8px 0',
    textAlign: 'center',
    '& li': {
      width: '25%'
    },
    '& button': {
      padding: '5px 0',
      marginBottom: '5px',
    },
    '& .MuiButton-label': {
      display: 'block',
      fontSize: '12px',
      textAlign: 'center',
    },
    '& img': {
      display: 'block',
      width: '24px',
      height: 'auto',
      margin: '0 auto 7px auto',
    },
  },
  logoutButton: {
    display: 'block',
    width: '100%',
    padding: '6px',
    background: theme.palette.primary.contrastText,
    fontSize: '16px',
    textAlign: 'center'
  }
}))

const MemberPage = () => {
  const classes = useStyles()
  const history = useHistory()
  const [isLogin, setIsLogin] = useState(false)
  const [memberInfo, setMemberInfo] = useState({
    avatar: avatarImg
  })
  const [dialogEnabled, setDialogEnabled] = useState(false)
  
  //消息中心元件
  const msgCenter = () => {
    return (
      <div className={classes.msgWrapper}>
        <Button className={classes.msgIcon}>
          <img alt='讯息icon' src={messageIcon} />
        </Button>
      </div>
    )
  }

  //未登入個人資訊元件
  const beforeAvatar = () => {
    return (
      <Link to={{pathname: routes.ENTRY_PAGE, query: 0}} className={classes.avatarWrapper}>
        <div className={classes.avatarPhoto}>
          <img alt='头像' src={memberInfo.avatar} />
        </div>
        <div className={`${classes.avatarInfo} ${classes.colorWhite}`}>
          立即登录
        </div>
      </Link>
    )
  }

  //已登入個人資訊元件
  const avatar = () => {

    //計算等級百分比
    const progress = () => {
      return { width: `${10}%` }
    }

    return (
      <div className={classes.avatarWrapper}>
        <div className={classes.avatarPhoto}>
          <img alt='头像' src={memberInfo.avatar} />
        </div>
        <ul className={classes.avatarInfo}>
          <li className={classes.infoId}>
            <span className={classes.colorWhite}>{memberInfo.username}</span>
            <img
              alt='vip标签'
              src={require(`../assets/images/home/level-${memberInfo.currentVip}.png`)}
              className={classes.vipLabel}
            />
          </li>
          <li>
            您已加入BOB体育<span className={classes.colorWhite}>3</span>天
          </li>
          <li>
            <div className={classes.progressBar}>
              <hr style={progress()} />
            </div>
            <span className={classes.colorWhite}>VIP{memberInfo.nextVip}</span>
          </li>
          <li>
            升級需要
            <span className={classes.colorWhite}>4000.00</span>
            流水/累积充值<span className={classes.colorWhite}>1000</span>
          </li>
        </ul>
      </div>
    )
  }

  //註冊按鈕
  const regButton = () => {
    return (
      <Link to={{pathname: routes.ENTRY_PAGE, query: 1}} className={classes.regButton} >
        <span className={classes.regTitle}>
          前往注册
        </span>
        <span className={classes.regDesc}>
          开启更多精彩
        </span>
      </Link>
    )
  }

  //中心錢包元件
  const walletCenter = () => {
    return (
      <div className={classes.walletWrapper}>
        <div className={classes.walletMoney}>
          <div className={classes.walletMoneyLabel}>中心钱包：</div>
          {isLogin ? (
            <b className={classes.walletMoneyNumber}>{memberInfo.wallet}</b>
          ) : (
            <span className={classes.walletMoneyNumber}>请您登录后查看。</span>
          )}
        </div>
        <div className={classes.walletLinks}>
          <Button onClick={go}>
            <img alt='存款icon' src={walletWithdraw} />
            存款
          </Button>
          <Button onClick={go}>
            <img alt='取款icon' src={walletDeposit} />
            取款
          </Button>
          <Button onClick={go}>
            <img alt='VIP详情icon' src={walletVip} />
            VIP详情
          </Button>
        </div>
      </div>
    )
  }

  //廣告連結元件
  const advertisement = () => {
    return (
      <div className={classes.adWrapper}>
        <img alt='连结1' src={ad01} />
        <img alt='连结2' src={ad02} />
        <img alt='连结3' src={ad03} />
      </div>
    )
  }

  //我的功能元件
  const myFunction = () => {
    return (
      <div className={classes.linkWrapper}>
        <div className={classes.linkTitle}>
          我的功能
        </div>
        <ul className={classes.linkGroup}>
          <li>
            <Button onClick={go('/')}>
              <img alt='投注记录' src={myFuncIcon01} />
              投注记录
            </Button>
          </li>
          <li>
            <Button onClick={go('/')}>
              <img alt='交易纪录' src={myFuncIcon02} />
              交易纪录
            </Button>
          </li>
          <li>
            <Button onClick={go('/')}>
              <img alt='意见反馈' src={myFuncIcon03} />
              意见反馈
            </Button>
          </li>
          <li>
            <Button onClick={go('/')}>
              <img alt='个人资料' src={myFuncIcon04} />
              个人资料
            </Button>
          </li>
          <li>
            <Button onClick={go('/')}>
              <img alt='加入我们' src={myFuncIcon05} />
              加入我们
            </Button>
          </li>
          <li>
            <Button onClick={go('/')}>
              <img alt='关于我们' src={myFuncIcon06} />
              关于我们
            </Button>
          </li>
          <li>
            <Button onClick={go('/')}>
              <img alt='收藏' src={myFuncIcon07} />
              收藏
            </Button>
          </li>
          <li>
            <Button onClick={go('/')}>
              <img alt='分享APP' src={myFuncIcon08} />
              分享APP
            </Button>
          </li>
          <li>
            <Button onClick={go('/')}>
              <img alt='邀请奖励' src={myFuncIcon10} />
              邀请奖励
            </Button>
          </li>
          <li>
            <Button onClick={go('/')}>
              <img alt='设置' src={myFuncIcon09} />
              设置
            </Button>
          </li>
        </ul>
      </div>
    )
  }

  //退出登录元件
  const logoutButton = () => {

    const logout = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('memberInfo')
      history.push(routes.ENTRY_PAGE)
    }

    return (
      <Button onClick={logout} className={classes.logoutButton}>
        退出登录
      </Button>
    )
  }

  //連結導向
  const go = (path)=> ()=> {
    isLogin ? history.push(path) : setDialogEnabled(true)
  }

  //彈窗確認事件
  const handleConfirm = () => {
    history.push({pathname: '/entry', query: 1})
    setDialogEnabled(false)
  }

  //彈窗取消事件
  const handleCancel = () => {
    setDialogEnabled(false)
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true)
      const info = JSON.parse(localStorage.getItem('memberInfo'))
      setMemberInfo(info)
    } else {
      setIsLogin(false)
    }
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {isLogin ? msgCenter() : null}
        {isLogin ? avatar() : beforeAvatar()}
        {isLogin ? null : regButton()}
        {walletCenter()}
        {advertisement()}
        {myFunction()}
        {isLogin && logoutButton()}
      </div>
      <AlertDialog
        dialogOpen={dialogEnabled}
        title={'溫馨提醒'}
        content={'請先登入會員'}
        textYes={'註冊'}
        textNo={'關閉'}
        onYes={handleConfirm}
        onNo={handleCancel}
      />
    </div>
  )
}

export default MemberPage
