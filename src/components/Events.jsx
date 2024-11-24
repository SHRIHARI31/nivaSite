import React from 'react'
import './events.css'
import hackathon from './images/hackathon.jpg'
import bestmanager from './images/bestmanager.jpg'
import { useState } from 'react'
const Events = () => {
    const [flipped_one, isFlippedOne] = useState(false);
    const handleCLick = () => {
        isFlippedOne(!flipped_one);

    }

    const [flipped_two, isFlippedTwo] = useState(false);
    const handleCLickTwo = () => {
        isFlippedTwo(!flipped_two);
    }
    const [flipped_three, isFlippedThree] = useState(false);
    const handleCLickTHree =()=>{
        isFlippedThree(!flipped_three);
}
    return (
        <div className='event-section mt-40 px-10 '>
            <h3 className='text-center text-5xl font-apexFont'>Events</h3>
            <div className="cards flex gap-32 flex-wrap py-20 ">

                <div className="hackathon-card w-[300px] relative h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side shadow-md shadow-black relative ${flipped_one ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className='text-3xl font-apexFont text-center pt-2 pb-3'>Hackathon</p>
                        <img src={hackathon} alt="" />
                    </div>
                    <div className={`back-side shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_one ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='text-3xl font-apexFont text-center pt-2'>Hackathon details</p>

                        <div className='details font-poppins  text-sm'>
                            <p><span className=' font-bold'>Eligibility :</span> Open to all students/employees (Specify any department if restricted).</p>
                            <p><span className='font-bold'>Team Size :</span>2-5 members per team.</p>
                            <p>Time Limit 2  hours (or specify your duration)</p>
                            <p><span className="font-bold">Judging Criteria:</span> Innovation, feasibility, coding standards, and final presentation</p>
                            <p><span className="font-bold">Restrictions:</span> No pre-built or pre-existing code allowed; only original solutions</p>
                            <p><span className="font-bold">Submission:</span> Teams must submit their code and presentation within the allocated time</p>
                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#7CFC00]`} type='button' onClick={handleCLick}>{flipped_one ? 'back' : 'details'}</button>
                </div>


                <div className="bestmanager-card w-[300px] relative h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side shadow-md shadow-black relative ${flipped_two ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className='text-3xl font-apexFont text-center pt-2 pb-3'>Best manager</p>
                        <img src={bestmanager} alt="" />
                    </div>
                    <div className={`back-side shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_two ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='text-3xl font-apexFont text-center pt-2'>Best manager details</p>

                        <div className='details font-poppins  text-sm'>
                            <p><span className=' font-bold'>Eligibility :</span> Open to all students/employees (Specify any department if restricted).</p>
                            <p><span className='font-bold'>Team Size :</span>2-5 members per team.</p>
                            <p>Time Limit 2  hours (or specify your duration)</p>
                            <p><span className="font-bold">Judging Criteria:</span> Innovation, feasibility, coding standards, and final presentation</p>
                            <p><span className="font-bold">Restrictions:</span> No pre-built or pre-existing code allowed; only original solutions</p>
                            <p><span className="font-bold">Submission:</span> Teams must submit their code and presentation within the allocated time</p>
                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#7CFC00]`} type='button' onClick={handleCLickTwo}>{flipped_one ? 'back' : 'details'}</button>
                </div>
            </div>
        </div>
    )
}

export default Events