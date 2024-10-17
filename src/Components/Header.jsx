import { TypeAnimation } from "react-type-animation"
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { GITHUB, TWITTER, TELEGRAM, LINKEDIN } from '../config';

export const Header = () => {
  useEffect(() => {
    Aos.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750
    })
  }, [])

  return (
    <div> <div className="bg-gradient-to-r from-[#000428] to-[#004e92]" id="/">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between pt-32  gap-5">
        <div className="md:w-1/2 w-full flex justify-center items-center mx-auto">
          <img src='./malik.jpg' alt="" className="h-90 w-100 " />
        </div>

        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">

          <h1 className="md:text-4xl text-4xl font-extrabold  text-headingcolor leading-snug md:leading-[76px] text-white text-center uppercase">
            Sanawar <span className="text-black">Malik</span>
          </h1>
          <h1 className="text-[30px] text-center uppercase font-semibold leading-normal underline underline-offset-4 decoration-4 decoration-green-500 text-green-500 "><TypeAnimation sequence={['Software Engineer', 2000, 'Developer', 2000, 'Designer', 2000,]} speed={400} repeat={Infinity} /></h1>

          <div className="flex text-white mx-auto justify-center mt-8 items-center gap-5">
            <div className="flex gap-8 text-center rounded-full">
              <a href={GITHUB} className="bg-white text-green-500 hover:text-green-600 rounded-full  glow p-2">
                <AiFillGithub className="text-[28px]" />
              </a>
              <a href={LINKEDIN} className="bg-white text-green-500 hover:text-green-600 rounded-full glow p-2">
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a href={TELEGRAM} className="bg-white text-green-500 hover:text-green-600 rounded-full glow p-2">
                <FaTelegramPlane className="text-[28px]" />
              </a>
              <a href={TWITTER} className="bg-white text-green-500 hover:text-green-600 rounded-full glow p-2">
                <FiTwitter className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div >

  )
}
