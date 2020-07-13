import React, { useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import * as routes from '../router/routeLink'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
//components
import TitleBar from '../components/TitleBar'
import Picker from '../components/Picker'
//UI
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
//assets
import bankDefaultIcon from '../assets/images/deposit/bank-default.svg'
//api
import { fetchApi } from '../api'
//action
import { TOAST_MSG_OPEN } from '../actions/actionType'

const useStyles = makeStyles(theme => ({
  container: {
    padding: '55px 10px 0 10px'
  },
  box: {
    background: '#FFF',
    borderRadius: '8px',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.08)',
  },
  payList: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '10px',
    padding: '5px',
    '& button': {
      width: '20%',
      margin: '4px 0',
      padding: '10px 3px',
      background: 'none',
      border: '1px solid transparent',
      borderRadius: '8px',
      fontSize: '12px',
      '& img': {
        display: 'block',
        width: '24px',
        height: 'auto',
        margin: '0 auto 5px auto'
      },
      '&.active': {
        borderColor: '#2472ff',
        color: '#2472ff'
      }
    }
  },
  bankList: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '10px',
    '& img': {
      display: 'block',
      width: '22px',
      height: 'auto',
      marginRight: '10px'
    },
    '& .name': {
      flexGrow: 1,
    }
  },
  moneyWrap: {
    marginBottom: '25px',
    padding: '10px',
    '& .quick-money': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '16px',
      '& button': {
        padding: '6px 10px',
        background: 'none',
        border: '1px solid #2472ff',
        borderRadius: '8px',
        fontSize: '14px',
        color: '#2472ff',
        '&.active': {
          background: '#2472ff',
          color: '#FFF'
        }
      }
    },
    '& .custom-money': {
      '& .title': {
        marginBottom: '5px',
        fontSize: '12px',
        color: '#000'
      },
      '& .money': {
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: '7px',
        padding: '10px 0',
        borderBottom: '1px solid #9b9b9b',
        '&::before': {
          content: '"¥"',
          display: 'block',
          marginRight: '3px',
          fontSize: '20px',
          color: '#000',
          fontWeight: 'bold'
        },
        '& input': {
          display: 'block',
          width: '100%',
          border: 'none',
          fontSize: '16px',
          color: '#000',
        }
      },
      '& .note': {
        fontSize: '12px',
        color: '#d0021b',
        lineHeight: 1.5
      }
    }
  },
  submit: {
    display: 'block',
    width: '100%',
    marginBottom: '25px',
    background: 'linear-gradient(to right, #69b3f8, #4668d1)',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    color: '#FFF',
    lineHeight: '40px'
  },
  learn: {
    display: 'block',
    width: '72px',
    margin: '0 auto',
    background: '#FFF',
    border: 'none',
    borderRadius: '12px',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.08)',
    fontSize: '12px',
    color: '#3e74fa',
    lineHeight: '24px'
  }
}))

const Deposit = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [payList, setPayList] = useState([])
  const [bankList, setBankList] = useState([])
  const [selectBank, setSelectBank] = useState({icon: '', name: ''})
  const [selectQuickMoney, setSelectQuickMoney] = useState(-1)
  const [params, setParams] = useState({ payId: '', bankCode: '', money: '' })

  //支付類別元件
  const payTypeComponent = () => {
    const handleSelectPay = (id) => () => {
      setParams({ ...params, payId: id})
    }
    return (
      <div className={`${classes.payList} ${classes.box}`}>
        {
          payList.map((item, idx)=> {
            return (
              <button onClick={handleSelectPay(item.id)} className={item.id === params.payId ? 'active' : ''} key={idx}>
                <img src={item.icon} alt={item.title} />
                {item.title}
              </button>
            )
          })
        }
      </div>
    )
  }

  //銀行列表元件
  const bankListComponent = () => {

    //選擇銀行
    const handlePick = (item) => {
      setSelectBank({ icon: item.icon, name: item.bankName })
      setParams({ ...params, bankCode: item.bankCode})
    }

    return (
      <Picker title='請選擇銀行' items={bankList} onPick={handlePick}>
        <div className={`${classes.bankList} ${classes.box}`}>
          {
            selectBank.name === '' ? (
              <>
                <img src={bankDefaultIcon} alt={selectBank.name} />
                <span className='name'>請選擇銀行</span>
              </>
            ) : (
              <>
                <img src={selectBank.icon} alt={selectBank.name} />
                <span className='name'>{selectBank.name}</span>
              </>
            )
          }
          <ExpandMoreIcon />
        </div>
      </Picker>
    )
  }

  //金額元件
  const moneyComponent = () => {
    const quickMoney = ['203', '509', '2007', '5007', '10002']

    //快捷金額輸入
    const handleQuickChange = (item, idx) => () => {
      setSelectQuickMoney(idx)
      setParams({ ...params, money: item })
    }
    
    //一般金額輸入
    const handleInputChange = (evt) => {
      const { value } = evt.target
      setParams({ ...params, money: value })
      setSelectQuickMoney(-1)
    }

    return (
      <div className={`${classes.moneyWrap} ${classes.box}`}>
        <div className='quick-money'>
          {
            quickMoney.map((item, idx) => {
              return (
                <button onClick={handleQuickChange(item, idx)} key={idx} className={idx === selectQuickMoney ? 'active' : ''}>{item}</button>
              )
            })
          }
        </div>
        <div className='custom-money'>
          <div className='title'>自定义金额</div>
          <div className='money'>
            <input type='number' value={params.money} placeholder='请输入存款金额，范围：100~49999元' onChange={handleInputChange} />
          </div>
          <div className='note'>当前充值金额为整百，可能会影响到帐，建议金额调整金额尾数（如：1004、2003、 5006等）</div>
        </div>
      </div>
    )
  }

  //立即存款
  const submit = () => {
    console.log('params', params)
    const { bankCode, money } = params
    if (bankCode === '') return dispatch({type: TOAST_MSG_OPEN, payload: { type: 'error', msg:'請選擇銀行' }})
    if (money === '') return dispatch({type: TOAST_MSG_OPEN, payload: { type: 'error', msg:'請輸入金額' }})
    if (Number(money) > 49999) return dispatch({type: TOAST_MSG_OPEN, payload: { type: 'error', msg:'金額超出上限' }})
    fetchApi.deposit(params).then(res => {
      if (res.data.code !== 0) return dispatch({type: TOAST_MSG_OPEN, payload: { type: 'error', msg:'存款失敗' }})
      dispatch({type: TOAST_MSG_OPEN, payload: { type: 'success', msg:'存款成功' }})
      history.push(routes.MEMBER_PAGE)
    })
  }

  useEffect(()=>{
    //獲取支付列表
    fetchApi.payList().then(res => {
      if (res.data.code !== 0) return
      const { payList } = res.data.data
      setPayList(payList)
      setParams({ ...params, payId: payList[0].id})
    })

    //獲取銀行列表
    fetchApi.bankList().then(res => {
      if (res.data.code !== 0) return
      setBankList(res.data.data.bankList)
    })
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <TitleBar>存款</TitleBar>
      <div className={classes.container}>
        {payTypeComponent()}
        {bankListComponent()}
        {moneyComponent()}
        <button onClick={submit} className={classes.submit}>立即存款</button>
        <button className={classes.learn}>存款教程</button>
      </div>
    </>
  )
}

export default Deposit