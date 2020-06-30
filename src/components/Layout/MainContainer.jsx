import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
  mainContainer: {
    padding: '50px 10px 70px 10px'
  }
}))

const MainContainer = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.mainContainer}>{props.children}</div>
  )
}

export default MainContainer