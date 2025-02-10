import React from 'react';
import ri1 from '../assets/Road1.jpg';
import ri2 from '../assets/Road2.jpg'

const RoadInfrastructure = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Images stacked vertically */}
          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src={ri1} // Replace with your actual image path
              alt="Toll Management 1"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img
              src={ri2} // Replace with your actual image path
              alt="Toll Management 2"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Column: Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Road Infrastructure</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
              Our Road Infrastructure portfolio showcases a comprehensive range of projects that highlight our commitment to developing and maintaining sustainable, efficient, and safe transportation networks. This portfolio includes the design and construction of highways, local roads, bridges, and tunnels, all tailored to meet the unique needs of diverse communities.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Key Features of Our Portfolio:</h3>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-500 dark:text-gray-400 mb-6">
              <li><strong>Innovative Design:</strong> We employ cutting-edge engineering practices and technologies to create roadways that enhance connectivity while prioritizing safety and environmental sustainability.</li>
              <li><strong>Project Diversity:</strong> From urban thoroughfares and rural roads to complex interchanges and pedestrian pathways, our projects cater to various scales and specifications, ensuring seamless integration into existing landscapes.</li>
              <li><strong>Sustainability Focus:</strong> Our commitment to sustainability is evident in our use of eco-friendly materials, energy-efficient construction methods, and designs that promote green spaces and reduce environmental impact.</li>
              <li><strong>Community Engagement:</strong> We actively involve local communities in the planning and development process, ensuring that the final infrastructure meets their needs and fosters economic growth.</li>
              <li><strong>Maintenance and Upgrades:</strong> Our portfolio also emphasizes the importance of ongoing maintenance and upgrades, ensuring that infrastructure remains safe, functional, and relevant in a rapidly changing world.</li>
            </ul>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Through our Road Infrastructure portfolio, we aim to create lasting solutions that not only enhance mobility but also contribute to the overall well-being of the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoadInfrastructure;
