"use client";

import React from 'react';

export default function HCUPage() {
  // Data for HCU Chair and Associate Chair
  const hcuChair = {
    name: 'Dr. Muvvala Gopinath',
    role: 'HCU Chair, Assistant Professor',
    email: 'Chair.hcu@iith.ac.in',
  };

  const hcuAssociateChair = {
    name: 'Dr. Narendra Kurra',
    role: 'Associate Chair HCU, Assistant Professor',
    email: 'achair.hcu@iith.ac.in',
  };

  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-8 space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-iith-orange-dark mb-6">
          Hostel Coordinating Unit (HCU) Contacts
        </h1>

        {/* Chair HCU Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 ease-in-out transform hover:scale-[1.01] hover:shadow-lg"> {/* Added hover effects */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">Chair, HCU</h3>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Name:</span> {hcuChair.name}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Role:</span> {hcuChair.role}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Email:</span>{' '}
            <a href={`mailto:${hcuChair.email}`} className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
              {hcuChair.email}
            </a>
          </p>
        </div>

        {/* Associate Chair HCU Card */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 ease-in-out transform hover:scale-[1.01] hover:shadow-lg"> {/* Added hover effects */}
          <h3 className="text-xl font-bold text-gray-900 mb-2">Associate Chair, HCU</h3>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Name:</span> {hcuAssociateChair.name}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Role:</span> {hcuAssociateChair.role}
          </p>
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">Email:</span>{' '}
            <a href={`mailto:${hcuAssociateChair.email}`} className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
              {hcuAssociateChair.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
