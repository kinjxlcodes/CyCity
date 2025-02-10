import React from 'react'

const ParkingManagement = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Images stacked vertically */}
          <div className="flex flex-col justify-center items-center space-y-6">
            <img
              src="src/assets/parking1.jpg" // Replace with your actual image path
              alt="Parking Management 1"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <img
              src="src/assets/parking2.jpg" // Replace with your actual image path
              alt="Parking Management 2"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right Column: Information */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Parking Management System</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
              A Parking Management System (PMS) is an integrated solution designed to optimize the use of parking spaces, enhance user convenience, and streamline operations within parking facilities.
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
              By employing advanced technologies such as sensors, mobile applications, and data analytics, a PMS enables real-time monitoring of available parking spots, allowing users to find and reserve spaces quickly. This system not only reduces congestion and emissions by minimizing the time spent searching for parking but also improves revenue management for operators through automated payment systems and dynamic pricing strategies.
            </p>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
              Additionally, features like license plate recognition and user-friendly interfaces contribute to a seamless parking experience, making it easier for both drivers and facility managers to navigate and manage parking resources efficiently. As urban areas continue to grow and parking demand increases, the implementation of effective parking management systems becomes crucial for sustainable urban mobility.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Key Features:</h3>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-500 dark:text-gray-400 mb-6">
              <li><strong>Automatic Barrier System:</strong> Employed at the entry and exit points of parking areas, utilizing electromagnetic and PLC circuit cards to ensure smooth and rapid operation. It is easy to operate and maintain and can accommodate boom arms of various lengths as needed. In the event of a power failure, users can manually operate the system.</li>
              <li><strong>Sensor Based Identification System:</strong> Ultrasonic sensor technology detects vehicles in parking spaces. The sensor-based alarm system identifies unusual activity or accidents within the parking area, enhancing the functionality of smart parking systems.</li>
              <li><strong>Camera Security Parking CCTV:</strong> Uses advanced digital technology for surveillance, offering waterproof design, HD video recording, night vision, wireless connectivity, and motion detection. Remote access is available through network channels.</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Our Parking Solutions Include:</h3>
            <ul className="list-disc pl-6 space-y-2 text-xl text-gray-500 dark:text-gray-400">
              <li>Open space parking solutions</li>
              <li>Enclosed space parking solutions</li>
              <li>On-street parking solutions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ParkingManagement