import Image from "next/image"
import { BsCloudLightningFill, BsFacebook } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { SiYoutubemusic } from "react-icons/si"
import { FiInstagram, FiMail, FiSend } from "react-icons/fi"

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
        
      <div className="w-full h-2/5">
      {/*contain the intro*/}
      <div className="flex flex-col items-center gap-2 py-10">
        <h1 className="text-white text-4xl font-semibold">John Doe</h1>
        <p className="text-yellow-500 tracking-wide">Web Developer</p>
        
        <div className="flex justify-center gap-2 mt-2">
          <span className="icon"><FaGithub/></span><span className="icon"><AiFillTwitterCircle/></span><span className="icon"><BsCloudLightningFill/></span><span className="icon"><FaLinkedin/></span><span className="icon"><BsFacebook/></span><span className="icon"><SiYoutubemusic/></span><span className="icon"><FiInstagram/></span><span className="icon"><FiMail/></span><span className="icon"><FiSend/></span>        
        </div>

      </div>
      {/*buttons*/}
      <div></div>
      </div>
    </div>
  )
}

export default Left