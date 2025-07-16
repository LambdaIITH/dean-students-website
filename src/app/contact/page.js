"use client";

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studentId: '',
    affiliation: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('Message sent successfully! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      studentId: '',
      affiliation: '',
      subject: '',
      message: '',
    });
  };

  // Dean Students Details
  const deanDetails = {
    name: 'Dr. Prasanth Kumar R.',
    position: 'Professor, Dean Students',
    image: 'https://iith.ac.in/assets/images/profiles/Prasanth_Kumar_R.jpg',
    officeAddress: {
      room: 'C-415',
      block: 'Academic Block C',
      fullAddress: 'Indian Institute of Technology Hyderabad, Kandi-502284, Sangareddy, Telangana, India',
    },
    email: 'rpkumar@mae.iith.ac.in',
    officePhone: '(040) 2301 - 6652',
    // Updated mapEmbedUrl to specifically search for Academic Block C
    mapEmbedUrl: 'https://maps.google.com/maps?q=Academic%20Block%20C,%20IIT%20Hyderabad&t=&z=17&ie=UTF8&iwloc=&output=embed',
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Contact Form Section */}
      <div className="max-w-2xl w-full bg-white rounded-lg p-8 space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-iith-orange-dark mb-6">
          Contact Dean Students
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Please use the form below to send us your inquiries. We aim to respond within 2-3 business days.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-iith-orange-light focus:border-iith-orange-light sm:text-sm bg-gray-100"
              placeholder="Your Full Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-iith-orange-light focus:border-iith-orange-light sm:text-sm bg-gray-100"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-iith-orange-light focus:border-iith-orange-light sm:text-sm bg-gray-100"
              placeholder="+91 12345 67890"
            />
          </div>

          <div>
            <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
              Student ID / Roll Number (Optional)
            </label>
            <input
              type="text"
              name="studentId"
              id="studentId"
              value={formData.studentId}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-iith-orange-light focus:border-iith-orange-light sm:text-sm bg-gray-100"
              placeholder="e.g., xx24BTECH110xx"
            />
          </div>

          <div>
            <label htmlFor="affiliation" className="block text-sm font-medium text-gray-700 mb-1">
              Your Affiliation (Optional)
            </label>
            <select
              name="affiliation"
              id="affiliation"
              value={formData.affiliation}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-iith-orange-light focus:border-iith-orange-light sm:text-sm bg-gray-100"
            >
              <option value="">Select an option</option>
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="alumni">Alumni</option>
              <option value="prospective-student">Prospective Student</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-iith-orange-light focus:border-iith-orange-light sm:text-sm bg-gray-100"
              placeholder="Brief summary of your inquiry"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Your Message / Query
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-iith-orange-light focus:border-iith-orange-light sm:text-sm bg-gray-100"
              placeholder="Write your detailed message here..."
            ></textarea>
          </div>

          {status && (
            <div className={`text-center py-2 rounded-md ${status.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {status}
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#F58A42] hover:bg-[#FC5407] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F58A42] transition-colors duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Dean Students Details Section */}
      <div className="max-w-2xl w-full bg-white rounded-lg p-8 space-y-6 mt-12">
        <h2 className="text-4xl font-extrabold text-center text-iith-orange-dark mb-6">
          Dean Students Contact Details
        </h2>
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
          {/* Dean's Photo */}
          <div className="flex-shrink-0">
            <img
              src={deanDetails.image}
              alt={deanDetails.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-iith-orange-dark shadow-md"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/128x128/F58A42/ffffff?text=Dean"; // Fallback placeholder
              }}
            />
          </div>
          {/* Dean's Info */}
          <div className="flex-grow text-center sm:text-left space-y-2">
            <h3 className="text-2xl font-bold text-gray-900">{deanDetails.name}</h3>
            <p className="text-lg text-gray-700 font-medium">{deanDetails.position}</p>
            <p className="text-gray-700">
              <span className="font-semibold">Room:</span> {deanDetails.officeAddress.room}, {deanDetails.officeAddress.block}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Email:</span>{' '}
              <a href={`mailto:${deanDetails.email}`} className="text-blue-600 hover:text-blue-800 underline">
                {deanDetails.email}
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Office Phone:</span>{' '}
              <a href={`tel:${deanDetails.officePhone.replace(/\s/g, '').replace(/-/g, '')}`} className="text-blue-600 hover:text-blue-800 underline">
                {deanDetails.officePhone}
              </a>
            </p>
          </div>
        </div>

        {/* Location Map for Academic Block C */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Academic Block C Location</h3>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
            <iframe
              src={deanDetails.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IIT Hyderabad Academic Block C Location"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
          <p className="text-center text-gray-600 text-sm mt-2">
            {deanDetails.officeAddress.fullAddress}
          </p>
        </div>
      </div>
    </div>
  );
}

