import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Wifi, Clock, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile App Integration',
      description: 'Manage your card, track expenses, and reload balance from your phone'
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: 'Contactless Payment',
      description: 'Quick and secure NFC payments for seamless travel'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Real-time Updates',
      description: 'Instant notifications for transactions and balance updates'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure Technology',
      description: 'Advanced encryption and fraud protection for your peace of mind'
    }
  ];

  return (
    <section className="py-20 bg-white bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Cutting-edge Technology</h2>
          <p className="text-xl text-gray-600 dark:text-indigo-400">Experience the future of transit payments</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl transition-all duration-300 group-hover:bg-indigo-600 group-hover:shadow-lg">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-indigo-600 mb-6 group-hover:text-white dark:text-indigo-400"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;