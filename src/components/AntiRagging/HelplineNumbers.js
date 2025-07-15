import React from 'react';

const HelplineNumbers = () => {
  const helplineData = [
    {
      title: "UGC Anti-Ragging Helpline",
      number: "###-###-###",
      description: "24/7 toll-free helpline for reporting ragging incidents",
      icon: "🚨"
    },
    {
      title: "IITH Anti-Ragging Committee",
      number: "",
      description: "Direct contact to institute's anti-ragging committee",
      icon: "🏫"
    },
    {
      title: "Dean Student Affairs",
      number: "",
      description: "Office of Dean Student Affairs for immediate assistance",
      icon: "👨‍💼"
    },
    {
      title: "Campus Security",
      number: "",
      description: "24/7 campus security for emergency situations",
      icon: "🔒"
    },
    {
      title: "Student Counseling Cell",
      number: "",
      description: "Psychological support and counseling services",
      icon: "🧠"
    }
  ];

  return (
  <div className="bg-white rounded-lg shadow-md p-8 mb-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-red-600 pb-2">
    Emergency Helpline Numbers
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    {/* Left Column - Emergency Contacts */}
    <div className="bg-gray-50  p-6 border-l-4 border-red-600">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Emergency Contacts</h3>
      <div className="space-y-6">
        {helplineData.slice(0, 3).map((item, index) => (
          <div key={index} className="hover:bg-red-50 p-3 rounded transition duration-200">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">{item.icon}</span>
              <h4 className="font-medium text-gray-800">{item.title}</h4>
            </div>
            <a href={`tel:${item.number}`} className="text-xl font-bold text-red-600 hover:text-red-700 block">
              {item.number}
            </a>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Middle Column - Support Services */}
    <div className="bg-gray-50  p-6 border-l-4 border-orange-600">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Support Services</h3>
      <div className="space-y-6">
        {helplineData.slice(3, 6).map((item, index) => (
          <div key={index} className="hover:bg-orange-50 p-3 rounded transition duration-200">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">{item.icon}</span>
              <h4 className="font-medium text-gray-800">{item.title}</h4>
            </div>
            <a href={`tel:${item.number}`} className="text-xl font-bold text-orange-600 hover:text-orange-700 block">
              {item.number}
            </a>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Right Column - Important Notes */}
    <div className="space-y-6">
      <div className="bg-gray-50  p-6 border-l-4 border-orange-600">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Important Information</h3>
        <div className="space-y-4">
          <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-r-lg">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h4 className="font-semibold text-orange-800">Important Note</h4>
            </div>
            <p className="text-orange-700 text-sm">
              All helpline numbers are operational 24/7. In case of emergency, contact campus security immediately.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
            <h4 className="font-bold text-lg mb-2 text-red-800">Remember</h4>
            <p className="text-red-700 text-sm">
              "Your safety is our priority. Don't hesitate to reach out for help."
            </p>
          </div>

          {helplineData.length > 6 && (
            <div className="hover:bg-blue-50 p-3 rounded transition duration-200">
              {helplineData.slice(6).map((item, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex items-center mb-1">
                    <span className="text-xl mr-2">{item.icon}</span>
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                  </div>
                  <a href={`tel:${item.number}`} className="text-lg font-bold text-blue-600 hover:text-blue-700 block">
                    {item.number}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

 );
};

export default HelplineNumbers;
