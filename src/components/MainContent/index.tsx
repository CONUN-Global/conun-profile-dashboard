import { useLocation } from 'react-router-dom'
import { DashboardTable } from '../DashboardTable'
import { Pagination } from '../Pagination'
import { RequestTable } from '../RequestTable'

const classes = {
  mainDiv:
    'bottom-0 right-0 absolute w-[calc(100%-248px)] h-[calc(100%-120px)] bg-secondary-blue rounded-tl-[20px] px-[114px] py-[60px]',
  mainTitle: 'text-base font-semibold text-custom-black mb-[25px]',
  paginationBox: 'absolute bottom-[55px] flex justify-center w-full right-0',
  navBtn: 'text-[#bebebe] text-[18px] font-bold',
  navLi: 'border-light-grey border-r-[2px] px-[23px]',
  navUl: 'flex h-full w-full items-center justify-center',
  navDiv: 'mb-[91px] mt-[10px]'
}

const MainContent = () => {
  const location = useLocation()
  console.log('location: ', location.pathname.includes('dashboard'))
  const isDashboard = location.pathname.includes('dashboard')
  const isRequests = location.pathname.includes('requests')

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
              <li className={classes.navLi}>
                <button className={classes.navBtn}>Request form</button>
              </li>
              <li className={classes.navLi}>
                <button className={classes.navBtn}>Business trip</button>
              </li>
              <li className='px-[23px]'>
                <button className={classes.navBtn}>Payment form</button>
              </li>
            </ul>
          </nav>
          <h2 className={classes.mainTitle}>Your Requests </h2>
          <RequestTable />
          <div className={classes.paginationBox}>
            <Pagination />
          </div>
        </>
      )}
    </div>
  )
}

export default MainContent
