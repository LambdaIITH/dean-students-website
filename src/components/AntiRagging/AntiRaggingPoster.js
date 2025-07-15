import React from 'react';

const Poster = () => {
  return (
   <div className="bg-white rounded-xl shadow-lg p-6">
  {/* Header */}
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-red-600 mb-2">STOP RAGGING</h2>
    <p className="text-lg text-gray-600">Create a Safe Campus Environment</p>
    <div className="w-20 h-1 bg-red-500 mx-auto mt-3"></div>
  </div>

  {/* 3 Column Content */}
  <div className="grid md:grid-cols-3 gap-6 mb-8">
    {/* Prevention */}
    <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-500">
      <h3 className="font-bold text-lg text-red-700 mb-3 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        Prevention
      </h3>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-start">
          <span className="text-red-500 mr-2">•</span>
          <span>Report incidents immediately</span>
        </li>
        <li className="flex items-start">
          <span className="text-red-500 mr-2">•</span>
          <span>Support affected students</span>
        </li>
        <li className="flex items-start">
          <span className="text-red-500 mr-2">•</span>
          <span>Attend awareness programs</span>
        </li>
      </ul>
    </div>

    {/* Warning Signs */}
    <div className="bg-orange-50 p-5 rounded-lg border-l-4 border-orange-500">
      <h3 className="font-bold text-lg text-orange-700 mb-3 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
        </svg>
        Warning Signs
      </h3>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">•</span>
          <span>Physical or verbal abuse</span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">•</span>
          <span>Forced activities</span>
        </li>
        <li className="flex items-start">
          <span className="text-orange-500 mr-2">•</span>
          <span>Humiliation or harassment</span>
        </li>
      </ul>
    </div>

    {/* Consequences */}
    <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
      <h3 className="font-bold text-lg text-amber-700 mb-3 flex items-center">
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2zm0-16h2v10h-2z"/>
        </svg>
        Consequences
      </h3>
      <ul className="space-y-2 text-gray-700">
        <li className="flex items-start">
          <span className="text-amber-500 mr-2">•</span>
          <span>Immediate suspension</span>
        </li>
        <li className="flex items-start">
          <span className="text-amber-500 mr-2">•</span>
          <span>Legal action</span>
        </li>
        <li className="flex items-start">
          <span className="text-amber-500 mr-2">•</span>
          <span>Permanent record</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Emergency Contact */}
  <div className="bg-red-600 text-white p-6 rounded-lg text-center">
    <h3 className="text-xl font-bold mb-2">24/7 Emergency Helpline</h3>
    <p className="text-3xl font-extrabold mb-3">1800-180-5522</p>

  </div>

  {/* Footer */}
  <div className="mt-6 text-center text-gray-500 text-sm">
    <p>"Your safety is our priority"</p>
    <p className="mt-1">All reports are confidential</p>
  </div>
</div>
   );
};

export default Poster;
