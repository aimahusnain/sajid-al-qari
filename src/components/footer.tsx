"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsSkype } from "react-icons/bs";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const AnimatedFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("animated-footer");
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (footerPosition < screenPosition) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="animated-footer"
      className="bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 text-white py-16 relative overflow-hidden"
    >
      <div
        className={`container mx-auto px-4 relative z-10 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Sajid Quran Academy",
              content: (
                <p className="text-yellow-300">
                  Embark on a spiritual journey through the beauty of Quranic
                  recitation.
                </p>
              ),
            },
            {
              title: "Quick Links",
              content: (
                <ul className="space-y-2">
                  {[
                    { title: "Home", link: "/" },
                    { title: "About", link: "/about" },
                    { title: "Services", link: "/our-services" },
                    { title: "Pricing", link: "pricing" },
                    { title: "Contact", link: "contact" },
                  ].map((footerlink) => (
                    <li key={footerlink.title}>
                      <Link
                        href={footerlink.link}
                        className="text-yellow-300 hover:text-white transition-colors"
                      >
                        {footerlink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ),
            },
            {
              title: "Contact Us",
              content: (
                <div className="space-y-2">
                  <p className="flex items-center">
                    <FaEnvelope className="mr-2 text-yellow-300" />{" "}
                    hafiz.sajidiqbal786@gmail.com
                  </p>
                  <p className="flex items-center">
                    <FaPhone className="mr-2 text-yellow-300" /> +92332-8918029
                  </p>
                  <p className="flex items-center">
                    <BsSkype className="mr-2 text-yellow-300" /> Sajid.iqbal1992
                  </p>
                </div>
              ),
            },
            {
              title: "Follow Us",
              content: (
                <div className="flex space-x-4">
                  {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
                    (Icon, index) => (
                      <a
                        key={index}
                        href="#"
                        className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-400 transition-colors transform hover:scale-110 hover:rotate-12 transition-transform duration-300"
                      >
                        <Icon className="text-blue-900 text-xl" />
                      </a>
                    )
                  )}
                </div>
              ),
            },
          ].map((section, index) => (
            <div
              key={index}
              className="space-y-4 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h4 className="text-xl font-semibold mb-4 text-yellow-300">
                {section.title}
              </h4>
              {section.content}
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-yellow-500 text-center">
          <p>
            &copy; {new Date().getFullYear()} Sajid Quran Academy. All rights
            reserved.
          </p>
        </div>
        {/* Design Credit */}
        <div className="mt-4 text-center text-gray-300">
          <p>Designed by <Link target="_blank" href="https://webkin-solutions.vercel.app" className="text-yellow-300 hover:underline" rel="noopener noreferrer">Webkin Solutions</Link></p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-yellow-600 opacity-30"></div>
        <svg
          className="absolute bottom-0 left-0 right-0 animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fbbf24"
            fillOpacity="0.2"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 left-0 right-0 animate-wave-slow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fbbf24"
            fillOpacity="0.2"
            d="M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,186.7C672,181,768,139,864,128C960,117,1056,139,1152,144C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </footer>
  );
};

export default AnimatedFooter;
