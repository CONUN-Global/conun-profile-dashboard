const Dashboard = () => {
  return (
    <div className='w-screen h-screen'>
      <section className='w-[248px] h-full border absolute top-0 left-0 flex flex-col items-center pt-[30px]'>
        <div className='w-[55px] h-[55px] bg-[#0b8e00] rounded-full flex justify-center items-center relative'>
          <p className='font-poppins font-medium text-4xl leading-[54px]'>D</p>
          <img
            src='/src/assets/dashboard/img_edit.svg'
            alt='edit-icon'
            className='absolute bottom-0 right-[-7px]'
          />
        </div>
        <p>dayeong@conun.io</p>

        <div>
          <div>
            <img src='' alt='icon' />
            <p>Dashboard</p>
          </div>

          <div>
            <img src='' alt='icon' />
            <p>Dashboard</p>
          </div>

          <div>
            <img src='' alt='icon' />
            <p>Dashboard</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
