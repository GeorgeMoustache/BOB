import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { TOAST_MSG_CLOSE } from '../../actions/actionType'

const Alert = props => {
  return <MuiAlert evevation={6} variant="filled" {...props} />
}

const ToastMsg = props => {
  const toast = useSelector(state => state.toastMsg)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch({type: TOAST_MSG_CLOSE, payload: {type: toast.type}})
  }

  return (
    <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }} open={toast.enabled} autoHideDuration={3000} onClose={handleClose}>
      <Alert severity={toast.type}>{toast.msg}</Alert>
    </Snackbar>
  )
}

export default ToastMsg;