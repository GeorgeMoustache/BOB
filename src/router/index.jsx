import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, useHistory, useLocation, Redirect } from 'react-router-dom'
import * as routes from './routeLink'
import { USER_LOGIN } from '../action/actionType'

const Guard = (props) => {
  const { config } = props
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const memberInfo = JSON.parse(localStorage.getItem('memberInfo'))
  const [targetComponent, setTargetComponent] = useState({})

  const routeComponent = () => {
    if (token) {
      return (
        <Route exact path={targetComponent.pathname} component={targetComponent.component} />
      )
    } else {
      if (targetComponent.auth) {
        return (
          <Redirect to={routes.ENTRY_PAGE} />
        )
      } else {
        return (
          <Route exact path={targetComponent.pathname} component={targetComponent.component} />
        )
      }
    }
  }

  useEffect(()=>{
    const curRoute = config.find(item => item.path === location.pathname)
    curRoute ? setTargetComponent(curRoute) : history.push(routes.HOME_PAGE)
    //如果 localStorage 有 memberInfo 就取入 redux
    if (memberInfo) {
      dispatch({type: USER_LOGIN, payload: memberInfo})
    }
  }, [history, config, location, dispatch, memberInfo])

  return (
    <React.Fragment>
      {routeComponent()}
    </React.Fragment>
  )
}

export default Guard