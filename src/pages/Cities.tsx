import React from 'react';
import { motion } from 'framer-motion';
import CityCard from '../components/cities/CityCard';

const cities = [
  {
    name: 'New York',
    description: 'Experience the pulse of the Big Apple with MetroConnect. Navigate subway lines and buses across all five boroughs with ease.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Tokyo',
    description: 'Seamlessly connect through Tokyo\'s intricate transit network. From bullet trains to local metros, travel like a local.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'London',
    description: 'Navigate the iconic Underground and bus network with ease. From Piccadilly to Westminster, travel across London effortlessly.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Paris',
    description: 'Explore the City of Light using our integrated transit solution. Connect between Metro lines and buses seamlessly.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Dubai',
    description: 'Experience modern transit in a futuristic city. From metro to water taxis, explore Dubai\'s innovative transportation.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200'
  }
];

const Cities = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20"
  >
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Connected Cities
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cities.map((city) => (
          <CityCard key={city.name} {...city} />
        ))}
      </div>
    </div>
  </motion.div>
);

export default Cities;