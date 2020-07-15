import React from 'react'
import { makeStyles } from '@material-ui/core'
//components
import TitleBar from '../components/TitleBar/'
//assets 
import img01 from '../assets/images/aboutus/aboutus-1.png'
import img02 from '../assets/images/aboutus/aboutus-2.png'

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: '100vh',
    paddingTop: '30%',
    color: theme.palette.common.black,
    textAlign: 'center',
    '& img': {
      display: 'block',
      maxWidth: '301px',
      height: 'auto',
      margin: '0 auto'
    },
    '& h2': {
      margin: '47px 0 5px 0',
      fontSize: '16px',
    },
    '& p': {
      margin: '0 0 40px 0',
    }
  }
}))

const Aboutus = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <TitleBar>关于我们</TitleBar>
      <div className={classes.wrapper}>
        <img src={img01} alt='' />
        <h2>BOB是全球领先的合法博彩公司</h2>
        <p>拥有官方颁发的许可证并受其监督运营</p>
        <img src={img02} alt='' />
      </div>
    </React.Fragment>
  ) 
}

export default Aboutus