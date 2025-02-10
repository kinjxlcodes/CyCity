import React from 'react'
import v1 from '../assets/voltage1.jpg'
import v2 from '../assets/voltage2.jpg'
import v3 from '../assets/voltage monitor.png'
import v4 from '../assets/voltagemonitor2.png'

const VoltageMonitor = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Images stacked vertically */}
          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src={v1} // Replace with your actual image path
              alt="Voltage Monitoring 1"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img
              src={v2} // Replace with your actual image path
              alt="Voltage Monitoring 2"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img
              src={v3} // Replace with your actual image path
              alt="Voltage Monitoring 2"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img
              src={v4} // Replace with your actual image path
              alt="Voltage Monitoring 2"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Column: Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">IoT-Based Voltage Monitoring System</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
              An IoT-based voltage monitoring system is a sophisticated technology solution designed to continuously track and manage voltage levels in electrical systems. This system leverages Internet of Things (IoT) architecture to provide real-time data collection, analysis, and remote monitoring capabilities.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Key Features:</h3>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-500 dark:text-gray-400 mb-6">
              <li><strong>Real-Time Monitoring:</strong> Voltage sensors strategically placed throughout the electrical network continuously measure voltage levels, and the data is sent to a centralized processing unit for immediate analysis.</li>
              <li><strong>Data Transmission:</strong> Collected data is transmitted to a cloud server via communication modules like Wi-Fi, Zigbee, or LoRa, enabling remote access and monitoring.</li>
              <li><strong>User Interface:</strong> Users interact with the system through a web or mobile application, where they can view live data, historical trends, and receive alerts for anomalies.</li>
              <li><strong>Alerts and Notifications:</strong> The system sends notifications via SMS or email when voltage levels breach predefined thresholds, allowing for prompt action to prevent damage.</li>
              <li><strong>Data Analytics:</strong> Historical data logging and analysis help identify patterns, enabling predictive maintenance and operational improvements.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Applications:</h3>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-500 dark:text-gray-400 mb-6">
              <li><strong>Industrial Environments:</strong> Ensures machinery operates within safe voltage limits, reducing the risk of equipment failure and improving operational efficiency.</li>
              <li><strong>Smart Grids:</strong> Enhances the reliability of power distribution networks by providing essential data for grid management.</li>
              <li><strong>Commercial Buildings:</strong> Monitors electrical systems to optimize energy consumption and ensure safety compliance.</li>
              <li><strong>Residential Use:</strong> Enables homeowners to oversee their electrical systems, enhancing safety and energy efficiency.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Benefits:</h3>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-500 dark:text-gray-400">
              <li><strong>Increased Reliability:</strong> Continuous monitoring helps maintain voltage within safe limits, enhancing the reliability of electrical systems.</li>
              <li><strong>Efficiency Gains:</strong> By optimizing energy use, the system contributes to lower operational costs.</li>
              <li><strong>Proactive Maintenance:</strong> Early detection of voltage issues allows for timely interventions, minimizing downtime and repair costs.</li>
            </ul>

            <p className="text-xl text-gray-500 dark:text-gray-400">
              Overall, an IoT-based voltage monitoring system represents a critical advancement in electrical management, promoting a smarter, safer, and more efficient approach to energy consumption and distribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VoltageMonitor