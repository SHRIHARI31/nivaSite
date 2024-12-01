import React from 'react';
import './home.css';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="relative mt-20">
            <section className="relative w-full">
                <img
                    src="https://www.svgrepo.com/show/285729/award-champion.svg"
                    alt=""
                    className="w-[100px] md:w-[200px] z-[-1] left-1/2 -translate-x-1/2 absolute"
                />
            </section>
            <section className="py-20 backdrop-blur-[1px] z-[1]">
                <div className="flex justify-center">
                    <div className="star-div flex pr-5">
                        <img
                            src="https://www.svgrepo.com/show/315891/star-gold-orange.svg"
                            className="w-[20px] md:w-[30px]"
                            alt=""
                        />
                        <img
                            src="https://www.svgrepo.com/show/315891/star-gold-orange.svg"
                            className="w-[20px] md:w-[30px]"
                            alt=""
                        />
                        <img
                            src="https://www.svgrepo.com/show/315891/star-gold-orange.svg"
                            className="w-[20px] md:w-[30px]"
                            alt=""
                        />
                    </div>
                    <span className="text-center font-apexFont text-3xl md:text-6xl">APEX'</span>
                    <span className="font-apexFont md:text-6xl text-3xl text-apexGold">25</span>
                    <div className="star-div flex pl-5">
                        <img
                            src="https://www.svgrepo.com/show/315891/star-gold-orange.svg"
                            className="w-[20px] md:w-[30px]"
                            alt=""
                        />
                        <img
                            src="https://www.svgrepo.com/show/315891/star-gold-orange.svg"
                            className="w-[20px] md:w-[30px]"
                            alt=""
                        />
                        <img
                            src="https://www.svgrepo.com/show/315891/star-gold-orange.svg"
                            className="w-[20px] md:w-[30px]"
                            alt=""
                        />
                    </div>
                </div>
                <p className="text-center text-lg font-poppins">Leading the way!</p>
            </section>
            <div className="context-div flex flex-col md:flex-row  md:justify-around md:items-center  gap-10 flex-wrap">


                <div className="  text-center md:h-[200px]  md:w-[300px] h-fit ">
                    <div className=" text-2xl  md:text-3xl  uppercase text-center font-apexFont">OUR VISION</div>
                    <div className="  text-lg  text-center font-poppins ">To offer world-class job-oriented courses with an ethical focus, for the benefit of all stakeholders.</div>
                </div>


                <div className="  text-center  md:h-[200px] md:w-[300px] h-fit  ">
                    <div className="  md:mt-0   text-2xl md:text-3xl uppercase  font-apexFont">Our Mission</div>
                    <div className=' text-center text-lg  font-poppins'>
                        We commit ourselves to impart knowledge, skill and attitude to the students, to inculcate in them, a sense of discipline, with moral and ethical values, and to make them good citizens of India.
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Home;
