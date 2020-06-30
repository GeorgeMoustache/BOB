import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
//UI
import { ArrowBackIos } from '@material-ui/icons'

const useStyles = makeStyles(theme =>({
  titleBar: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    background: '#FFF',
    boxShadow: `0 ${theme.typography.pxToRem(2)} ${theme.typography.pxToRem(2)} 0 rgba(0, 0, 0, 0.08)`,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: theme.typography.pxToRem(44),
    textAlign: 'center',
    zIndex: 100
  },
  noShadow: {
    boxShadow: 'none',
  },
  back: {
    position: 'absolute',
    left: theme.typography.pxToRem(15),
    top: theme.typography.pxToRem(13),
    background: 'none',
    border: 'none',
    color: '#333'
  }
}))

const Titlebar = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const { children } = props
  return (
    <div className={`${classes.titleBar} ${props.noShadow ? classes.noShadow : null}`}>
      {children}
      {
        !props.disableBack ? 
        (<button onClick={()=> history.goBack()} className={classes.back}>
          <ArrowBackIos fontSize='small' />
        </button>) 
        : null
      }
    </div>
  )
}

export default Titlebar