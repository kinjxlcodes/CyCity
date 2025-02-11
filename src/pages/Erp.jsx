import React from 'react';
import erp1 from '../assets/erp1.jpg';
import erp2 from '../assets/erp2.jpg';
import erp3 from '../assets/erp3.jpg';

const Erp = () => {
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Images stacked vertically */}
          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src={erp1} // Replace with your actual image path
              alt="ERP Ecosystem 1"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img
              src={erp2} // Replace with your actual image path
              alt="ERP Ecosystem 2"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img
              src={erp3} // Replace with your actual image path
              alt="ERP Ecosystem 3"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Column: Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">ERP Ecosystem</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
              An ERP (Enterprise Resource Planning) ecosystem integrates various business functions into a unified system, enhancing operational efficiency and decision-making across an organization. This ecosystem typically includes the following key components:
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Key Components:</h3>
            <ul className="list-disc pl-6 space-y-4 text-xl text-gray-500 dark:text-gray-400 mb-6">
              <li>
                <strong>Supply Chain Management (SCM):</strong> Manages the flow of goods and services, from procurement of raw materials to delivery of finished products. Key functionalities include inventory management, demand forecasting, procurement, and logistics coordination, ensuring timely fulfillment and cost-effectiveness.
              </li>
              <li>
                <strong>Human Resource Management (HRM):</strong> Streamlines HR processes such as recruitment, employee onboarding, payroll, performance management, and training. It helps organizations manage their workforce effectively, ensuring compliance with labor laws and enhancing employee satisfaction.
              </li>
              <li>
                <strong>University Management System:</strong> Facilitates the administration of educational institutions by managing student records, course offerings, enrollment processes, and academic performance. This system enhances communication between students, faculty, and administration, while providing tools for efficient reporting and analytics.
              </li>
              <li>
                <strong>Delivery Management System:</strong> Optimizes the order fulfillment process by managing order processing, tracking shipments, and scheduling deliveries. It improves customer satisfaction through timely updates and efficient logistics, ensuring that products reach customers promptly.
              </li>
              <li>
                <strong>Hospital Management System:</strong> Integrates patient management, billing, and healthcare staff coordination. This system ensures efficient patient care by tracking medical records, appointments, and treatment histories while managing hospital resources and inventory.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Benefits:</h3>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-500 dark:text-gray-400 mb-6">
              <li><strong>Enhanced Efficiency:</strong> Streamlined processes reduce redundancy and improve productivity across departments.</li>
              <li><strong>Centralized Data Access:</strong> Real-time data availability supports informed decision-making and fosters collaboration.</li>
              <li><strong>Cost Savings:</strong> Optimized resource management leads to reduced operational costs and improved financial performance.</li>
              <li><strong>Improved Reporting:</strong> Comprehensive analytics across all modules provide valuable insights into organizational performance.</li>
              <li><strong>Scalability:</strong> The ERP system can adapt and grow with the organization, accommodating new processes and functions as needed.</li>
            </ul>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              In summary, an ERP ecosystem that encompasses supply chain management, human resource management, university management, delivery management, and hospital management creates a cohesive framework for managing an organization’s diverse functions, driving efficiency, and enhancing overall performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Erp;
