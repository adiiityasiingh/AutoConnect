import React from 'react';
import { motion } from 'framer-motion';

interface ContactInputProps {
  type?: 'text' | 'email' | 'tel' | 'textarea';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
}

const ContactInput = ({ 
  type = 'text', 
  name, 
  value, 
  onChange, 
  error, 
  required 
}: ContactInputProps) => {
  const baseClassName = `w-full p-3 rounded-lg border transition-colors duration-300
    ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}
    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
    focus:outline-none focus:ring-2 focus:ring-indigo-500`;

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium capitalize">
        {name}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={4}
          className={baseClassName}
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={baseClassName}
          required={required}
        />
      )}

      {error && (
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-red-500 text-sm"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default ContactInput;