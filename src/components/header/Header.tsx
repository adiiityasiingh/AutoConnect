import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';
import MobileMenu from './MobileMenu';
import HeaderThemeToggle from './HeaderThemeToggle';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.95)']
  );

  const headerBackgroundDark = useTransform(
    scrollY,
    [0, 100],
    ['rgba(17, 24, 39, 0.5)', 'rgba(0, 0, 0, 0.95)']
  );

  return (
    <motion.header 
      className="fixed w-full backdrop-blur-sm z-50 shadow-sm dark:shadow-gray-800/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: document.documentElement.getAttribute('data-theme') === 'dark' 
          ? headerBackgroundDark 
          : headerBackground
      }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks className="flex space-x-8" />
            <div className="flex items-center space-x-4">
              <HeaderThemeToggle />
              <AuthButtons />
            </div>
          </div>

          <div className="flex items-center space-x-4 md:hidden">
            <HeaderThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300"
            >
              {isOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </nav>
    </motion.header>
  );
};

export default Header;