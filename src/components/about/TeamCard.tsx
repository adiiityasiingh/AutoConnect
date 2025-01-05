import React from 'react';
import { motion } from 'framer-motion';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamCard = ({ name, role, image }: TeamCardProps) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
  >
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-bold text-center mb-1">{name}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-center">{role}</p>
  </motion.div>
);