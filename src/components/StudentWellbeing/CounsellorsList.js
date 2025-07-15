// src/components/SunshineProgram/CounsellorsList.js
import React from 'react';

const counsellors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@fic.edu",
    phone: "(555) 234-5678",
    specialty: "Stress Management Specialist"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    email: "michael.chen@fic.edu",
    phone: "(555) 345-6789",
    specialty: "Anxiety & Depression Specialist"
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    email: "priya.sharma@fic.edu",
    phone: "(555) 456-7890",
    specialty: "Relationship Counseling"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    email: "james.wilson@fic.edu",
    phone: "(555) 567-8901",
    specialty: "Academic Pressure Specialist"
  }
];

const CounsellorsList = () => {
  return (
    <div className="mb-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Our Counselling Team
          <div className="w-48 h-1 bg-orange-500 mt-2 rounded-full"></div>
        </h2>
        <p className="text-gray-600">Our team of certified professionals is ready to support you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {counsellors.map((counsellor) => (
          <div
            key={counsellor.id}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start">
              <div className="mr-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{counsellor.name}</h3>
                <p className="text-orange-600 text-sm mb-2">{counsellor.specialty}</p>

                <div className="mt-3 space-y-2">
                  <div className="flex items-center text-sm">
                    <svg
                      className="w-4 h-4 text-gray-500 mr-2"
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
                    <span className="text-gray-600">{counsellor.email}</span>
                  </div>

                  <div className="flex items-center text-sm">
                    <svg
                      className="w-4 h-4 text-gray-500 mr-2"
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
                    <span className="text-gray-600">{counsellor.phone}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounsellorsList;
