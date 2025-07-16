import React from 'react';
import AntiRaggingPledge from '../../components/NewStudents/RegistrationForm';
import CampusMap from '../../components/NewStudents/CampusMap';
import FAQSection from '../../components/NewStudents/FAQSection';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
const NewStudentsPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Header */}
      <header className="bg-white text-white py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-black text-3xl font-bold">New Students</h1>
          <p className="text-black mt-2">Welcome to IIT Hyderabad - Everything you need to get started</p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* ti-Ragging Registration Section */}
        <AntiRaggingPledge />



        {/* FAQs Section */}
        <FAQSection />
    </div>
    </div>
  );
};

export default NewStudentsPage;
