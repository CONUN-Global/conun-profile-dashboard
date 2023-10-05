import { MainTable } from '../MainTable'
import { Pagination } from '../Pagination'

const classes = {
  mainDiv:
    'bottom-0 right-0 absolute w-[calc(100%-248px)] h-[calc(100%-120px)] bg-secondary-blue rounded-tl-[20px] px-[114px] py-[60px]',
  mainTitle: 'text-base font-semibold text-custom-black mb-[25px]',
  paginationBox: 'absolute bottom-[55px] flex justify-center w-full right-0'
}

const MainContent = () => {
  return (
    <div className={classes.mainDiv}>
      <h2 className={classes.mainTitle}>Your Last Activity</h2>
      <MainTable />
      <div className={classes.paginationBox}>
        <Pagination />
      </div>
    </div>
  )
}

export default MainContent
