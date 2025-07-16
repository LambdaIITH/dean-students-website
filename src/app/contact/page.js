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

  return (
    // Outer div: Overall page content area background is white.
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Inner div (form container): Removed shadow-xl class */}
      <div className="max-w-2xl w-full bg-white rounded-lg p-8 space-y-6"> {/* shadow-xl removed */}
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
    </div>
  );
}
