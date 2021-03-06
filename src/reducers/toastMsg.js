import { TOAST_MSG_OPEN, TOAST_MSG_CLOSE } from '../actions/actionType'

const initState = {
  enabled: false,
  type: '',
  msg: ''
}

const toastMsg = (state = initState, action) => {
  switch (action.type) {
    case TOAST_MSG_OPEN:
      return {
        enabled: true,
        type: action.payload.type,
        msg: action.payload.msg
      }
    case TOAST_MSG_CLOSE:
      return {
        enabled: false,
        type: action.payload.type,
        msg: ''
      }
    default:
      return state
  }
}

export default toastMsg