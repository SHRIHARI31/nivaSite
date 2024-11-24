import React from 'react'
import './home.css'
const Home = () => {
    return (
        <div className='relative mt-20'>
            <section className='  relative  w-full'>
                <img src="https://www.svgrepo.com/show/285729/award-champion.svg" alt="" className='w-[200px] z-[-1]   left-1/2 -translate-x-1/2  absolute ' />
            </section>
            <section className='  py-20 backdrop-blur-[1px]  z-[1]'>
                <div className=" flex  justify-center  ">
                    <div className='star-div flex pr-5'>
                        <img src="https://www.svgrepo.com/show/315891/star-gold-orange.svg" alt="" /><img src="https://www.svgrepo.com/show/315891/star-gold-orange.svg" alt="" /><img src="https://www.svgrepo.com/show/315891/star-gold-orange.svg" alt="" />
                    </div>
                    <span className='text-center font-apexFont   text-6xl'>APEX'</span>
                    <span className='font-apexFont text-6xl  text-apexGold'>25</span>
                    <div className='star-div flex pl-5'>
                        <img src="https://www.svgrepo.com/show/315891/star-gold-orange.svg" alt="" /><img src="https://www.svgrepo.com/show/315891/star-gold-orange.svg" alt="" /><img src="https://www.svgrepo.com/show/315891/star-gold-orange.svg" alt="" />
                    </div>
                </div>
                <p className='text-center text-lg font-poppins'>Leading the way!</p>
            </section>
            <div className="card-section flex flex-wrap m-4 justify-around w-full">
                <div className="card-div  flex flex-wrap  justify-around  w-full">

                    <div className="card-one relative ">
                        <div className="bg-card-one w-[300px] h-[300px]  z-[-1] absolute down-square -rotate-6 rounded-md  bg-black "></div>
                        <div className="bg-card-one w-[300px] h-[300px] z-[5]  center-square absolute rotate-10 rounded-md bg-[#b78727] "></div>
                        <div className="bg-card-one w-[300px] h-[300px] z-10 relative   rounded-md  p-5 bg-apexGold">
                            <p className=' font-apexFont  text-center capitalize text-3xl'>our mission</p>
                            <p className=' py-5 font-poppins'>To offer world-class job-oriented courses with an ethical focus, for the benefit of all stakeholders.</p>
                            <div className="flex justify-between w-full ">
                                <img src="https://www.svgrepo.com/show/207979/door-doorway.svg" className='w-[100px]' alt="" />
                                <img src="https://www.svgrepo.com/show/398620/window.svg" className='w-[100px]' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card-two relative ">
                        <div className="bg-card-one w-[300px] h-[300px] z-[-1] down-square  absolute -rotate-6 rounded-md bg-black "></div>
                        <div className="bg-card-one w-[300px] h-[300px]  z-[5] center-square absolute rotate-10 rounded-md bg-[#b78727] "></div>
                        <div className="bg-card-one w-[300px] h-[300px]  z-10 relative  rounded-md p-5  bg-apexGold">

                            <p className=' font-apexFont  text-black text-center capitalize text-3xl  '>our vision</p>
                            <p className='py-5  font-poppins'>A sense of discipline, with moral and ethical values, and to make them good citizens of India</p>
                            <div className="flex justify-between w-full">
                                <img src="https://www.svgrepo.com/show/207979/door-doorway.svg" className='w-[100px]' alt="" />
                                <img src="https://www.svgrepo.com/show/398620/window.svg" className='w-[100px]' alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home