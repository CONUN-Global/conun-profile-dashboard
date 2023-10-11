import { useLocation, useNavigate } from 'react-router-dom'
import { DashboardTable } from '../DashboardTable'
import { Pagination } from '../Pagination'
import { RequestTable } from '../RequestTable'

const navTabs = [
  {
    to: '/main/requests/request-form',
    text: 'Request form'
  },
  {
    to: '/main/requests/business-trip',
    text: 'Business trip'
  },
  {
    to: '/main/requests/payment-form',
    text: 'Payment form'
  }
]

const classes = {
  mainDiv:
    'bottom-0 right-0 absolute w-[calc(100%-248px)] h-[calc(100%-120px)] bg-secondary-blue rounded-tl-[20px] px-[114px] py-[60px]',
  mainTitle: 'text-base font-semibold text-custom-black mb-[25px]',
  paginationBox: 'absolute bottom-[55px] flex justify-center w-full right-0',
  navBtn: 'text-[#bebebe] text-[18px] font-bold hover:text-custom-blue',
  navLi: 'border-light-grey border-r-[2px] px-[23px]',
  navUl: 'flex h-full w-full items-center justify-center',
  navDiv: 'mb-[91px] mt-[10px]'
}

const MainContent = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isDashboard = pathname.includes('dashboard')
  const isRequests = pathname.includes('requests')
  const isRequestForm = pathname.includes('request-form')
  const isBusinessTrip = pathname.includes('business-trip')
  const isPaymentForm = pathname.includes('payment-form')

  return (
    <div className={classes.mainDiv}>
      {isDashboard && (
        <>
          <h2 className={classes.mainTitle}>Your Last Activity</h2>
          <DashboardTable />
          <div className={classes.paginationBox}>
            <Pagination />
          </div>
        </>
      )}

      {isRequests && (
        <>
          <nav className={classes.navDiv}>
            <ul className={classes.navUl}>
              {navTabs.map((tab) => (
                <li className={classes.navLi}>
                  <button
                    className={`${classes.navBtn} ${
                      location.pathname.includes(tab.to)
                        ? 'text-custom-blue'
                        : ''
                    }`}
                    onClick={() => navigate(tab.to)}
                  >
                    {tab.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          {isRequestForm ? (
            <div>request form</div>
          ) : isBusinessTrip ? (
            <div>business trip</div>
          ) : isPaymentForm ? (
            <div>payment form</div>
          ) : (
            <>
              <h2 className={classes.mainTitle}>Your Requests </h2>
              <RequestTable />
              <div className={classes.paginationBox}>
                <Pagination />
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default MainContent
