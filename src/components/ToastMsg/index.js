import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const Alert = props => {
  return <MuiAlert evevation={6} variant="filled" {...props} />
}

const ToastMsg = props => {
  const toast = useSelector(state => state.toastMsg)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch({type: '', payload: {
      enabled: false,
      type: '',
      msg: ''
    }})
  }

  const msgType = () => {
    switch (toast.type) {
      case 'success':
        return <Alert severity="success">This is a success message!</Alert>
      case 'warning':
        return <Alert severity="">This is a warning message!</Alert>
      case 'error':
        return <Alert severity="error">This is an error message!</Alert>
      default: 
        return <Alert severity="info">This is an information message!</Alert>
    }
  }

  return (
    <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }} open={toast.enabled} autoHideDuration={1000} onClose={handleClose}>
      { msgType() }
    </Snackbar>
  )
}

export default ToastMsg;