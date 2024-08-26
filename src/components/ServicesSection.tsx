'use client'

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const courses = [
  {
    title: "Quran for Kids (Noorani Qaida)",
    description:
      "Engaging and fun Quranic education for children with kid-friendly instructors.",
    icon: "👶",
    link: "/our-services/noorani-qaida"
  },
  {
    title: "Quran Recitation",
    description:
      "Perfect for beginners. Learn proper pronunciation and Tajweed rules with experienced instructors.",
    icon: "🎙️",
    link: "/our-services/quran-reading-and-recitation"
  },
  {
    title: "Quran Memorization",
    description:
      "Our Hifz program helps you memorize the Quran with a structured curriculum and expert tutors.",
    icon: "📚",
    link: "/our-services/quran-memorization"
  },
  {
    title: "Islamic Studies",
    description:
      "Gain comprehensive knowledge covering Hadith, Fiqh, Seerah, and more.",
    icon: "🕌",
    link: "/our-services/basic-islamic-education"
  },
  {
    title: "Quranic Arabic Language",
    description:
      "Learn to read and understand Quranic Arabic, making your studies more insightful.",
    icon: "🔤",
    link: "/our-services/quranic-arabic-language"
  },
  {
    title: "Hadith Courses",
    description:
      "Study authentic Hadith collections and their significance in Islamic studies.",
    icon: "📜",
    link: "/our-services/hadith-courses"
  },
  {
    title: "Duas & Salah",
    description:
      "Gain a basic understanding of Islamic teachings and principles in a short time.",
    icon: "⏱️",
    link: "/our-services/duas-and-salah"
  },
  {
    title: "Quran Tafsir",
    description:
      "Understand the Quran's message and context, enabling you to apply its teachings to your life.",
    icon: "📖",
    link: "/our-services/quran-tafsir"
  },
];

const features = [
  "Personalized one-on-one tutoring",
  "Female tutors available",
  "Customized class schedules",
  "40-minute daily classes",
  "5 days a week",
  "2 FREE trial classes",
  "Flexible timing",
  "Interactive online platform",
  "Certified instructors",
  "Regular progress reports",
  "Access to recorded lessons",
];

const ServicesSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-yellow-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">
          Our Popular Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-yellow-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
              <div className="bg-yellow-400 p-4">
                <a
                  href={course.link}
                  className="text-blue-800 font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* New Program Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="bg-white rounded-lg shadow-lg mt-5 p-8 border border-yellow-300"
      >
        <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Program Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg
                className="h-6 w-6 text-yellow-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
