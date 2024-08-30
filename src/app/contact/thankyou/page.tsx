'use client'

import React from 'react';
import { FaCheckCircle, FaHome, FaQuran } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 260, damping: 20 }}
        >
          <FaCheckCircle className="text-green-500 text-7xl mx-auto mb-6" />
        </motion.div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-xl text-gray-600 mb-8">Your message has been sent successfully. We'll get back to you soon.</p>
        <div className="flex flex-col space-y-4">
          <Link href="/" className="bg-amber-500 text-white font-bold py-3 px-6 rounded-full hover:bg-amber-600 transition duration-300 flex items-center justify-center">
            <FaHome className="mr-2" />
            Back to Home
          </Link>
          <Link href="/pricing" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 flex items-center justify-center">
            <FaQuran className="mr-2" />
            Explore Courses
          </Link>
        </div>
      </motion.div>
    </main>
  );
}