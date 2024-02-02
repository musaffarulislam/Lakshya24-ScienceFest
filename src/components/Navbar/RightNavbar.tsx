import React from 'react'

const RightNavbar = () => {
  return (
    <div className='text-neon-green font-medium flex gap-2 sm:gap-4'>
        <div className='cursor-pointer hover:underline hover:opacity-85 transition-opacity'>Home</div>
        <div className='cursor-pointer hover:underline hover:opacity-85 transition-opacity'>Events</div>
        <div className='cursor-pointer hover:underline hover:opacity-85 transition-opacity'>Exhibition</div>
        <div className='cursor-pointer hover:underline hover:opacity-85 transition-opacity'>Registration</div>
    </div>
  )
}

export default RightNavbar