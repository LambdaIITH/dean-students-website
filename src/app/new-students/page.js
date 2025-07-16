import React from 'react';
import AntiRaggingPledge from '../../components/NewStudents/RegistrationForm';
import CampusMap from '../../components/NewStudents/CampusMap';
import FAQSection from '../../components/NewStudents/FAQSection';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const NewStudentsPage = () => {
  return (
    <div className="min-h-screen pt-20 ">
      {/* Header with left-aligned heading and orange underline */}
      <header className=" py-8 px-6 sm:px-12">
        <div className="container mx-auto px-6">
          <h1 className="text-black text-3xl font-bold pb-2 border-b-4 border-orange-500 inline-block">
            New Students
          </h1>
          <p className="text-black mt-4">Welcome to IIT Hyderabad - Everything you need to get started</p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Anti-Ragging Registration Section */}
        <div className="mb-12">

          <AntiRaggingPledge />
        </div>

        {/* Campus Map Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 pb-2 border-b-2 border-orange-500 inline-block mb-6">
            Campus Map
          </h2>
        </div>

        {/* FAQs Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 pb-2 border-b-2 border-orange-500 inline-block mb-6">
            Frequently Asked Questions
          </h2>
          <FAQSection />
        </div>
      </div>
    </div>
  );
};

export default NewStudentsPage;
