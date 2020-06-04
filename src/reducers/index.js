import { combineReducers } from 'redux'
import toastMsg from './toastMsg'
import memberInfo from './memberInfo'
import getProblemList from './problemList'

const rootReducer = combineReducers({ toastMsg, memberInfo, getProblemList })

export default rootReducer
