import React from 'react';
import banner from "../../../assets/banner.png"

const Banner = () => {
    return (
        <div className='bg-white px-10' data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 py-10 '>
                <div className='py-20'>
                    <h1 className='text-lg lg:text-2xl xl:text-3xl md:text-xl font-semibold'>Your Ultimate Task Management <br></br> Solution</h1>
                    <p className='py-3'>Effortlessly manage tasks, enhance collaboration, and boost productivity with our intuitive TaskFlow system—your key to project success!</p>
                    <button className='py-2 px-10  bg-green-800 text-white rounded-lg mt-5 '>Let’s Explore</button>
                </div>
                <div>
                    <img src={banner} className='w-full h-96'></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;