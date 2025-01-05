import React from 'react';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthButtons = () => (
  <div className="flex items-center space-x-4">
    <motion.button whileHover={{ scale: 1.05 }}>
      <Link to="/login" className="flex items-center space-x-2 text-indigo-600">
        <LogIn className="h-5 w-5" />
        <span>Login</span>
      </Link>
    </motion.button>
    <motion.button whileHover={{ scale: 1.05 }}>
      <Link
        to="/get-card"
        className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
      >
        Get Card
      </Link>
    </motion.button>
  </div>
);

export default AuthButtons;