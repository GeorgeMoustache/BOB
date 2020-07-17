import * as routeLink from './routeLink'
import Home from '../pages/Home/'
import Announcement from '../pages/Announcement'
import Entry from '../pages/Entry'
import Promotion from '../pages/Promotion'
import Support from '../pages/Support'
import Sponsor from '../pages/Sponsor'
import Member from '../pages/Member'
import Aboutus from '../pages/Aboutus'
import Joinus from '../pages/Joinus'
import JoinusForm from '../pages/JoinusForm'
import Feedback from '../pages/Feedback'
import Vip from '../pages/Vip'
import Deposit from '../pages/Deposit'
import Withdraw from '../pages/Withdraw'
import BetRecord from '../pages/BetRecord'
import TransactionRecord from '../pages/TransactionRecord'
import Invite from '../pages/Invite'
import Setting from '../pages/Setting'
import BankcardList from '../pages/BankcardList'
import AddBankcard from '../pages/AddBankcard'
import NotFound from '../pages/404'

export default [
  {
    path: routeLink.HOME,
    component: Home,
    auth: false,
    nav: true
  },
  {
    path: routeLink.ANNOUNCEMENT,
    component: Announcement,
    auth: false,
    nav: false
  },
  {
    path: routeLink.ENTRY,
    component: Entry,
    auth: false,
    nav: false
  },
  {
    path: routeLink.PROMOTION,
    component: Promotion,
    auth: false,
    nav: true
  },
  {
    path: routeLink.SUPPORT,
    component: Support,
    auth: false,
    nav: true
  },
  {
    path: routeLink.SPONSOR,
    component: Sponsor,
    auth: false,
    nav: true
  },
  {
    path: routeLink.MEMBER,
    component: Member,
    auth: false,
    nav: true
  },
  {
    path: routeLink.ABOUTUS,
    component: Aboutus,
    auth: false,
    nav: false
  },
  {
    path: routeLink.JOINUS,
    component: Joinus,
    auth: false,
    nav: false
  },
  {
    path: routeLink.JOINUS_FORM,
    component: JoinusForm,
    auth: false,
    nav: true
  },
  {
    path: routeLink.FEEDBACK,
    component: Feedback,
    auth: false,
    nav: true
  },
  {
    path: routeLink.VIP,
    component: Vip,
    auth: true,
    nav: false
  },
  {
    path: routeLink.DEPOSIT,
    component: Deposit,
    auth: true,
    nav: false
  },
  {
    path: routeLink.WITHDRAW,
    component: Withdraw,
    auth: true,
    nav: false
  },
  {
    path: routeLink.BET_RECORD,
    component: BetRecord,
    auth: true,
    nav: false
  },
  {
    path: routeLink.TRANSACTION_RECORD,
    component: TransactionRecord,
    auth: true,
    nav: false
  },
  {
    path: routeLink.INVITE,
    component: Invite,
    auth: true,
    nav: false
  },
  {
    path: routeLink.SETTING,
    component: Setting,
    auth: true,
    nav: false
  },
  {
    path: routeLink.BANKCARD_LIST,
    component: BankcardList,
    auth: true,
    nav: false
  },
  {
    path: routeLink.ADD_BANKCARD,
    component: AddBankcard,
    auth: true,
    nav: false
  },
  {
    path: routeLink.NOT_FOUND,
    component: NotFound,
    auth: false,
    nav: false
  }
]