import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as RouterLink from './constants/router'
import Navigator from './components/Navigator'
import Home from './pages/Home'
import Promo from './pages/Promo'
import Support from './pages/Support'
import Sponsor from './pages/Sponsor'
import Member from './pages/Member'

const App = () => {
  return (
    <Router>
      <Navigator/>
      <Route exact path={RouterLink.HOME_PAGE} component={Home}/>
      <Route path={RouterLink.PROMO_PAGE} component={Promo}/>
      <Route path={RouterLink.SUPPORT_PAGE} component={Support}/>
      <Route path={RouterLink.SPONSOR_PAGE} component={Sponsor}/>
      <Route path={RouterLink.MEMBER_PAGE} component={Member}/>
    </Router>
  );
}

export default App