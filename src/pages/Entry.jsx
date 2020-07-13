import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
//UI
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Checkbox from '@material-ui/core/Checkbox'
//assets
import bg from '../assets/images/entry/bg.png'
import headImg from '../assets/images/entry/headimg.png'
import idIcon from '../assets/images/entry/id.png'
import verifyIcon from '../assets/images/entry/verify.png'
//api
import { fetchApi } from '../api'
//action
import { USER_LOGIN, TOAST_MSG_OPEN } from '../actions/actionType'

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
    padding: '50px 10% 0 10%',
    background: `url(${bg}) center center no-repeat`,
    backgroundSize: 'cover',
    '&::before': {
      content: '""',
      display: 'block',
      width: '100%',
      marginBottom: '20px',
      paddingBottom: '33%',
      background: `url(${headImg}) center top no-repeat`,
      backgroundSize: '80% auto'
    },
    '& .MuiTabs-root': {
      minHeight: 'auto',
      marginBottom: '20px',
      border: '1px solid rgba(255, 255, 255, .5)',
      borderRadius: '25px'
    },
    '& .MuiButtonBase-root': {
      width: '50%',
      height: '43px',
      minHeight: 'auto',
      color: '#FFF',
      lineHeight: '43px'
    },
    '& .MuiTabs-indicator': {
      width: '50%',
      height: '43px',
      background: '#FFF',
      borderRadius: '25px',
      opacity: '.5'
    }
  },
  tabContent: {
    color: '#FFF'
  },
  formWrap: {
    '& li': {
      position: 'relative',
      marginBottom: '20px',
      padding: '5px 0 5px 30px',
      backgroundPosition: '10px center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '15px auto',
      borderBottom: '1px solid #CCC',
      '&.id': {
        backgroundImage: `url(${idIcon})`
      },
      '&.verify': {
        backgroundImage: `url(${verifyIcon})`,
        '& input': {
          width: '150px'
        }
      },
      '& input': {
        display: 'block',
        width: '100%',
        height: '30px',
        padding: '0 10px',
        background: 'none',
        border: 'none',
        fontSize: '15px',
        color: '#FFF',
        lineHeight: '30px',
        '&::-webkit-input-placeholder': {
          color: '#BBB'
        }
      },
      '& button': {
        position: 'absolute',
        right: 0,
        top: '5px',
        height: '30px',
        padding: '0 5px',
        background: '#2472ff',
        border: 'none',
        borderRadius: '5px',
        color: '#FFF',
        lineHeight: '30px'
      },
      '& button[disabled]': {
        background: '#BBB'
      },
    }
  },
  note: {
    marginBottom: '20px',
    fontSize: '12px',
    color: '#FFF',
    textAlign: 'center',
    '& .MuiCheckbox-root': {
      width: 'auto'
    },
    '& a': {
      color: '#03c4bd'
    }
  },
  submit: {
    display: 'block',
    width: '100%',
    height: '40px',
    background: 'linear-gradient(to right, #69b3f8, #4668d1)',
    border: 'none',
    borderRadius: '5px',
    fontSize: '15px',
    color: '#FFF',
  }
}))

//頁籤內容
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (<>{children}</>)}
    </div>
  );
}

//頁籤 props
const a11yProps = (index) => {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const Entry = props => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const dispatch = useDispatch()
  const [tabType, setTabType] = useState(0)
  const [params, setParams] = useState({ phone: '', verify: '' })
  const [verifyCode, setVerifyCode] = useState('')
  const [disable, setDisable] = useState(false)
  const [checked, setChecked] = useState(true)

  //頁籤切換
  const handleChange = (event, type) => {
    setTabType(type)
    setParams({ phone: '', verify: '' })
    setVerifyCode('')
  }

  //核取方塊
  const handleCheck = (event) => {
    setChecked(event.target.checked);
  }

  //登入
  const handleLogin = () => {
    //驗證基本欄位
    if (params.phone === '' || params.verify === '') return dispatch({type: TOAST_MSG_OPEN, payload: { type: 'error', msg:'電話號碼或驗證碼不得為空白' }})
    if (params.phone.length > 10) return dispatch({type: TOAST_MSG_OPEN, payload: { type: 'error', msg:'電話號碼格式為10碼' }})
    if (params.verify !== verifyCode) return dispatch({type: TOAST_MSG_OPEN, payload: { type: 'error', msg:'驗證碼輸入錯誤' }})
    
    //驗證註冊相關欄位
    if (tabType === 1 && !checked) return dispatch({type: TOAST_MSG_OPEN, payload: { type: 'error', msg:'請確認已閱讀相關條款' }})

    //request
    fetchApi.login().then((res) => {
      const { data } = res.data
      localStorage.setItem('token', data.token)
      localStorage.setItem('memberInfo', JSON.stringify(data.memberInfo))
      dispatch({ type: USER_LOGIN, payload: data.memberInfo })
      dispatch({type: TOAST_MSG_OPEN, payload: { type: 'success', msg:'您已成功登入' }})
      history.push('/')
    })
  }

  //輸入事件
  const handleInputChange = (evt) => {
    const { id, value } = evt.target
    if (id === 'phone') {
      setParams({ ...params, phone: value })
    } else {
      setParams({ ...params, verify: value })
    }
  }

  //獲取驗證碼
  const getVerifyCode = () => {
    fetchApi.verify().then(data => {
      dispatch({type: TOAST_MSG_OPEN, payload: { type: 'success', msg:'驗證碼已發送' }})
      setVerifyCode(data.data.data.code)
      setDisable(true)
      setTimeout(()=> setDisable(false), 5000)
    })
  }

  //依 query 參數判斷預設 load 面板
  useEffect(()=>{
    location.query ? setTabType(location.query) : setTabType(0)
  }, [location])

  return (
    <div className={classes.container}>
      <Tabs value={tabType} onChange={handleChange}>
        <Tab label='登錄' {...a11yProps(0)}/>
        <Tab label='註冊' {...a11yProps(1)}/>
      </Tabs>
      <div className={classes.tabContent}>
        {/* 登錄 */}
        <TabPanel value={tabType} index={0}>
          <ul className={classes.formWrap}>
            <li className='id'>
              <input id='phone' type='number' placeholder='請輸入手機號碼' onChange={handleInputChange} />
            </li>
            <li className='verify'>
              <input id='verify' type='number' placeholder='請輸入驗證碼' onChange={handleInputChange} />
              <button disabled={disable} onClick={getVerifyCode}>發送驗證碼</button>
            </li>
          </ul>
          <div className={classes.note}>
            <Link to={'/'}>先去逛逛</Link>
          </div>
          <button onClick={handleLogin} className={classes.submit}>登錄</button>
        </TabPanel>
        {/* 註冊 */}
        <TabPanel value={tabType} index={1}>
          <ul className={classes.formWrap}>
            <li className='id'>
              <input id='phone' type='number' placeholder='請輸入手機號碼' onChange={handleInputChange} />
            </li>
            <li className='verify'>
              <input id='verify' type='number' placeholder='請輸入驗證碼' onChange={handleInputChange} />
              <button disabled={disable} onClick={getVerifyCode}>發送驗證碼</button>
            </li>
          </ul>
          <div className={classes.note}>
            <Checkbox
              checked={checked}
              onChange={handleCheck}
              inputProps={{ 'aria-label': 'primary checkbox' }}
              className={classes.checkbox}
            />
            我已阅读并同意相关的<Link to={'/'}>条款和隐私政策</Link>
          </div>
          <button onClick={handleLogin} className={classes.submit}>註冊</button>
        </TabPanel>
      </div>
    </div>
  )
}

export default Entry