import React from 'react';
import { Typewriter } from 'react-simple-typewriter';


const Hero = () => {
    return (
        <div className='relative flex flex-col justify-center  w-auto h-screen text-center border-2 border-blue-600 rounded-lg shadow-lg p-8 m-6 overflow-hidden'>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-70"
            >
                <source src="src/assets/18069235-uhd_3840_2160_24fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Hero Content */}
            <p className='md:text-5xl sm:text-4xl text-xl font-semibold text-[#0266CC] p-4'>Growing With Cy City.</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Cutting-Edge Solutions for Your Business</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-light p-4'>
                    Cy City provides a comprehensive array of solutions, including:
                </p>
                <div className='md:text-5xl sm:text-4xl text-xl font-semibold text-[#0266CC]'>
                    <Typewriter
                        words={['Service Solutions', 'Security Systems', 'Infrastructure Solutions', 'Business Consulting', 'Manpower Services', 'Product Offerings']}
                        loop={true}
                        cursor
                        cursorStyle='+'
                        typeSpeed={120}
                        deleteSpeed={80}
                        delaySpeed={1000}
                    />
                </div>
                <button className='inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-[#0266CC] border border-transparent  px-14 hover:bg-blue-700 focus:bg-blue-700 rounded-md my-12 mx-auto  '>Get Started</button>
            </div>
        </div>
    );
};

export default Hero;
