'use client'

// pages/pricing.tsx

import React, { useState } from 'react';
import Head from 'next/head';

interface PricingTier {
  name: string;
  price: number;
  features: string[];
  color: string;
}

const PricingMinaret: React.FC<{ tier: PricingTier }> = ({ tier }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col items-center mb-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-48 h-64 ${tier.color} rounded-t-full transition-all duration-300 ${isHovered ? 'h-72' : ''}`}>
        <div className="h-full flex flex-col items-center justify-center text-white p-4">
          <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
          <p className="text-3xl font-bold mb-4">${tier.price}/mo</p>
          <ul className="text-sm text-center">
            {tier.features.map((feature, index) => (
              <li key={index} className="mb-1">{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`w-56 h-12 ${tier.color} rounded-b-lg shadow-lg transition-all duration-300 ${isHovered ? 'h-16' : ''}`}>
        <button className="w-full h-full text-white font-bold hover:bg-opacity-80 transition-colors duration-300">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      name: "Basic",
      price: 49,
      features: ["Quran Reading & Recitation", "Basic Islamic Studies", "2 Classes/Week"],
      color: "bg-emerald-500"
    },
    {
      name: "Standard",
      price: 79,
      features: ["Basic + Tajweed", "Quran Memorization (Hifz)", "3 Classes/Week"],
      color: "bg-teal-500"
    },
    {
      name: "Premium",
      price: 99,
      features: ["Standard + Arabic Language", "One-on-One Tutoring", "5 Classes/Week"],
      color: "bg-cyan-500"
    },
    {
      name: "Ultimate",
      price: 149,
      features: ["All Services", "Personalized Learning Plan", "Daily Classes"],
      color: "bg-blue-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Head>
        <title>Pricing - Islamic Education Services</title>
        <meta name="description" content="Affordable pricing plans for comprehensive Islamic education" />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Our Pricing Plans</h1>
        <div className="flex flex-wrap justify-center items-end">
          {tiers.map((tier, index) => (
            <PricingMinaret key={index} tier={tier} />
          ))}
        </div>
        <div className="mt-16 bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">All Plans Include:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <li key={index} className="flex items-center">
                <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Pricing;