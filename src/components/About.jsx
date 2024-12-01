import React from 'react'
import './events.css'
const About = () => {
    return (
        <div className='my-20 px-1 md:px-10 py-5 relative '>
            <h4 className='text-4xl text-center py-5 font-apexFont'>About Lakshya</h4>
             <img src="https://www.svgrepo.com/show/382151/education-graduation-learning-school-study.svg" alt="" className='clgLogo md:absolute w-[100px] top-0  mx-auto ' />
            <div className=' text-lg font-poppins  justify-center flex md:justify-start flex-col gap-2 '>
                <p className=''>It is dedicated to fostering excellence in operations and quality management.</p>
                <p>Inspired by the principles of W. Edwards Deming, this forum equips members with the tools
                    and techniques necessary to enhance operational efficiency, process optimization, and
                    continuous improvement.</p>
                <p> Participants gain a deeper understanding of quality consciousness,
                    enabling them to implement best practices in production, logistics, and supply chain
                    management.</p>
            </div>

        
        </div>
    )
}

export default About