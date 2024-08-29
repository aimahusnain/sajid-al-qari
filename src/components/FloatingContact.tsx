"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Contact, PhoneCall, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface Contact {
  id: number;
  name: string;
  link: string;
  icon: React.ElementType;
}

const Contacts: Contact[] = [
  { id: 1, name: "WhatsApp", link: "https://wa.me/923075491427", icon: MessageCircle },
  { id: 2, name: "Skype", link: "skype:sajid.iqbal1992?chat", icon: PhoneCall },
];

const FloatingContactButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const ContactItem: React.FC<Contact> = ({ name, link, icon: Icon }) => (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={link} className="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300 transform group-hover:scale-105">
        <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{name}</span>
        <Icon size={20} className="text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
      </Link>
    </motion.div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mb-4 space-y-3 w-64"
            initial={{ opacity: 0, scale: 0.8, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {Contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                <ContactItem {...contact} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={toggleOpen}
        className="group w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="sr-only">Toggle Contact list</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={28} /> : <PhoneCall size={28} />}
        </motion.div>
        <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-1">
          {isOpen ? "Close" : "Contact us"}
        </span>
      </motion.button>
    </div>
  );
};

export default FloatingContactButton;