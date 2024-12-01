import React from 'react'
import clgLogo from './images/clgLoho.png'
import './events.css'
const Rules = () => {
    return (
        <div className=' my-20 oex-1 md:px-10 py-5 relative z-[1]'>
            <img src={clgLogo} className='  m-auto md   md:absolute clgLogo w-[400px] right-3  z-[2]  bg-blend-no  bottom-[8rem]' alt="" />
            <div className=" w-full h-full bg-blue-300/50 z-[-1]  rounded-md absolute border-black border-2 left-0 top-0 "></div>
            <h3 className=' text-3xl font-apexFont text-center'>Rules</h3>
            <p className='text-center font-poppins  text-xl md:text-3xl'>General Rules for All Events</p>
            <section className="rules">
                <div className="section-one flex flex-col relative z-10 justify-center gap-10 p-5 md:p-10">
                    <p className='text-xl'><span className='font-bold'>Eligibility: </span>Participants must be students enrolled in a recognized college or university.</p>
                    <p className='text-xl'><span className='font-bold'>Conduct: </span>Respectful behaviour is expected. Offensive language or actions will lead to disqualification.</p>
                    <p className='text-xl'><span className='font-bold'>Registration: </span>All participants must register before the event begins.</p>
                    <p className='text-xl'><span className='font-bold'>Decision of Judges: </span>The decision of the judges will be final.</p>
                    <p className='text-xl'><span className='font-bold'>Time Management: </span>Strict adherence to time limits is mandatory.</p>
                    <p className='text-xl'><span className='font-bold'>Permissions: </span>All participants must seek prior approval for props or <br /> materials that may not be part of the general event guidelines.</p>
                    <p className='text-xl'><span className='font-bold'>Photography/Videography: </span>Events may be recorded or photographed for promotional purposes.</p>
                </div>
            </section>
        </div>
    )
}

export default Rules