import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../router/routeLink'
import { makeStyles } from '@material-ui/core'
//components
import TitleBar from '../components/TitleBar'
//assets
import moneyIconLeft from '../assets/images/withdraw/center_wallet.png'
import moneyIconRight from '../assets/images/withdraw/transfer_all.png'
import toggleIcon from '../assets/images/withdraw/arrow_down.png'
import addBankCardIcon from '../assets/images/withdraw/add_bankcard.svg'
import checkIcon from '../assets/images/withdraw/check.svg'
import unCheckIcon from '../assets/images/withdraw/uncheck.svg'
//api
import { fetchApi } from '../api'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '55px 10px 0 10px',
  },
  box: {
    background: '#FFF',
    borderRadius: '8px',
    boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.08)',
  },
  moneyInfo: {
    marginBottom: '10px',
    padding: '10px',
    textAlign: 'center',
    '& .main': {
      display: 'flex',
      paddingBottom: '10px',
      borderBottom: '1px solid #9b9b9b',
      '& > div': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '40px',
        '&::before': {
          content: '""',
          display: 'block',
          width: '24px',
          height: '24px',
          marginRight: '5px',
          backgroundSize: '100% auto'
        }
      },
      '& .left': {
        borderRight: '2px solid #cdcdcd',
        fontSize: '12px',
        '&::before': {
          backgroundImage: `url(${moneyIconLeft})`
        },
        '& .money span': {
          display: 'block',
          marginTop: '3px',
          fontWeight: 'bold'
        }
      },
      '& .right': {
        '&::before': {
          backgroundImage: `url(${moneyIconRight})`
        },
        '& button': {
          background: 'none',
          border: 'none',
          fontSize: '12px'
        }
      }
    },
    '& .list': {
      display: 'flex',
      flexWrap: 'wrap',
      fontSize: '12px',
      '& dl': {
        width: '25%',
        padding: '12px 0',
        textAlign: 'center',
        '& dt': {
          marginBottom: '5px'
        },
        '& dd': {
          color: '#2472ff'
        }
      },
      '&.hidden': {
        height: '55px',
        overflow: 'hidden'
      }
    },
    '& .more': {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'none',
      border: 'none',
      fontSize: '14px',
      color: '#9b9b9b',
      '&::after': {
        content: '""',
        display: 'block',
        width: '12px',
        height: '12px',
        marginLeft: '5px',
        background: `url(${toggleIcon}) center center no-repeat`,
        backgroundSize: '100% auto',
        transform: 'rotate(180deg)'
      },
      '&.hidden::after': {
        transform: 'rotate(0deg)'
      }
    }
  },
  addBankCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '190px',
    '& a': {
      background: 'none',
      border: 'none',
      fontSize: '12px',
      color: '#3e74fa',
      '&::before': {
        content: '""',
        display: 'block',
        width: '55px',
        height: '55px',
        marginBottom: '5px',
        background: `url(${addBankCardIcon}) center center no-repeat`,
        backgrounSize: '100% auto',
        borderRadius: '50%',
      },
    },
  },
  bankList: {
    marginBottom: '10px',
    padding: '10px',
    textAlign: 'center',
    '& .wrap': {
      marginBottom: '20px',
      paddingTop: '20px',
      '& li': {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #b4b4b4',
        background: `url(${unCheckIcon}) 96% center no-repeat`,
        fontSize: '14px',
        '& img': {
          display: 'block',
          width: '21px',
          height: 'auto',
          marginRight: '10px'
        },
        '&:last-child': {
          border: 'none'
        },
        '&.active': {
          backgroundImage: `url(${checkIcon})`
        }
      }
    },
    '& .add': {
      fontSize: '12px',
      color: '#3e74fa'
    }
  },
  moneyWrap: {
    marginBottom: '25px',
    padding: '10px',
    '& .title': {
      fontSize: '12px',
    },
    '& .wrap': {
      display: 'flex',
      padding: '10px 0',
      borderBottom: '1px solid #9b9b9b',
      '&::before': {
        content: '"¥"',
        display: 'block',
        marginRight: '5px',
        fontSize: '20px',
        color: '#000',
        fontWeight: 'bold',
      },
      '& input': {
        flexGrow: 1,
        border: 'none',
        fontSize: '16px',
        color: '#000',
        '&::-webkit-input-placeholder': {
          color: '#9b9b9b'
        }
      }
    }
  },
  submit: {
    display: 'block',
    width: '100%',
    marginBottom: '10px',
    background: 'linear-gradient(to right, #69b3f8, #4668d1)',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    color: '#FFF',
    lineHeight: '40px'
  },
  note: {
    fontSize: '12px',
    color: '#9b9b9b',
    lineHeight: 1.5
  }
}))

