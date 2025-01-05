import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

interface NavLinksProps {
  className?: string;
  onItemClick?: () => void;
}

const NavLinks = ({ className = '', onItemClick }: NavLinksProps) => {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/cities', label: 'Cities' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <ul className={className}>
      {links.map(({ to, label }) => (
        <motion.li key={to} whileHover={{ y: -2 }}>
          <NavLink
            to={to}
            onClick={onItemClick}
            className={({ isActive }) =>
              `cursor-pointer ${isActive ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600'}`
            }
          >
            {label}
          </NavLink>
        </motion.li>
      ))}
    </ul>
  );
};

export default NavLinks;