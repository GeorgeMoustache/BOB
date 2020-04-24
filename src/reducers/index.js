import { combineReducers } from 'redux'
import { GET_PROBLEM_LIST } from '../constants/actionType'

const getProblemList = (list = [], action)=> {
  switch (action.type) {
    case GET_PROBLEM_LIST:
      list = action.payload
      return list
    default:
      return list 
  }
}

const rootReducer = combineReducers({getProblemList})

export default rootReducer