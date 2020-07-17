import { USER_LOGIN } from './actionType'

const login = (payload) => {
  return { type: USER_LOGIN, payload: payload}
}

export default login