import { useState } from 'react'
import Logo from '../src/assets/logo/eventLogo.jpg.jpg'
import './App.css'
import lks from './video/lakshya_event-vmake.mp4'
import Home from './components/Home'
import Events from './components/Events'


function App() {


  return (
    <>
      <div className='event-app w-full relative '>
       
        <nav className=' flex list-none justify-around w-full flex-wrap  fixed top-0 z-50  mb-2    bg-white '>
          <div className="img-holder  flex justify-center py-2  w-[50%]">
            <img src={Logo} alt="" className=' w-[300px]' />
          </div>
          <div className="flex navigation-div flex-wrap  w-[50%]  capitalize  tracking-wider  text-3xl font-bold items-center justify-around   font-apexFont text-apexGold ">
            <li className=''>home</li>
            <li>events</li>
            <li>rules</li>
            <li>about</li>
          </div>
        </nav>
        <div className='video-box    '>
          <video className='w-full' autoPlay muted loop>
            <source src={lks} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <section className='px-5 '>
          <Home />
          <Events/>
        </section>
      </div>
    </>
  )
}

export default App