const Withdraw = () => {
  const classes = useStyles()
  const [moneyList, setMoneyList] = useState([])
  const [toggle, setToggle] = useState(false)
  const [myBankList, setMyBankList] = useState([])
  const [selectBank, setSelectBank] = useState(0)

  //錢包資訊
  const moneyInfoComponent = () => {
    const handleToggle = () => setToggle(!toggle)
    return (
      <div className={`${classes.moneyInfo} ${classes.box}`}>
        <div className='main'>
          <div className='left'>
            <div className='money'>
              中心钱包<span>¥0.00</span>
            </div>
          </div>
          <div className='right'>
            <button>一键回收</button>
          </div>
        </div>
        <div className={`list ${toggle ? '' : 'hidden'}`}>
          {
            moneyList.map((item, idx) => {
              return (
                <dl key={idx}>
                  <dt>{item.title}</dt>
                  <dd>{item.money}</dd>
                </dl>
              )
            })
          }
        </div>
        <button onClick={handleToggle} className={`more ${toggle ? '' : 'hidden'}`}>{ toggle ? '收起所有場館' :'展開所有場館'}</button>
      </div>
    )
  }

  //新增銀行卡
  const addBankCardComponent = () => {
    return (
      <div className={`${classes.addBankCard} ${classes.box}`}>
        <Link to={routes.ADD_BANKCARD_PAGE}>添加银行卡</Link>
      </div>
    )
  }

  //銀行列表
  const myBankListComponent = () => {
    const handleSelect = (idx) => () => setSelectBank(idx)
    return (
      <div className={`${classes.bankList} ${classes.box}`}>
        <ul className='wrap'>
          {
            myBankList.map((item, idx) => {
              return (
                <li onClick={handleSelect(idx)} className={idx === selectBank ? 'active' : ''} key={idx}>
                  <img src={item.icon} alt={item.bankName} />
                  {item.bankName}
                </li>
              )
            })
          }
        </ul>
        <Link to={routes.ADD_BANKCARD_PAGE} className='add'>＋ 添加银行卡</Link>
      </div>
    )
  }

  //輸入金錢
  const moneyInput = () => {
    return (
      <div className={`${classes.moneyWrap} ${classes.box}`}>
        <div className='title'>取款金额</div>
        <div className='wrap'>
          <input type='number' placeholder='请输入金额' />
        </div>
      </div>
    )
  }

  useEffect(()=>{
    //獲取錢包列表
    fetchApi.moneyList().then(res => {
      if (res.data.code !== 0) return
      setMoneyList(res.data.data.moneyList)
    })
    //獲取我的銀行列表
    fetchApi.myBankList().then(res => {
      console.log(res)
      setMyBankList(res.data.data.bankList)
    })
  },[])

  return (
    <>
      <TitleBar>取款</TitleBar>
      <div className={classes.container}>
        {moneyInfoComponent()}
        {myBankList.length ? (
          <>
            {myBankListComponent()}
            {moneyInput()}
            <button className={classes.submit}>提款</button>
            <div className={classes.note}>
              <p>提示：如需取款，请先转帐至中心钱包，方可取款！</p>
              <p>您今日剩余可取款次数为5次，可取款金额为200000元！</p>
            </div>
          </>
        ) : addBankCardComponent()}
      </div>
    </>
  )
}

export default Withdraw
