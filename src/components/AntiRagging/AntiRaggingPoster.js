import React from 'react';

const Poster = () => {
  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4">


      <main className="w-full max-w-4xl">
        {/* Poster Container */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">

          {/* Poster Header */}
          <div className="bg-gradient-to-r from-gray-800 to-black text-white py-8 px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Anti-Ragging Initiative</h1>
            <p className="text-gray-300 text-lg">Maintaining a Safe Campus Environment</p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Poster Content */}
          <div className="p-6">
            {/* 3 Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

              {/* Prevention Guidelines */}
              <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Prevention Guidelines</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-600">Report incidents promptly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-600">Support affected students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-600">Participate in awareness sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-600">Promote respectful interactions</span>
                  </li>
                </ul>
              </div>

              {/* Recognizing Issues */}
              <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Recognizing Issues</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-600">Verbal or physical misconduct</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-600">Coerced participation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-600">Degrading behavior</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-600">Forced isolation</span>
                  </li>
                </ul>
              </div>

              {/* Disciplinary Actions */}
              <div className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2zm0-16h2v10h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Disciplinary Actions</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-600">Academic suspension</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-600">Legal consequences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-600">Permanent documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-600">Expulsion from institution</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-grey border-orange-200 rounded-xl p-6 mb-8 text-center">
              <div className="max-w-md mx-auto">
                <h3 className="text-gray-800 font-semibold text-xl mb-2">Emergency Contact</h3>
                <p className="text-3xl font-bold text-orange-600 mb-2">1800-180-5522</p>
                <p className="text-gray-600 text-sm">Available 24/7 • Confidential reporting</p>

              </div>
            </div>

            {/* Additional Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="text-gray-800 font-semibold mb-3 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                  Our Commitment
                </h3>
                <p className="text-gray-600 text-sm">
                  We are committed to providing a safe and respectful learning environment for all students.
                  Our zero-tolerance policy against ragging ensures immediate action against any misconduct.
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="text-gray-800 font-semibold mb-3 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                  Your Responsibility
                </h3>
                <p className="text-gray-600 text-sm">
                  As a member of our campus community, you play a vital role in preventing ragging.
                  Be vigilant, speak up against misconduct, and support fellow students.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-800 text-gray-300 text-center py-6 px-4">
            <p className="mb-2">Ensuring campus safety is our collective responsibility</p>
            <div className="flex justify-center space-x-4 text-sm">
              <span>© {new Date().getFullYear()} Campus Safety Committee</span>
              <span>|</span>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Poster;
