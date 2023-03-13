'use client'

import Left from "./home/Left"

const Homepage = () => {
  return (
    <div className='w-[85%] h-[85%] text-white bg-transparent z-20 flex items-start justify-between'>
      
      <div className='w-16 h-96 bg-gray-900'></div>
      <div className='w-[94%] h-full bg-transparent flex items-center'>

        {/*left part start */}
        <Left/>

        {/*right part start */}
        <div className="w-8/12 h-[95%] bg-gray-900"></div>
      </div>

    </div>
  )
}

export default Homepage