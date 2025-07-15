// src/components/SunshineProgram/ResourcesSection.js
import React from 'react';

const ResourcesSection = () => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Program Resources
          <div className="w-48 h-1 bg-orange-500 mt-2 rounded-full"></div>
        </h2>
        <p className="text-gray-600">Access helpful resources to support your mental health journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="#" className="group">
          <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors group-hover:shadow-sm h-full">
            <div className="text-orange-500 mb-3">
              <svg
                className="w-8 h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h4 className="font-medium text-gray-800 text-center group-hover:text-orange-600">Self-Help Guides</h4>
            <p className="text-gray-600 text-sm mt-2 text-center">
              Practical guides for managing stress and improving mental wellness
            </p>
          </div>
        </a>

        <a href="#" className="group">
          <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors group-hover:shadow-sm h-full">
            <div className="text-orange-500 mb-3">
              <svg
                className="w-8 h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <h4 className="font-medium text-gray-800 text-center group-hover:text-orange-600">Support Groups</h4>
            <p className="text-gray-600 text-sm mt-2 text-center">
              Connect with peers facing similar challenges in a safe environment
            </p>
          </div>
        </a>

        <a href="#" className="group">
          <div className="bg-white p-5 rounded-lg border border-gray-200 hover:border-orange-300 transition-colors group-hover:shadow-sm h-full">
            <div className="text-orange-500 mb-3">
              <svg
                className="w-8 h-8 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="font-medium text-gray-800 text-center group-hover:text-orange-600">Workshops</h4>
            <p className="text-gray-600 text-sm mt-2 text-center">
              Interactive sessions on mindfulness, stress reduction, and resilience
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ResourcesSection;
