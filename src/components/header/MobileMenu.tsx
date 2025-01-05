import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden"
      >
        <NavLinks
          className="pt-4 pb-3 space-y-2"
          onItemClick={onClose}
        />
        <motion.div className="pt-4">
          <Link
            to="/get-card"
            className="block w-full bg-indigo-600 text-white text-center px-6 py-2 rounded-full"
            onClick={onClose}
          >
            Get Card
          </Link>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileMenu;