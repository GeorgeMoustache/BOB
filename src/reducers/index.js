import { combineReducers } from 'redux'
import { USER_LOGIN, USER_LOGOUT, GET_PROBLEM_LIST } from '../action/actionType'

const getProblemList = (list = [], action) => {
  switch (action.type) {
    case GET_PROBLEM_LIST:
      list = action.payload
      return list
    default:
      return list
  }
}

const loginStatus = (isLogin = false, action) => {
  switch (action.type) {
    case USER_LOGIN:
      isLogin = true
      return isLogin
    case USER_LOGOUT:
      isLogin = false
      return isLogin
    default:
      return isLogin
  }
}

const rootReducer = combineReducers({ getProblemList, loginStatus })

export default rootReducer
