import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900"
  >
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have questions about MetroConnect? We're here to help! Fill out the form below
          and we'll get back to you as soon as possible.
        </p>
      </motion.div>

      <ContactForm />
    </div>
  </motion.div>
);

export default Contact;