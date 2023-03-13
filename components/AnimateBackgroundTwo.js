import React from 'react'

const AnimateBackgroundTwo = () => {
  return (
    <div className='w-[500px] h-[500px] rounded-full absolute bottom-10 right-0 '>
      <div className='relative w-96 h-96 top-0 -left-10 animate-reverse-spin'>
        <div className='absolute top-0 blur-xl w-32 h-32 rounded-full bg-blue-300'></div>
        <div className='absolute w-24 h-24 rounded bg-green-500 -bottom-10 left-16 blur-xl'></div>
        <div className='absolute top-32 -right-10 blur-2xl w-28 h-28 rounded-full bg-blue-300'></div>
      </div>
    </div>
  )
}

export default AnimateBackgroundTwo