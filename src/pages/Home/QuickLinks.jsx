import React from 'react'
import { useHistory } from 'react-router'
import * as routes from '../../router/routeLink'
import { makeStyles } from '@material-ui/core'
//assets
import quickLinkIcon1 from '../../assets/images/home/deposit.png'
import quickLinkIcon2 from '../../assets/images/home/withdraw.png'
import quickLinkIcon4 from '../../assets/images/home/vip.png'

const useStyles = makeStyles(theme => ({
  quickLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    background: '#FFF',
    '& button': {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'none',
      border: 'none',
      '& img': {
        display: 'block',
        width: '24px',
        height: 'auto',
        marginRight: '5px',
      }
    }
  }
}))

const QuickLinksComponent = props => {
  const classes = useStyles()
  const history = useHistory()
  const { loginStatus, openDialog } = props

  //連結導向
  const go = (path) => () => {
    !loginStatus ? openDialog() : history.push(path)
  }

  return (
    <div className={classes.quickLinks}>
      <button onClick={go(routes.DEPOSIT)}>
        <img src={quickLinkIcon1} alt='存款' />
        存款
      </button>
      <button onClick={go(routes.WITHDRAW)}>
        <img src={quickLinkIcon2} alt='取款' />
        取款
      </button>
      <button onClick={go(routes.VIP)}>
        <img src={quickLinkIcon4} alt='VIP詳情' />
        VIP詳情
      </button>
    </div>
  )
}

export default QuickLinksComponent
