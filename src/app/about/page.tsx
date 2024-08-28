import React from 'react';
import Image from 'next/image';
import { FaQuran, FaCertificate, FaChalkboardTeacher, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
    <div className="text-4xl text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
    <p className="text-yellow-800">{description}</p>
  </div>
);

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gradient-to-b pt-32 from-yellow-50 via-yellow-100 to-blue-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-4">
            Embark on a Divine Journey with Sajid Quran Academy
          </h1>
          <p className="text-xl text-yellow-700">Illuminating Hearts, One Verse at a Time</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <Image
                className="h-96 w-full object-cover"
                src="/About us page image.jpg"
                alt="Quran"
                width={600}
                height={400}
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h2 className="text-3xl font-semibold text-blue-700 mb-4">Your Gateway to Quranic Wisdom</h2>
              <p className="text-yellow-800 text-lg leading-relaxed">
                At Sajid Quran Academy, we offer a transformative online learning experience, starting with the essential Noorani Qaida. This foundational course is your first step towards mastering Quran recitation and understanding the nuances of Tajweed. Our carefully crafted curriculum, comprising 25 comprehensive lessons, is designed to guide learners of all ages through the beautiful journey of Quranic studies.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard 
            icon={<FaQuran />}
            title="Comprehensive Curriculum"
            description="Expertly designed courses covering Noorani Qaida, Tajweed, and Quran recitation."
          />
          <FeatureCard 
            icon={<FaCertificate />}
            title="Recognized Certification"
            description="Earn valuable certificates to commemorate your Quranic learning milestones."
          />
          <FeatureCard 
            icon={<FaChalkboardTeacher />}
            title="Expert Instructors"
            description="Learn from qualified teachers passionate about spreading Quranic knowledge."
          />
          <FeatureCard 
            icon={<FaChartLine />}
            title="Progress Tracking"
            description="Stay motivated with detailed monthly reports and performance analytics."
          />
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-16">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">The Sajid Quran Academy Difference</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Personalized Learning Paths</h3>
              <p className="text-yellow-800">Tailored courses for all ages, from young learners to senior students, ensuring everyone can embark on their Quranic journey.</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Interactive Learning Environment</h3>
              <p className="text-yellow-800">Engage with our state-of-the-art online platform, fostering an immersive and interactive learning experience.</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Global Community</h3>
              <p className="text-yellow-800">Join a worldwide network of learners, sharing the beautiful journey of Quranic discovery together.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Mission</h2>
            <p className="text-yellow-800 text-lg leading-relaxed">
              We are dedicated to making Quranic education accessible to all, bridging geographical and cultural boundaries. Our mission is to nurture a deep connection with the Quran, empowering individuals to incorporate its teachings into their daily lives and spread its message of peace and wisdom.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-semibold text-blue-700 mb-4">Our Vision</h2>
            <p className="text-yellow-800 text-lg leading-relaxed">
              We envision a world where the beauty and wisdom of the Quran touch every heart. Through innovative teaching methods and technology, we aim to create a global community of Quran learners and teachers, fostering understanding, respect, and spiritual growth across cultures and generations.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">Begin Your Quranic Journey Today</h2>
          <Link
            href="https://wa.me/00923328918029"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us for a Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;