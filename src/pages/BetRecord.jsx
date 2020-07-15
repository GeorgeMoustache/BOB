import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core'
//components
import TitleBar from '../components/TitleBar'
import QuickDate from '../components/QuickDate'
//api
import { fetchApi } from '../api'
//utils
import moneyFix from '../utils/moneyFix'
import copy from '../utils/copy'
//action
import toastMsg from '../actions/toastMsg'

const useStyles = makeStyles((theme) => ({
  outer: {
    paddingTop: '55px',
  },
  inner: {
    padding: '10px 10px 90px 10px',
    '& dl': {
      marginBottom: '10px',
      padding: '10px',
      background: '#FFF',
      borderRadius: '8px',
      boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.08)',
      '& dt': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '5px',
        paddingBottom: '5px',
        borderBottom: '1px solid #CCC',
        '& .title': {
          fontSize: '14px',
          color: '#3e74fa'
        },
        '& .date': {
          fontSize: '12px',
          color: '#9b9b9b'
        }
      },
      '& dd': {
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: '12px',
        '& > div': {
          width: '50%',
          padding: '5px 0'
        },
        '& .profit .green': {
          color: '#47da66',
        },
        '& .profit .red': {
          color: '#ba1918',
        },
        '& .order-no': {
          width: '100%',
          color: '#9b9b9b',
          '& button': {
            marginLeft: '10px',
            padding: '1px 3px',
            background: 'none',
            border: '1px solid #2472ff',
            borderRadius: '10px',
            color: '#2472ff'
          }
        }
      }
    }
  },
  totalWrap: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    padding: '16px',
    background: '#FFF',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.2)',
    fontSize: '14px',
    '& > div': {
      width: '50%',
      padding: '6px 0',
      '& span': {
        fontSize: '20px',
      },
    },
    '& .profit, & .benefit': {
      textAlign: 'right',
    },
    '& .profit .green': {
      color: '#47da66',
    },
    '& .profit .red': {
      color: '#ba1918',
    },
  },
}))

const BetRecord = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [list, setList] = useState([])
  const [total, setTotal] = useState({
    betMoney: 0,
    profit: 0,
    count: 0,
    benefit: 0,
  })

  //拉取資料
  const fetchData = useCallback((startDate, endDate) => {
    const params = {
      startDate: startDate,
      endDate: endDate,
    }
    fetchApi
      .betRecord(params)
      .then((res) => {
        const list = res.data.data.list
        const total = res.data.data.total
        setList(list)
        setTotal(total)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  //一鍵複製
  const handleCopy = (text) => () => {
    copy(text)
      .then(() => {
        dispatch(toastMsg('success', '复制成功'))
      })
      .catch(() => {
        dispatch(toastMsg('success', '复制失败'))
      })
  }

  return (
    <>
      <TitleBar>投注记录</TitleBar>
      <div className={classes.outer}>
        <QuickDate fetchData={fetchData} />
        <div className={classes.inner}>
          {list.map((item, idx) => {
            return (
              <dl key={idx}>
                <dt>
                  <div className='title'>{item.title}</div>
                  <div className='date'>{item.date}</div>
                </dt>
                <dd>
                  <div className='money'>投注额：{moneyFix(item.betMoney)}</div>
                  <div className='host'>盘口：{item.host}</div>
                  <div className='profit'>输赢：<span className={item.profit > 0 ? 'green': 'red'}>{moneyFix(item.profit)}</span></div>
                  <div className='ratio'>赔率：{moneyFix(item.ratio)}</div>
                  <div className='order-no'>单号：{item.orderNo}<button onClick={handleCopy(item.orderNo)}>复制</button></div>
                </dd>
              </dl>
            )
          })}
        </div>
        <div className={classes.totalWrap}>
          <div className='money'>
            总投注：<span>{moneyFix(total.betMoney)}</span>
          </div>
          <div className='profit'>
            盈利额：<span  className={total.profit > 0 ? 'green': 'red'}>{moneyFix(total.profit)}</span>
          </div>
          <div className='count'>笔数：{total.count}</div>
          <div className='benefit'>有效流水：{moneyFix(total.benefit)}</div>
        </div>
      </div>
    </>
  )
}

export default BetRecord
