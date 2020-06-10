import * as routeLink from './routeLink'
import Home from '../pages/Home'
import Entry from '../pages/Entry'
import Promotion from '../pages/Promotion'
import Support from '../pages/Support'
import Sponsor from '../pages/Sponsor'
import Member from '../pages/Member'
import NotFound from '../pages/404'

export default [
  {
    path: routeLink.HOME_PAGE,
    component: Home,
    auth: false,
    nav: true
  },
  {
    path: routeLink.ENTRY_PAGE,
    component: Entry,
    auth: false,
    nav: false
  },
  {
    path: routeLink.PROMOTION_PAGE,
    component: Promotion,
    auth: false,
    nav: true
  },
  {
    path: routeLink.SUPPORT_PAGE,
    component: Support,
    auth: false,
    nav: true
  },
  {
    path: routeLink.SPONSOR_PAGE,
    component: Sponsor,
    auth: false,
    nav: true
  },
  {
    path: routeLink.MEMBER_PAGE,
    component: Member,
    auth: false,
    nav: true
  },
  {
    path: routeLink.NOT_FOUND_PAGE,
    component: NotFound,
    auth: false,
    nav: false
  }
]