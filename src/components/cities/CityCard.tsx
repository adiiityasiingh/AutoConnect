import React from 'react';
import { motion } from 'framer-motion';

interface CityCardProps {
  name: string;
  description: string;
  image: string;
}

const CityCard = ({ name, description, image }: CityCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="relative overflow-hidden rounded-xl shadow-lg group"
  >
    <div className="aspect-w-16 aspect-h-9">
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
    </div>
    <div className="absolute bottom-0 p-6 text-white">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </div>
  </motion.div>
);

export default CityCard;