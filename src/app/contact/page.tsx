'use client'

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaQuran, FaCalendar, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import { BsSkype } from 'react-icons/bs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: formData.name,
          email: formData.email,
          phone: `${formData.phone}`,
          preferredDate: `${formData.preferredDate}`,
          preferredTime: `${formData.preferredTime}`,
        //   message: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
          message: `${formData.message}`,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '', phone: '', preferredTime: '', preferredDate: '' });
      } else {
        const result = await response.json();
        alert(`Failed to send message: ${result.error}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    }
  };
  return (
    <main className="min-h-screen pt-32 bg-gradient-to-b from-blue-50 to-blue-100 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-r from-amber-400 to-amber-500 transform -skew-y-6"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-300 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl font-bold text-center text-white mb-16 shadow-text">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold text-amber-600 mb-8 flex items-center">
              <FaQuran className="mr-3 text-blue-500" />
              Get in Touch
            </h2>
            <div className="space-y-6">
              <p className="flex items-center text-gray-700 text-lg">
                <FaEnvelope className="mr-3 text-blue-500 text-2xl" />
                hafiz.sajidiqbal786@gmail.com
              </p>
              <p className="flex items-center text-gray-700 text-lg">
                <FaPhone className="mr-3 text-blue-500 text-2xl" />
                +923075491427
              </p>
              <p className="flex items-center text-gray-700 text-lg">
                <BsSkype className="mr-3 text-blue-500 text-2xl" />
                Sajid.iqbal1992
              </p>
            </div>
            <div className="mt-8">
              <Image
                src="/contact us page image.jpg"
                alt="Quran Study"
                width={300}
                height={200}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white bg-opacity-90 rounded-lg shadow-xl p-8 transform hover:scale-105 transition duration-300">
            <h2 className="text-3xl font-semibold text-amber-600 mb-8">Book a Free Trial</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-gray-700 font-semibold mb-2 flex items-center">
                    <FaCalendar className="mr-2 text-blue-500" />
                    Preferred Date (optional)
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-gray-700 font-semibold mb-2 flex items-center">
                    <FaClock className="mr-2 text-blue-500" />
                    Preferred Time (optional)
                  </label>
                  <input
                    type="time"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 transition duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-white font-bold py-3 px-4 rounded-md hover:from-amber-500 hover:to-amber-600 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                <FaQuran className="mr-2" />
                Book Free Trial
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shadow-text {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </main>
  );
}