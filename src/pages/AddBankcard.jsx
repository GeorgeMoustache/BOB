import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import * as routes from '../router/routeLink'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
//components
import TitleBar from '../components/TitleBar'
import Picker from '../components/Picker'
//api
import { fetchApi } from '../api'
//action
import toastMsg from '../actions/toastMsg'

const useStyles = makeStyles(theme => ({
  container: {
    padding: '55px 10px 0 10px'
  },
  box: {
    marginBottom: '10px',
    padding: '0 15px',
    background: '#FFF',
    borderRadius: '8px',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.08)',
    '& dl': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 0',
      borderBottom: '1px solid #9b9b9b',
      fontSize: '14px',
      '&:last-child': {
        borderBottom: 'none'
      },
      '& dt': {
        flexShrink: 0
      },
      '& dd': {
        flexGrow: 1,
        textAlign: 'right',
        '& input': {
          display: 'block',
          width: '100%',
          border: 'none',
          fontSize: '14px',
          color: '#000',
          textAlign: 'right',
          '&::-webkit-input-placeholder': {
            color: '#9d9d9d'
          }
        },
        '& span': {
          color: '#9d9d9d'
        }
      }
    }
  },
  note: {
    marginBottom: '10px',
    fontSize: '12px',
    color: '#9b9b9b',
    lineHeight: 1.5
  },
  submit: {
    display: 'block',
    width: '100%',
    margin: '20px 0 10px 0',
    background: 'linear-gradient(to right, #69b3f8, #4668d1)',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    color: '#FFF',
    lineHeight: '40px'
  }
}))

const AddBankcard = () => {
  const classes = useStyles()
  const history = useHistory()
  const dispatch = useDispatch()
  const [params, setParams] = useState({
    name: '',
    bankName: '',
    country: '',
    city: '',
    bankType: '',
    cardNo: ''
  })
  const [bankList, setBankList] = useState([])
  const countryList = [{text: '四川省'}, {text: '山東省'}, {text: '河南省'}]
  const cityList = [{text: '北京市'}, {text: '上海市'}, {text: '台北市'}]

  //input 輸入
  const handleInputChange = (evt) => {
    const { name, value } = evt.target
    switch (name) {
      case 'name': 
        setParams({ ...params, name: value })
        break
      case 'bankType':
        setParams({ ...params, bankType: value })
        break
      case 'cardNo':
        setParams({ ...params, cardNo: value })
        break
      default:
        setParams({ ...params })
        break
    }
  }

  //選擇銀行
  const handleBankPick = (item) => setParams({ ...params, bankName: item.bankName })
  
  //選擇省份
  const handleCountryPick = (item) => setParams({ ...params, country: item.text })
  
  //選擇城市
  const handleCityPick = (item) => setParams({ ...params, city: item.text })

  //確認提交
  const handleSubmit = () => {
    const { name, bankName, country, city, bankType, cardNo } = params
    
    if (name === '') return dispatch(toastMsg('error', '請輸入開戶姓名'))
    if (bankName === '') return dispatch(toastMsg('error', '請選擇開戶銀行'))
    if (country === '') return dispatch(toastMsg('error', '請選擇開戶省份'))
    if (city === '') return dispatch(toastMsg('error', '請選擇開戶城市'))
    if (bankType === '') return dispatch(toastMsg('error', '請選擇開戶支行'))
    if (cardNo === '') return dispatch(toastMsg('error', '請輸入銀行卡卡號'))

    fetchApi.addBankcard(params).then(() => {
      dispatch(toastMsg('success', '添加銀行卡成功'))
      history.push(routes.MEMBER)
    })
  }

  useEffect(()=> {
    fetchApi.bankList().then(res => {
      const data = res.data.data.bankList
      setBankList(data)
    })
  },[])

  return (
    <>
      <TitleBar>添加银行卡</TitleBar>
      <div className={classes.container}>
        <div className={classes.box}>
          <dl>
            <dt>姓名</dt>
            <dd>
              <input type='text' name='name' value={params.name} placeholder='请输入开户姓名' onChange={handleInputChange}/>
            </dd>
          </dl>
        </div>
        <div className={classes.note}>为了您的资金能够迅速到帐，请确保填写的姓名与银行卡的开户姓名一致。目前仅支持中文、英文和“.”。</div>
        <div className={classes.box}>
          
          <dl>
            <dt>开户银行</dt>
            <dd>
              <Picker title='請選擇開戶銀行' items={bankList} onPick={handleBankPick}>
                { params.bankName === '' ? (<span>请选择开户银行</span>) : params.bankName }
              </Picker>
            </dd>
          </dl>
          <dl>
            <dt>开户省分</dt>
            <dd>
              <Picker title='請選擇开户省分' items={countryList} onPick={handleCountryPick}>
                { params.country === '' ? (<span>请选择开户省份</span>) : params.country }
              </Picker>
            </dd>
          </dl>
          <dl>
            <dt>开户城市</dt>
            <dd>
              <Picker title='请选择开户城市' items={cityList} onPick={handleCityPick}>
                { params.city === '' ? (<span>请选择开户城市</span>) : params.city }
              </Picker>
            </dd>
          </dl>
          <dl>
            <dt>开户支行</dt>
            <dd>
              <input type='text' name='bankType' value={params.bankType} placeholder='请输入开户支行' onChange={handleInputChange}/>
            </dd>
          </dl>
        </div>
        <div className={classes.note}>手机号码会帮助您找回帐号，并是客服确认您的身份的重要凭证</div>
        <div className={classes.box}>
          <dl>
            <dt>卡号</dt>
            <dd>
              <input type='number' name='cardNo' value={params.cardNo} placeholder='请输入银行卡卡号'  onChange={handleInputChange} />
            </dd>
          </dl>
        </div>
        <button onClick={handleSubmit} className={classes.submit}>确认并提交</button>
        <div className={classes.note}>请认真校对银行卡卡号，卡号错误资金将无法到帐。经过云加密的银行卡系统，全面保障您的用卡安全。有任何疑问请</div>
      </div>
    </>
  )
}

export default AddBankcard