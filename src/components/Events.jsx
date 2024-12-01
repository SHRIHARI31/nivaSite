import React from 'react'

import hackathon from './images/hackathon.jpg'
import bestmanager from './images/bestmanager.jpg'
import business from './images/businessProposal.webp'
import corporatewalk from './images/corporatewalk.webp'
import dance from './images/dance.jpg'
import singing from './images/singing.jpg'
import mime from './images/mime.webp'
import rangoli from './images/rangoli.jpg'
import photoGraphy from './images/photography.jpg'
import shortfilm from './images/shortfilm.jpg'
import Tressure from './images/tressure.png'
import Auction from './images/auction.jpg'
import { useState } from 'react'
import './events.css'
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
    const handleCLickTHree = () => {
        isFlippedThree(!flipped_three);
    }
    const [flipped_four, isFlippedFour] = useState(false);
    const handleClickFour = () => {
        isFlippedFour(!flipped_four);
    }
    const [flipped_five, isFlippedFive] = useState(false);
    const handleClickFive = () => {
        isFlippedFive(!flipped_five);
    }
    const [flipped_six, isFlippedSix] = useState(false);
    const handleClickSix = () => {
        isFlippedSix(!flipped_six);
    }
    const [flipped_seven, isFlippedSeven] = useState(false);
    const handleClickSeven = () => {
        isFlippedSeven(!flipped_seven);
    }
    const [flipped_eight, isFlippedEight] = useState(false);
    const handleClickEight = () => {
        isFlippedEight(!flipped_eight);
    }
    const [flipped_nine, isFlippedNine] = useState(false);
    const handleClickNine = () => {
        isFlippedNine(!flipped_nine);
    }
    const [flipped_ten, isFlippedTen] = useState(false);
    const handleClickTen = () => {
        isFlippedTen(!flipped_ten);
    }
    const [flipped_Eleven, isFlippedEleven] = useState(false);
    const handleClickEleven = () => {
        isFlippedEleven(!flipped_Eleven);
    }
    const [flipped_Twelve, isFlippedTwelve] = useState(false);
    const handleClickTwelve = () => {
        isFlippedTwelve(!flipped_Twelve);
    }
    return (
        <div className='event-section mt-40 md:px-10  px-6 '>
            <h3 className='text-center text-5xl font-apexFont'>Events</h3>
            <div className="cards  justify-center flex gap-32 flex-wrap py-20 ">

                <div className="hackathon-card w-full h-[300px]    md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side shadow-md shadow-black relative ${flipped_one ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className='text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3'>Hackathon</p>
                        <img src={hackathon} alt="" className='  h-[200px]  w-full sm:w-[400px] mx-auto ' />
                    </div>
                    <div className={`back-side overflow-y-scroll   shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_one ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='text-2xl md:text-3xl font-apexFont text-center pt-2'>Hackathon details</p>

                        <div className='details  p-1 flex flex-col gap-1 font-poppins  text-sm'>
                            <p><span className=' font-bold'>Eligibility :</span> Open to all students/employees (Specify any department if restricted).</p>
                            <p><span className='font-bold'>Team Size :</span>2-5 members per team.</p>
                            <p>Time Limit 2  hours (or specify your duration)</p>
                            <p><span className="font-bold">Judging Criteria:</span> Innovation, feasibility, coding standards, and final presentation</p>
                            <p><span className="font-bold">Restrictions:</span> No pre-built or pre-existing code allowed; only original solutions</p>
                            <p><span className="font-bold">Submission:</span> Teams must submit their code and presentation within the allocated time</p>
                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#FFD700]`} type='button' onClick={handleCLick}>{flipped_one ? 'back' : 'details'}</button>
                </div>


                <div className="bestmanager-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side shadow-md shadow-black relative ${flipped_two ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className='text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3'>Best manager</p>
                        <img src={bestmanager} alt="" className='  h-[200px]  w-full sm:w-[400px] mx-auto ' />
                    </div>
                    <div className={`back-side overflow-y-scroll   shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_two ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='md:text-3xl text-2xl font-apexFont text-center pt-2'>Best manager details</p>

                        <div className='details  p-1 flex flex-col gap-1 font-poppins  text-sm'>
                            <p><span className=' font-bold'>Eligibility :</span> Open to all students/employees (Specify any department if restricted).</p>
                            <p><span className='font-bold'>Team Size :</span>2-5 members per team.</p>
                            <p>Time Limit 2  hours (or specify your duration)</p>
                            <p><span className="font-bold">Judging Criteria:</span> Innovation, feasibility, coding standards, and final presentation</p>
                            <p><span className="font-bold">Restrictions:</span> No pre-built or pre-existing code allowed; only original solutions</p>
                            <p><span className="font-bold">Submission:</span> Teams must submit their code and presentation within the allocated time</p>
                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#FFD700]`} type='button' onClick={handleCLickTwo}>{flipped_two ? 'back' : 'details'}</button>
                </div>

                <div className="hackathon-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side shadow-md shadow-black relative ${flipped_three ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className='text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3'>Business Proposal</p>
                        <img src={business} alt=""  className='  h-[200px]  w-full sm:w-[400px] mx-auto '/>
                    </div>
                    <div className={`back-side   overflow-y-scroll  shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_three ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='text-2xl md:text-3xl font-apexFont text-center pt-2'>Business Proposal details</p>

                        <div className='details p-1 flex flex-col gap-[0.5px] font-poppins  text-[13px]'>
                            <p><span className=' font-bold'>Eligibility :</span>Open to individuals or teams (specify size if needed)</p>
                            <p><span className='font-bold'>Presentation Time:</span>5-10 minutes.</p>
                            <p><span className="font-bold">Proposal Requirements:</span>Teams must present a detailed business plan including financial projections, market analysis, and growth strategy.</p>
                            <p><span className="font-bold">Judging Criteria:</span>Originality, feasibility, market understanding, and clarity of presentation.</p>
                            <p><span className="font-bold">Submission:</span>Business proposal document and presentation must be submitted by the deadline</p>
                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#FFD700]`} type='button' onClick={handleCLickTHree}>{flipped_three ? 'back' : 'details'}</button>
                </div>

                <div className="hackathon-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side shadow-md shadow-black relative ${flipped_four ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className='md:text-3xl  text-2xl font-apexFont text-center pt-2 pb-3'>Corporate Walk</p>
                        <img src={corporatewalk} alt="" className='  h-[200px]  w-full sm:w-[400px] mx-auto ' />
                    </div>
                    <div className={`back-side overflow-y-scroll   shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_four ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='md:text-3xl text-2xl font-apexFont text-center pt-2'>Corporate Walk details</p>

                        <div className='details p-1 flex flex-col gap-2 font-poppins  pt-4  text-sm'>
                            <p><span className=' font-bold'>Eligibility :</span>Open to all individuals or teams.</p>
                            <p><span className='font-bold'>Attire:</span>Formal business attire is mandatory.</p>
                            <p><span className="font-bold">Walk Style:</span>Participants must walk in a professional manner.
                                Judging Criteria: Attire, confidence, professionalism, and presentation.
                                Disqualification: Any inappropriate behavior or attire can result in disqualification.</p>
                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#FFD700]`} type='button' onClick={handleClickFour}>{flipped_four ? 'back' : 'details'}</button>
                </div>

                <div className="hackathon-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side shadow-md shadow-black relative ${flipped_five ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className='text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3'>Dance</p>
                        <img src={dance} alt=""   className='  h-[200px]  w-full sm:w-[400px] mx-auto '   />
                 </div>
                    <div className={`back-side overflow-y-scroll   shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_five ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='text-2xl md:text-3xl font-apexFont text-center pt-2'>Dance details</p>

                        <div className='details p-1 flex flex-col gap-1 font-poppins  text-sm'>
                            <p><span className=' font-bold'>Eligibility: </span>Solo or group entries.</p>
                            <p><span className='font-bold'>Time limit : </span>3-4 minutes.</p>

                            <p><span className="font-bold">Categories: </span>Classical, contemporary, hip-hop, or folk.</p>
                            <p><span className="font-bold">Judging Criteria: </span>Choreography, timing, costume, and energy.</p>
                            <p><span className="font-bold">Music Submission: </span>Participants must submit their music track beforehand.</p>
                            <p><span className="font-bold">Disqualification: </span>Obscene gestures or inappropriate costumes will lead to disqualification.</p>
                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#FFD700]`} type='button' onClick={handleClickFive}>{flipped_five ? 'back' : 'details'}</button>
                </div>
                <div className="hackathon-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side shadow-md shadow-black relative ${flipped_six ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className='md:text-3xl text-2xl font-apexFont text-center pt-2 pb-3'>Singing</p>
                        <img src={singing} alt=""  className='  h-[200px]  w-full sm:w-[400px] mx-auto '/>
                    </div>
                    <div className={`back-side overflow-y-scroll   shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_six ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='text-2xl md:text-3xl font-apexFont text-center pt-2'>Singing details</p>

                        <div className='details p-1  flex flex-col gap-1 font-poppins  text-sm'>
                            <p><span className=' font-bold'>Eligibility: </span>Team event (2-5 members).</p>
                            <p><span className='font-bold'>Time limit : </span>3-4 minutes.</p>

                            <p><span className="font-bold">Categories: </span>Classical,Bollywood,Western,or folk</p>
                            <p><span className="font-bold">Judging Criteria: </span>Voice clarity, pitch, rhythm, and song selection.</p>
                            <p><span className="font-bold">Music Submission: </span>Participants may use a karaoke track or acoustic instruments.</p>
                            <p><span className="font-bold">Disqualification: </span>Explicit lyrics or disrespectful behavior is grounds for disqualification.</p>

                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#FFD700]`} type='button' onClick={handleClickSix}>{flipped_six ? 'back' : 'details'}</button>
                </div>
                <div className="hackathon-card  md:w-[300px]  h-[300px] w-full relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side shadow-md shadow-black relative ${flipped_seven ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className= ' text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3'>Mime</p>
                        <img src={mime} alt="" className='  h-[200px]  w-full sm:w-[400px] mx-auto ' />
                </div>
                    <div className={`back-side  overflow-y-scroll   shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_seven ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='text-2xl md:text-3xl font-apexFont text-center pt-2'>Mime details</p>

                        <div className='details flex p-1 flex-col gap-1 font-poppins  text-sm'>
                            <p><span className=' font-bold'>Eligibility: </span>Solo or duet entries.</p>
                            <p><span className='font-bold'>Time limit : </span>5-7 minutes.</p>
                            <p><span className="font-bold">Theme: </span>Pre-defined themes or open theme as per the event's discretion.</p>
                            <p><span className="font-bold">Judging Criteria: </span>Expressiveness, clarity, creativity, and audience engagement.</p>
                            <p><span className="font-bold"> Restrictions: </span>No props or verbal communication is allowed.</p>
                            <p><span className="font-bold">Disqualification: </span>Breaking the silence rule leads to disqualification.</p>
                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#FFD700]`} type='button' onClick={handleClickSeven}>{flipped_seven ? 'back' : 'details'}</button>
                </div>
                <div className="hackathon-card w-full h-[300px] md:w-[300px] relative md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side shadow-md shadow-black relative ${flipped_eight ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className='md:text-3xl text-2xl font-apexFont text-center pt-2 pb-3'>Rangoli</p>
                        <img src={rangoli} alt=""  className='  h-[200px]  w-full sm:w-[400px] mx-auto '/>
                    </div>
                    <div className={`back-side overflow-y-scroll   shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_eight ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='md:text-3xl text-2xl font-apexFont text-center pt-2'>Rangoli details</p>

                        <div className='details p-1  flex flex-col gap-1 font-poppins  text-sm'>
                            <p><span className=' font-bold'>Eligibility: </span>Individual or teams of 2-3 members.</p>
                            <p><span className='font-bold'>Time limit : </span>Time Limit: 1 hours.</p>
                            <p><span className="font-bold">Theme: </span>Only organic colors and flowers allowed (no stencils or ready-made rangoli).</p>
                            <p><span className="font-bold">Judging Criteria: </span>Creativity, symmetry, neatness, and theme representation.</p>
                            <p><span className="font-bold">Clean-Up:  </span>Participants are responsible for cleaning up their area after completion.</p>
                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#FFD700]`} type='button' onClick={handleClickEight}>{flipped_eight ? 'back' : 'details'}</button>
                </div>
                <div className="hackathon-card w-full md:w-[300px] relative h-[300px] md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side shadow-md shadow-black relative ${flipped_nine ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className='md:text-3xl text-2xl font-apexFont text-center pt-2 pb-3'>Photography</p>
                        <img src={photoGraphy} alt="" className='  h-[200px]  w-full sm:w-[400px] mx-auto '/>
                    </div>
                    <div className={`back-side overflow-y-scroll   shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_nine ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='md:text-3xl text-2xl font-apexFont text-center pt-2'>Photography details</p>
                        <div className='details p-1 flex flex-col gap-2 font-poppins  text-sm'>
                            <p><span className=' font-bold'>Eligibility: </span>Individual event.</p>
                            <p><span className='font-bold'>Time limit: </span>Specified timeframe (e.g., within 3 hours).</p>
                            <p><span className="font-bold">Submission Format: </span>Digital format (JPEG/PNG) without any heavy editing.</p>
                            <p><span className="font-bold">Judging Criteria: </span>Creativity, originality, composition, and adherence to the theme.</p>
                            <p><span className="font-bold">Restrictions: </span>No plagiarized content. Only original photos are allowed.</p>
                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#FFD700]`} type='button' onClick={handleClickNine}>{flipped_nine ? 'back' : 'details'}</button>
                </div>
                <div className="hackathon-card w-full relative h-[300px] md:w-[300px] md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side shadow-md shadow-black relative ${flipped_ten ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className=' text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3'>ShortFilm</p>
                        <img src={shortfilm} alt="" className='  h-[200px]  w-full sm:w-[400px] mx-auto ' />
                    </div>
                    <div className={`back-side overflow-y-scroll   shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_ten ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='md:text-3xl text-2xl font-apexFont text-center pt-2'>ShortFilm details</p>

                        <div className='details p-1 flex flex-col gap-1 font-poppins  text-sm'>
                            <p><span className=' font-bold'>Eligibility: </span>Team event (2-5 members).</p>
                            <p><span className='font-bold'>Time limit: </span>15 minutes.</p>
                            <p> <span className='font-bold'>Theme: </span>Given by the organizers or chosen from a list of themes.</p>
                            <p><span className="font-bold">Submission Format: </span>High-quality video format (e.g., MP4).</p>
                            <p><span className="font-bold">Judging Criteria: </span>Storyline, creativity, cinematography, and overall impact.</p>
                            <p><span className="font-bold">Restrictions: </span>No offensive content. The film must be original work..</p>
                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#FFD700]`} type='button' onClick={handleClickTen}>{flipped_ten ? 'back' : 'details'}</button>
                </div>

                <div className="hackathon-card  md:w-[300px] relative w-full h-[300px] md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side  h-full shadow-md shadow-black relative ${flipped_Eleven ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className='text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3'>Tressure Hunt</p>
                        <img src={Tressure} alt=""  className='  h-[200px]  w-full sm:w-[400px] mx-auto '/>
                    </div>
                    <div className={`back-side overflow-y-scroll   shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_Eleven ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='text-2xl md:text-3xl font-apexFont text-center pt-2'>Tressure Hunt details</p>
                        <div className='details p-1 flex flex-col gap-2 font-poppins  text-sm'>
                            <p><span className=' font-bold'>Eligibility: </span>Teams of 3-5 members.</p>
                            <p><span className='font-bold'>Time limit: </span>Based on the complexity and number of clues.</p>
                            <p> <span className='font-bold'>Rules: </span>Follow the clues provided. No tampering with clues or sabotaging other teams.</p>
                            <p><span className="font-bold">Judging Criteria: </span>Completion time and teamwork.</p>
                            <p><span className="font-bold">Disqualification: </span>Breaking rules, sharing clues, or disrupting other teams.</p>
                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#FFD700]`} type='button' onClick={handleClickEleven}>{flipped_Eleven ? 'back' : 'details'}</button>
                </div>


                <div className="hackathon-card md:w-[300px] relative w-full h-[300px] md:h-[320px] rounded-md shadow-black shadow-md bg-apexGold">

                    <div className={`front-side  h-full    shadow-md shadow-black relative ${flipped_Twelve ? 'z-[-1] rotate-6' : 'z-[3]'}  bg-apexGold rounded-md w-full h-full`}>
                        <p className='text-2xl md:text-3xl font-apexFont text-center pt-2 pb-3'>IPL Auction</p>
                        <img src={Auction} alt="" c className='  h-[200px]  w-full sm:w-[400px] mx-auto 'lassName='  h-[200px]  w-full sm:w-[400px] mx-auto '   />
                    </div>
                    <div className={`back-side overflow-y-scroll   shadow-black shadow-md absolute top-0 rounded-md bg-apexGold  ${flipped_Twelve ? ' z-[3]' : 'z-[-1] -rotate-6'}  w-full h-full`}>
                        <p className='text-2xl md:text-2xl font-apexFont text-center pt-2'>IPL Auction details</p>

                        <div className='details p-1 flex flex-col gap-2 font-poppins  text-sm'>
                            <p><span className=' font-bold'>Eligibility: </span>Teams of 2-4 members.</p>
                            <p><span className='font-bold'>Budget: </span>Fixed budget for each team to spend on players.</p>
                            <p> <span className='font-bold'>Players: </span>A set list of players with points/costs.</p>
                            <p><span className="font-bold">Judging Criteria: </span>Team strength based on points and strategy.</p>
                            <p><span className="font-bold">Restrictions: </span>No additional budget; adhere strictly to auction rules.</p>
                        </div>
                    </div>
                    <button className={`absolute shadow-black right-0 shadow-md font-apexFont capitalize bottom-1 text-center z-[3]  rounded-md hover:scale-105  px-4   bg-[#FFD700]`} type='button' onClick={handleClickTwelve}>{flipped_Twelve ? 'back' : 'details'}</button>
                </div>

            </div>
        </div>
    )
}

export default Events