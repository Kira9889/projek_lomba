import React from 'react'
import logo from "../assets/logo.png"
import '../app.css'
const navbar = () => {
  return (
    <section className='relative'>
      <nav className=" flex justify-around display-block top-0 left-0 w-full right-0 ">
        <div className="flex items-center z-10 pt[2-px] ">
          <img src={logo} alt="Logo" className="w-[82px] h-[57px] " />
      </div>
      <div className='ml-[50px]'>
        <ul className="flex justify-center items-center gap-15 pt-9 z-10 text-[15px] font-Poppins pl-[100px] pr-[200px]">
            <li><a href="">Discover</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Support</a></li>
        </ul>
        </div>
         <div className="pt-6 z-10 "><a href="" className='text-[12px] font-bold font-Poppins bg-[#FF8551] w-[98px] h-[30px] pt-[6px] pb-[6px] pl-[15px] pr-[15px] rounded-[20px] text-white'>Get Started</a></div>
      </nav>
      <div className="">
        </div>
      </section>
  )
}

export default navbar