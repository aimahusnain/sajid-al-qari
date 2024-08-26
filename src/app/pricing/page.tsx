import React from 'react';
import Head from 'next/head';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-yellow-50 to-blue-100">
      <Head>
        <title>Pricing - Comprehensive Islamic Education Program</title>
        <meta name="description" content="Pricing plans for our Islamic education programs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-4">
          Choose Your Learning Path
        </h1>
        <p className="text-center text-yellow-700 mb-12 max-w-2xl mx-auto">
          Select the plan that best fits your learning goals and schedule. All plans include access to our comprehensive curriculum and experienced tutors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 ${plan.featured ? 'border-4 border-blue-500' : ''}`}>
              <div className={`p-8 ${plan.featured ? 'bg-blue-500 text-white' : 'bg-yellow-50'}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm mb-4">{plan.description}</p>
                <div className="text-4xl font-bold mb-4">${plan.price}<span className="text-lg font-normal">/month</span></div>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300 ${plan.featured ? 'bg-white text-blue-500 hover:bg-yellow-50' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>
                  Get Started
                </button>
              </div>
              <ul className="p-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">All Plans Include:</h2>
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
                <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-3xl my-10 bg-white bg-opacity-10 p-8 backdrop-blur-lg"
        >
          <h2 className="mb-6 text-center text-3xl font-semibold text-blue-800">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-blue-700">Can I switch plans?</h3>
              <p className="text-yellow-800">Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-blue-700">Is there a long-term commitment?</h3>
              <p className="text-yellow-800">No, all our plans are billed monthly, and you can cancel at any time without penalty.</p>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-blue-700">Are there any additional fees?</h3>
              <p className="text-yellow-800">No hidden fees! The price you see is the price you pay. All course materials are included in your subscription.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Not sure which plan to choose?</h2>
          <p className="text-yellow-700 mb-6">Book a free consultation with our education advisors to find the perfect learning path for you.</p>
          <button className="bg-blue-500 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
            Schedule Consultation
          </button>
        </div>
      </main>
    </div>
  );
};

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for beginners",
    price: 49,
    features: [
      "2 classes per week",
      "Basic Quran reading",
      "Fundamental Islamic studies",
      "Email support"
    ]
  },
  {
    name: "Standard",
    description: "Most popular choice",
    price: 99,
    featured: true,
    features: [
      "4 classes per week",
      "Quran reading with Tajweed",
      "Arabic language basics",
      "Comprehensive Islamic studies",
      "24/7 online support"
    ]
  },
  {
    name: "Premium",
    description: "For dedicated learners",
    price: 149,
    features: [
      "Daily classes",
      "Quran memorization (Hifz)",
      "Advanced Arabic language",
      "In-depth Islamic studies",
      "One-on-one tutoring",
      "Priority support"
    ]
  }
];

export default PricingPage;