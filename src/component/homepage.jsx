import React from 'react'
import logo1 from '../assets/logo-Secondary.png'
import card from '../assets/card2.png'
import card2 from '../assets/Group-1.png'
import card3 from '../assets/Card.png'
import card4 from '../assets/Group-2.png'
import '../app.css'
const homepage = () => {
  return (
  <section className='relative min-h-screen flex flex-col'>
    <div className='items-center gap-1 text-center justify-center pt-[110px] flex-col font-Poppins font-semibold leading-[30px] '>
      <img src={logo1} alt="" className='mx-auto'/>
      <ul>
      <li class='font-bold text-[36px] text-[#4475B7] '>Belajar Bersama, Tumbuh Bersama.</li>
      <li className='font-bold text-[36px] text-[#5D5D5D] pt-[25px] '>Belajar lebih terarah bersama komunitas</li>
      <li className='font-bold text-[36px] text-[#5D5D5D] pt-[25px] '>dan alat yang mempermudahmu.</li>
      <li className='text-[16px] text-[#7A7A7A] pt-[15px] '>100+ grup belajar aktif, siap untuk kamu ikuti hari ini.</li>
      </ul>
      <div className='flex gap-5 justify-center'>
      <div className='pt-[30px]'><a href="" className='text-[12px] font-bold font-Poppins bg-[#FF8551] w-[98px] h-[30px] pt-[6px] pb-[6px] pl-[15px] pr-[15px] rounded-[20px] text-white'>Get Started</a></div>
      <div className='pt-[30px]'><a href="" className='text-[12px] font-bold font-Poppins bg-[#7A7A7A] w-[98px] h-[30px] pt-[6px] pb-[6px] pl-[15px] pr-[15px] rounded-[20px] text-white'>Learn More</a></div>
      </div>
      <div className='absolute left-[70px] top-[380px] '><img src={card} alt="" /></div>
    </div>
    <div className='left-[200px] top-[90px] absolute'><img src={card2} alt="" /></div>
    <div className='absolute right-[10px] top-[110px]'><img src={card3} alt="" /></div>
    <div className='absolute right-[220px] top-[380px]'><img src={card4} alt="" /></div>
    </section>
  )
}

export default homepage
