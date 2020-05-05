import React from 'react'
import { makeStyles } from '@material-ui/core'
//UI
import Dialog from '@material-ui/core/Dialog'

const useStyles = makeStyles((theme) => ({
  dialogWrap: {
    minWidth: '258px',
    padding: '10px'
  },
  dialogTitle: {
    marginBottom: '15px',
    fontSize: '16px',
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  dialogContent: {
    minHeight: '50px',
    marginBottom: '15px',
    fontSize: '14px',
    textAlign: 'center'
  },
  dialogControl: {
    display: 'flex',
  },
  action: {
    display: 'block',
    width: '50%',
    border: 'none',
    borderRadius: '10px',
    fontSize: '14px',
    color: '#FFF',
    lineHeight: '40px'
  },
  actionYes: {
    marginLeft: '5px',
    background: 'linear-gradient(to right, #6ab4f9, #4668d1)',
  },
  actionNo: {
    marginRight: '5px',
    background: 'linear-gradient(to right, #57e1d9, #03c4bd)',
  },
}))

const AlertDialog = (props) => {
  const classes = useStyles()
  const { title, content, textYes, textNo, onYes, onNo } = props

  return (
    <Dialog open={props.dialogOpen}>
      <div className={classes.dialogWrap}>
        <div className={classes.dialogTitle}>{title}</div>
        {props.children ? (
          <div className={classes.dialogContent}>{props.children}</div>
        ) : (
          <div className={classes.dialogContent}>{content}</div>
        )}
        <div className={classes.dialogControl}>
          <button onClick={onNo} className={`${classes.action} ${classes.actionNo}`}>
            {textNo}
          </button>
          <button onClick={onYes} className={`${classes.action} ${classes.actionYes}`}>
            {textYes}
          </button>
        </div>
      </div>
    </Dialog>
  )
}

export default AlertDialog
