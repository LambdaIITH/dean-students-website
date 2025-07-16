"use client";

import React from 'react';

export default function HostelInfoPage() {
  // Data for Hostel Wardens, structured for the table
  const hostelWardensData = [
    {
      block: 'Aryabhatta',
      wardenName: 'Dr. Shelaka Gupta',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Aryabhatta Block', // Corrected
      contactEmails: ['Warden.aryabhatta@iith.ac.in'],
    },
    {
      block: 'Bhaskara',
      wardenName: 'Dr. Shelaka Gupta',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Bhaskara Block', // Corrected
      contactEmails: ['Warden.bhaskara@iith.ac.in'],
    },
    {
      block: 'Anandi',
      wardenName: 'Dr. Seetha N',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Anandi Block', // Corrected
      contactEmails: ['Warden.anandi@iith.ac.in'],
    },
    {
      block: 'Sarojini Naidu',
      wardenName: 'Dr. Seetha N',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Sarojini Naidu Block', // Corrected
      contactEmails: ['Warden.sarojini@iith.ac.in'],
    },
    {
      block: 'Charaka',
      wardenName: 'Dr. Suresh Kumar Garlapati',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Charaka Block', // Corrected
      contactEmails: ['Warden.charaka@iith.ac.in'],
    },
    {
      block: 'Brahmagupta',
      wardenName: 'Dr. Suresh Kumar Garlapati',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Brahmagupta Block', // Corrected
      contactEmails: ['Warden.brahmagupta@iith.ac.in'],
    },
    {
      block: 'Susruta',
      wardenName: 'Dr. Gunjan Mehta',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Susruta Block', // Corrected
      contactEmails: ['Warden.Susruta@iith.ac.in'],
    },
    {
      block: 'Kautilya',
      wardenName: 'Dr. Gunjan Mehta',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Kautilya Block', // Corrected
      contactEmails: ['Warden.kautilya@iith.ac.in'],
    },
    {
      block: 'Vyasa',
      wardenName: 'Dr. Sachidananda Behera',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Vyasa Block', // Corrected
      contactEmails: ['Warden.vyasa@iith.ac.in'],
    },
    {
      block: 'Varahamihira',
      wardenName: 'Dr. Sachidananda Behera',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Varahamihira Block', // Corrected
      contactEmails: ['Warden.varahamihira@iith.ac.in'],
    },
    {
      block: 'Maitreyi',
      wardenName: 'Dr. Ambika S',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Maitreyi Block', // Corrected
      contactEmails: ['Warden.maitreyi@iith.ac.in'],
    },
    {
      block: 'Gargi',
      wardenName: 'Dr. Ambika S',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Gargi Block', // Corrected
      contactEmails: ['Warden.gargi@iith.ac.in'],
    },
    {
      block: 'Ramanuja',
      wardenName: 'Dr. Mayur Vaidya',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Ramanuja Block', // Corrected
      contactEmails: ['Warden.ramanuja@iith.ac.in'],
    },
    {
      block: 'Sarabhai',
      wardenName: 'Dr. Mayur Vaidya',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Sarabhai Block', // Corrected
      contactEmails: ['Warden.sarabhai@iith.ac.in'],
    },
    {
      block: 'Raman',
      wardenName: 'Dr. Satish Laxman Shinde',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Raman Block', // Corrected
      contactEmails: ['Warden.raman@iith.ac.in'],
    },
    {
      block: 'Kalam',
      wardenName: 'Dr. Neeraj Kumar',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Kalam Block', // Corrected
      contactEmails: ['Warden.kalam@iith.ac.in'],
    },
    {
      block: 'Bhabha',
      wardenName: 'Dr. Nagarajan Ganapathy',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Bhabha Block', // Corrected
      contactEmails: ['Warden.bhabha@iith.ac.in'],
    },
    {
      block: 'Visweswaraya',
      wardenName: 'Dr. Rahul Kumar',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Visweswaraya Block', // Corrected
      contactEmails: ['Warden.visweswaraya@iith.ac.in'],
    },
    {
      block: 'Ramanujan',
      wardenName: 'Dr. Annadhasan',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Ramanujan Block', // Corrected
      contactEmails: ['Warden.ramanujan@iith.ac.in'],
    },
    {
      block: 'Vivekananda',
      wardenName: 'Dr. Anurup Datta',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Vivekananda Block', // Corrected
      contactEmails: ['Warden.vivekananda@iith.ac.in'],
    },
    {
      block: 'SN Bose',
      wardenName: 'Dr. Ramkarn Patne',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - SN Bose Block', // Corrected
      contactEmails: ['Warden.snbose@iith.ac.in'],
    },
    {
      block: 'Kalpana Chawla',
      wardenName: 'Dr. Athluri Avanthi',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Kalpana Chawla Block', // Corrected
      contactEmails: [], // No email provided
    },
    {
      block: 'Kapila',
      wardenName: 'Dr. Muvvala Gopinath',
      wardenRole: 'Assistant Professor',
      wardenBlocks: 'Warden - Kapila Block', // Corrected
      contactEmails: ['Warden1.kapila@iith.ac.in'],
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full bg-white shadow-xl rounded-lg p-8 space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-iith-orange-dark mb-6">
          IITH Hostel Blocks & Wardens
        </h1>

        {/* Hostel Blocks Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md overflow-hidden">
            <thead className="bg-iith-orange-light text-white">
              <tr>
                <th className="py-3 px-4 text-left text-lg font-semibold uppercase tracking-wider">Hostel Name</th>
                <th className="py-3 px-4 text-left text-lg font-semibold uppercase tracking-wider">Warden</th>
                <th className="py-3 px-4 text-left text-lg font-semibold uppercase tracking-wider">Warden Contact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {hostelWardensData.map((data, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-all duration-200 ease-in-out transform hover:scale-[1.005] hover:shadow-md" /* Added hover effects */
                >
                  <td className="py-3 px-4 text-gray-800 text-base font-medium">{data.block}</td>
                  <td className="py-3 px-4 text-gray-700 text-base">
                    {data.wardenName} <br />
                    <span className="text-gray-600 text-sm">{data.wardenRole}</span> <br />
                    <span className="text-gray-600 text-sm">{data.wardenBlocks}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-base">
                    {data.contactEmails.length > 0 ? (
                      data.contactEmails.map((email, emailIdx) => (
                        <React.Fragment key={emailIdx}>
                          <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
                            {email}
                          </a>
                        </React.Fragment>
                      ))
                    ) : (
                      <span className="text-gray-500">N/A</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
