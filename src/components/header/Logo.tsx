import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <motion.div 
    className="flex items-center space-x-2 text-2xl font-bold text-indigo-600"
    whileHover={{ scale: 1.05 }}
  >
    <Link to="/" className="flex items-center space-x-2">
      <CreditCard className="h-8 w-8" />
      <span>AutoCards</span>
    </Link>
  </motion.div>
);

export default Logo;