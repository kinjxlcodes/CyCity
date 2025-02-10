import React from "react";
import { Button, Typography } from "@material-tailwind/react";

export function Contact() {
  return (
    <section id="contact"className="px-8 py-8 lg:py-16 border-b-2">
      <div className="container mx-auto text-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-4  text-4xl font-bold md:text-7xl"
        >
          Contact Us
        </Typography>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          We&apos;re Here to Help
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-10 mx-auto max-w-5xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>
        
        {/* New Contact Section */}
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
          <div className="bg-white max-w-4xl mx-auto w-full">
            <div className="grid grid-cols-6 h-full">
              {/* Logo Section */}
              <div className="bg-[#0266CC] p-10 col-span-2 flex flex-col items-center justify-between">
                <div className="flex justify-between w-full mb-10">
                  <img
                    src="src/assets/DUNS-Registered-Seal.png"
                    alt="Logo 1"
                    className="w-16 h-16"
                  />
                  <img
                    src="src/assets/apple-touch-icon.png"
                    alt="Logo 2"
                    className="w-16 h-16"
                  />
                </div>
                <h2 className="mb-10 font-bold text-2xl text-blue-100 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                  Contact Info
                </h2>
                <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                  Location Address
                  <span className="font-normal text-xs text-blue-300 block">
                  8 The Green, Ste A,
                  Dover, DE 19901. USA
                  </span>
                  <span className="font-normal text-xs text-blue-300 block">
                  # 64-7, Vamanjoor
Mangalore, 575028. India
                  </span>
                </p>
                <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                  Phone Number
                  <span className="font-normal text-xs text-blue-300 block">
                  USA: (772) 842 3337
                  </span>
                  <span className="font-normal text-xs text-blue-300 block">
                  CAN: (437) 887 3338
                  </span>
                  <span className="font-normal text-xs text-blue-300 block">
                  IND: (734) 934 3336
                  </span>
                </p>
                <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                  Email Address
                  <span className="font-normal text-xs text-blue-300 block">
                  info@cycity.net
                  </span>
                </p>
                <p className="font-bold text-blue-100 py-8 border-b border-blue-700">
                  Web Address
                  <span className="font-normal text-xs text-blue-300 block">
                  https://cycity.net/
                  </span>
                </p>
              </div>

              {/* Form Section */}
              <div className="bg-blue-50 p-14 col-span-4">
                <h2 className="mb-14 font-bold text-4xl text-blue-900 before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                  Enter Your Details
                </h2>
                <div className="grid gap-6 mb-6 grid-cols-2">
                  <div className="flex flex-col">
                    <input
                      className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                      aria-placeholder="Name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                      aria-placeholder="Surname"
                      placeholder="Surname"
                    />
                  </div>
                </div>
                <div className="grid gap-6 mb-6 grid-cols-2">
                  <div className="flex flex-col">
                    <input
                      className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                      aria-placeholder="Email Address"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="py-4 bg-white rounded-full px-6 placeholder:text-xs"
                      aria-placeholder="Subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <textarea
                    className="w-full rounded-2xl placeholder:text-xs px-6 py-4"
                    placeholder="Your Message"
                    name=""
                    id=""
                    rows="8"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="rounded-full bg-[#0266CC] text-white font-bold py-4 px-6 min-w-40 hover:bg-blue-800 transition-all">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
