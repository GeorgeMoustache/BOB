import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
//components
import TitleBar from '../components/TitleBar'
//UI
import Grid from '@material-ui/core/Grid'
//assets
import checkIcon from '../assets/images/joinus/check.svg'
import checkIconActive from '../assets/images/joinus/check-active.svg'
//action
import toastMsg from '../actions/toastMsg'

const useStyles = makeStyles((theme) => ({
  joinusForm: {
    margin: 0,
    padding: `${theme.typography.pxToRem(60)} ${theme.typography.pxToRem(16)} 0`,
  },
  row: {
    marginBottom: theme.typography.pxToRem(16),
    padding: `${theme.typography.pxToRem(11)} ${theme.typography.pxToRem(10)}`,
    background: '#FFF',
    borderRadius: theme.typography.pxToRem(8),
    '& label': {
      fontSize: theme.typography.pxToRem(16),
      color: '#000',
      fontWeight: 'bold',
    },
    '& input': {
      flexGrow: 1,
      border: 'none',
      fontSize: theme.typography.pxToRem(16),
      color: '#000',
      textAlign: 'right',
      '&::-webkit-input-placeholder': {
        color: '#CCC',
      },
      '&:focus': {
        outline: 'none',
      },
    },
  },
  verify: {
    position: 'relative',
    padding: `${theme.typography.pxToRem(12)} ${theme.typography.pxToRem(10)}`,
    '& input': {
      textAlign: 'left',
    },
    '& button': {
      position: 'absolute',
      right: theme.typography.pxToRem(10),
      top: theme.typography.pxToRem(5),
      width: theme.typography.pxToRem(98),
      padding: 0,
      background: '#3e74fa',
      border: 'none',
      borderRadius: theme.typography.pxToRem(8),
      fontSize: theme.typography.pxToRem(14),
      color: '#FFF',
      lineHeight: theme.typography.pxToRem(33),
      '&:focus': {
        outline: 'none',
      },
    },
  },
  check: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.typography.pxToRem(16),
    fontSize: theme.typography.pxToRem(12),
    color: '#3e74fa',
    '& img': {
      display: 'block',
      width: theme.typography.pxToRem(13),
      height: theme.typography.pxToRem(13),
      marginRight: theme.typography.pxToRem(8),
    },
  },
  submit: {
    display: 'block',
    width: '100%',
    background: 'linear-gradient(to right, #69b3f8, #4668d1)',
    border: 'none',
    borderRadius: theme.typography.pxToRem(8),
    fontSize: theme.typography.pxToRem(16),
    color: '#FFF',
    lineHeight: theme.typography.pxToRem(40),
    '&:focus': {
      outline: 'none',
    },
  },
}))

const JoinusForm = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [info, setInfo] = useState({
    realName: '',
    qq: '',
    email: '',
    phone: '',
    verify: '',
  })
  const [checkStatus, setCheckStatus] = useState(false)

  //表單輸入
  const handleChange = (event) => {
    const { id, value } = event.target
    switch (id) {
      case 'name':
        setInfo({ ...info, realName: value })
        break
      case 'qq':
        setInfo({ ...info, qq: value })
        break
      case 'email':
        setInfo({ ...info, email: value })
        break
      case 'phone':
        setInfo({ ...info, phone: value })
        break
      case 'verify':
        setInfo({ ...info, verify: value })
        break
      default:
        setInfo({ ...info })
    }
  }

  //checkToggle
  const handleCheck = () => setCheckStatus(!checkStatus)

  //提交申請
  const submit = () => {
    if (!info.realName) return dispatch(toastMsg('error', '请输入真实姓名'))
    if (!info.qq) return dispatch(toastMsg('error', '请输入QQ号码'))
    if (!info.email) return dispatch(toastMsg('error', '请输入邮箱地址'))
    //eslint-disable-next-line
    const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    if (!emailRule.test(info.email))
      return dispatch(toastMsg('error', '邮箱地址格式不正确'))
    if (!info.phone) return dispatch(toastMsg('error', '请输入手机号码'))
    if (!/^1[3456789]\d{9}$/.test(info.phone))
      return dispatch(toastMsg('error', '手机号码格式不正确'))
    if (!info.verify) return dispatch(toastMsg('error', '请输入验证码'))
    if (!checkStatus)
      return dispatch(toastMsg('error', '您还未同意用户服务协议'))
    dispatch(toastMsg('success', '成功送出'))
  }

  return (
    <>
      <TitleBar>加入我们</TitleBar>
      <div className={classes.joinusForm}>
        <Grid container direction='column' className='wrap'>
          <Grid item container justify='space-between' className={classes.row}>
            <label>真实姓名</label>
            <input id='name' type='text' placeholder='请输入真实姓名' value={info.realName} onChange={handleChange} />
          </Grid>
          <Grid item container justify='space-between' className={classes.row}>
            <label>QQ号码</label>
            <input id='qq' type='text' placeholder='请输入QQ号码' value={info.qq} onChange={handleChange} />
          </Grid>
          <Grid item container justify='space-between' className={classes.row}>
            <label>邮箱地址</label>
            <input id='email' type='text' placeholder='请输入邮箱地址' value={info.email} onChange={handleChange} />
          </Grid>
          <Grid item container justify='space-between' className={classes.row}>
            <label>手机号码</label>
            <input id='phone' type='number' placeholder='请输入手机号码' value={info.phone} onChange={handleChange} />
          </Grid>
          <Grid item container justify='space-between' className={`${classes.row} ${classes.verify}`}>
            <input id='verify' type='text' placeholder='请输入验证码' value={info.verify} onChange={handleChange} />
            {/* <VerifCodeButton
              category='player-login'
              size='small'
              type={0}
              phone={info.phone}
              buttonName='获取验证码'
              color='primary'
              variant='contained'
              settings={settings}
            /> */}
          </Grid>
        </Grid>
        <div className={classes.check} onClick={handleCheck}>
          {checkStatus ? <img src={checkIconActive} alt='核取' /> : <img src={checkIcon} alt='未核取' />}
          我已阅读并同意相关的条款和隐私政策
        </div>
        <button onClick={submit} className={classes.submit}>
          提交申请
        </button>
      </div>
    </>
  )
}

export default JoinusForm
