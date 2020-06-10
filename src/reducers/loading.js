import { LOADING } from '../action/actionType'

const loading = (enabled = false, action) => {
  switch (action.type) {
    case LOADING:
      return !enabled
    default:
      return enabled
  }
}

export default loading