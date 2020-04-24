import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
  mainContainer: {
    padding: `${theme.typography.pxToRem(54)} ${theme.typography.pxToRem(10)} ${theme.typography.pxToRem(70)}`
  }
}))

const MainContainer = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.mainContainer}>{props.children}</div>
  )
}

export default MainContainer