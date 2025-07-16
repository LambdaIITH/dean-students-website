"use client";
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronRight, Mail, Phone } from 'lucide-react';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What documents do I need to bring on the first day?",
      answer: "You need to bring your admission letter, original certificates, passport-size photographs, medical certificate, and any other documents mentioned in your admission confirmation email."
    },
    {
      question: "How do I get my hostel room allocation?",
      answer: "Hostel room allocation is done automatically based on your admission. You will receive your room details via email before the semester begins. Report to the hostel office on your arrival date."
    },
    {
      question: "What are the mess facilities available on campus?",
      answer: "The campus has multiple mess facilities serving vegetarian and non-vegetarian food. Each hostel has its own mess, and there are also canteens and food courts available across the campus."
    },
    {
      question: "How can I access the library and what are the timings?",
      answer: "The library is accessible with your student ID card. It's open from 8:00 AM to 12:00 AM on weekdays and 9:00 AM to 10:00 PM on weekends. Digital resources are available 24/7."
    },
    {
      question: "What sports facilities are available?",
      answer: "The campus has a fully equipped gymnasium, swimming pool, tennis courts, basketball courts, football ground, cricket ground, and indoor sports facilities for badminton, table tennis, and more."
    },
    {
      question: "How do I apply for scholarships?",
      answer: "Scholarship applications are available through the student portal. Check the financial aid section for various government and institute scholarships. Merit-based and need-based scholarships are available."
    },
    {
      question: "What is the dress code for students?",
      answer: "There is no strict dress code for regular classes. However, formal attire is required for certain events, seminars, and laboratory sessions. Specific guidelines are provided for each occasion."
    },
    {
      question: "How can I get medical assistance on campus?",
      answer: "The campus has a health center with qualified doctors and nurses. Emergency medical services are available 24/7. For serious cases, arrangements are made for nearby hospitals."
    }
  ];

  return (
    <section className="bg-gray-100 rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <HelpCircle className="mr-3 text-blue-600" />
        Frequently Asked Questions (Non-Academic)
      </h2>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 hover:bg-gray-100 transition-colors flex items-center justify-between"
            >
              <span className="font-semibold text-gray-800">{faq.question}</span>
              {expandedFAQ === index ? (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronRight className="h-5 w-5 text-gray-500" />
              )}
            </button>

            {expandedFAQ === index && (
              <div className="p-4 pt-0 border-t border-gray-200">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQSection;
