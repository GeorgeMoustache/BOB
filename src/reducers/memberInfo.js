import { USER_LOGIN, USER_LOGOUT } from '../action/actionType'

const initMemberInfo =  {
  username: 'George',
  avatar: '/static/images/member/avatar.png',
  wallet: 0,
  currentVip: 0,
  nextVip: 1,
  promotion: 0,
  recharge: 0,
  needPromotion: 0,
  needRecharge: 0
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