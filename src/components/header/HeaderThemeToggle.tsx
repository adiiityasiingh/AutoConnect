import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const HeaderThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative p-2 rounded-full 
        bg-gradient-to-br from-gray-100 to-gray-200 
        dark:from-gray-800 dark:to-gray-900
        shadow-md hover:shadow-lg
        transition-all duration-300 ease-in-out"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 180 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative z-10 text-gray-800 dark:text-gray-100"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 dark:opacity-10 transition-opacity duration-300" />
    </motion.button>
  );
};

export default HeaderThemeToggle;