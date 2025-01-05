import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Hero />
    <Features />
    <Pricing />
    <FAQ />
  </motion.div>
);

export default Home;