import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, CreditCard } from 'lucide-react';

const Hero = () => {
  const benefits = [
    { icon: <Zap />, title: 'Tap & Go', description: 'Quick contactless payments' },
    { icon: <Globe />, title: 'Multi-City Access', description: 'Use anywhere, anytime' },
    { icon: <CreditCard />, title: 'Instant Recharge', description: 'Add funds in seconds' },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b dark:from-gray-900 dark:to-gray-800 from-indigo-50 to-white  pt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Your Smart
              <span className="text-indigo-600 dark:text-indigo-400"> Transit Card</span>
              <br />
              For Modern Cities
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Experience seamless travel across cities with one smart card.
              Tap, ride, and go with MetroConnect.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold
                shadow-lg hover:shadow-xl transition-all duration-300
                bg-gradient-to-r from-indigo-600 to-indigo-700
                hover:from-indigo-700 hover:to-indigo-800
                dark:from-indigo-500 dark:to-indigo-600
                dark:hover:from-indigo-600 dark:hover:to-indigo-700"
            >
              Get Your Card Now
            </motion.button>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="w-full aspect-[1.586/1] bg-gradient-to-r from-indigo-600 to-purple-600
                dark:from-indigo-500 dark:to-purple-500 rounded-3xl shadow-2xl
                transform perspective-1000 relative overflow-hidden"
              whileHover={{ rotateY: 15, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 p-8 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <CreditCard className="h-12 w-12 mb-4" />
                    <p className="text-2xl font-bold">AutoCards</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-75">Valid thru</p>
                    <p className="font-mono">12/28</p>
                  </div>
                </div>
                <div className="absolute bottom-8 left-8">
                  <p className="font-mono text-lg mb-2">**** **** **** 1234</p>
                  <p className="text-sm opacity-75">Aditya Singh</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg 
                hover:shadow-xl transition-shadow"
            >
              <div className="text-indigo-600 dark:text-indigo-400 mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;