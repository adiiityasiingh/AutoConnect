import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <CreditCard className="h-8 w-8" />
              <span className="text-2xl font-bold">AutoCards</span>
            </motion.div>
            <p className="text-gray-300 mb-6">
              Making urban transit seamless and convenient with smart technology.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Cities', 'Pricing', 'Support'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest features and city launches.
            </p>
            <form className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-indigo-700 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-indigo-900 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        <div className="border-t border-indigo-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} AutoConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;