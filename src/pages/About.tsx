import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="pt-20 min-h-screen bg-gray-50"
  >
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About MetroConnect</h1>
      <p className="text-lg text-gray-600">
        MetroConnect is revolutionizing urban transit with smart card technology...
      </p>
    </div>
  </motion.div>
);

export default About;