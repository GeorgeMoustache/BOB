import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
//components
import TitleBar from '../components/TitleBar'
import QuickDate from '../components/QuickDate'
//UI
import { Tabs, Tab } from '@material-ui/core'
//api
import { fetchApi } from '../api'
//utils
import moneyFix from '../utils/moneyFix'
import copy from '../utils/copy'
//action
import toastMsg from '../actions/toastMsg'

const useStyles = makeStyles((theme) => ({
  outer: {
    paddingTop: '44px',
  },
  inner: {
    padding: '10px',
    '& dl': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
      padding: '10px',
      background: '#FFF',
      borderLeft: '4px solid #2472ff',
      borderRadius: '8px',
      boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.08)',
      '& dt': {
        flexShrink: 0,
        width: '43px',
        height: '43px',
        marginRight: '10px',
        padding: '2px 0',
        background: '#f5f4f5',
        borderRadius: '8px',
        fontSize: '12px',
        textAlign: 'center',
        '& img': {
          display: 'block',
          width: '24px',
          height: 'auto',
          margin: '0 auto',
        },
      },
      '& dd': {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        fontSize: '12px',
        '& .left': {
          width: '100%',
          '& > div': {
            padding: '3px 0',
          },
          '& .title': {},
          '& .date': {
            color: '#9b9b9b',
          },
          '& .order-no': {
            '& button': {
              marginLeft: '10px',
              padding: '1px 3px',
              background: 'none',
              border: '1px solid #2472ff',
              borderRadius: '10px',
              color: '#2472ff',
            },
          },
        },
        '& .right': {
          flexShrink: 0,
          width: '55px',
          lineHeight: '15px',
          textAlign: 'right',
          '& .green': {
            color: '#47da66',
          },
          '& .red': {
            color: '#ba1918',
          },
        },
      },
    },
  },
  listType: {
    width: '100%',
    justifyContent: 'space-between',
    minHeight: 'auto',
    marginBottom: '10px',
    padding: '0 5px',
    background: '#FFF',
    '& .MuiTabs-flexContainer': {
      justifyContent: 'space-around',
    },
    '& .MuiTab-root': {
      minWidth: '70px',
      minHeight: 'auto',
      padding: 0,
      border: '1px solid transparent',
      borderRadius: '8px',
      fontSize: '14px',
      color: '#000',
      lineHeight: '44px',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        display: 'block',
        width: '28px',
        height: '2px',
      },
      '&.Mui-selected': {
        color: '#2472ff',
        '&::after': {
          background: '#2472ff',
        },
      },
    },
    '& .MuiTabs-indicator': {
      display: 'none',
    },
  },
  finish: {
    fontSize: '12px',
    color: '#9b9b9b',
    textAlign: 'center',
  },
}))

const TransactionRecord = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [listType, setListType] = useState(0)
  const [list, setList] = useState([])

  //改變交易類型
  const changeListType = (event, newValue) => setListType(newValue)

  //拉取資料
  const fetchData = useCallback(
    (startDate, endDate) => {
      const params = {
        listType: listType,
        startDate: startDate,
        endDate: endDate,
      }
      fetchApi
        .transactionRecord(params)
        .then((res) => {
          const list = res.data.data.list
          setList(list)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    [listType],
  )

  //一鍵複製
  const handleCopy = (text) => () => {
    copy(text)
      .then(() => {
        dispatch(toastMsg('success', '复制成功'))
      })
      .catch(() => {
        dispatch(toastMsg('error', '复制失败'))
      })
  }

  const listComponent = () => {
    return (
      <div className={classes.inner}>
        {list.map((item, idx) => {
          let str = ''
          let icon = ''
          switch (listType) {
            case 0:
              str = '存款'
              icon = require('../assets/images/transaction_record/deposit.png')
              break
            case 1:
              str = '提款'
              icon = require('../assets/images/transaction_record/withdraw.png')
              break
            case 2:
              str = '转账'
              icon = require('../assets/images/transaction_record/transition.png')
              break
            case 3:
              str = '优惠'
              icon = require('../assets/images/transaction_record/promo.png')
              break
            case 4:
              str = '返水'
              icon = require('../assets/images/transaction_record/return.png')
              break
            default:
              str = ''
          }

          return (
            <dl key={idx}>
              <dt>
                <img src={icon} alt={item.title} />
                {str}
              </dt>
              <dd>
                <div className='left'>
                  <div className='title'>{item.title}</div>
                  <div className='date'>{item.date}</div>
                  <div className='order-no'>
                    {item.orderNo}
                    <button onClick={handleCopy(item.orderNo)}>复制</button>
                  </div>
                </div>
                <div className='right'>
                  <div className={`status ${item.status === 0 ? 'green' : 'red'}`}>成功</div>
                  <div className='money'>{moneyFix(item.money)}</div>
                </div>
              </dd>
            </dl>
          )
        })}
        <div className={classes.finish}>数据加载完成～</div>
      </div>
    )
  }

  return (
    <>
      <TitleBar noShadow>交易记录</TitleBar>
      <div className={classes.outer}>
        <Tabs value={listType} onChange={changeListType} className={classes.listType}>
          <Tab label='存款' value={0} />
          <Tab label='提款' value={1} />
          <Tab label='转账' value={2} />
          <Tab label='优惠' value={3} />
          <Tab label='返水' value={4} />
        </Tabs>
        <QuickDate fetchData={fetchData} />
        {listComponent()}
      </div>
    </>
  )
}

export default TransactionRecord
