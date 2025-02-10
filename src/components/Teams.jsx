import React from "react";

const Teams = () => {
  return (
    <section id="teams" className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold md:text-7xl  leading-tight text-black sm:text-4xl  lg:leading-tight">
            Our Team Members
          </h2>
          <p className=" font-semibold dark:text-gray-400 max-w-3xl mx-auto mt-4 text-xl text-gray-600">
            With a passion for problem-solving and a strong commitment to
            quality, our team members collaborate effortlessly, leveraging their
            diverse skill sets to deliver robust and cutting-edge software
            solutions that meet and exceed client expectations.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-4 md:mt-16 lg:gap-x-12">
          <div>
            <img
              className="w-full"
              src="src/assets/team/team-1.jpg"
              alt="Merwin Furtador"
            />
            <div className="text-center mt-4">
              <h4 className="font-semibold text-lg">Merwin Furtador</h4>
              <p className="text-gray-600">CEO / Director</p>
              <p className="text-gray-600">Dip. Aeronautical Engineering, B.Tech Mechanical Engineering</p>
            </div>
          </div>
          <div>
            <img
              className="w-full"
              src="src/assets/team/team-2.jpg"
              alt="Mamtha Raj"
            />
            <div className="text-center mt-4">
              <h4 className="font-semibold text-lg">Mamtha Raj</h4>
              <p className="text-gray-600">Vice President / Director</p>
              <p className="text-gray-600">BE. Computer Science Engineering, M.Tech Computer Science Engineering</p>
            </div>
          </div>
          <div>
            <img
              className="w-full"
              src="src/assets/team/team-3.jpg"
              alt="Shashank Bharadwaj"
            />
            <div className="text-center mt-4">
              <h4 className="font-semibold text-lg">Shashank Bharadwaj</h4>
              <p className="text-gray-600">Technology Director</p>
              <p className="text-gray-600">B.Tech Mechanical Engineering, MS. Engineering Management, PhD. Information Technology</p>
            </div>
          </div>
          <div>
            <img
              className="w-full"
              src="src/assets/team/297076686_5331457363575858_1522669830894323800_n.jpg"
              alt="Team Member"
            />
            <div className="text-center mt-4">
              <h4 className="font-semibold text-lg">Ravindra Kumar Chavan</h4>
              <p className="text-gray-600">Technical Lead</p>
              <p className="text-gray-600">Btech Information Technology</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:mt-16">
          <a
            href="#"
            title="Join our team"
            className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-[#0266CC] border border-transparent rounded-md px-14 hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            Join our team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Teams;
