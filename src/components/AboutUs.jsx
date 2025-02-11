import React from 'react';
import { Eye, UserRound, ShieldIcon, Book } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-12 mt-6">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold md:text-7xl">About Us</h2>
          <p className="md:text-5xl text-gray-500 dark:text-gray-400 mt-2">
            Discover the perfect outdoor experience for every season and mood.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 dark:bg-white-800 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <UserRound className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-2xl font-semibold">Our Vision & Innovation</h3>
            </div>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Cy City Inc and Cy City International Private Limited is a forward-thinking company, delivering cutting-edge software and business solutions to meet our clients' diverse needs. Our commitment to innovation drives us to develop robust software applications leveraging the latest technologies and industry best practices.

              We offer comprehensive business solutions designed to enhance efficiency, optimize processes, and drive sustainable growth across multiple sectors. We work closely with our clients to deliver bespoke solutions that exceed expectations, transforming challenges into opportunities.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 dark:bg-white-800 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-blue-400 mr-2" />
              <h3 className="text-2xl font-semibold">Expert Team & Tailored Solutions</h3>
            </div>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Our team, with over 45 years of collective experience, comes from various industries such as IT, Operations, Supply Chain, Hospitality, and more, giving us the edge to understand unique business needs.

              We specialize in AI, Machine Learning, Web Development, Telematics, Data Science, and Robotics. Our ultimate goal is to deliver paperless, innovative business solutions that allow our clients to thrive.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 dark:bg-white-800 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <ShieldIcon className="w-6 h-6 text-blue-600 mr-2" />
              <h3 className="text-2xl font-semibold">Client Collaboration & Security</h3>
            </div>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              At Cy City, we prioritize collaboration, working hand-in-hand with our clients to provide tailored solutions. Our business consultants ensure that every solution aligns with your strategic goals, ensuring growth, efficiency, and top-tier cybersecurity.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 dark:bg-white-800 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <Book className="w-6 h-6 text-green-500 mr-2" />
              <h3 className="text-2xl font-semibold">Opportunities & Learning</h3>
            </div>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              We offer real-time internships for students and customized solutions for businesses. Whether you want to enhance your professional skills or need strategic solutions, we have something unique to offer. Engage in training programs, certifications, and mentorships to stay competitive in today’s evolving business landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
