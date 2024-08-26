import React from 'react';
import { Clock, DollarSign, Users, GraduationCap, BookOpen, Award } from 'lucide-react';

const features = [
  {
    title: "Flexible Schedule 24/7",
    description: "Access expert Quran teachers anytime, anywhere. Perfect for busy families and individuals seeking convenient online Quran classes.",
    icon: Clock,
  },
  {
    title: "Money Back Guarantee",
    description: "Unsatisfied with your first month? We offer a full refund, ensuring your investment in Quranic education is risk-free.",
    icon: DollarSign,
  },
  {
    title: "Affordable Tuition",
    description: "Competitive pricing with special discounts on family packages and reduced rates for those in need. Quality Quran education accessible to all.",
    icon: Users,
  },
  {
    title: "Qualified Quran Teachers",
    description: "Our rigorously trained and certified male and female instructors provide exceptional online Quran education for all ages.",
    icon: GraduationCap,
  },
  {
    title: "Authentic Curriculum",
    description: "Structured lessons rooted in fundamental Islamic teachings, delivered through comprehensive, pre-designed programs.",
    icon: BookOpen,
  },
  {
    title: "Certifications",
    description: "Receive a certificate of achievement upon course completion, recognizing your dedication and proficiency in Quranic studies.",
    icon: Award,
  },
];

const WhyChooseSajidQuran = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Sajid Al Qari?
          </h2>
          <p className="mt-4 text-xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-blue-600">
            Our Competitive Features
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="pt-6"
              >
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSajidQuran;