import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactInput from './ContactInput';
import SuccessMessage from './SuccessMessage';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.match(/^[A-Za-z\s]{2,50}$/)) {
      newErrors.name = 'Name must be 2-50 characters, letters only';
    }
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !formData.phone.match(/^\+?[\d\s-]{10,}$/)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (formData.message.length < 10 || formData.message.length > 500) {
      newErrors.message = 'Message must be between 10 and 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm() || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-[500px] mx-auto space-y-6 p-6">
        <ContactInput
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        
        <ContactInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        
        <ContactInput
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        
        <ContactInput
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
        />

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-3 rounded-lg font-semibold text-white
            transition-all duration-300 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
            }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>
      </form>

      <SuccessMessage 
        show={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
    </>
  );
};

export default ContactForm;