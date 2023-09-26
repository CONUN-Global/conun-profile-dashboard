const Login = () => {
  return (
    <div className='w-screen h-screen bg-[#F4F6FF] flex flex-col items-center pt-36 pb-36'>
      <h1 className='text-4xl font-extrabold leading-[60px] text-["292929"] mb-12'>
        CONUN profile
      </h1>
      <form className='flex flex-col items-center'>
        <div className='w-[650px] mb-[25px] flex flex-col gap-2.5'>
          <label
            htmlFor='email'
            className='font-bold text-xl leading-[30px] text-[#292929]'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            className='p-4 border rounded-[10px] focus:outline-none focus:border-[#0001ae] focus:border-[1.5px]'
            placeholder='Enter your email'
            aria-label='Email'
          />
        </div>

        <div className='w-[650px] mb-[180px] flex flex-col gap-2.5'>
          <label
            htmlFor='password'
            className='font-bold text-xl leading-[30px] text-[#292929]'
          >
            Password
          </label>
          <input
            type='password'
            id='password'
            className='p-4 border rounded-[10px] focus:outline-none focus:border-[#0001ae] focus:border-[1.5px]'
            placeholder='Enter your password'
            aria-label='Password'
          />
        </div>

        <p className='font-medium text-base text-[#ff0000] mb-[20px] h-[24px]'>
          Your email or password is incorrect. Please re-enter.
        </p>
        <button
          type='submit'
          className='w-[180px] rounded-[7px] h-[55px] bg-[#0001ae] text-[#ffffff] font-bold text-base'
          aria-label='Log in'
        >
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login
