'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sprout, TreeDeciduous } from 'lucide-react';

const currencies = ['USD', 'CAD', 'GBP', 'AUD', 'EUR'];

interface PricingPlan {
  name: string;
  duration: string;
  type: string;
  prices: { [key: string]: number };
  icon: React.ElementType;
  isSpecial: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: '4 Classes/Month',
    duration: '30 minutes',
    type: 'One to One Class',
    prices: { USD: 30, CAD: 30, GBP: 20, AUD: 30, EUR: 20 },
    icon: Leaf,
    isSpecial: false,
  },
  {
    name: '8 Classes/Month',
    duration: '30 minutes',
    type: 'One to One Class',
    prices: { USD: 35, CAD: 35, GBP: 22, AUD: 35, EUR: 22 },
    icon: Sprout,
    isSpecial: false,
  },
  {
    name: '12 Classes/Month',
    duration: '30 minutes',
    type: 'One to One Class',
    prices: { USD: 40, CAD: 40, GBP: 25, AUD: 40, EUR: 25 },
    icon: TreeDeciduous,
    isSpecial: false,
  },
  {
    name: '4 Classes/Month',
    duration: '60 minutes',
    type: 'One to One Class',
    prices: { USD: 50, CAD: 50, GBP: 35, AUD: 50, EUR: 35 },
    icon: Leaf,
    isSpecial: true,
  },
  {
    name: '8 Classes/Month',
    duration: '60 minutes',
    type: 'One to One Class',
    prices: { USD: 60, CAD: 60, GBP: 40, AUD: 60, EUR: 40 },
    icon: Sprout,
    isSpecial: true,
  },
  {
    name: '12 Classes/Month',
    duration: '60 minutes',
    type: 'One to One Class',
    prices: { USD: 70, CAD: 70, GBP: 50, AUD: 70, EUR: 50 },
    icon: TreeDeciduous,
    isSpecial: true,
  },
];

const getCurrencySymbol = (curr: string): string => {
  switch (curr) {
    case 'GBP': return '£';
    case 'EUR': return '€';
    default: return '$';
  }
};

interface PlanCardProps {
  plan: PricingPlan;
  currency: string;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, currency }) => {
  const Icon = plan.icon;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative overflow-hidden rounded-3xl p-8 ${
        plan.isSpecial ? 'bg-gradient-to-br from-purple-600 to-indigo-600' : 'bg-gradient-to-br from-green-500 to-emerald-400'
      } text-white shadow-xl`}
    >
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white opacity-10"></div>
      <Icon className="mb-4 h-12 w-12 text-white" />
      <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
      <p className="mb-1 text-sm opacity-80">{plan.duration} Class</p>
      <p className="mb-4 text-sm opacity-80">{plan.type}</p>
      <div className="mb-6 text-4xl font-bold">
        {getCurrencySymbol(currency)}
        {plan.prices[currency]}
        <span className="text-lg font-normal">/month</span>
      </div>
      <button className="w-full rounded-full bg-white bg-opacity-20 py-2 px-4 font-semibold text-white transition duration-300 hover:bg-opacity-30">
        Choose Plan
      </button>
      {plan.isSpecial && (
        <div className="absolute top-4 right-4 rotate-45 bg-yellow-400 px-2 py-1 text-xs font-bold text-purple-900">
          SPECIAL
        </div>
      )}
    </motion.div>
  );
};

export default function PricingPage() {
  const [currency, setCurrency] = useState('USD');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 py-20 text-white">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center text-5xl font-bold"
        >
          Elevate Your Quranic Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 text-center text-xl"
        >
          Choose a plan that illuminates your path to spiritual growth
        </motion.p>

        <div className="mb-12 flex justify-center">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="rounded-full bg-white bg-opacity-20 py-2 px-4 font-semibold text-white"
          >
            {currencies.map((curr) => (
              <option key={curr} value={curr} className="bg-purple-900">
                {curr}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <PlanCard key={index} plan={plan} currency={currency} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white bg-opacity-10 p-8 backdrop-blur-lg"
        >
          <h2 className="mb-6 text-center text-3xl font-semibold">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold">Can I switch plans?</h3>
              <p className="text-indigo-100">Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Is there a long-term commitment?</h3>
              <p className="text-indigo-100">No, all our plans are billed monthly, and you can cancel at any time without penalty.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">Are there any additional fees?</h3>
              <p className="text-indigo-100">No hidden fees! The price you see is the price you pay. All course materials are included in your subscription.</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 text-center">
          <h2 className="mb-4 text-3xl font-semibold">Need guidance in choosing a plan?</h2>
          <p className="mb-8 text-xl text-indigo-100">Reach out for a complimentary consultation to discover the ideal plan for your spiritual journey.</p>
          <button className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 py-3 px-8 font-bold text-white transition duration-300 hover:from-purple-600 hover:to-indigo-600">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}