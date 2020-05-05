import React from 'react'
import { NavLink } from 'react-router-dom'
import * as RouterLink from '../../router/routeLink'
import { makeStyles } from '@material-ui/core/styles'
//UI
import Grid from '@material-ui/core/Grid'
//assets
import navibg from '../../assets/icons/navigator/navibg.png'
import icon1 from '../../assets/icons/navigator/onsales_3x.png'
import icon2 from '../../assets/icons/navigator/customerService_3x.png'
import icon3 from '../../assets/icons/navigator/home_3x.png'
import icon4 from '../../assets/icons/navigator/sponsorUs_3x.png'
import icon5 from '../../assets/icons/navigator/myProfile_3x.png'
import icon1Active from '../../assets/icons/navigator/onsales_active_3x.png'
import icon2Active from '../../assets/icons/navigator/customerService_active_3x.png'
import icon4Active from '../../assets/icons/navigator/sponsorUs_active_3x.png'
import icon5Active from '../../assets/icons/navigator/myProfile_active_3x.png'

const useStyles = makeStyles(theme => ({
  container: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    height: theme.typography.pxToRem(52),
    paddingTop: '7px',
    background: `url(${navibg}) center top no-repeat`,
    backgroundSize: '100% auto',
    zIndex: 100
  },
  links: {
    display: 'block',
    fontSize: theme.typography.pxToRem(8),
    color: '#9ca1aa',
    textDecoration: 'none',
    textAlign: 'center',
    '&::before': {
      content:'""',
      display: 'block',
      width: theme.typography.pxToRem(24),
      height: theme.typography.pxToRem(24),
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
      width: theme.typography.pxToRem(55),
      height: theme.typography.pxToRem(55),
      backgroundImage: `url(${icon3})`
    }
  }
}))

const Navigator = () => {
  const classes = useStyles()
  return (
    <Grid container justify='space-around' className={classes.container}>
      <Grid item>
        <NavLink to={RouterLink.PROMOTION_PAGE} activeClassName='active' className={`${classes.links} ${classes.link1}`}>優惠</NavLink>
      </Grid>
      <Grid item>
        <NavLink to={RouterLink.SUPPORT_PAGE} activeClassName='active' className={`${classes.links} ${classes.link2}`}>客服</NavLink>
      </Grid>
      <Grid item>
        <NavLink exact to={RouterLink.HOME_PAGE} activeClassName='active' className={`${classes.links} ${classes.linkHome}`}>首頁</NavLink>
      </Grid>
      <Grid item>
        <NavLink to={RouterLink.SPONSOR_PAGE} activeClassName='active' className={`${classes.links} ${classes.link3}`}>贊助</NavLink>
      </Grid>
      <Grid item>
        <NavLink to={RouterLink.MEMBER_PAGE} activeClassName='active' className={`${classes.links} ${classes.link4}`}>我的</NavLink>
      </Grid>
    </Grid>
  )
}

export default Navigator