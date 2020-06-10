import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import RouterGuard from './router'
import routerConfig from './router/config'
import Navigator from './components/Navigator'
import Loading from './components/Loading'
import ToastMsg from './components/ToastMsg'

const App = () => {
  return (
    <Router>
      <Navigator/>
      <RouterGuard config={routerConfig} />
      <Loading />
      <ToastMsg />
    </Router>
  );
}

export default App