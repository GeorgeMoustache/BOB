import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import RouterGuard from './router'
import routerConfig from './router/config'
import Navigator from './components/Navigator'

const App = () => {
  return (
    <Router>
      <Navigator/>
      <RouterGuard config={routerConfig} />
    </Router>
  );
}

export default App