import { GET_PROBLEM_LIST } from '../actions/actionType'

const getProblemList = (list = [], action) => {
  switch (action.type) {
    case GET_PROBLEM_LIST:
      list = action.payload
      return list
    default:
      return list
  }
}

export default getProblemList