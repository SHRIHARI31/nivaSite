import { lazy, useState } from 'react';
import Logo from '../src/assets/logo/eventLogo.jpg.jpg';
import './App.css';
import lks from './video/lakshya_event-vmake.mp4';
import Home from './components/Home';
import Events from './components/Events';
import Rules from './components/Rules';
import clgLogo from './assets/images/clgimg.jpeg';
import About from './components/About';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="event-app w-full relative">
      <nav className="sticky top-0 z-50 w-full bg-white px-4 py-4 flex items-center justify-around md:justify-between">
        <div className="flex items-center ">
          <img src={clgLogo} alt="" className="w-16 h-16 mr-4 md:w-20 md:h-20" />
          <div><h3 className='text-2xl md:text-5xl font-apexFont'>APEX'<span className=' text-apexGold'>25</span></h3>
            <span className='font-poppins capitalize bg-apexGold text-white   rounded-lg p-1 text-[10px]'>leading the way</span></div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleNav} className="text-3xl">&#9776;</button>
        </div>
        <ul className={`flex navigations  md:flex-row  text-2xl capitalize tracking-wide md:text-4xl  flex-col md:relative md:items-center md:justify-center font-apexFont md:gap-4  md:font-bold text-apexGold md:flex ${isNavOpen ? 'flex' : 'hidden'} absolute top-full left-0 w-full md:w-fit bg-white p-4`}>
          <li className=' hover:scale-105 transition-all'><a href="#home">home</a></li>
          <li className=' hover:scale-105 transition-all'><a href="#events">events</a></li>
          <li className=' hover:scale-105 transition-all'><a href="#rules">rules</a></li>
          <li className=' hover:scale-105 transition-all'><a href="#about">about</a></li>
        </ul>
      </nav>
      <div className='video-box'>
      <span id='home'></span>
        <video className='w-full' autoPlay muted loop>
          <source onLoad={lazy} src={lks} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <section className='px-5'>
      
        <Home />
        <span id='events'></span>
        <Events />
        <span id='rules'></span>
        <Rules />
        <span id='about'></span>
        <About />
      </section>
      <section className="bg-black text-white footer">
        <p className='py-5 text-center font-poppins'>NIVAS@all rights reserved</p>
      </section>
    </div>
  );
}

export default App;