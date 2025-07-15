import Poster from '../../components/AntiRagging/AntiRaggingPoster';
import HelplineNumbers from '../../components/AntiRagging/HelplineNumbers';
import Policy from '../../components/AntiRagging/Policy';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className=" mb-12">
          <h1 className="text-4xl border-b-2 border-[#FC5407]   pb-2 font-bold text-gray-900 mb-4">Anti-Ragging Initiative</h1>
          <p className="text-xl text-gray-600 max-w-3xl ">
            IIT Hyderabad is committed to maintaining a safe and inclusive campus environment.
            We have zero tolerance for ragging and are dedicated to protecting the dignity and
            well-being of all our students.
          </p>
        </div>

        {/* Emergency Alert Banner */}
        <div className="bg-red-600 text-white rounded-lg p-6 mb-8 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <div>
                <h2 className="text-xl font-bold">Emergency Reporting</h2>
                <p className="text-sm opacity-90">Report ragging incidents immediately</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">1800-180-5522</p>
              <p className="text-sm opacity-90">24/7 Helpline</p>
            </div>
          </div>
        </div>

        {/* Component Sections */}
        <div className="space-y-8">
          <Policy />
          <Poster />
          <HelplineNumbers />
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">IIT Hyderabad</h3>
              <p className="text-gray-400 text-sm">
                Kandi, Sangareddy<br />
                Telangana - 502285<br />
                India
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Student Portal</a></li>
                <li><a href="#" className="hover:text-white">Academic Calendar</a></li>
                <li><a href="#" className="hover:text-white">Campus Life</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Emergency Contacts</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Anti-Ragging: 1800-180-5522</li>
                <li>Campus Security: 040-2301-6999</li>
                <li>Medical Emergency: 040-2301-6789</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Indian Institute of Technology Hyderabad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
