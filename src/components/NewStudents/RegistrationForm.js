"use client";
import React, { useState } from 'react';
import { Users, AlertCircle, CheckCircle, Shield } from 'lucide-react';

const AntiRaggingPledge = () => {
  const [pledgeSubmitted, setPledgeSubmitted] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pledgeAccepted, setPledgeAccepted] = useState(false);

  const handlePledgeSubmit = () => {
    if (studentName && rollNumber && department && phoneNumber && email && pledgeAccepted) {
      setPledgeSubmitted(true);
    }
  };

  const departments = [
    "Computer Science and Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
        "Computational Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biomedical Engineering",
    "Materials Science and Engineering",
    "Artificial Intelligence",
    "Mathematics and Statistics",
    "Physics",
    "Chemistry",
    "Liberal Arts",
    "Design"
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4 sm:py-8 px-2 sm:px-0">
      <div className="container mx-auto px-2 sm:px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-9">
          <div className="flex justify-center items-center mb-2 sm:mb-4">
            <h1 className="text-2xl sm:text-4xl font-bold text-black">Anti-Ragging Pledge</h1>
          </div>
          <p className="text-black text-sm sm:text-lg">Mandatory Registration for All New Students</p>
        </div>

        {!pledgeSubmitted ? (
          <div className="bg-gray-100 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-8 border border-[#e0e0e0]">
            {/* Important Notice */}
            <div className="bg-gray border-l-4 border-[#FC5407] p-4 sm:p-6 mb-6 sm:mb-8 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="text-[#FC5407] mr-2 sm:mr-3 mt-0.5 sm:mt-1" size={20} />
                <div>
                  <h3 className="text-black font-bold text-base sm:text-lg mb-1 sm:mb-2">Mandatory Requirement</h3>
                  <p className="text-black text-sm sm:text-base">All new students must complete this pledge as part of the registration process.</p>
                </div>
              </div>
            </div>

            {/* Pledge Form */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-black mb-4 sm:mb-6">Student Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs text-black sm:text-sm font-medium text-black mb-1 sm:mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full p-2 sm:p-3 text-sm sm:text-base border border-[#cccccc] rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#F58A42] focus:border-[#F58A42] transition-colors"
                    placeholder="Enter your full name as per documents"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-black mb-1 sm:mb-2">Roll Number *</label>
                  <input
                    type="text"
                    value={rollNumber}
                    onChange={(e) => setRollNumber(e.target.value)}
                    className="w-full p-2 sm:p-3 text-sm sm:text-base border border-[#cccccc] rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#F58A42] focus:border-[#F58A42] transition-colors"
                    placeholder="Enter your roll number"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-black mb-1 sm:mb-2">Department *</label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full p-2 sm:p-3 text-sm sm:text-base border border-[#cccccc] rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#F58A42] focus:border-[#F58A42] transition-colors"
                  >
                    <option value="">Select your department</option>
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-black mb-1 sm:mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-2 sm:p-3 text-sm sm:text-base border border-[#cccccc] rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#F58A42] focus:border-[#F58A42] transition-colors"
                    placeholder="Enter your mobile number"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs sm:text-sm font-medium text-black mb-1 sm:mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 sm:p-3 text-sm sm:text-base border border-[#cccccc] rounded-md sm:rounded-lg focus:ring-2 focus:ring-[#F58A42] focus:border-[#F58A42] transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Pledge Content */}
              <div className="bg-gray-100 p-4 sm:p-6 rounded-md sm:rounded-lg border-2 border-[#e0e0e0] mt-6 sm:mt-8">
                <h3 className="font-bold text-black mb-2 sm:mb-4 text-base sm:text-lg">Anti-Ragging Pledge:</h3>
                <div className="text-xs sm:text-sm text-black space-y-2 sm:space-y-3">
                  <p>I hereby undertake that:</p>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2 sm:ml-4">
                    <li>I will not indulge in any form of ragging or participate in any act of ragging.</li>
                    <li>I understand that ragging is prohibited and is a punishable offense under the law.</li>
                    <li>I will report any incidents of ragging to the authorities immediately.</li>
                    <li>I will not encourage, assist, or support any form of ragging activities.</li>
                    <li>I am aware that ragging can result in suspension, expulsion, or legal action.</li>
                    <li>I will promote a culture of respect and dignity among all students.</li>
                  </ul>
                  <p className="mt-2 sm:mt-4 font-medium">
                    I understand that if I am found guilty of ragging, I shall be liable for punishment as per the
                    provisions of the UGC Regulations and the applicable laws.
                  </p>
                </div>
              </div>

              {/* Acceptance Checkbox */}
              <div className="flex items-start space-x-2 sm:space-x-3 mt-4 sm:mt-6">
                <input
                  type="checkbox"
                  id="pledge-acceptance"
                  checked={pledgeAccepted}
                  onChange={(e) => setPledgeAccepted(e.target.checked)}
                  className="mt-0.5 sm:mt-1 h-4 w-4 text-[#FC5407] focus:ring-[#FC5407] border-[#cccccc] rounded"
                />
                <label htmlFor="pledge-acceptance" className="text-xs sm:text-sm text-black cursor-pointer">
                  I have read and understood the anti-ragging pledge. I hereby agree to abide by all the terms and conditions mentioned above.
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-6 sm:mt-8">
                <button
                  onClick={handlePledgeSubmit}
                  disabled={!studentName || !rollNumber || !department || !phoneNumber || !email || !pledgeAccepted}
                  className="bg-gray-100 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md sm:rounded-lg hover:bg-[#E04A06] transition-colors disabled:bg-[#cccccc] disabled:cursor-not-allowed font-medium text-sm sm:text-base"
                >
                  Submit Anti-Ragging Pledge
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Success Message */
          <div className="bg-gray-100 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-8 text-center border border-[#e0e0e0]">
            <div className="mb-4 sm:mb-6">
              <CheckCircle className="text-[#4CAF50] mx-auto mb-2 sm:mb-4" size={48} />
              <h2 className="text-xl sm:text-2xl font-bold text-[#FC5407]">Pledge Submitted Successfully!</h2>
            </div>

            <div className="bg-gray-100 border border-[#c8e6c9] rounded-md sm:rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
              <h3 className="font-semibold text-[#2E7D32] mb-1 sm:mb-2">What's Next?</h3>
              <ul className="text-[#2E7D32] text-xs sm:text-sm space-y-1">
                <li>• You will receive a confirmation email within 24 hours</li>
                <li>• Keep a copy of this confirmation for your records</li>
                <li>• You can now proceed with other admission formalities</li>
                <li>• Report any ragging incidents to: anti-ragging@iith.ac.in</li>
              </ul>
            </div>

            <div className="text-black text-sm sm:text-base">
              <p className="mb-1 sm:mb-2"><strong>Reference ID:</strong> AR-{Date.now()}</p>
              <p className="mb-2 sm:mb-4"><strong>Submitted on:</strong> {new Date().toLocaleDateString()}</p>
            </div>

            <div className="bg-gray-100 border border-[#F58A42] rounded-md sm:rounded-lg p-3 sm:p-4 mt-4">
              <p className="text-[#FC5407] font-medium text-sm sm:text-base">Emergency Contact</p>
              <p className="text-black text-xs sm:text-sm">Anti-Ragging Helpline: 1800-180-5522 (24x7)</p>
              <p className="text-black text-xs sm:text-sm">Email: anti-ragging@iith.ac.in</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AntiRaggingPledge;
