import React from 'react'
import { makeStyles } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  mask: {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, .5)',
    opacity: 0,
    animation: '$fade .5s forwards',
    zIndex: '100',
  },
  '@keyframes fade': {
    to: {
      opacity: 1,
    },
  },
  spinner: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    margin: '-20px 0 0 -20px',
    color: '#FFF',
  },
}))

const ToastMsg = (props) => {
  const classes = useStyles()
  const { enabled } = props

  return (
    <React.Fragment>
      {enabled ? (
        <div className={classes.mask}>
          <CircularProgress className={classes.spinner} />{' '}
        </div>
      ) : null}
    </React.Fragment>
  )
}

export default ToastMsg
