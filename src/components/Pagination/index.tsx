import React from 'react'
import { Button, IconButton } from '@material-tailwind/react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export function Pagination() {
  const [active, setActive] = React.useState(1)

  const getItemProps = (index: number) => {
    const isActive = active === index
    return {
      variant: isActive ? 'filled' : 'text',
      color: isActive ? 'black' : 'gray',
      className: `w-9 h-9 rounded-[7px] ${
        isActive ? 'bg-white text-black' : 'text-gray-600'
      } font-poppins text-base`,
      onClick: () => setActive(index)
    }
  }

  return (
    <div className='flex items-center gap-4'>
      <Button
        variant='text'
        className='flex items-center gap-2'
        onClick={() => setActive(Math.max(active - 1, 1))}
        disabled={active === 1}
      >
        <ArrowLeftIcon
          className={`h-4 w-4 ${active === 1 ? 'opacity-0' : ''}`}
        />
      </Button>
      <div className='flex items-center gap-2'>
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant='text'
        className='flex items-center gap-2'
        onClick={() => setActive(Math.min(active + 1, 5))}
        disabled={active === 5}
      >
        <ArrowRightIcon
          className={`h-4 w-4 ${active === 5 ? 'opacity-0' : ''}`}
        />
      </Button>
    </div>
  )
}
