import React from 'react';
import tm1 from '../assets/TollManagement1.png'
import tm2 from '../assets/portfolio-details-1.png'
import tm3 from '../assets/TollManagement2.png'


const TollManagement = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src={tm1} // Replace with your actual image path
              alt="Toll Management 1"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img
              src={tm2} // Replace with your actual image path
              alt="Toll Management 2"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img
              src={tm3} // Replace with your actual image path
              alt="Toll Management 2"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Column: Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Toll Management System</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
              The Toll Management System (TMS) is an enterprise-level software application designed for highway toll plazas to efficiently handle a large volume of cash and non-cash transactions, as well as exemptions, violations, and convoy vehicle transactions. It prioritizes high security and robust data management processes. This multi-layered architecture software product features various modules to support diverse operational needs.
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
              A Toll Management System (TMS) integrated with Automatic Toll Collection (ATMS) enhances the efficiency and convenience of toll collection on roadways. Here’s a brief overview:
            </p>

            <h3 className="text-2xl font-semibold mb-4">Key Components:</h3>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-500 dark:text-gray-400 mb-6">
              <li><strong>RFID Technology:</strong> Vehicles are equipped with RFID tags that are detected by toll booths equipped with RFID readers. This allows for automatic identification and toll deduction without the need for stopping.</li>
              <li><strong>Automatic Payment Processing:</strong> When a vehicle passes through a toll plaza, the RFID reader scans the tag and automatically deducts the toll amount from the prepaid account associated with the tag.</li>
              <li><strong>Data Management:</strong> The system collects and manages data on vehicle passages, toll fees collected, and account balances, which helps in monitoring traffic patterns and revenue generation.</li>
              <li><strong>User Interface:</strong> Drivers can manage their accounts online or through mobile apps, allowing for easy reloading of their prepaid accounts, checking balances, and viewing transaction history.</li>
              <li><strong>Integration with Traffic Management:</strong> The TMS can be integrated with broader traffic management systems to optimize traffic flow, reduce congestion, and enhance overall road safety.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Benefits:</h3>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-500 dark:text-gray-400 mb-6">
              <li><strong>Efficiency:</strong> Reduces wait times at toll booths, improving traffic flow.</li>
              <li><strong>Convenience:</strong> Allows for seamless travel without the need for cash transactions.</li>
              <li><strong>Data Insights:</strong> Provides valuable data for infrastructure planning and maintenance.</li>
            </ul>

            <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
              Overall, the combination of TMS and ATMS leverages technology to streamline toll collection, enhance user experience, and improve operational efficiency.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Solutions in Toll Management Systems:</h3>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-500 dark:text-gray-400">
              <li>ANPR Based Toll Management Solution</li>
              <li>RFID Based Toll Management Solution</li>
              <li>FAST Tag Based Toll Management Solution</li>
              <li>GNSS Based Management Solution</li>
              <li>Parking Management System</li>
              <li>Parking Information System</li>
              <li>Parking Guidance System</li>
              <li>Gate Access Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TollManagement;
