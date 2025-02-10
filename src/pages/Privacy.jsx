import React from 'react'

const Privacy = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {/* Title */}
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Privacy Policy</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-6 text-center">
            Last Updated: January 22, 2025
          </p>

          {/* Information We Collect Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Information We Collect:</h3>
          <ul className="list-disc pl-6 space-y-4 text-xl text-gray-500 dark:text-gray-400 mb-6">
            <li><strong>Personal Information:</strong> We may collect personal information voluntarily provided by users, such as names, email addresses, contact details, and any other information necessary for the software's functionality.</li>
            <li><strong>Usage Data:</strong> We may collect information related to user interactions with our software, including log data, device information, IP addresses, and user preferences.</li>
          </ul>

          {/* How We Use Your Information Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">How We Use Your Information:</h3>
          <ul className="list-disc pl-6 space-y-4 text-xl text-gray-500 dark:text-gray-400 mb-6">
            <li><strong>Service Provision:</strong> We use the collected information to deliver, maintain, and improve our software, including customer support, updates, and new features.</li>
            <li><strong>Communication:</strong> We may use your contact information to send important notices, updates, or marketing material related to our software. You can opt-out of marketing communications.</li>
            <li><strong>Analytics:</strong> We may analyze usage data to understand user behavior, trends, and preferences to enhance our software's performance and user experience.</li>
          </ul>

          {/* Data Sharing and Disclosure Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Data Sharing and Disclosure:</h3>
          <ul className="list-disc pl-6 space-y-4 text-xl text-gray-500 dark:text-gray-400 mb-6">
            <li><strong>Third-Party Services:</strong> We may engage third-party service providers to assist us in delivering our services. These third parties are contractually obligated to protect the information and use it only for specified purposes.</li>
            <li><strong>Legal Compliance:</strong> We may disclose information when required by law, to enforce our policies, respond to legal requests, or protect our rights.</li>
          </ul>

          {/* Data Security Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Data Security:</h3>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
            We employ reasonable security measures to protect against unauthorized access, alteration, disclosure, or destruction of data. Please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>

          {/* Your Choices and Rights Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Your Choices and Rights:</h3>
          <ul className="list-disc pl-6 space-y-4 text-xl text-gray-500 dark:text-gray-400 mb-6">
            <li><strong>Access and Correction:</strong> You have the right to access and update your personal information. Contact us using the details provided below to exercise this right.</li>
            <li><strong>Opt-Out:</strong> You can opt-out of receiving marketing communications by following the instructions in the communication or contacting us.</li>
          </ul>

          {/* Children's Privacy Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Children's Privacy:</h3>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
            Our software is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us to have it removed.
          </p>

          {/* Changes to this Policy Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Changes to this Policy:</h3>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
            We may update this Privacy Policy occasionally. Users will be notified of any material changes by posting the updated policy on our website or through other appropriate means.
          </p>

          {/* Contact Us Section */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Contact Us:</h3>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at <a href="mailto:info@cycity.net" className="text-blue-600">info@cycity.net</a>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Privacy