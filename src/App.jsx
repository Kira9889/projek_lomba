import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Homepage from './component/homepage'
import Mainpage1 from './component/mainpage1'
import Mainpage2 from './component/mainpage2'
import Mainpage3 from './component/mainpage3'
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Homepage />
        <Mainpage1 />
        <Mainpage2/>
        <Mainpage3 />
       </div>
    </>
  )
}

export default App
