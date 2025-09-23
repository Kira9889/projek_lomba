import React from 'react'
import foto1 from '../assets/burung.png'
const mainpage1 = () => {
  return (
    <section className='relative min-h-screen'>
    <div className='gap-0.5 flex'>
      <div className=''>
        <ul><li>Apa<span>itu Cirra?</span></li></ul>
        <ul><li><span className=''>CIrra membantu pelajar menemukan cara belajarmu. Dari diskusi interaktif, manajemen tugas, hingga kolaborasi komunitas - semua dirancang agar belajar lebih fokus, produktif, dan penuh semangat.</span></li></ul>
      </div>
      <div>
    <img src={foto1} alt="" />
      </div>
    </div>
    </section>
  )
}

export default mainpage1
