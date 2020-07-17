import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import * as RouterLink from '../../router/routeLink'
import { makeStyles } from '@material-ui/core/styles'
import config from '../../router/config'
//assets
import navibg from '../../assets/images/navigator/navibg.png'
import icon1 from '../../assets/images/navigator/onsales_3x.png'
import icon2 from '../../assets/images/navigator/customerService_3x.png'
import icon3 from '../../assets/images/navigator/home_3x.png'
import icon4 from '../../assets/images/navigator/sponsorUs_3x.png'
import icon5 from '../../assets/images/navigator/myProfile_3x.png'
import icon1Active from '../../assets/images/navigator/onsales_active_3x.png'
import icon2Active from '../../assets/images/navigator/customerService_active_3x.png'
import icon4Active from '../../assets/images/navigator/sponsorUs_active_3x.png'
import icon5Active from '../../assets/images/navigator/myProfile_active_3x.png'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    height: '52px',
    paddingTop: '10px',
    background: `url(${navibg}) center top no-repeat`,
    backgroundSize: '100% auto',
    zIndex: 100
  },
  links: {
    display: 'block',
    fontSize: '8px',
    color: '#9ca1aa',
    textDecoration: 'none',
    textAlign: 'center',
    '&::before': {
      content:'""',
      display: 'block',
      width: '24px',
      height: '24px',
      backgroundSize: '100% auto'
    },
    '&.active': {
      color: '#2472ff'
    }
  },
  link1: {
    '&::before': {
      backgroundImage: `url(${icon1})`
    },
    '&.active::before': {
      backgroundImage: `url(${icon1Active})`
    }
  },
  link2: {
    '&::before': {
      backgroundImage: `url(${icon2})`
    },
    '&.active::before': {
      backgroundImage: `url(${icon2Active})`
    }
  },
  link3: {
    '&::before': {
      backgroundImage: `url(${icon4})`
    },
    '&.active::before': {
      backgroundImage: `url(${icon4Active})`
    }
  },
  link4: {
    '&::before': {
      backgroundImage: `url(${icon5})`
    },
    '&.active::before': {
      backgroundImage: `url(${icon5Active})`
    }
  },
  linkHome: {
    position: 'relative',
    top: '-30px',
    '&::before': {
      width: '55px',
      height: '55px',
      backgroundImage: `url(${icon3})`
    }
  }
}))

const Navigator = () => {
  const classes = useStyles()
  const location = useLocation()
  const [targetComponent, setTargetComponent] = useState()

  useEffect(() => {
    const curRoute = config.find(item => item.path === location.pathname)
    setTargetComponent(curRoute)
  }, [targetComponent, location])

  if (targetComponent && targetComponent.nav) {
    return (
      <ul className={classes.container}>
        <li>
          <NavLink to={RouterLink.PROMOTION} activeClassName='active' className={`${classes.links} ${classes.link1}`}>優惠</NavLink>
        </li>
        <li>
          <NavLink to={RouterLink.SUPPORT} activeClassName='active' className={`${classes.links} ${classes.link2}`}>客服</NavLink>
        </li>
        <li>
          <NavLink exact to={RouterLink.HOME} activeClassName='active' className={`${classes.links} ${classes.linkHome}`}>首頁</NavLink>
        </li>
        <li>
          <NavLink to={RouterLink.SPONSOR} activeClassName='active' className={`${classes.links} ${classes.link3}`}>贊助</NavLink>
        </li>
        <li>
          <NavLink to={RouterLink.MEMBER} activeClassName='active' className={`${classes.links} ${classes.link4}`}>我的</NavLink>
        </li>
      </ul>
    )
  } else {
    return null
  }
}

export default Navigator