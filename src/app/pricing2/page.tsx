'use client'

import React, { useState } from 'react';
import Head from 'next/head';

interface PricingTier {
  name: string;
  price: number;
  features: string[];
  color: string;
}

const PricingCard: React.FC<{ tier: PricingTier; isPopular: boolean }> = ({ tier, isPopular }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${isPopular ? 'border-4 border-indigo-500' : ''}`}>
      <div className={`${tier.color} p-6 text-white`}>
        <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
        <p className="text-4xl font-bold">${tier.price}<span className="text-lg font-normal">/mo</span></p>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {tier.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button className={`mt-6 w-full py-3 px-4 rounded-lg text-white font-bold transition-colors duration-300 ${tier.color} hover:opacity-90`}>
          Choose Plan
        </button>
      </div>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-indigo-500 text-white py-1 px-4 rounded-bl-lg">
          Most Popular
        </div>
      )}
    </div>
  );
};

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const tiers: PricingTier[] = [
    {
      name: "Basic",
      price: isYearly ? 470 : 49,
      features: ["Quran Reading & Recitation", "Basic Islamic Studies", "2 Classes/Week", "Email Support"],
      color: "bg-gradient-to-r from-cyan-500 to-blue-500"
    },
    {
      name: "Standard",
      price: isYearly ? 758 : 79,
      features: ["Basic + Tajweed", "Quran Memorization (Hifz)", "3 Classes/Week", "Priority Email Support"],
      color: "bg-gradient-to-r from-purple-500 to-indigo-500"
    },
    {
      name: "Premium",
      price: isYearly ? 950 : 99,
      features: ["Standard + Arabic Language", "One-on-One Tutoring", "5 Classes/Week", "24/7 Phone Support"],
      color: "bg-gradient-to-r from-pink-500 to-rose-500"
    },
    {
      name: "Ultimate",
      price: isYearly ? 1430 : 149,
      features: ["All Services", "Personalized Learning Plan", "Daily Classes", "Dedicated Tutor"],
      color: "bg-gradient-to-r from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Pricing - Islamic Education Services</title>
        <meta name="description" content="Affordable pricing plans for comprehensive Islamic education" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Choose Your Learning Path</h1>
        
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 flex items-center">
            <button 
              className={`py-2 px-4 rounded-full ${!isYearly ? 'bg-indigo-500 text-white' : 'text-gray-700'}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button 
              className={`py-2 px-4 rounded-full ${isYearly ? 'bg-indigo-500 text-white' : 'text-gray-700'}`}
              onClick={() => setIsYearly(true)}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} isPopular={index === 2} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">All Plans Include:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "2 FREE trial Classes",
              "One-on-One Classes",
              "Female Tutors Available",
              "40 Minutes Daily Class",
              "Flexible Class Scheduling",
              "Quran Reading with Tajweed",
              "Basic Islamic Knowledge",
              "Complete Salah (Namaz) Training",
              "Daily Life Supplications",
              "Famous Ahadith Studies"
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;