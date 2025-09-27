import React from 'react'
import foto1 from '../assets/burung.png'
const mainpage1 = () => {
  return (
    <section className="relative flex flex-col md:flex-row">
      <div className='gap-20 flex flex-col md:flex-row items-center md:items-start md:justify-center w-full'>
      <div className="flex-col text-center px-5 md:text-start justify-center md:ml-[100px] md:mt-[150px] w-full md:w-[400px] font-Poppins font-semibold text-[24px] leading-[36px]">
        <ul className="flex flex-col">
          <li className="text-[#F48C06] text-[28px] md:text-[40px] lg:text-[48px]">
            Apa <span className="text-[#2F327D]">itu Cirra?</span>
          </li>
          <li className="text-[#696984] pt-[10px] text-[14px] md:text-[20px] lg:text-[18px]">
            Cirra membantu pelajar menemukan cara belajarmu. Dari diskusi interaktif, manajemen tugas, hingga kolaborasi komunitas - semua dirancang agar belajar lebih fokus, produktif, dan penuh semangat.
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-0">
        <img src={foto1} alt="" className="w-[492.09px] h-[603px]" />
      </div>
      </div>
    </section>
  )
}

export default mainpage1
