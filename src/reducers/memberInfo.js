import { USER_LOGIN, USER_LOGOUT } from '../action/actionType'

const initMemberInfo =  {
  username: '',
  wallet: 0,
  currentVip: 0,
  nextVip: 1,
}

const memberInfo = (info = initMemberInfo, action) => {
  switch (action.type) {
    case USER_LOGIN:
      info = action.payload
      return info
    case USER_LOGOUT:
      info = initMemberInfo
      return info
    default:
      return info
  }
}

export default memberInfo