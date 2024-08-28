"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Book,
  Users,
  Calendar,
  MessageCircle,
  Briefcase,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Image from 'next/image'

interface NavItemProps {
  icon: React.ElementType;
  text: string;
  isActive: boolean;  
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  hasDropdown?: boolean;
  href?: string;
}

interface Service {
  name: string;
  description: string;
  link: string;
}

const services: Service[] = [
  {
    name: "Quran for Kids",
    description: "Learn the basics of Arabic alphabet and Quran reading",
    link: "/our-services/noorani-qaida",
  },
  {
    name: "Quran Recitation",
    description: "Learn proper Quran recitation techniques",
    link: "/our-services/quran-reading-and-recitation",
  },
  {
    name: "Quran Memorization",
    description: "Memorize the Quran with expert guidance",
    link: "/our-services/quran-memorization",
  },
  // {
  //   name: "Tajweed Classes",
  //   description: "Master the rules of Tajweed",
  //   link: "/our-services/tajweed",
  // },
  {
    name: "Islamic Studies",
    description: "Comprehensive courses on Islamic knowledge",
    link: "/our-services/basic-islamic-education",
  },
  
  {
    name: "Duas and Salah",
    description: "Learn essential prayers and proper prayer methods",
    link: "/our-services/duas-and-salah",
  },
  {
    name: "Quranic Arabic Language",
    description: "Learn to read and understand Quranic Arabic, making your studies more insightful.",
    link: "/our-services/quranic-arabic-language",
  },
  {
    name: "Hadith Courses",
    description: "Study authentic Hadith collections and their significance in Islamic studies.",
    link: "/our-services/hadith-courses",
  },
  {
    name: "Quran Tafsir",
    description: "Understand the Quran's message and context, enabling you to apply its teachings to your life.",
    link: "/our-services/quran-tafsir",
  },
];

const NavItem: React.FC<NavItemProps> = ({
  icon: Icon,
  text,
  isActive,
  onClick,
  hasDropdown,
  href,
}) => (
  <motion.a
    href={href}
    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors cursor-pointer duration-200 ${
      isActive
        ? "bg-[#FFD700] text-[#0000FF]"
        : "text-[#0000FF] hover:bg-[#FFD700]"
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    <Icon size={20} />
    <span>{text}</span>
    {hasDropdown &&
      (isActive ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
  </motion.a>
);

const ServicesDropdown: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    className="absolute top-full left-0 w-64 mt-2 bg-white rounded-lg shadow-lg overflow-hidden"
  >
    {services.map((service, index) => (
      <motion.a
        key={index}
        href={service.link}
        className="block px-4 py-2 text-sm text-[#0000FF] hover:bg-[#f7bf45]"
        whileHover={{ x: 5 }}
      >
        <div className="font-semibold">{service.name}</div>
        <div className="text-xs opacity-75">{service.description}</div>
      </motion.a>
    ))}
  </motion.div>
);

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [showServicesDropdown, setShowServicesDropdown] =
    useState<boolean>(false);

  const menuItems = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: undefined,
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showServicesDropdown &&
        !(event.target as Element).closest(".services-dropdown")
      ) {
        setShowServicesDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showServicesDropdown]);

  const getIcon = (item: string): React.ElementType => {
    switch (item) {
      case "About":
        return Users;
      case "Services":
        return Briefcase;
      case "Pricing":
        return Calendar;
      case "Contact":
        return MessageCircle;
      default:
        return Book;
    }
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 bg-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="/"
              className="flex items-center space-x-2 text-[#0000FF] font-bold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             <Image src="/Logo.png" alt="Logo" width={50} height={50} />
              <span className="text-2xl">Sajid Quran Academy</span>
            </motion.a>
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.name} className="relative services-dropdown">
                  <NavItem
                    href={item.link}
                    icon={getIcon(item.name)}
                    text={item.name}
                    isActive={activeItem === item.name}
                    onClick={(e: any) => {
                      if (item.name === "Services") {
                        e.preventDefault();
                        setShowServicesDropdown(!showServicesDropdown);
                        setActiveItem(showServicesDropdown ? null : "Services");
                      } else {
                        setActiveItem(item.name);
                        setShowServicesDropdown(false);
                      }
                    }}
                    hasDropdown={item.name === "Services"}
                  />
                  {item.name === "Services" && showServicesDropdown && (
                    <ServicesDropdown />
                  )}
                </div>
              ))}
            </div>
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-[#0000FF] hover:text-white hover:bg-[#FFD700] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="fixed inset-0 bg-[#FFD700] bg-opacity-75 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between p-8">
                <motion.a
                  href="/"
                  className="flex items-center space-x-2 text-[#FFD700] font-bold text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                              <Image src="/Logo.png" alt="Logo" width={50} height={50} />

                  <span className="text-2xl">Sajid Quran Academy</span>
                </motion.a>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1 cursor-pointer">
                {menuItems.map((item) => (
                  <React.Fragment key={item.name}>
                    <NavItem
                      href={item.link}
                      icon={getIcon(item.name)}
                      text={item.name}
                      isActive={activeItem === item.name}
                      onClick={(e) => {
                        if (item.name === "Services") {
                          e.preventDefault();
                          setShowServicesDropdown(!showServicesDropdown);
                          setActiveItem(
                            showServicesDropdown ? null : "Services"
                          );
                        } else {
                          setActiveItem(item.name);
                          setShowServicesDropdown(false);
                          setIsOpen(false);
                        }
                      }}
                      hasDropdown={item.name === "Services"}
                    />
                    {item.name === "Services" && showServicesDropdown && (
                      <div className="pl-4 space-y-1">
                        {services.map((service, index) => (
                          <motion.a
                            key={index}
                            href={service.link}
                            className="block px-4 py-2 text-sm text-[#FFD700] hover:bg-[#0000FF] hover:text-white rounded-md"
                            whileHover={{ x: 5 }}
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;