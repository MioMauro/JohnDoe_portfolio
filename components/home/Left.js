import Image from "next/image"

const Left = () => {
  return (
    <div className="w-5/12 h-full bg-gray-900 rounded-2xl">

      <div className='w-full h-3/5 relative bg-gray-900 rounded-2xl'>
        <Image className="rounded-2xl"
        src="/work/greenMe.png"
        fill
        style={{objectFit: "cover",}}
        priority
        alt="picture profile"
        />
      </div>
      
      <div className="w-full h-2/5 bg-red-200">

      </div>
    </div>
  )
}

export default Left