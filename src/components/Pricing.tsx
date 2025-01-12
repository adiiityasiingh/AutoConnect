import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'First User',
      price: 0,
      features: ['Single city access', 'Basic support', 'Monthly reports', 'Standard benefits'],
      recommended: false
    },
    {
      name: 'weekly',
      price: 5,
      features: ['Multi-city access', 'Priority support', 'Real-time tracking', 'Premium benefits'],
      recommended: true
    },
    {
      name: 'Monthly',
      price: 15,
      features: ['Up to 5 cards', '24/7 support', 'Family dashboard', 'All premium benefits'],
      recommended: false
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
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 dark:text-indigo-400">Select the perfect plan for your travel needs</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`bg-white rounded-2xl dark:bg-gray-800 shadow-lg p-8 relative ${
                plan.recommended ? 'border-2 border-indigo-600' : ''
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm"
                  >
                    Recommended
                  </motion.div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2 dark:text-white">
                  ${plan.price}
                  <span className="text-lg text-gray-500 dark:text-white">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 dark:text-white">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-indigo-600 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold ${
                  plan.recommended
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;