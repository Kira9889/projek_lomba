import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Homepage from './component/homepage'
import Mainpage1 from './component/mainpage1'

function App() {
  return (
    <>
      <div classname ='webp responsive'>
        <Navbar />
        <Homepage />
        <Mainpage1 />

       </div>
    </>
  )
}

export default App
