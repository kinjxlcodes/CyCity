import React from 'react'

const GsmMonitoring = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Images stacked vertically */}
          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src="src/assets/gsm1.jpg" // Replace with your actual image path
              alt="GSM Theft Monitoring 1"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img
              src="src/assets/gsm2.jpeg" // Replace with your actual image path
              alt="GSM Theft Monitoring 2"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img
              src="src/assets/gsm3.jpg" // Replace with your actual image path
              alt="GSM Theft Monitoring 2"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Column: Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">GSM-Based Theft Monitoring System</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
              A GSM-based theft monitoring system is an advanced security solution designed to detect and prevent theft in various environments, such as homes, offices, and commercial establishments. By utilizing the Global System for Mobile Communications (GSM) technology, this system provides real-time alerts and monitoring capabilities, enhancing security and response times.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Key Features:</h3>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-500 dark:text-gray-400 mb-6">
              <li><strong>Intrusion Detection:</strong> The system employs various sensors, such as motion detectors, door/window sensors, and vibration sensors, to detect unauthorized access or movement.</li>
              <li><strong>GSM Module:</strong> A GSM module is integral to the system, enabling it to send alerts via SMS to predefined phone numbers in case of a security breach.</li>
              <li><strong>Microcontroller:</strong> A microcontroller (e.g., Arduino or Raspberry Pi) processes sensor data and manages communication with the GSM module.</li>
              <li><strong>User Alerts:</strong> When an intrusion is detected, the system sends immediate SMS notifications to the owner or security personnel, providing real-time updates on potential threats.</li>
              <li><strong>Remote Monitoring:</strong> Users can monitor the status of their security system remotely, allowing them to stay informed even when they are away.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Applications:</h3>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-500 dark:text-gray-400 mb-6">
              <li><strong>Residential Security:</strong> Homeowners can install this system to protect against burglary and unauthorized entry, enhancing peace of mind.</li>
              <li><strong>Commercial Security:</strong> Businesses can utilize the system to safeguard valuable assets and ensure a secure working environment.</li>
              <li><strong>Vehicle Protection:</strong> The system can be adapted for use in vehicles to prevent theft and facilitate recovery in case of unauthorized access.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Benefits:</h3>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-500 dark:text-gray-400">
              <li><strong>Real-Time Alerts:</strong> Immediate notifications enable prompt action, increasing the likelihood of preventing theft.</li>
              <li><strong>Cost-Effective Security:</strong> GSM technology provides a reliable and affordable solution for theft monitoring without the need for expensive infrastructure.</li>
              <li><strong>User-Friendly:</strong> The system is often easy to install and operate, making it accessible for various users.</li>
              <li><strong>Scalability:</strong> The system can be expanded with additional sensors and modules to enhance security coverage as needed.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GsmMonitoring