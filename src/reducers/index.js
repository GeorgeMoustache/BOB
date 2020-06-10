import {
  combineReducers
} from 'redux'
import loading from './loading'
import toastMsg from './toastMsg'
import memberInfo from './memberInfo'
import getProblemList from './problemList'

const rootReducer = combineReducers({
  loading,
  toastMsg,
  memberInfo,
  getProblemList
})

export default rootReducer