import React, { useState, useEffect } from 'react'
import { Route, useHistory, useLocation, Redirect } from 'react-router-dom'

const Guard = (props) => {
  const { config } = props
  const location = useLocation()
  const history = useHistory()
  const token = localStorage.getItem('token')
  const [targetComponent, setTargetComponent] = useState({})

  const routeComponent = () => {
    if (token) {
      return (
        <Route exact path={targetComponent.pathname} component={targetComponent.component} />
      )
    } else {
      if (targetComponent.auth) {
        return (
          <Redirect to='/' />
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
    curRoute ? setTargetComponent(curRoute) : history.push('/')
  }, [history, config, location])

  

  return (
    <React.Fragment>
      {routeComponent()}
    </React.Fragment>
  )
}

export default Guard