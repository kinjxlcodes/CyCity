import React from 'react';

const Hero = () => {
    return (
      <>
        <section className="relative h-screen py-12 bg-gradient-to-r from-[#0266CC] to-[#1A8EF4] sm:pb-16 lg:pb-20 xl:pb-24 flex items-center">
          <div className="px-4 mt-4 mb-4 mx-auto sm:px-6 lg:px-8 max-w-8xl">
            <div className="relative">
              <div className="lg:w-2/3">
                <p className="text-xl  font-normal tracking-widest text-slate-200 uppercase">
                Growing With CyCity
                </p>
                <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-5xl xl:text-7xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#090BA0] to-[#1C39A1]">
                  Cutting-Edge Solutions for 
                  </span>{" "}
                  Your Business
                </h1>
                <p className="max-w-lg mt-4 text-xl font-normal text-slate-200 sm:mt-8">
                Cy City provides a comprehensive array of solutions, including: Service Solutions, Security Systems, Infrastructure Development, Infrastructure Solutions, Business Consulting, Manpower Services, Product Offerings.
                </p>
                <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#0266CC] to-[#1A8EF4] group-hover:shadow-lg group-hover:shadow-[#0266CC]/50"></div>
                  <a
                    href="#services"
                    title="Start Exploring Inspiration"
                    className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                    role="button"
                  >
                    Start Exploring Services
                  </a>
                </div>

                <div>
                  <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17"
                        stroke="url(#a)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="a"
                          x1="3"
                          y1="7.00003"
                          x2="22.2956"
                          y2="12.0274"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0%" stopColor="##090BA0" />
                          <stop offset="100%" stopColor="#1C39A1" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <span className="ml-2 text-base font-normal text-white">
                      Many Technologies Implemented.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
                <img
                  className="w-full max-w-xs mx-auto lg:max-w-lg xl:max-w-xl"
                  src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png"
                  alt="3D Illustration"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default Hero;
