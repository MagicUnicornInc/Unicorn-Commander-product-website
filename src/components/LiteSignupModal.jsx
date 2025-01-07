import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

export const LiteSignupModal = ({ onClose, onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-gray-800 p-6 rounded-xl max-w-md w-full">
        <h3 className="text-2xl font-bold mb-4 text-center text-purple-400">
          Join Unicorn Commander Lite Waitlist
        </h3>
        <p className="text-gray-300 mb-6 text-center">
          Be the first to experience our powerful AI assistant for personal use.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400"
            required
          />
          <button 
            type="submit"
            className="w-full btn btn-primary"
          >
            Join Waitlist
          </button>
          <button 
            type="button"
            onClick={onClose}
            className="w-full btn btn-outline"
          >
            Cancel
          </button>
        </form>
      </div>
    </motion.div>
  );
};
