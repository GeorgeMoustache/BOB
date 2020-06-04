import { TOAST_MSG_INFO, TOAST_MSG_SUCCESS, TOAST_MSG_WARNING, TOAST_MSG_ERROR } from '../action/actionType'

const initState = {
  enabled: true,
  type: '',
  msg: ''
}

const toastMsg = (state = initState, action) => {
  
  console.log('reducerState', action.payload)
  switch (action.type) {
    case TOAST_MSG_INFO:
      state.enabled = action.enabled
      state.msg = action.msg
      return state
    case TOAST_MSG_SUCCESS:
      state.enabled = action.enabled
      state.msg = action.msg
      return state
    case TOAST_MSG_WARNING:
      state.enabled = action.enabled
      state.msg = action.msg
      return state
    case TOAST_MSG_ERROR:
      state.enabled = action.enabled
      state.msg = action.msg
      return state
    default:
      state.enabled = action.enabled
      state.msg = action.msg
      return state
  }
}

export default toastMsg