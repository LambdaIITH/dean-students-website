// src/components/SunshineProgram/ContactInfo.js
import React from 'react';

const ContactInfo = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-10 border border-gray-200">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Contact Information
          <div className="w-48 h-1 bg-orange-500 mt-2 rounded-full"></div>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">FIC Sunshine</h3>
            <p className="text-gray-600">Mental health and wellness support for all students</p>
          </div>

          <div className="flex items-start mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-1">Phone</h4>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 mb-1">Email</h4>
              <p className="text-gray-600">sunshine@fic.edu</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white p-5 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-700 mb-3 flex items-center">
              <svg
                className="w-5 h-5 text-orange-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Office Location
            </h4>
            <p className="text-gray-600 pl-7">Student Wellness Center, Room 205</p>
            <p className="text-gray-600 pl-7">FIC Campus, Main Building</p>
            <p className="text-gray-600 pl-7">Monday-Friday: 9am-5pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
