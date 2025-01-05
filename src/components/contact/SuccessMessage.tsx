import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

interface SuccessMessageProps {
  show: boolean;
  onClose: () => void;
}

const SuccessMessage = ({ show, onClose }: SuccessMessageProps) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-lg
            flex items-center space-x-3"
        >
          <CheckCircle className="h-5 w-5" />
          <span>Message sent successfully!</span>
          <button
            onClick={onClose}
            className="ml-2 hover:opacity-75 transition-opacity"
            aria-label="Close message"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessMessage;