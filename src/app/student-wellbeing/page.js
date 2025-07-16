// src/pages/sunshine.js
import Head from 'next/head';
import ContactInfo from '../../components/StudentWellbeing/ContactInfo';
import CounsellorsList from '../../components/StudentWellbeing/CounsellorsList';
import ResourcesSection from '../../components/StudentWellbeing/ResourcesSection';

export default function SunshineProgram() {
  return (
    <div className="min-h-screen pt-20  bg-white">
      <Head>
        <title>Sunshine Program | FIC</title>
        <meta name="description" content="Mental Health Support & Wellness Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Sunshine Program
            <div className="w-32 h-1 bg-orange-500 mt-3 rounded-full"></div>
          </h1>
          <p className="text-gray-600 text-lg">Mental Health Support & Wellness Services</p>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-700 mb-6">
            The Sunshine Program provides confidential counseling and mental health support to all students.
            Our team of professional counselors is here to help you navigate challenges and maintain your well-being.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://sunshine.iith.ac.in/"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors" target="_blank"
            >Visit Website</a>

          </div>
        </div>

        {/* Contact Information */}
        <ContactInfo />

        {/* Counsellors List */}
        <CounsellorsList />

        {/* Resources Section */}
        <ResourcesSection />
      </div>


    </div>
  );
}
