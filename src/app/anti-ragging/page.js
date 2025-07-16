import Poster from '../../components/AntiRagging/AntiRaggingPoster';
import HelplineNumbers from '../../components/AntiRagging/HelplineNumbers';
import Policy from '../../components/AntiRagging/Policy';
import Head from 'next/head';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-100">

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


        {/* Component Sections */}
        <div className="space-y-8 border-radius-2xl">

          <Policy />

          <Poster />

          <HelplineNumbers />
        </div>

      </main>
 </div>
  );
};

export default Page;
