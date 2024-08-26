"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const FreeTrialBanner = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <h2 className="sm:text-4xl text-3xl font-extrabold text-gray-900 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-blue-600">
                  EXPERIENCE COMPLIMENTARY ONLINE QURAN CLASSES
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Avail our Complimentary Trial Classes by Completing the Form to
                Learn Quran Online. Experience the Three-Day Free Trial Offer
                from <span className="font-semibold">Sajid Al Qari.</span>{" "}
                Enroll Now!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 md:py-4 md:text-lg md:px-10"
                  >
                    Book Free Trial Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </Link>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-yellow-600 bg-yellow-100 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10"
                >
                  2 Days Free Trial
                </motion.span>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-90"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <BookOpen className="h-64 w-64 text-white opacity-25" />
              </motion.div>
              <img
                className="h-full w-full object-cover"
                src="/api/placeholder/1000/1000"
                alt="Quran learning"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FreeTrialBanner;
