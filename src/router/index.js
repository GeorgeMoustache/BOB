import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, useLocation, Redirect } from 'react-router-dom'

const Guard = (props) => {
  const { config } = props
  const location = useLocation()
  const loginStatus = useSelector(state => state.loginStatus)
  const [targetComponent, setTargetComponent] = useState({})

  const routeComponent = () => {
    //已登入
    if (loginStatus) {
      return (
        <Route exact path={targetComponent.pathname} component={targetComponent.component} />
      )
    }
    
    //未登入
    if (targetComponent.auth) {
      return (
        <Redirect to='/404' />
      )
    } else {
      return (
        <Route exact path={targetComponent.pathname} component={targetComponent.component} />
      )
    }
  }

  useEffect(()=>{
    const curRoute = config.find(item => item.path === location.pathname)
    setTargetComponent(curRoute)
  }, [config, location])

  

  return (
    <React.Fragment>
      {routeComponent()}
    </React.Fragment>
  )
}

export default Guard