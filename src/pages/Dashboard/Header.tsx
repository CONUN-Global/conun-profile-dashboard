import SearchIcon from '../../assets/dashboard/search_icon.svg?react'

const Header = () => {
  return (
    <header className='absolute top-0 right-0 flex h-[120px] items-center w-[calc(100%-248px)] px-[40px] justify-between'>
      <div className='relative flex items-center'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
          <SearchIcon />
        </div>
        <input
          type='text'
          placeholder='Search'
          className='pl-10 p-2 border rounded-[10px] focus:outline-none focus:border-custom-blue focus:border-[1.5px] w-[600px] h-[45px]'
        />
      </div>
      <button className='text-white text-xl font-bold bg-custom-blue w-[173px] h-[70px] rounded-[10px]'>
        Add New
      </button>
    </header>
  )
}

export default Header
