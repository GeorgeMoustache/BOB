import * as routeLink from './routeLink'
import Home from '../pages/Home'
import Promotion from '../pages/Promotion'
import Support from '../pages/Support'
import Sponsor from '../pages/Sponsor'
import Member from '../pages/Member'
import NotFound from '../pages/404'

export default [
  {
    path: routeLink.HOME_PAGE,
    component: Home,
  },
  {
    path: routeLink.PROMOTION_PAGE,
    component: Promotion,
  },
  {
    path: routeLink.SUPPORT_PAGE,
    component: Support,
  },
  {
    path: routeLink.SPONSOR_PAGE,
    component: Sponsor,
  },
  {
    path: routeLink.MEMBER_PAGE,
    component: Member,
    auth: true
  },
  {
    path: routeLink.NOT_FOUND_PAGE,
    component: NotFound
  }
]