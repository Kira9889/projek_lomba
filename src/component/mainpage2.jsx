import React from 'react'
import card1 from '../assets/maincard2.png'
import card2 from '../assets/Maincard3.png'
const mainpage2 = () => {
  return (
    <section className='relative  min-h-screen md:flex-row'>
    <div className='justify-center items-center text-center'>
    <div className='text-center justify-center md:text-start font-Poppins font-semibold text-[24px]'>
        <ul className='text-center justify-center flex flex-col pt-[100px]'>
        <li className='text-[#2F327D] text-[30px]'>Kenapa Pilih <span className='text-[#FF8551] text-[30px] '>Cirra?</span></li>
        <li className='text-[20px] text-[#696984] pt-[15px]'>Platform pembelajaran kolaboratif dengan</li>
        <li className='text-[20px] text-[#696984]'>komunitas interaktif</li>
        </ul>
    </div>
    <div className='flex items-center justify-center text-center md:flex-row flex-col pt-[50px] gap-[30px]'>
    <div className='flex flex-col justify-center items-center text-center w-[288.06px] h-[275.26px]'>
        <img src={card1} alt="" className='w-[94px] h-[94px]'/>
        <div>
        <ul className='text-center justify-center '>
            <li className='text-[#2F327D] font-bold text-[20px]'>Personalized</li>
            <li className='text-[#FF8551] font-bold text-[20px]'>Learning</li>
            <li className='text-[13px] text-[#696984] pt-[3px]'>Cirra menyesuaikan pengalaman belajar biar setiap orang bisa berkembang dengan ritme terbaiknya.</li>
        </ul>
        </div>
    </div>
    <div className='flex flex-col justify-center items-center text-center w-[288.06px] h-[275.26px]'>
        <img src={card2} alt="" className='w-[94px] h-[94px]'/>
        <ul className='text-center justify-center w-[200px]'>
            <li className='text-[#2F327D] font-bold text-[20px]'>Interactive</li>
            <li className='text-[#FF8551] font-bold text-[20px]'>Community</li>
            <li className='text-[13px] text-[#696984] pt-[7px]'>Bangun relasi, diskusi bermakna, dan saling mendukung diantara pelajar di seluruh Indonesia.</li>
        </ul>
    </div>
    <div className='flex flex-col justify-center items-center text-center w-[288.06px] h-[275.26px]'>
        <img src={card1} alt="" className='w-[94px] h-[94px]'/>
        <ul className='text-center justify-center w-[250px]'>
            <li className='text-[#2F327D] font-bold text-[20px]'>Personalized</li>
            <li className='text-[#FF8551] font-bold text-[20px]'>Learning</li>
            <li className='text-[13px] text-[#696984] pt-[7px]'>Gunakan fitur penjadwalan, grup kecil, progress tracker, dan open-source materi belajar untuk hasil yang nyata.</li>
        </ul>
    </div>
    </div>
    </div>  
    </section>
  )
}

export default mainpage2
