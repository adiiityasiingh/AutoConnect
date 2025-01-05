import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I get started with AutoCards?',
      answer: 'Sign up online or visit one of our service centers with a valid ID. Your card will be activated instantly and ready to use.',
      category: 'General'
    },
    {
      question: 'What happens if I lose my card?',
      answer: 'You can instantly freeze your card through our mobile app or website. Contact support to get a replacement card with your balance transferred.',
      category: 'General'
    },
    {
      question: 'How do I reload my card?',
      answer: 'Reload your card through our mobile app, website, or at any of our partner locations. Funds are available instantly.',
      category: 'Technical'
    },
    {
      question: 'Is my payment information secure?',
      answer: 'Yes, we use bank-grade encryption and security measures to protect all your data and transactions.',
      category: 'Technical'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-indigo-400">Find answers to common questions about Autoconnect</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.button
                className="w-full dark:bg-gray-800 flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="text-lg dark:text-white font-semibold text-left">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-indigo-600" />
                )}
              </motion.button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-white border-t dark:bg-gray-800">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;