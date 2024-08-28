'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Send, BookOpen, UserCheck } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    title: "Send Inquiry",
    description: "Experience the Convenience of Learning Quran Online with our Exceptional Quran Teachers! Simply complete the form, and let our dedicated team assist you in scheduling your trial classes.",
    icon: Send,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Free Trial Online",
    description: "Check Your Schedule Upon Enrolling and Join Engaging Free Online Quran Classes for Three Days, No Payment or Credit Card Required!",
    icon: BookOpen,
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Quick Admission",
    description: "Satisfied with our free trial classes? If yes, then Secure your spot for our permanent classes by choosing a convenient monthly plan that suits you best.",
    icon: UserCheck,
    color: "from-yellow-400 to-yellow-600",
  },
];

const EnrollmentSteps = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-extrabold text-transparent pb-2 bg-clip-text bg-gradient-to-r from-yellow-500 to-blue-600 text-center mb-6"
        >
          Embark on Your Online Quran Learning Journey
        </motion.h2>
        <div className="text-center mb-12">
          <p className="text-xl font-semibold text-gray-800">
            Are you looking for a convenient and effective way to Learn Quran Online? Sajid Quran Academy is here to provide you with an exceptional online Quran learning experience. We understand the importance of accessing quality Islamic education, regardless of your location. That&apos;s why we offer comprehensive online Quran courses tailored to meet the needs of learners in the USA.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white overflow-hidden shadow-xl rounded-3xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${step.color} p-8 flex justify-center items-center`}>
                <step.icon className="h-16 w-16 text-white" />
              </div>
              <div className="px-8 py-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <Link href='/contact' className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 shadow-lg mt-14">
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnrollmentSteps;
