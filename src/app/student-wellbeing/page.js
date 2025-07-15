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
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Book Appointment
            </a>
            <a
              href="#"
              className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Program Resources
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <ContactInfo />

        {/* Counsellors List */}
        <CounsellorsList />

        {/* Resources Section */}
        <ResourcesSection />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-4">
            <p className="mb-2">Your mental health matters - reach out anytime</p>
            <div className="text-orange-400 font-medium text-lg">1800-180-5522</div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm pt-4 border-t border-gray-700">
            <div>© {new Date().getFullYear()} Sunshine Program</div>
            <div className="mt-2 md:mt-0">Confidential & Compassionate Support</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
