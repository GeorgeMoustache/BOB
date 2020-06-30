import * as routeLink from './routeLink'
import Home from '../pages/Home'
import Entry from '../pages/Entry'
import Promotion from '../pages/Promotion'
import Support from '../pages/Support'
import Sponsor from '../pages/Sponsor'
import Member from '../pages/Member'
import Joinus from '../pages/Joinus'
import JoinusForm from '../pages/JoinusForm'
import Vip from '../pages/Vip'
import Deposit from '../pages/Deposit'
import Withdraw from '../pages/Withdraw'
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
    path: routeLink.JOINUS_PAGE,
    component: Joinus,
    auth: false,
    nav: true
  },
  {
    path: routeLink.JOINUS_FORM_PAGE,
    component: JoinusForm,
    auth: false,
    nav: true
  },
  {
    path: routeLink.VIP_PAGE,
    component: Vip,
    auth: true,
    nav: false
  },
  {
    path: routeLink.DEPOSIT_PAGE,
    component: Deposit,
    auth: true,
    nav: false
  },
  {
    path: routeLink.WITHDRAW_PAGE,
    component: Withdraw,
    auth: true,
    nav: false
  },
  {
    path: routeLink.NOT_FOUND_PAGE,
    component: NotFound,
    auth: false,
    nav: false
  }
]