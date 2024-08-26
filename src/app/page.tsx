"use client";

import FreeTrialBanner from "@/components/FreeTrailBanner";
import PopularCourses from "@/components/ServicesSection";
import EnrollmentSteps from "@/components/Steps";
import WhyChooseSajidQuran from "@/components/Whychoose";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  FaStar
} from "react-icons/fa";

const DynamicCalligraphy = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const arabic =
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";
    ctx.font = "30px Scheherazade";
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.textAlign = "center";

    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      text: string;
    }[] = [];

    for (let i = 0; i < arabic.length; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        text: arabic[i],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.font = `${p.size}px Scheherazade`;
        ctx.fillText(p.text, p.x, p.y);

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-white font-sans text-gray-800">
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#aa5600] via-[#f7bf45] to-[#f7bf45] animate-gradient-xy"></div>
        <DynamicCalligraphy />
        <div className="relative z-10 text-center px-4">
          <div className="relative bottom-24">
          <p className="text-2xl italic leading-relaxed max-w-3xl mx-auto text-gray-700">
            &quot;And recite the Quran with measured recitation.&quot;
          </p>
          <p className="text-gray-600 mt-2">Surah Al-Muzzammil - Verse 4</p>
          </div>

          <h1 className="font-scheherazade text-7xl md:text-9xl mb-4 text-green-50 tracking-wide animate-float">
            ساجد القارئ
          </h1>
          <p className="font-poppins text-3xl md:text-4xl text-green-100 mb-8 animate-float-delay">
            Sajid Al-Qari
          </p>
          <p className="font-poppins text-xl md:text-2xl text-black mb-12 animate-float-delay-2">
          A Spiritual Journey Through Sound
          </p>
          <Link
            href="/services"
            className="inline-block bg-green-50 text-[#0000FF] font-semibold py-3 px-8 rounded-full text-lg hover:bg-green-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Experience the Divine
          </Link>
        </div>
      </div>

      <EnrollmentSteps />

      <FreeTrialBanner />

      <WhyChooseSajidQuran />

      <main className="container mx-auto px-4 py-12">
        <PopularCourses />

        <section className="my-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Mohammed Ahmed",
                comment:
                  "Exceptional voice and perfect tajweed. I thoroughly enjoyed listening to his recitations.",
              },
              {
                name: "Fatima Ali",
                comment:
                  "The tajweed lessons are excellent and easy to understand. Highly recommended for anyone looking to improve their recitation.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-2 mr-4">
                    <FaStar className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800">
                    {testimonial.name}
                  </h3>
                </div>
                <p className="text-blue-600 italic">
                  &quot; {testimonial.comment} &quot;
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="start-journey"
          className="mb-20 text-center bg-gradient-to-br from-yellow-500 to-orange-500 py-16 rounded-xl text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Embark on Your Quranic Journey?
          </h2>
          <p className="text-xl mb-8">
            Join us in exploring the beauty and wisdom of the Quran through
            expert guidance and inspiring recitations.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-white text-teal-800 font-bold py-3 px-8 rounded-full hover:bg-teal-100 transition-all transform hover:-translate-y-1 hover:shadow-lg"
          >
            Begin Your Journey
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Home
