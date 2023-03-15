'use client'
import Image from "next/image"
import Link from "next/link"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { SiYoutubemusic } from "react-icons/si"
import { FiInstagram, FiMail, FiSend } from "react-icons/fi"



const Left = () => {
  const [text]=useTypewriter({
    words:["Web Developer", "Full Stack Developer", "UI Designer"],
    loop:true,
    typeSpeed:40,
    deleteSpeed:20,
    delaySpeed:2000,
  })
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
        
      <div className="w-full h-2/5">
      {/*contain the intro*/}
      <div className="flex flex-col items-center gap-2 py-10">
        <h1 className="text-white text-4xl font-semibold">John Doe</h1>
        <p className="text-yellow-500 tracking-wide">{text} <Cursor/></p>
        
        <div className="flex justify-center gap-2 mt-2">
          <span className="icon"><FaGithub/></span><span className="icon"><AiFillTwitterCircle/></span><span className="icon"><FaLinkedin/></span><span className="icon"><BsFacebook/></span><span className="icon"><SiYoutubemusic/></span><span className="icon"><FiInstagram/></span><span className="icon"><FiMail/></span>      
        </div>
      </div>

      <div className="flex flex-col h-14 items-center">
        <p className="text-sm uppercase mb-4">Send me a mail for collaborations</p>
        <button className="w-1/2 h-full flex justify-center  gap-2 border-[1px] text-sm tracking-wide uppercase hover:text-yellow-500 duration-300 p-2 rounded bg-gray-500">Contact Me<span className="mt-[2px]"><FiSend/></span></button>
      </div>

      </div>
    </div>
  )
}

export default Left