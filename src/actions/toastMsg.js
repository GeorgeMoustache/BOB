import { TOAST_MSG_OPEN } from './actionType'

const toastMsg = (type, msg) => {
  return {type: TOAST_MSG_OPEN, payload: {type: type, msg: msg}}
}

export default toastMsg