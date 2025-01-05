import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-5 right-5 z-50 p-3 rounded-full
        bg-white/10 backdrop-blur-sm border border-white/20
        shadow-lg hover:shadow-xl transition-all duration-300
        dark:bg-gray-800/50 dark:border-gray-700/50"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="text-gray-800 dark:text-gray-100"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;