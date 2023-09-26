import SearchIcon from '../../assets/dashboard/search_icon.svg?react'

const classes = {
  header:
    'absolute top-0 right-0 flex h-[120px] items-center w-[calc(100%-248px)] px-[40px] justify-between',
  inputContainer: 'relative flex items-center',
  searchDiv: 'absolute inset-y-0 left-0 flex items-center pl-3',
  input:
    'pl-10 p-2 border rounded-[10px] focus:outline-none focus:border-custom-blue focus:border-[1.5px] w-[600px] h-[45px]',
  btn: 'text-white text-xl font-bold bg-custom-blue w-[173px] h-[70px] rounded-[10px]'
}

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.inputContainer}>
        <div className={classes.searchDiv}>
          <SearchIcon />
        </div>
        <input type='text' placeholder='Search' className={classes.input} />
      </div>
      <button className={classes.btn}>Add New</button>
    </header>
  )
}

export default Header
