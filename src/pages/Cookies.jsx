import React from 'react'

const Cookies = () => {
  return (
    <section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="space-y-8">
      {/* Title */}
      <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Cookies and Preferences</h2>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-6 text-center">
        Last Updated: January 22, 2025
      </p>

      {/* Cookies and Tracking Technologies Section */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-700">Cookies and Tracking Technologies:</h3>
      <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
        <strong>What are Cookies:</strong> Cookies are small pieces of data stored on a user's device (computer, tablet, mobile phone) when visiting a website or using a software service. They help enhance user experience by storing preferences and providing analytics.
      </p>
      <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
        <strong>Types of Cookies:</strong> Our website or software service may use session cookies (temporary and deleted when the session ends) and persistent cookies (remain on the user's device until deleted) for various purposes, including authentication, analytics, and improving user experience.
      </p>
      <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
        <strong>Third-Party Cookies:</strong> We may also allow third-party services, such as analytics providers or advertising networks, to use cookies on our website or software service to gather information for their purposes.
      </p>

      {/* How We Use Cookies Section */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-700">How We Use Cookies:</h3>
      <ul className="list-disc pl-6 space-y-4 text-xl text-gray-500 dark:text-gray-400 mb-6">
        <li><strong>Essential Cookies:</strong> Some cookies are essential for the proper functioning of our website or software service. Disabling these cookies may affect the functionality of the site or service.</li>
        <li><strong>Analytics Cookies:</strong> We use analytics cookies to understand how users interact with our website or software service, analyze usage patterns, and improve our offerings.</li>
        <li><strong>Preferences Cookies:</strong> These cookies store user preferences and settings to provide a personalized experience. Users can control these preferences through their settings.</li>
      </ul>

      {/* Managing Cookies and Preferences Section */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-700">Managing Cookies and Preferences:</h3>
      <ul className="list-disc pl-6 space-y-4 text-xl text-gray-500 dark:text-gray-400 mb-6">
        <li><strong>Cookie Preferences:</strong> Users can manage cookie preferences by adjusting settings in their web browser or software preferences. They can choose to accept, decline, or delete cookies.</li>
        <li><strong>Opt-Out:</strong> Users can opt-out of certain cookies by adjusting settings or using opt-out mechanisms provided by third-party services.</li>
      </ul>

      {/* Consent Section */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-700">Consent:</h3>
      <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
        By using our website or software service, you consent to the use of cookies as described in this policy.
      </p>

      {/* Changes to Policy Section */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-700">Changes to Policy:</h3>
      <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
        We reserve the right to update or change this Cookies and Preferences Policy at any time. Any changes will be effective upon posting the updated policy on our website or within the software service.
      </p>

      {/* Contact Us Section */}
      <h3 className="text-2xl font-semibold mb-4 text-gray-700">Contact Us:</h3>
      <p className="text-xl text-gray-500 dark:text-gray-400 mb-6">
        If you have any questions, concerns, or inquiries regarding this Cookies and Preferences Policy, please contact us at <a href="mailto:info@cycity.net" className="text-blue-600">info@cycity.net</a>.
      </p>
    </div>
  </div>
</section>

  )
}

export default Cookies