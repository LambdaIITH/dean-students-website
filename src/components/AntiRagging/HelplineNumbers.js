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
      title: "Student Well being Cell",
      number: "",
      description: "Psychological support and counseling services",
      icon: "🧠"
    }
  ];

  return (
  <div className="bg-gray-100 rounded-lg shadow-md p-8 mb-8">
  <h2 className="text-2xl font-bold text-gray-800 mb-6  border-red-600 pb-2">
    Emergency Helpline Numbers
  </h2>

  <div className="grid md:grid-cols-3 bg-gray-100 gap-8">
    {/* Left Column - Emergency Contacts */}
    <div className="bg-gray-100  p-6 border-t-4 border-red-600">
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
    <div className="bg-gray-100  p-6 border-t-4 border-orange-600">
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
      <div className="bg-gray-100  p-6 border-t-4 border-orange-600">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Important Information</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-orange-600 p-4 rounded-r-lg">
            <div className="flex items-center mb-2">

              <h4 className="font-semibold text-black">Important Note</h4>
            </div>
            <p className="text-black text-sm">
              All helpline numbers are operational 24/7. In case of emergency, contact campus security immediately.
            </p>
          </div>

          <div className=" border-l-4 border-red-600 p-4 rounded-r-lg">
            <h4 className="font-bold text-lg mb-2 text-black">Remember</h4>
            <p className="text-black text-sm">
             &quot;All helpline numbers are operational 24/7. In case of emergency, contact campus security immediately.&quot;
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

 );
};

export default HelplineNumbers;
